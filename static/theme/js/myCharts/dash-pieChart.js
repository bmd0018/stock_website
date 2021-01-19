// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

function formatMoney(amount, decimalCount = 2, decimal = ".", thousands = ",") {
  try {
    decimalCount = Math.abs(decimalCount);
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

    const negativeSign = amount < 0 ? "-" : "";

    let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
    let j = (i.length > 3) ? i.length % 3 : 0;

    return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
  } catch (e) {
    console.log(e)
  }
};


function createPieChart(event) {
    var json = this.responseText;
    var obj = JSON.parse(json);
            
    var cash = obj.cash.toFixed(2);
    var active = obj.active.toFixed(2);
    var holding = obj.holding.toFixed(2);
    
    var total = formatMoney(obj.cash+obj.active+obj.holding);
        
    var tot = document.getElementById("pieChartSummary");
    
    tot.innerHTML = 'Total Assets: $ ' + total;


    // Pie Chart Example
    var ctx = document.getElementById("myPieChart");
    var myPieChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ["Cash","Active","Holding"],
        datasets: [{
          data: [cash,active,holding],
          backgroundColor: ['#1cc88a','#4e73df',"rgba(100, 100, 100)"],
          hoverBackgroundColor: [ '#17a673','#2e59d9', "rgba(75, 75, 75)"],
          hoverBorderColor: "rgba(234, 236, 244, 1)",
        }],
      },
      options: {
        maintainAspectRatio: false,
        tooltips: {
          backgroundColor: "rgb(255,255,255)",
          bodyFontColor: "#858796",
          borderColor: '#dddfeb',
          borderWidth: 1,
          xPadding: 15,
          yPadding: 15,
          displayColors: false,
          caretPadding: 10,
        },
        legend: {
          display: false
        },
        cutoutPercentage: 50,
      },
    });
    
}

var xhr = new XMLHttpRequest();
xhr.open("GET", "static/data/dashboard/pieChart.json");
xhr.addEventListener('load', createPieChart);
xhr.send();
