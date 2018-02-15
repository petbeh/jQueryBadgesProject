$(function() {

	$.ajax({
		url: 'https://www.codeschool.com/users/pepevara.json',
		dataType: 'jsonp',
		success: function(response) {
			let arr = response.courses.completed;
			$.each(arr, function(i, item)
			{
				let html =
				"<div class='course'>" +
					"<h3>" + item.title + "</h3>" +
					"<img src='"+ item.badge +"' alt='" + item.title + "' />" +
					"<a class='btn btn-primary' target='_blank' href='" + item.url + "'>See Course</a>"
				"</div>";

				$("#badges").append( html );
			});
		}
	});

});
