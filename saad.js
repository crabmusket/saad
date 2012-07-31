// Handlebars helpers
Handlebars.registerHelper('array', function(arr) {
	if(arr)
		return "<ul><li>" + arr.join("</li><li>") + "</li></ul>";
	else
		return "";
});

Handlebars.registerHelper('id', function(str) {
	if(str)
		return "content-" + str.replace(/\s/g, "-").toLowerCase();
	else
		return "";
});

// Render app and str templates
function render() {
	apphtml = apptemplate(data);
	strhtml = strtemplate(data);
	$("#app-view").html(apphtml);
	$("#str-view").html(strhtml);
	$("#app-view").slideDown('fast');
	$("#str-view").slideDown('fast');
	$("div.note").toggle();
	$("a.item").click(function() {
		$("#" + $(this).attr("target")).slideToggle('fast');
	});
	$("a.category").click(function() {
		$(this).next().slideToggle('fast');
	});
	$("#query").slideUp('fast');
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
		$("#app-view").slideToggle('fast');
	});
	$("#select-structures").click(function() {
		$("#str-view").slideToggle('fast');
	});
});
