// Clears the currently-viewed item.
function clearBrowser() {
	var browser = $("#item-panel");
	if(browser.attr("showing")) {
		$("#" + browser.attr("showing")).removeClass("selected");
	}
	browser.html("");
	return browser;
}

// Get the object associated with a named appliance.
function getAppliance(name) {
	if(!data)
		return null;
	for(var cat in data.appliances) {
		for(var app in data.appliances[cat].entries) {
			if(data.appliances[cat].entries[app].name == name)
				return data.appliances[cat].entries[app];
		}
	}
	return null;
}

// Get the object associated with a named structure.
function getStructure(name) {
	if(!data)
		return null;
	for(var cat in data.structures) {
		for(var str in data.structures[cat].entries) {
			if(data.structures[cat].entries[str].name == name)
				return data.structures[cat].entries[str];
		}
	}
	return null;
}

// Show a particular appliance in the browser.
function showAppliance(name, id) {
	clearBrowser()
		.attr("showing", id)
		.html(apptemplate(getAppliance(name)));
	$("#" + id).addClass("selected");
}

// Show a particular structural feature in the browser.
function showStructure(name, id) {
	clearBrowser()
		.attr("showing", id)
		.html(strtemplate(getStructure(name)));
	$("#" + id).addClass("selected");
}

// Document is loaded
$(document).ready(function() {
	// Compile templates
	listtemplate = Handlebars.compile($("#browser-list-template").html());
	apptemplate = Handlebars.compile($("#appliance-template").html());
	strtemplate = Handlebars.compile($("#structure-template").html());
	reporttemplate = Handlebars.compile($("#report-template").html());
	
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
		showStructure($(this).attr('target'), $(this).attr('id'));
	});
	
	// Query view
	$("#query form").submit(function(e) {
		e.preventDefault();
		var report = reporttemplate(data);
		var mywindow = window.open('');
		mywindow.document.write('<html><head><title>saad report</title>');
		mywindow.document.write('<link rel="stylesheet" href="print.css" type="text/css" />');
		mywindow.document.write('</head><body >');
		mywindow.document.write('<ul class="buttons"><li><a onClick="window.print();">Print</a></li><li><a>Save</a></li></ul>');
		mywindow.document.write(report);
		mywindow.document.write('</body></html>');
		return true;
	});
});
