$(document).ready(function(){

var data = [ [0.5, 0.5], [0.6, 0.7] ];
var options = {
    series: {
        lines: { show: true },
        points: { show: true }
    }
};
var plot = $.plot("#placeholder", data, options);

});