d3.json("/sfhh@4.json", function(data) {
    
    data.nodes.forEach(function(element, index) {
      element.start = new Date(element.start);
      element.end = new Date(element.end);
    });
    
    data.links.forEach(function(element, index) {
      element.start = new Date(element.start);
      element.end = new Date(element.end);
    });
  
  var times = d3.scaleTime()
    .domain([d3.min(data.nodes, d => d.start), d3.max(data.nodes, d => d.end)])
    .ticks(30)
    .filter(time => data.nodes.some(d => contains(d, time)))
    
  console.log(times);
    
});
