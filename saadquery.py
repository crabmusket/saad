import sqlite3

def create():
	con = sqlite3.connect('saad.db')
	c = con.cursor()
	# Create Categories table
	c.execute('''CREATE TABLE IF NOT EXISTS Categories(name TEXT PRIMARY KEY);''')
	# Insert categories
	c.execute('''INSERT INTO Categories (name) VALUES ('appliances');''')
	c.execute('''INSERT INTO Categories (name) VALUES ('structural');''')
	con.commit()
	c.close()

def get_categories():
	con = sqlite3.connect('saad.db')
	c = con.cursor()
	c.execute('''SELECT * FROM Categories;''')
	return [cat[0] for cat in c.fetchall()]
