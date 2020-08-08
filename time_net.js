d3.json("/sfhh@4.json", function(data) {
    
    data.nodes.forEach(function(element, index) {
      element.start = new Date(element.start);
      element.end = new Date(element.end);
    });
    
    data.links.forEach(function(element, index) {
      element.start = new Date(element.start);
      element.end = new Date(element.end);
    });
    
    console.log("hello");
    console.log(data);
    
});
