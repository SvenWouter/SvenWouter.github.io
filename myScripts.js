$(document).ready(function(){
	$('#text_value').click(function() {
		var text_value = $("#text").val();	
		var aantal = 104;
	
	
		$.getJSON("https://api.flickr.com/services/rest/?&method=flickr.photos.search&api_key=4ef2fe2affcdd6e13218f5ddd0e2500d&text=" + text_value + "&per_page="+ aantal + " &format=json&jsoncallback=?",
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
		})();
		
		$("nav a").hover(function(){
			$(this).stop().animate({color: "green"}, 300);
		}, function(){
			$(this).stop().animate({color: "white"}, 300);
		});
		
	})
});
	