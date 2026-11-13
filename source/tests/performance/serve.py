"""Comparable local lab delivery: gzip text, unchanged media, identical headers."""
import gzip,io,sys,importlib.util
from pathlib import Path
from http.server import ThreadingHTTPServer
from functools import partial
root=Path(sys.argv[1]).resolve()
spec=importlib.util.spec_from_file_location('preview',root/'serve-website.py');module=importlib.util.module_from_spec(spec);spec.loader.exec_module(module)
class Handler(module.Handler):
 def send_head(self):
  path=Path(self.translate_path(self.path))
  if path.is_dir():path=path/'index.html'
  if path.is_file() and path.suffix in ('.html','.css','.js','.xml','.txt') and 'gzip' in self.headers.get('Accept-Encoding','') and '/source/' not in self.path:
   self.byte_range=None;body=gzip.compress(path.read_bytes(),compresslevel=6,mtime=0)
   self.send_response(200);self.send_header('Content-Type',self.guess_type(str(path)));self.send_header('Content-Encoding','gzip');self.send_header('Vary','Accept-Encoding');self.send_header('Content-Length',str(len(body)));self.end_headers();return io.BytesIO(body)
  return super().send_head()
 def log_message(self,*a):pass
print(f'Lab server {sys.argv[2]}: {root}',flush=True)
ThreadingHTTPServer(('127.0.0.1',int(sys.argv[2])),partial(Handler,directory=str(root))).serve_forever()
