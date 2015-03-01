$(document).ready(function () {
	
	var d1 = [{
				"label": "Spele.nl",
				"data": [[0, 80]]
			}, 
			{
				"label": "Zylom.com",
				"data": [[0, 41]]
			}, 
			{
				"label": "Spelletjes.nl",
				"data": [[0, 41]]
			}, 
			{
				"label": "Funnygames.nl",
				"data": [[0, 32]]
			}, 
			{
				"label": "Spellen.nl",
				"data": [[0, 31]]
			}, 
			{
				"label": "Speelzolder.nl",
				"data": [[0, 30]]
			}, 
			{
				"label": "Spelle.nl",
				"data": [[0, 24]]
			},
			{
				"label": "Speelplein.nl",
				"data": [[0, 14]]
			}, 
			{
				"label": "Spelletjesplein.nl",
				"data": [[0, 9]]
			}, 
			{
				"label": "Nuspelen.nl",
				"data": [[0, 9]]
			}];
	
	var ticks = [
		[0, "Spele.nl"], [1, "Zylom.com"], [2, "Spelletjes.com"], [3, "Funnygames.com"], [4, "Spellen.nl"],
		[5, "Speelzolder.nl"], [6, "Spelle.nl"], [7, "Speelplein.nl"], [8, "Spelletjesplein.nl"], [9, "Nuspelen.nl"]
	];
	
	var options = {
        series: {
            bars: {
                show: true,
            },
         },
         bars: {
			 align: "center",
			 barWidth: 0.5
		 },
		 xaxis: {
             ticks: ticks
         },
         yaxis: {
            tickFormatter: function (v, axis) {
                    return v + "%";
                }
            }
	};
	
    $.plot($("#placeholder"), d1, options);
});