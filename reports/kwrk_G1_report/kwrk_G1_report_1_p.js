
var myChart2 = echarts.init(document.getElementById('main_p'));

var data =  [['2025-10-25T13:40:31', 0.2, 0.4, 0.5, 0.5, 0.6, 6.9], ['2025-10-25T13:41:01', 0.2, 0.4, 0.5, 0.5, 0.6, 18.1], ['2025-10-25T13:41:31', 0.2, 0.4, 0.5, 0.5, 0.6, 6.7], ['2025-10-25T13:42:01', 0.2, 0.4, 0.5, 0.5, 0.6, 6.8], ['2025-10-25T13:42:31', 0.2, 0.4, 0.5, 0.5, 0.6, 8.6], ['2025-10-25T13:43:01', 0.2, 0.4, 0.5, 0.5, 0.6, 6.8], ['2025-10-25T13:43:31', 0.2, 0.4, 0.5, 0.5, 0.6, 6.9], ['2025-10-25T13:44:01', 0.2, 0.4, 0.5, 0.5, 0.6, 6.6], ['2025-10-25T13:44:31', 0.2, 0.4, 0.5, 0.5, 0.6, 10.7], ['2025-10-25T13:45:01', 0.2, 0.4, 0.5, 0.5, 0.6, 7.1]];

var option = {
  legend: {},
  tooltip: {
    trigger: 'axis',
  },
  dataset: {
    source:data,
    dimensions: ['timestamp', 'sensor1', 'sensor2', 'sensor3', 'sensor4', 'sensor5', 'sensor6'],
  },
  xAxis: { type: 'time' },
  yAxis: { },
  series: [
  {
     name: 'Max',
     type: 'line',
     smooth: true,
     encode: {
       x: 'timestamp',
       y: 'sensor6' // refer sensor 1 value
     }
  },{
     name: 'p99',
     type: 'line',
     smooth: true,
     encode: {
       x: 'timestamp',
       y: 'sensor5' // refer sensor 1 value
     }
  },{
     name: 'p95',
     type: 'line',
     smooth: true,
     encode: {
       x: 'timestamp',
       y: 'sensor4' // refer sensor 1 value
     }

  },{
     name: 'p90',
     type: 'line',
     smooth: true,
     encode: {
       x: 'timestamp',
       y: 'sensor3' // refer sensor 1 value
     }

  },{
     name: 'Avg',
     type: 'line',
     smooth: true,
     encode: {
       x: 'timestamp',
       y: 'sensor2'
     }
  },{
     name: 'Min',
     type: 'line',
     smooth: true,
     encode: {
       x: 'timestamp',
       y: 'sensor1'
  }
}]
};
myChart2.setOption(option);

window.onresize = function() {
  myChart1.resize();
  myChart2.resize();
};

