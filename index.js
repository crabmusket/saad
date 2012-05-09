FEATURE = '';

function selectFeature(var f) {
	$('a.feature').removeClass('selected');
	f.addClass('selected');
	FEATURE = f.html();
}

function selectCategory(var c) {
	// Clear appliances list.
	$('#appliances').empty();
	// Get list of appliances within category.
	var url = 'http://localhost/appliances/' + c.html();
    $.get(url, function(data) {
		var appliances = $('#appliances');
		for(line in data.split("\n")) {
			category.append('<option>' + data[line] + '</option>');
		}
    });
}

$().ready(function() {
	// Update feature when link clicked.
	$('a.feature').click(function() {
		selectFeature($(this));
	});
	// First feature selected by default.
	selectFeature($('a.feature:first'));
	
	// Fill in categories dropdown.
	var url = 'http://localhost/categories';
    $.get(url, function(data) {
		var categories = $('#categories');
		for(line in data.split("\n")) {
			categories.append('<option>' + data[line] + '</option>');
		}
    });
	
	// Update category when item selected.
	
	// Update page content when appliance clicked.
});
