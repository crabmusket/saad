$().ready(function() {
	var url = 'http://localhost/categories';
    $.get(url, function(data) {
		alert(data);
    });
});
