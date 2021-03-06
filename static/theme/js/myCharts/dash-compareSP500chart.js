// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

function number_format(number, decimals, dec_point, thousands_sep) {
  // *     example: number_format(1234.56, 2, ',', ' ');
  // *     return: '1 234,56'
  number = (number + '').replace(',', '').replace(' ', '');
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
    dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
    s = '',
    toFixedFix = function(n, prec) {
      var k = Math.pow(10, prec);
      return '' + Math.round(n * k) / k;
    };
  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || '').length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1).join('0');
  }
  return s.join(dec);
}

function createSP500chart(event) {
    var json = this.responseText;
    var obj = JSON.parse(json);
        
    sp500 = obj.map(function(item) {
        return item.spvalue});
        
    myassets = obj.map(function(item) {
        return item.myvalue});
           
    dates = obj.map(function(item) {
        return item.date});
        
    // Area Chart Example
    var ctx = document.getElementById("dashSP500compare");
    var myLineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: dates,
        datasets: [{
          label: "SP500",
          lineTension: 0.3,
          backgroundColor: "rgba(78, 115, 223, 0.00)",
          borderColor: "#e74a3b",
          pointRadius: 1,
          pointBackgroundColor: "#e74a3b",
          pointBorderColor: "#e74a3b",
          pointHoverRadius: 3,
          pointHoverBackgroundColor: "#e74a3b",
          pointHoverBorderColor: "#e74a3b",
          pointHitRadius: 10,
          pointBorderWidth: 0.1,
          data: sp500,
        },
        {
          label: "My Assets",
          lineTension: 0.3,
          backgroundColor: "rgba(78, 115, 223, 0.00)",
          borderColor: "rgba(78, 115, 223, 1)",
          pointRadius: 1,
          pointBackgroundColor: "rgba(78, 115, 223, 1)",
          pointBorderColor: "rgba(78, 115, 223, 1)",
          pointHoverRadius: 3,
          pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
          pointHoverBorderColor: "rgba(78, 115, 223, 1)",
          pointHitRadius: 10,
          pointBorderWidth: 0.1,
          data: myassets,
        }],
      },
      options: {
        maintainAspectRatio: false,
        layout: {
          padding: {
            left: 10,
            right: 25,
            top: 5,
            bottom: 10
          }
        },
        scales: {
          xAxes: [{
            gridLines: {
              color: "rgba(100,100,100)",
              zeroLineColor: "rgba(100,100,100)",
              drawBorder: true,
              borderDash: [1],
              zeroLineBorderDash: [1],
              drawTicks: false,
            },
            ticks: {
              maxTicksLimit: 6,
              padding: 15,
              fontStyle: 'bold',
            }
          }],
          yAxes: [{
            ticks: {
              maxTicksLimit: 5,
              padding: 10,
              fontStyle: 'bold',
              // Include a dollar sign in the ticks
              callback: function(value, index, values) {
                return '$' + number_format(value);
              }
            },
            gridLines: {
              color: "rgba(100,100,100)",
              zeroLineColor: "rgba(100,100,100)",
              drawBorder: true,
              borderDash: [1],
              zeroLineBorderDash: [1],
              drawTicks: false,
            }
          }],
        },
        legend: {
          display: false,
          align: "end",
          position: "top",
          labels: {
              boxwidth: 10,
              usePointStyle: true
          }
        },
        tooltips: {
          backgroundColor: "rgb(240,240,240)",
          bodyFontColor: '#858796',
          titleMarginBottom: 5,
          titleFontColor: '#6e707e',
          titleFontSize: 14,
          borderWidth: 1,
          xPadding: 15,
          yPadding: 15,
          displayColors: true,
          intersect: false,
          mode: 'index',
          caretPadding: 10,
          }
        }
    });
    
}

var xhr = new XMLHttpRequest();
xhr.open("GET", "static/data/dashboard/sp500comp.json");
xhr.addEventListener('load', createSP500chart);
xhr.send();