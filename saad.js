// Handlebars helpers
Handlebars.registerHelper('array', function(arr) {
	return arr.join();
});

Handlebars.registerHelper('id', function(str) {
	return "content-" + str.replace(/\s/g, "-").toLowerCase();
});

// Render app and str templates
function render() {
	apphtml = apptemplate(data);
	strhtml = strtemplate(data);
	$("#app-view").html(apphtml);
	$("#str-view").html(strhtml);
	$("#app-view").slideToggle('fast');
	$("#str-view").slideToggle('fast');
	$("div.note").toggle();
	$("a.item").click(function() {
		$("#" + $(this).attr("target")).slideToggle('fast');
	});
	$("a.category").click(function() {
		$(this).next().slideToggle('fast');
	});
	$("#query").slideToggle('fast');
}

// Document is loaded
$(document).ready(function() {
	// Compile templates
	apptemplate = Handlebars.compile($("#appliance-template").html());
	strtemplate = Handlebars.compile($("#structure-template").html());
	// Hide views until they're populated.
	$("#app-view").toggle();
	$("#str-view").toggle();
	// View buttons
	$("#toggle-query").click(function() {
		$("#query").slideToggle('fast');
	});
	$("#select-appliances").click(function() {
	});
	$("#select-structures").click(function() {
	});
});
