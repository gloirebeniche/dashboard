Chart.defaults.global = {
    animation: true,
    animationSteps: 60,
    animationEasing: "easeOutIn",
    showScale: true,
    scaleOverride: false,
    scaleSteps: null,
    scaleStepWidth: null,
    scaleStartValue: null,
    scaleLineColor: "#eeeeee",
    scaleLineWidth: 1,
    scaleShowLabels: true,
    scaleLabel: "<%=value%>",
    scaleIntegersOnly: true,
    scaleBeginAtZero: false,
    scaleFontSize: 12,
    scaleFontStyle: "normal",
    scaleFontColor: "#717171",
    responsive: true,
    maintainAspectRatio: true,
    showTooltips: true,
    multiTooltipTemplate: "<%= value %>",
    tooltipFillColor: "#333333",
    tooltipEvents: ["mousemove", "touchstart", "touchmove"],
    tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",
    tooltipFontSize: 14,
    tooltipFontStyle: "normal",
    tooltipFontColor: "#fff",
    tooltipTitleFontSize: 16,
    TitleFontStyle : "Raleway",
    tooltipTitleFontStyle: "bold",
    tooltipTitleFontColor: "#ffffff",
    tooltipYPadding: 10,
    tooltipXPadding: 10,
    tooltipCaretSize: 8,
    tooltipCornerRadius: 6,
    tooltipXOffset: 5,
    onAnimationProgress: function() {},
    onAnimationComplete: function() {}
};
var barData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [{
        label: "My First dataset",
        fillColor: "rgba(36, 105, 92, 0.4)",
        strokeColor: vihoAdminConfig.primary,
        highlightFill: "rgba(36, 105, 92, 0.6)",
        highlightStroke: vihoAdminConfig.primary,
        data: [35, 59, 80, 81, 56, 55, 40]
    }, {
        label: "My Second dataset",
        fillColor: "rgba(186, 137, 93, 0.4)",
        strokeColor: vihoAdminConfig.secondary,
        highlightFill: "rgba(186, 137, 93, 0.6)",
        highlightStroke: vihoAdminConfig.secondary,
        data: [28, 48, 40, 19, 86, 27, 90]
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
var barCtx = document.getElementById("myBarGraph").getContext("2d");
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
var doughnutCtx = document.getElementById("myDoughnutGraph").getContext("2d");
var myDoughnutChart = new Chart(doughnutCtx).Doughnut(doughnutData, doughnutOptions);
