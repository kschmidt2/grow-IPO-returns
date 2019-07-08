"use strict";

// import Highcharts from 'highcharts';
// import Exporting from 'highcharts/modules/exporting';
// Exporting(Highcharts);
// console.log(Highcharts);
Highcharts.setOptions({
  lang: {
    thousandsSep: ','
  }
});
document.addEventListener('DOMContentLoaded', function () {
  var myChart = Highcharts.chart('chart-container', {
    chart: {
      type: 'bar',
      styledMode: true,
      spacingBottom: 25,
      spacingRight: 100
    },
    data: {
      googleSpreadsheetKey: '1HBJ-CWYq37TO6aUZs1JLxdYxasMJXQBowjEDBvIx-CM',
      parsed: function parsed(data) {
        console.log(data);
        return data[0].pop(), data[1].pop();
      }
    },
    title: {
      text: null
    },
    legend: {
      enabled: false
    },
    plotOptions: {
      series: {
        clip: false,
        groupPadding: .1
      }
    },
    xAxis: {
      labels: {
        style: {
          whiteSpace: 'nowrap'
        }
      }
    },
    yAxis: {
      title: false,
      labels: {
        useHTML: true,
        overflow: 'allow',
        format: '{value:,.0f}'
      }
    },
    credits: {
      enabled: false
    },
    tooltip: {
      shadow: false,
      padding: 10,
      shared: true
    },
    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          chart: {
            spacingRight: 20
          },
          tooltip: {
            enabled: false
          },
          yAxis: {
            tickAmount: 4
          },
          legend: {
            align: 'left',
            x: -18,
            itemMarginTop: 0
          }
        }
      }]
    }
  });
});