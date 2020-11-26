area1("#myAreaChart3");
area1("#myAreaChart2");
function area1(svgselector){
//var width = document.getElementById(selector).clientWidth;
//var height = width / 2.5;

var svg = d3.select(svgselector).append("svg")
            .attr('width',600)
            .attr('height',600);

    var padding = {t: 5, r: 20, b: 5, l: 20};
      
    var trellisWidth = 300 - padding.l - padding.r;
    var trellisHeight = 300 / 3 - padding.t - padding.b;
      
      
      svg.selectAll('.background')
          .data(['A', 'B', 'C']) // dummy data
          .enter()
          .append('rect') // Append 4 rectangles
          .attr('class', 'background')
          .attr('width', trellisWidth) // Use our trellis dimensions
          .attr('height', trellisHeight)
          .attr('transform', function(d, i) {
              // Position based on the matrix array indices.
              // i = 1 for column 1, row 0)
              //var tx = i * (trellisWidth + padding.l + padding.r) + padding.l;
              var tx = padding.l;
              var ty = i * (trellisHeight + padding.t + padding.b) + padding.t;
              return 'translate('+[tx,ty]+')';   
          });
}


    