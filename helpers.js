// Format a raw value with units. If pre evaluates to true, units are appended before value.
function fmt_raw(value, units, pre) {
	if(!value)
		return "N/A";
	if(pre)
		return units + value;
	return value + units;
}

// Format a range. If pre evaluates to true, units are appended before values.
function fmt_from_to(value, units, pre) {
	if(!value)
		return "N/A";
	if(pre)
		return units + value.from + " - " + units + value.to;
	return value.from + units + " - " + value.to + units;
}

// Returns a function that determines what kind of format to use.
function fmt_flexible(units, pre) {
	return function(value) {
		if(!value)
			return "N/A";
		else if(value.from && value.to)
			return fmt_from_to(value, units, pre);
		else {
			str = Array();
			for(type in value) {
				var entry = "N/A";
				if(value[type].from && value[type].to)
					entry = fmt_from_to(value[type], units, pre);
				else {
					console.log(value, type);
					entry = fmt_raw(value[type], units, pre);
				}
				str.push(type + ": " + entry);
			}
			if(str.length == 0)
				return fmt_raw(value, units, pre);
			return str.join(", ");
		}
	};
}

Handlebars.registerHelper('dollars', fmt_flexible("$", true));
Handlebars.registerHelper('watts',   fmt_flexible("W"));
Handlebars.registerHelper('wpl',     fmt_flexible("W/L"));
Handlebars.registerHelper('hours',   fmt_flexible(" hours"));

// Converts a messy string to an ID.
function cleanString(str) {
	if(str)
		return "app-" + str.replace(/\s/g, "-").replace(/[\.,?\/#!$%\^&\*;:{}=\_`~()]/g,"").toLowerCase();
	else
		return "";
}

Handlebars.registerHelper('id', cleanString);

// Get current date and time string.
function timestamp() {
	var now = new Date();
	return now.toDateString() + " " + now.toLocaleTimeString();
}

Handlebars.registerHelper('timestamp', timestamp);
