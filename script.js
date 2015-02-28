$(document).ready(function(){

	$("nav a").hover(function(){
			$(this).stop().animate({color: "#E74C3C"}, 300);
		}, function(){
			$(this).stop().animate({color: "#FFFFFF"}, 300);
	});
	
	$(".source").each(function(){
		var source = $(this).attr("href");
		var html = "<p>" + "<a href = '" + source + "'>" + source + "</a>" + "</p>";
		$("footer").append(html);
	});
	
});