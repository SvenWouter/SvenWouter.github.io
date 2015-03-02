$(document).ready(function () {
	
	var d1 = [{
				"label": "Spele.nl",
				"data": [[0, 80]]
			}, 
			{
				"label": "Zylom.com",
				"data": [[1, 41]]
			}, 
			{
				"label": "Spelletjes.nl",
				"data": [[2, 41]]
			}, 
			{
				"label": "Funnygames.nl",
				"data": [[3, 32]]
			}, 
			{
				"label": "Spellen.nl",
				"data": [[4, 31]]
			}, 
			{
				"label": "Speelzolder.nl",
				"data": [[5, 30]]
			}, 
			{
				"label": "Spelle.nl",
				"data": [[6, 24]]
			},
			{
				"label": "Speelplein.nl",
				"data": [[7, 14]]
			}, 
			{
				"label": "Spelletjesplein.nl",
				"data": [[8, 9]]
			}, 
			{
				"label": "Nuspelen.nl",
				"data": [[9, 9]]
			}];
	
	var ticks = [
		[0, "Spele.nl"], [1, "Zylom.com"], [2, "Spelletjes.com"], [3, "Funnygames.com"], [4, "Spellen.nl"],
		[5, "Speelzolder.nl"], [6, "Spelle.nl"], [7, "Speelplein.nl"], [8, "Spelletjesplein.nl"], [9, "Nuspelen.nl"]
	];
	
	var options = {
        series: {
            bars: {
                show: true,
            }
         },
         bars: {
			 align: "center",
			 barWidth: 0.7
		 },
		 xaxis: {
             ticks: ticks,
		     autoscaleMargin: 0.05,
         },
         yaxis: {
            tickFormatter: function (v, axis) {
                    return v + "%";
                }
            }
	};
	
    $.plot($("#placeholder"), d1, options);
});