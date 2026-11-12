"""Local preview server with byte-range support for smooth video scrubbing."""
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
import os,re,sys
from urllib.parse import urlsplit, unquote
class Handler(SimpleHTTPRequestHandler):
    extensions_map = {**SimpleHTTPRequestHandler.extensions_map, '.xml': 'application/xml; charset=utf-8', '.txt': 'text/plain; charset=utf-8'}
    # Serve the built site only, never the editable source, archives or dotfiles.
    def translate_path(self, path):
        parsed=urlsplit(path)
        route=unquote(parsed.path)
        if route == '/dist' or route.startswith('/dist/'):
            route=route[5:] or '/'
        return super().translate_path(route)
    def list_directory(self, path):
        self.send_error(404); return None
    def send_head(self):
        self.byte_range=None
        try: host=urlsplit('//' + self.headers.get('Host','')).hostname
        except ValueError:
            self.send_error(400); return None
        if host not in ('127.0.0.1','localhost','::1'):
            self.send_error(403); return None
        request=urlsplit(self.path)
        if request.path == '/index.html':
            self.send_response(308)
            self.send_header('Location','/' + ('?' + request.query if request.query else ''))
            self.end_headers();return None
        path=Path(self.translate_path(self.path))
        try:
            relative=path.resolve().relative_to(Path(self.directory).resolve())
        except ValueError:
            self.send_error(404); return None
        if any(p.startswith('.') for p in relative.parts) or (relative.parts and relative.parts[0] not in ('index.html','assets','sitemap.xml','robots.txt')):
            self.send_error(404); return None
        header=self.headers.get('Range','')
        if not path.is_file() or not header:
            return super().send_head()
        match=re.fullmatch(r'bytes=(\d*)-(\d*)',header)
        if not match:return super().send_head()
        size=path.stat().st_size
        left,right=match.groups()
        start=int(left) if left else max(0,size-int(right or size))
        end=min(int(right),size-1) if left and right else size-1
        if start>=size or end<start:
            self.send_response(416);self.send_header('Content-Range',f'bytes */{size}');self.end_headers();return None
        f=path.open('rb');f.seek(start);self.byte_range=(start,end)
        self.send_response(206)
        self.send_header('Content-Type',self.guess_type(str(path)))
        self.send_header('Content-Length',str(end-start+1))
        self.send_header('Content-Range',f'bytes {start}-{end}/{size}')
        self.send_header('Accept-Ranges','bytes');self.end_headers();return f
    def copyfile(self,source,outputfile):
        if self.byte_range is None:return super().copyfile(source,outputfile)
        remaining=self.byte_range[1]-self.byte_range[0]+1
        while remaining:
            chunk=source.read(min(65536,remaining))
            if not chunk:break
            outputfile.write(chunk);remaining-=len(chunk)
    def end_headers(self):
        self.send_header('Accept-Ranges','bytes')
        self.send_header('X-Content-Type-Options','nosniff')
        self.send_header('Referrer-Policy','strict-origin-when-cross-origin')
        self.send_header('Cache-Control','no-cache')
        super().end_headers()
if __name__=='__main__':
    port=int(sys.argv[1]) if len(sys.argv)>1 else 4180
    if Path('dist/index.html').is_file(): os.chdir('dist')
    print(f'Open http://127.0.0.1:{port} — keep this window open.',flush=True)
    ThreadingHTTPServer(('127.0.0.1',port),Handler).serve_forever()
