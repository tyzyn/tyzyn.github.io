d3.json("/sfhh@4.json", function(data) {
    data = JSON.parse(data, (key, value) => key === "start" || key === "end" ? new Date(value) : value);
    console.log(data);
});
