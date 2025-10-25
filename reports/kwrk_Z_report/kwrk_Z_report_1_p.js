
var myChart2 = echarts.init(document.getElementById('main_p'));

var data =  [['2025-10-25T13:47:51', 0.2, 0.4, 0.5, 0.5, 0.6, 14.3], ['2025-10-25T13:48:21', 0.2, 0.4, 0.5, 0.5, 0.6, 7.0], ['2025-10-25T13:48:51', 0.2, 0.4, 0.5, 0.5, 0.6, 5.5], ['2025-10-25T13:49:21', 0.2, 0.4, 0.5, 0.5, 0.6, 5.5], ['2025-10-25T13:49:51', 0.2, 0.4, 0.5, 0.5, 0.6, 4.8], ['2025-10-25T13:50:21', 0.2, 0.4, 0.5, 0.5, 0.6, 4.8], ['2025-10-25T13:50:51', 0.2, 0.4, 0.5, 0.5, 0.6, 5.8], ['2025-10-25T13:51:21', 0.2, 0.4, 0.5, 0.5, 0.6, 6.7], ['2025-10-25T13:51:51', 0.2, 0.4, 0.5, 0.5, 0.6, 4.7], ['2025-10-25T13:52:21', 0.2, 0.4, 0.5, 0.5, 0.6, 6.7]];

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

