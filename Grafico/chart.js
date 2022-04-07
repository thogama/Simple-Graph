document.getElementById("basedate").innerHTML = (`${new Date()}`)
var ctx = document.getElementsByClassName("line-chart");
var chartGraph = new Chart(ctx,{
    type: "line",
    data:{
        labels:[""],
        datasets: [{
            label: "Preço",
            data: [],
            borderWidth: 3,
            borderColor: 'rgba(100,200,100,0.85)',
            backgroundColor: "transparent",
        }] 
    }
});



function addData(data) {
    chartGraph.data.labels.push("");
    chartGraph.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chartGraph.update();
}

function removeData(chartGraph) {
    chartGraph.data.labels.splice(0,1);
    chartGraph.data.datasets.forEach((dataset) => {
        dataset.data.splice(0,1);
    });
    chartGraph.update();
}

