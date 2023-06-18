import { Column } from '@ant-design/plots';

const DemoColumn = () => {
  const data = [
    {
      type: 'Mon',
      value: 100,
    },
    {
      type: 'Tue',
      value: 80,
    },
    {
      type: 'Wed',
      value: 60,
    },
    {
      type: 'Thu',
      value: 40,
    },
    {
      type: 'Fri',
      value: 30,
    },
    {
      type: 'Sat',
      value: 20,
    },
    {
      type: 'Sun',
      value: 10,
    },
  ];
  const config:any = {
    autoFit: true,
    height: 300,
    appendPadding: 0,
    isPercent:false,
    data,
    colorField: 'value',
   color: '#2A9D8F',

    yField: 'value',
    xField: 'type',

   
    xAxis: {
      line: {
        style: {
          lineWidth: 0, // set line width to 0 to hide the line
          stroke: 'none' // set stroke to none to hide the line
        },
        lineWidth: 0, // set line width to 0 to hide the line
        stroke: 'none' // set stroke to none to hide the line
      },
      grid: null // set grid to null to remove any grid lines
    },
    yAxis: {
      max: 100,
      min: 0,
      tickCount: 7,
      label: {
          formatter: (value: any) => {
              return `${(value *1).toFixed(0)}%`;
          },
      }
    },
    annotations: [
      {
        type: 'text',
        content: 'Hello',
        position: (xScale:any, yScale:any) => {
          return [`${xScale.scale('分类三') * 100}%`, `${(1 - yScale.value.scale(19)) * 100}%`];
        },
        offsetX:8,
        autoFit: true,
        offsetY: -8,
        background: {
          padding: 4,
          style: {
            radius: 4,
            fill: 'rgba(255,0,0,0.25)',
          },
        },
      },
    ],   
   
  };
  return <Column {...config} />;
};
export default DemoColumn

