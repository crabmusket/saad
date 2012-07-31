function fmt_price(price) {
	if(!price)
		return "";
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
		return "";
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

// Render app and str templates
function render() {
	apphtml = apptemplate(data);
	strhtml = strtemplate(data);
	$("#app-view").html(apphtml);
	$("#str-view").html(strhtml);
	$("#app-view").slideDown('fast');
	$("#str-view").slideDown('fast');
	$("div.item").toggle();
	$(".items li a").click(function() {
		$("#" + $(this).attr("target")).slideToggle('fast');
		if($(this).hasClass('selected'))
			$(this).delay('fast').queue(function() {
				$(this).toggleClass('selected');
				$(this).dequeue();
			});
		else
			$(this).toggleClass('selected');
	});
	$(".categories li a").click(function() {
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
