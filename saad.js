function fmt_price(price) {
	if(!price)
		return "N/A";
	else if(price.from && price.to)
		return "$" + price.from + " - $" + price.to;
	else {
		str = Array();
		for(type in price) {
			str.push(type + ": " + fmt_price(price[type]));
		}
		return str.join(", ");
	}
}

function fmt_power(power) {
	if(!power)
		return "N/A";
	else if(power.from && power.to)
		return power.from + " - " + power.to + "W";
	else
		return "something else";
}

// Handlebars helpers
Handlebars.registerHelper('id', function(str) {
	if(str)
		return "content-" + str.replace(/\s/g, "-").replace(/[\.,?\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase();
	else
		return "";
});
Handlebars.registerHelper('fmt_price', fmt_price);
Handlebars.registerHelper('fmt_power', fmt_power);

// Document is loaded
$(document).ready(function() {
	// Compile templates
	listtemplate = Handlebars.compile($("#browser-list-template").html());
	apptemplate = Handlebars.compile($("#appliance-template").html());
	strtemplate = Handlebars.compile($("#structure-template").html());
	
	// Hide views until they're populated.
	$("#browser").toggle();
	$("#query").toggle();
	
	// Start view
	$("#open-browser").click(function() {
		$("#start").slideToggle('fast');
		$("#browser").slideToggle('fast');
	});
	$("#open-query").click(function() {
		$("#start").slideToggle('fast');
		$("#query").slideToggle('fast');
	});
	
	// Browser view
	console.log(data.appliances);
	apps = listtemplate(data.appliances);
	strs = listtemplate(data.features);
	$("#app-view").html(apps);
	$("#str-view").html(strs);
	
	// Query view
});
