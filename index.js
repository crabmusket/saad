$().ready(function() {
	var url = 'http://localhost/categories';
    $.get(url, function(data) {
		alert(data);
    });
	
	// Select categories.
	$('a.feature').click(function() {
		$('a.feature').removeClass('selected');
		$(this).addClass('selected');
	});
	// First category selected by default.
	$('a.feature:first').addClass('selected');
});
