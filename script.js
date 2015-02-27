$(document).ready(function(){

	$("nav a").hover(function(){
			$(this).stop().animate({color: "#FFA812"}, 300);
		}, function(){
			$(this).stop().animate({color: "#FFFFFF"}, 300);
	});
	
});