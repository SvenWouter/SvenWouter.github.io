$(document).ready(function(){
	$.get("https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos", { api_key: "787af8ce3db07ed8b23566aa9c6a416e", user_id: "29096781@N02" }, function(data){
		alert(data);
	});
});