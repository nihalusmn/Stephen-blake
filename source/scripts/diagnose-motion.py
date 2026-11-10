"""Temporary local diagnostics. No form values/cookies, no production endpoint."""
import importlib.util, io, json, secrets, sys, threading
from pathlib import Path
from urllib.parse import urlsplit, parse_qs
from http.server import ThreadingHTTPServer

ROOT=Path(__file__).resolve().parent.parent
spec=importlib.util.spec_from_file_location('preview',ROOT/'scripts/serve-website.py')
preview=importlib.util.module_from_spec(spec);spec.loader.exec_module(preview)
TOKEN=secrets.token_urlsafe(18)
LOG=ROOT/'output/v31/phone-diagnostics.jsonl'
lock=threading.Lock()
class Handler(preview.Handler):
    def __init__(self,*a,**kw):super().__init__(*a,directory=str(ROOT/'dist'),**kw)
    def authorized(self):
        return parse_qs(urlsplit(self.path).query).get('token')==[TOKEN]
    def send_head(self):
        route=urlsplit(self.path).path
        if route=='/__motion-debug.js' and self.authorized():
            data=(ROOT/'scripts/motion-diagnostic.js').read_bytes();mime='text/javascript'
        elif route=='/' and self.authorized():
            data=(ROOT/'dist/index.html').read_text().replace('<head>',f'<head><script src="/__motion-debug.js?token={TOKEN}"></script>').encode();mime='text/html'
        else:return super().send_head()
        self.byte_range=None;self.send_response(200);self.send_header('Content-Type',mime)
        self.send_header('Content-Length',str(len(data)));self.end_headers();return io.BytesIO(data)
    def do_POST(self):
        if urlsplit(self.path).path!='/__motion-diagnostics' or not self.authorized():self.send_error(404);return
        try:
            size=int(self.headers.get('Content-Length','0'))
            if not 0<size<=16384:raise ValueError()
            data=json.loads(self.rfile.read(size))
            if not isinstance(data,dict) or set(data)-{'session','elapsed','ua','viewport','scroll','ready','hidden','reduced','saveData','classes','data','progress','errors','surfaces','resources'}:raise ValueError()
        except (ValueError,json.JSONDecodeError):self.send_error(400);return
        with lock:
            if not LOG.exists() or LOG.stat().st_size<8_000_000:
                with LOG.open('a') as out:out.write(json.dumps(data)+'\n')
        self.send_response(204);self.send_header('Content-Length','0');self.end_headers()
    def log_message(self,*args):pass

if __name__=='__main__':
    (ROOT/'output/v31/diagnostic-token.txt').write_text(TOKEN)
    print('Diagnostic server ready on localhost:4191',flush=True)
    ThreadingHTTPServer(('127.0.0.1',4191),Handler).serve_forever()
