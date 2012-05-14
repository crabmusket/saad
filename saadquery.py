import sqlite3

def create():
	con = sqlite3.connect('saad.db')
	c = con.cursor()
	
	try:
		# Create ApplianceCategories table.
		c.execute('''DROP TABLE IF EXISTS ApplianceCategories;''')
		c.execute('''CREATE TABLE ApplianceCategories(name TEXT PRIMARY KEY);''')
		# Insert categories.
		c.execute('''INSERT INTO ApplianceCategories VALUES ('Bathroom');''')
		c.execute('''INSERT INTO ApplianceCategories VALUES ('Heating and cooling');''')
		c.execute('''INSERT INTO ApplianceCategories VALUES ('Washing');''')
		c.execute('''INSERT INTO ApplianceCategories VALUES ('Drying');''')
		c.execute('''INSERT INTO ApplianceCategories VALUES ('Kitchen');''')
		c.execute('''INSERT INTO ApplianceCategories VALUES ('Entertainment');''')
		c.execute('''INSERT INTO ApplianceCategories VALUES ('Office');''')
		c.execute('''INSERT INTO ApplianceCategories VALUES ('Outdoor');''')
		
		# Create StructureCategories table.
		c.execute('''DROP TABLE IF EXISTS StructureCategories;''')
		c.execute('''CREATE TABLE StructureCategories(name TEXT PRIMARY KEY);''')
		# Insert categories.
		c.execute('''INSERT INTO StructureCategories VALUES ('Windows');''')
		c.execute('''INSERT INTO StructureCategories VALUES ('Lighting');''')
		c.execute('''INSERT INTO StructureCategories VALUES ('Floors');''')
		
		# Create Appliances table.
		c.execute('''DROP TABLE IF EXISTS Appliances;''')
		c.execute('''CREATE TABLE IF NOT EXISTS Appliances(
			name TEXT PRIMARY KEY NOT NULL,
			category TEXT NOT NULL,
			power REAL,
			offPower REAL,
			FOREIGN KEY(category) REFERENCES ApplianceCategories(name));''')
		# Add some dummy appliances.
		c.execute('''INSERT INTO Appliances VALUES ('Single tub top-loader', 'Washing', 477, 0.5);''')
		c.execute('''INSERT INTO Appliances VALUES ('Bar radiator', 'Heating and cooling', 800, NULL);''')
		c.execute('''INSERT INTO Appliances VALUES ('Webber Q', 'Outdoor', NULL, NULL);''')
		c.execute('''INSERT INTO Appliances VALUES ('Hair dryer', 'Bathroom', NULL, NULL);''')
	
	finally:
		con.commit()
		c.close()

def get_appliance_categories():
	con = sqlite3.connect('saad.db')
	c = con.cursor()
	c.execute('''SELECT * FROM ApplianceCategories;''')
	return [cat[0] for cat in c.fetchall()]

def get_structure_categories():
	con = sqlite3.connect('saad.db')
	c = con.cursor()
	c.execute('''SELECT * FROM StructureCategories;''')
	return [cat[0] for cat in c.fetchall()]

def get_appliances(category = None):
	con = sqlite3.connect('saad.db')
	c = con.cursor()
	if category is not None:
		c.execute('''SELECT * FROM Appliances WHERE category = '{0}';'''.format(category))
	else:
		c.execute('''SELECT * FROM Appliances;''')
	return [app[0] for app in c.fetchall()]

def get_structures(category = None):
	return ""
