d3.json("https://nfl-flask.herokuapp.com/id/Mehdi%20Abdesmad").then(function(data) {
console.log(data);


});

bar_data = [{
    type: 'bar',
    x: [1,2],
    y: ["position1",'position2'],
    text: "test",
    orientation: 'h'
}];

bar_layout = {      
    title: "bar chart",
    yaxis: {
            tickmode: "linear"}, 

};
var years = [2016,2017,2018,2019,2020]
years.forEach(year => {
    var dropdown1 = d3.select("#selDataset1");
    dropdown1.append("option").text(year)
});

var rounds = [1,2,3,4,5,6,7]
rounds.forEach(round => {
    var dropdown2 = d3.select("#selDataset2");
    dropdown2.append("option").text(round)
});



Plotly.newPlot("bar", bar_data, bar_layout);

// var dropdown1.on("change", function() {
//     var selected_data = years.filter(x => x == this.value);

//     var bar_update = {
//         x: selected_data,
//         y: 10,
//         text: sdsd
//     };

//     Plotly.restyle("bar", bar_update);
// });