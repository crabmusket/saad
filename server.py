import saad, saadquery
import string, cgi, time
from http.server import BaseHTTPRequestHandler, HTTPServer

class MyHandler(BaseHTTPRequestHandler):
	def do_GET(self):
		try:
			self.send_response(200)
			self.send_header('Content-type', 'text/html')
			self.send_header('Access-Control-Allow-Origin', '*')
			self.end_headers()
			if self.path[1:] == "create":
				saadquery.create()
				self.wfile.write("Database created.".encode("utf-8"))
			elif self.path[1:] == "categories":
				for c in saadquery.get_categories():
					self.wfile.write(c.encode("utf-8"))
					self.wfile.write("\r\n".encode("utf-8"))
			else:
				self.wfile.write(self.path.encode("utf-8"))
			return
		except:
			self.send_error(404,'File Not Found: %s' % self.path)

	def do_POST(self):
		try:
			self.send_response(200)
			self.send_header('Content-type', 'text/html')
			self.send_header('Access-Control-Allow-Origin', '*')
			self.end_headers()
			self.wfile.write(self.path.encode("utf-8"))
		except:
			self.send_error(404,'File Not Found: %s' % self.path)

def serve():
	try:
		server = HTTPServer(('', saad.port), MyHandler)
		print('Server running on port {0}.'.format(saad.port))
		server.serve_forever()
	except KeyboardInterrupt:
		print('^C received, killing server.')
		server.socket.close()

if __name__ == '__main__':
	serve()
