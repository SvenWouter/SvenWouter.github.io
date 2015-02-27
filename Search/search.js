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

		$("#bigPhotoSection").click(nextPhoto);
});

function getPhotos(){
	var searchQuery = $("#searchValue").val();	
	var aantal = $("#resultCount").val();
	var count = 0;
	$.each($("#flickrTable tr"), function(){
		$(this).empty();
	});
	
	$.getJSON("https://api.flickr.com/services/rest/?&method=flickr.photos.search&api_key=4ef2fe2affcdd6e13218f5ddd0e2500d&text=" + searchQuery + "&per_page="+ aantal + " &format=json&jsoncallback=?",
		function(data){
			var id = "";
			var farm = "";
			var secret = "";
			var server = "";
	
			$.each(data.photos.photo, function(i,set){
				count++;
				id = set.id;
				farm = set.farm;
				secret = set.secret;
				server = set.server;
				if(count == 4)
					count = 1;
				$("#row" + count).append("<td><img class = 'flickrImg' src = 'https://farm" + farm + ".staticflickr.com/" + server + "/" + id + "_" + secret + "_q" + ".jpg'/></td>"); 
			});
			
			$(".flickrImg").click(enlargePhoto);
		});
}

function enlargePhoto(){
	$(".overlay").fadeIn(1000);
	var src = $(this).attr("src");
	var enhancedSrc = src.replace("_q.jpg", "_c.jpg");
	var image = "<img src = '" + enhancedSrc + "'/>";
	$("#bigPhotoSection").html(image);
	$("#bigPhotoSection").fadeIn(1000);
}

function hidePhotoSection(){
	$(".overlay").fadeOut(500);
	$("#bigPhotoSection").fadeOut(500, function(){
		$("#bigPhotoSection").empty();
	});
}

function nextPhoto(){
	
}
	