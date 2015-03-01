$(document).ready(function(){

	$("a").hover(function(){
		$(this).data("original", $(this).css("color"));
		$(this).stop().animate({color: "#E74C3C"}, 300);
	}, function(){
		$(this).stop().animate({color: $(this).data("original")}, 300);
	});
	
	$(".source").each(function(){
		var source = $(this).attr("href");
		var html = "<p>" + "<a href = '" + source + "'>" + source + "</a>" + "</p>";
		$("footer").append(html);
	});
	
});