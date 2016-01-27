// Generated by CoffeeScript 1.10.0
(function() {
  var bar_padding, myJSONObj, svg, svg_height, svg_width;

  svg_width = 1500;

  svg_height = 500;

  bar_padding = 5;

  myJSONObj = JSON.parse(gon.myDataV_json);

  svg = d3.select("body").append("svg").attr("width", svg_width).attr("height", svg_height);

  svg.selectAll("rect").data(myJSONObj).enter().append("rect").attr("x", function(d, i) {
    return i * svg_width / myJSONObj.length;
  }).attr("y", function(d) {
    return svg_height - (d.total_average_price * 4);
  }).attr("width", svg_width / myJSONObj.length - bar_padding).attr("height", function(d) {
    return d.total_average_price * 4;
  }).attr("fill", function(d) {
    return "rgb(" + d.total_average_price * 17 + ",0,0)";
  });

  svg.selectAll("text").data(myJSONObj).enter().append("text").text(function(d) {
    return d.total_average_price;
  }).attr("text-anchor", "middle").attr("x", function(d, i) {
    return i * (svg_width / myJSONObj.length) + (svg_width / myJSONObj.length - bar_padding) / 2;
  }).attr("y", function(d) {
    return svg_height - (d.total_average_price * 4) + 20;
  }).attr("font-family", "sans-serif").attr("font-size", "20px").attr("fill", "white");

}).call(this);
