$(document).ready(function(){

	var sourceCounter = 0;
	$(".source").each(function(){
		sourceCounter++;
		$(this).attr("id", sourceCounter);
		var id = $(this).attr("id");
		var source = $(this).attr("href")
		var html = "<p>" + "<a href = '#" + id + "'>" + source + "</a>" + "</p>";
		$("footer").append(html);
	});

	$("a").hover(function(){
		$(this).data("original", $(this).css("color"));
		$(this).stop().animate({color: "#E74C3C"}, 300);
	}, function(){
		$(this).stop().animate({color: $(this).data("original")}, 300);
	});
	
});