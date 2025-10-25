
var myChart1 = echarts.init(document.getElementById('main'));

var data =  [['2025-10-25T13:47:51', 10000.0, 0.0], ['2025-10-25T13:48:21', 10000.0, 0.0], ['2025-10-25T13:48:51', 10000.0, 0.0], ['2025-10-25T13:49:21', 9999.8, 0.0], ['2025-10-25T13:49:51', 9999.8, 0.0], ['2025-10-25T13:50:21', 10000.2, 0.0], ['2025-10-25T13:50:51', 10000.1, 0.0], ['2025-10-25T13:51:21', 9999.8, 0.0], ['2025-10-25T13:51:51', 10000.3, 0.0], ['2025-10-25T13:52:21', 9999.8, 0.0]];

var option = {
  legend: {},
  tooltip: {
    trigger: 'axis',
  },
  dataset: {
    source:data,
    dimensions: ['timestamp', 'sensor1', 'sensor2'],
  },
  xAxis: { type: 'time' },
  yAxis: { },
  series: [
  {
     name: 'Actions/s',
     type: 'line',
     smooth: true,
     encode: {
       x: 'timestamp',
       y: 'sensor1' // refer sensor 1 value 
     }
  },{
     name: 'Failures/s',
     type: 'line',
     smooth: true,
     encode: {
       x: 'timestamp',
       y: 'sensor2'
  }
}]
};
myChart1.setOption(option);

