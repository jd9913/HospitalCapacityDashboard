var medSurgGraphEl = document.getElementById('medSurgBeds');  //Referencing the block for Medical Surgical bed data.
var icuGraphEl = document.getElementById('icuBeds'); //referencing the block for ICU data
var ventGraphEl = document.getElementById('vents'); //referencing the block for ventilator data
var covidLineEl = document.getElementById('covidLine'); //referencing the block for the three covid positiv lines
var covidEDEl = document.getElementById('covidED'); //referencing the block for the numbers at the top
var covidAdmitEl = document.getElementById('covidAdmit'); //referencing the block for numbers at the top
var covidInptEl = document.getElementById('covidInpt'); //referencing the block for numbers at the top


var ctx = medSurgGraphEl.getContext('2d');
var ctx1 = icuGraphEl.getContext('2d');
var ctx2 = ventGraphEl.getContext('2d');
var ctx3 = covidLineEl.getContext('2d');



//data for the number fields above the graphs











// Data for graphs
var data = [                    //data for Med/Surgical beds
    {
        value: 300,
        color: "#F7464A",
        highlight: "#FF5A5E",
        label: "Red"
    },
    {
        value: 50,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Green"
    },
    {
        value: 100,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Yellow"
    },
    {
        value: 40,
        color: "#949FB1",
        highlight: "#A8B3C5",
        label: "Grey"
    },
    {
        value: 120,
        color: "#4D5360",
        highlight: "#616774",
        label: "Dark Grey"
    }
];

var data2 = [                       //data for ICU beds
    {
        value: 300,
        color: "#F7464A",
        highlight: "#FF5A5E",
        label: "Red"
    },
    {
        value: 50,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Green"
    },
    {
        value: 100,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Yellow"
    },
    {
        value: 40,
        color: "#949FB1",
        highlight: "#A8B3C5",
        label: "Grey"
    },
    {
        value: 120,
        color: "#4D5360",
        highlight: "#616774",
        label: "Dark Grey"
    }
];

var data3 = [               //data for ventilated patients
    {
        value: 300,
        color: "#F7464A",
        highlight: "#FF5A5E",
        label: "Red"
    },
    {
        value: 50,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Green"
    },
    {
        value: 100,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Yellow"
    },
    {
        value: 40,
        color: "#949FB1",
        highlight: "#A8B3C5",
        label: "Grey"
    },
    {
        value: 120,
        color: "#4D5360",
        highlight: "#616774",
        label: "Dark Grey"
    }
];

var data4 = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
            label: "My Second dataset",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [28, 48, 40, 19, 86, 27, 90]
        }
    ]
};


// Global + Custom Chart Config Options

var options = {
    bezierCurve: false,
    animation: true,
    animationEasing: "easeOutQuart",
    showScale: false,
    tooltipEvents: ["mousemove", "touchstart", "touchmove"],
    tooltipCornerRadius: 3,
    pointDot: true,
    pointDotRadius: 4,
    datasetFill: true,
    scaleShowLine: true,
    animationEasing: "easeOutBounce",
    animateRotate: true,
    animateScale: true
};

// Load Chart


var medSurg = new Chart(ctx, {
    type: 'pie',
    data: data,
    options: options
});

var ICU = new Chart(ctx1, {
    type: 'pie',
    data: data2,
    options: options
});

var vents = new Chart(ctx2, {
    type: 'pie',
    data: data3,
    options: options
});

var lineGraph = new Chart(ctx3, {
    type: 'line',
    data: data4,
    options: options
});

