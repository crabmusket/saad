from http.server import BaseHTTPRequestHandler, HTTPServer
import saad, saadquery

def create_db(options):
	saadquery.create()
	return "Database created."

def get_categories(options):
	cats = ""
	if len(options) == 0:
		raise Exception()
	if options[0] == "appliances":
		categories = saadquery.get_appliance_categories()
	else:
		categories = saadquery.get_structure_categories()
	for c in categories:
		cats += str(c) + "\n"
	return cats

def get_appliances(options):
	if len(options) == 0:
		options = [None]
	apps = ""
	for a in saadquery.get_appliances(options[0]):
		apps += str(a) + "\n"
	return apps

def get_structures(options):
	if len(options) == 0:
		options = [None]
	strucs = ""
	for s in saadquery.get_structures(options[0]):
		strucs += str(s) + "\n"
	return strucs

GETHANDLERS = {
	"create": create_db,
	"categories": get_categories,
	"appliances": get_appliances,
	"structures": get_structures,
}

class MyHandler(BaseHTTPRequestHandler):
	def do_GET(self):
		try:
			self.send_response(200)
			self.send_header('Content-type', 'text/html')
			self.send_header('Access-Control-Allow-Origin', '*')
			self.end_headers()
			try:
				words = self.path[1:].split('/')
				fn = GETHANDLERS[words[0]]
				options = []
				if len(words) > 1:
					options = words[1:]
				self.wfile.write(fn(options).encode("utf-8"))
			except KeyError:
				self.wfile.write(self.path.encode("utf-8"))
			except Exception as e:
				self.wfile.write(str(e).encode("utf-8"))
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
