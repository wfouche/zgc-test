
var myChart1 = echarts.init(document.getElementById('main'));

var data =  [['2025-10-25T13:40:31', 10000.0, 0.0], ['2025-10-25T13:41:01', 10000.0, 0.0], ['2025-10-25T13:41:31', 9999.7, 0.0], ['2025-10-25T13:42:01', 9999.9, 0.0], ['2025-10-25T13:42:31', 9999.9, 0.0], ['2025-10-25T13:43:01', 9999.9, 0.0], ['2025-10-25T13:43:31', 9999.7, 0.0], ['2025-10-25T13:44:01', 9999.8, 0.0], ['2025-10-25T13:44:31', 10000.1, 0.0], ['2025-10-25T13:45:01', 10000.0, 0.0]];

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

