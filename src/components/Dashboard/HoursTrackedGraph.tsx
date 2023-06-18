import { Column } from "@ant-design/plots";

const HoursTrackedGraph = () => {
  const data = [
    {
      type: "Mon",
      value: 100,
    },
    {
      type: "Tue",
      value: 80,
    },
    {
      type: "Wed",
      value: 60,
    },
    {
      type: "Thu",
      value: 40,
    },
    {
      type: "Fri",
      value: 30,
    },
    {
      type: "Sat",
      value: 20,
    },
    {
      type: "Sun",
      value: 10,
    },
  ];
  const config: any = {
    autoFit: true,
    isPercent: false,
    height: 300,
    appendPadding: 0,
    data,
    colorField: "value",
    color: "#E76F51",
    yField: "value",
    xField: "type",

    xAxis: {
      line: {
        style: {
          lineWidth: 0, // set line width to 0 to hide the line
        },
      },
    },
    yAxis: {
      max: 100,
      min: 0,
      tickCount: 7,
      label: {
        formatter: (value: any) => {
          return `${(value * 1).toFixed(0)}%`;
        },
      },
    },
  };
  return <Column {...config} />;
};
export default HoursTrackedGraph;
