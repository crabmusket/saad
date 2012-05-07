import saad, saadquery
import string, cgi, time
from http.server import BaseHTTPRequestHandler, HTTPServer

def create_db():
	saadquery.create()
	return "Database created."

def get_categories():
	cats = ""
	for c in saadquery.get_categories():
		cats += c + "\n"
	return cats

GETHANDLERS = {
	"create": create_db,
	"categories": get_categories
}

class MyHandler(BaseHTTPRequestHandler):
	def do_GET(self):
		try:
			self.send_response(200)
			self.send_header('Content-type', 'text/html')
			self.send_header('Access-Control-Allow-Origin', '*')
			self.end_headers()
			try:
				fn = GETHANDLERS[self.path[1:]]
				self.wfile.write(fn().encode("utf-8"))
			except KeyError:
				self.wfile.write(self.path.encode("utf-8"))
			return
		except:
			self.send_error(404, 'File Not Found: {0}'.format(self.path))

	def do_POST(self):
		try:
			self.send_response(200)
			self.send_header('Content-type', 'text/html')
			self.send_header('Access-Control-Allow-Origin', '*')
			self.end_headers()
			self.wfile.write(self.path.encode("utf-8"))
		except:
			self.send_error(404, 'File Not Found: {0}'.format(self.path))

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
