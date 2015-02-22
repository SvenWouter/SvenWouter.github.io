$(document).ready(function(){
	
		getPhotos();
		
		$("#searchValue").keypress(function(e){
			if(e.keyCode == 13)
				getPhotos();
		});
		
		$("#resultCount").keypress(function(e){
			if(e.keyCode == 13)
				getPhotos();
		});
		
		$("#searchBtn").hover(function(){
			$(this).stop().animate({backgroundColor: "#003366"}, 300);
		}, function(){
			$(this).stop().animate({backgroundColor: "#336699"}, 300);
		});

});

function getPhotos(){
	var searchQuery = $("#searchValue").val();	
	var aantal = $("#resultCount").val();
	var rowSize = Math.ceil(aantal / 3);
	var count = -1;
	$.getJSON("https://api.flickr.com/services/rest/?&method=flickr.photos.search&api_key=4ef2fe2affcdd6e13218f5ddd0e2500d&text=" + searchQuery + "&per_page="+ aantal + " &format=json&jsoncallback=?",
		function(data){
			var id = "";
			var farm = "";
			var secret = "";
			var server = "";
			var images = "<tr>";
	
			$.each(data.photos.photo, function(i,set){
				count++;
				id = set.id;
				farm = set.farm;
				secret = set.secret;
				server = set.server;
				if(count == rowSize){
					count = 0;
					images += "</tr><tr>";
				} 
				images += "<td><img class = 'flickrImg' id = '" + i + "' onclick = 'enlargePhoto(" + i + ")' src = 'https://farm" + farm + ".staticflickr.com/" + server + "/" + id + "_" + secret + "_q" + ".jpg'/></td>"
			});
			images += "</tr>";
			$("#flickrTable").html(images);
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
	