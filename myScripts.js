$(document).ready(function(){
	$.getJSON("https://api.flickr.com/services/rest/?&method=flickr.galleries.getPhotos&api_key=4ef2fe2affcdd6e13218f5ddd0e2500d&gallery_id=129503413-72157648443716594&format=json&jsoncallback=?",
	function(data){
		var id = "";
		var farm = "";
		var secret = "";
		var server = "";
		var images = "";
		
		$.each(data.photos.photo, function(i,set){
			id = set.id;
			farm = set.farm;
			secret = set.secret;
			server = set.server;
			images += "<img src = 'https://farm" + farm + ".staticflickr.com/" + server + "/" + id + "_" + secret + "_q" + ".jpg'/>"
		});
		
		$("#flickrTest").html(images);
	});
	
	$("nav a").hover(function(){
		$(this).stop().animate({color: "green"}, 300);
	}, function(){
		$(this).stop().animate({color: "white"}, 300);
	});
	
});