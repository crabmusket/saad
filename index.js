FEATURE = '';

function selectFeature(f) {
	$('a.feature').removeClass('selected');
	f.addClass('selected');
	FEATURE = f.attr('feature');
	// Clear categories list.
	$('#categories').empty();
	// Get list of categories
	var url = 'http://localhost/categories/' + FEATURE;
    $.get(url, function(data) {
		var categories = $('#categories');
		var lines = data.split("\n");
		for(line in lines) {
			categories.append('<option>' + lines[line] + '</option>');
		}
		selectCategory(categories.children(':first'));
    });
}

function selectCategory(c) {
	// Clear appliances list.
	$('#appliances').empty();
	// Get list of appliances within category.
	var url = 'http://localhost/' + FEATURE + '/' + c.html();
    $.get(url, function(data) {
		var appliances = $('#appliances');
		var lines = data.split("\n");
		for(line in lines) {
			appliances.append('<option>' + lines[line] + '</option>');
		}
		selectAppliance(appliances.children(':first'));
    });
}

function selectAppliance(a) {
	if($(a).html() == '') {
		$('#viewer').html('<p>No appliance selected.</p>');
	} else {
		$('#viewer').html('<p>Selected appliance ' + a.html() + '</p>');
	}
}

$().ready(function() {
	// Update feature when link clicked.
	$('a.feature').click(function() {
		selectFeature($(this));
	});
	// First feature selected by default.
	selectFeature($('a.feature:first'));
	
	// Select appliances when category changed.
	$('#categories').change(function() {
		selectCategory($(this).children(':selected'));
	});
	// Videw appliance data when selected.
	$('#appliances').change(function() {
		selectAppliance($(this).children(':selected'));
	});
	
	// Update search box.
	$('#search').keyup(function() {
		var filter = $(this).val();
	});
});
