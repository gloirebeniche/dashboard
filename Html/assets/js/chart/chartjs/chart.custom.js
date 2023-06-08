var barData = {
    labels: ["January", "February", "March", "April", "May", "June", "July","August","september","November","December"],
    datasets: [{
        label: "My First dataset",
        fillColor: "rgba(36, 105, 92, 0.4)",
        strokeColor: vihoAdminConfig.primary,
        highlightFill: "rgba(36, 105, 92, 0.6)",
        highlightStroke: vihoAdminConfig.primary,
        data: [35, 59, 80, 81, 56, 55, 40,100,46,67,87]
    }]
};
var barOptions = {
    scaleBeginAtZero: true,
    scaleShowGridLines: true,
    scaleGridLineColor: "rgba(0,0,0,0.1)",
    scaleGridLineWidth: 1,
    scaleShowHorizontalLines: true,
    scaleShowVerticalLines: true,
    barShowStroke: true,
    barStrokeWidth: 2,
    barValueSpacing: 5,
    barDatasetSpacing: 1,
};
var barCtx = document.getElementById("BarGraph").getContext("2d");
var myBarChart = new Chart(barCtx).Bar(barData, barOptions);



var doughnutData = [
    {
        value: 300,
        color: vihoAdminConfig.primary,
        highlight: vihoAdminConfig.primary,
        label: "Primary"
    },
    {
        value: 50,
        color: vihoAdminConfig.secondary,
        highlight: vihoAdminConfig.secondary,
        label: "Secondary"
    },
    {
        value: 100,
        color: "#222222",
        highlight: "#222222",
        label: "Success"
    }
];
var doughnutOptions = {
    segmentShowStroke: true,
    segmentStrokeColor: "#fff",
    segmentStrokeWidth: 2,
    percentageInnerCutout: 50,
    animationSteps: 100,
    animationEasing: "easeOutBounce",
    animateRotate: true,
    animateScale: false,
    legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
};
var doughnutCtx = document.getElementById("DoughnutGraph").getContext("2d");
var myDoughnutChart = new Chart(doughnutCtx).Doughnut(doughnutData, doughnutOptions);
