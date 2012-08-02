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

// Clears the currently-viewed item.
function clearBrowser() {
	var browser = $("#item-panel");
	if(browser.attr("showing")) {
		$("#" + browser.attr("showing")).removeClass("selected");
	}
	browser.html("");
	return browser;
}

// Show a particular appliance in the browser.
function showAppliance(name, id) {
	clearBrowser()
		.html("<p>" + name + "</p>")
		.attr("showing", id);
	$("#" + name).addClass("selected");
}

// Show a particular feature in the browser.
function showFeature(name, id) {
	clearBrowser()
		.html("<p>" + name + "</p>")
		.attr("showing", id);
	$("#" + name).addClass("selected");
}

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
		//$("#start").slideToggle('fast');
		$("#query").slideUp('fast');
		$("#browser").slideDown('fast');
	});
	$("#open-query").click(function() {
		//$("#start").slideToggle('fast');
		$("#query").slideDown('fast');
		$("#browser").slideUp('fast');
	});
	
	// Browser view
	apps = listtemplate(data.appliances);
	strs = listtemplate(data.structures);
	$("#app-view").html(apps);
	$("#str-view").html(strs);
	$("ul.items").hide();
	$("ul.categories > li a").click(function() {
		$(this).next().slideToggle('fast');
	});
	$("#app-view ul.items > li a").click(function() {
		showAppliance($(this).attr('target'), $(this).attr('id'));
	});
	$("#str-view ul.items > li a").click(function() {
		showFeature($(this).attr('target'), $(this).attr('id'));
	});
	
	// Query view
	$("#query form").submit(function() {
		var mywindow = window.open('', 'saad report', 'height=400,width=600');
		mywindow.document.write('<html><head><title>saad report</title>');
		mywindow.document.write('<link rel="stylesheet" href="print.css" type="text/css" />');
		mywindow.document.write('</head><body >');
		mywindow.document.write('</body></html>');
		return true;
	});
});
