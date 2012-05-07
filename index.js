$().ready(function() {
	var url = 'http://localhost/categories';
    $.get(url, function(data) {
		alert(data);
    });
	
	// Select categories.
	$('a.category').click(function() {
		$('a.category').removeClass('selected');
		$(this).addClass('selected');
	});
	// First category selected by default.
	$('a.category:first').addClass('selected');
});
