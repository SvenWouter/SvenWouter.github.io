var ids = new Array();
var titles = new Array();

function showGallery(){
	var sel = document.getElementById("Galleries");
	var selectedID = sel.options[sel.selectedIndex].value;
	$(".largeImageWrap").each(function(i){
		$(this).remove()
	});
	$(".sliderGallery_Wrap").each(function(i){
		$(this).remove()
	});
	$('#flickrTest').flickrGallery({
		galleryHeight : 'auto',
		useFlickr: 'true',
		useFlickrLargeSize: 'true',
		useHoverIntent: 'true',
		flickrAPIKey: '4ef2fe2affcdd6e13218f5ddd0e2500d',
		galleryID: selectedID,
		useLightBox: 'true',
		per_page: 50
	});
}

$(document).ready(function(){
	$.getJSON("https://api.flickr.com/services/rest/?&method=flickr.galleries.getPhotos&api_key=4ef2fe2affcdd6e13218f5ddd0e2500d&gallery_id=129503413-72157648443716594&format=json&jsoncallback=?",
	function(data){
		var galleryID = "";
		var title = "";
		
		$.each(data.photos.photo, function(i,set){
			galleryID = set.id;
			title = set.title;
			ids.push(galleryID);
			titles.push(title);
		});
		
		for(i=0; i<ids.length;i++){
			var option = new Option(titles[i],ids[i]);
			var dropDown = document.getElementById("Galleries");
			dropDown.options[i] = option;
		}

		$('#flickrTest').flickrGallery({
			galleryHeight : 'auto',
			useFlickr: 'true',
			useFlickrLargeSize: 'true',
			useHoverIntent: 'true',
			flickrAPIKey: '4ef2fe2affcdd6e13218f5ddd0e2500d',
			galleryID: ids[0],
			useLightBox: 'true',
			per_page: 50
		});
	
	});
	
	$("nav a").hover(function(){
		$(this).stop().animate({color: "green"}, 300);
	}, function(){
		$(this).stop().animate({color: "white"}, 300);
	});
	
});