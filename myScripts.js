$(document).ready(function(){
	
		getPhotos();
		
		$("nav a").hover(function(){
			$(this).stop().animate({color: "#FFA812"}, 300);
		}, function(){
			$(this).stop().animate({color: "#ffffff"}, 300);
		});
		
		$("#1").hover(function(){
			$(this).stop().animate({'width' : '100px', 'height' : '100px', 'padding' : '15px'}, 300);
		}, function(){
			$(this).stop().animate({'height' : '50px', 'width' : '50px', 'padding' : '5px'}, 300);
		});
		
		$("#searchValue").keypress(function(e){
			if(e.keyCode == 13)
				getPhotos();
		});

});

function getPhotos(){
	var searchBtn = $("#searchValue").val();	
	var aantal = 56;
	$.getJSON("https://api.flickr.com/services/rest/?&method=flickr.photos.search&api_key=4ef2fe2affcdd6e13218f5ddd0e2500d&text=" + searchBtn + "&per_page="+ aantal + " &format=json&jsoncallback=?",
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
				images += "<img class = 'flickrImg' id = '" + i + "' onclick = 'enlargePhoto(" + i + ")' src = 'https://farm" + farm + ".staticflickr.com/" + server + "/" + id + "_" + secret + "_q" + ".jpg'/>"
			});
			
			$("#flickrResult").html(images);
		});
}

function enlargePhoto(id){
	$(".overlay").css("display", "block");
	var src = $("#" + id).attr("src");
	var enhancedSrc = src.substring(0, src.length - 5) + "c.jpg";
	var image = "<img src = '" + enhancedSrc + "'/>";
	$("#bigPhotoSection").html(image);
	$("#bigPhotoSection").css("display", "block");
}

function hidePhotoSection(){
	$(".overlay").css("display", "none");
	$("#bigPhotoSection").html("");
	$("#bigPhotoSection").css("display", "none");
}
	