import { RadialBar } from "@ant-design/plots";
const DemoRadialBar = () => {
  const data = [
    {
      name: "A",
      star: 2100,
    },
    {
      name: "AG",
      star: 2300,
    },
    {
      name: "AVA",
      star: 2500,
    },
    {
      name: "G2Plot",
      star: 2700,
    },
    {
      name: "L7",
      star: 3000,
    },
  ];

  const config: any = {
    data,
    xField: "name",
    yField: "star",
    autoFit: true,
    padding: "auto",
    maxAngle: 180,
    radius: 0.8,
    innerRadius: 0.32,
    colorField: "star",
    color: ({ star }: any) => {
      if (star === 3000) {
        return " #E76F51";
      } else if (star === 2700) {
        return "#264653";
      } else if (star === 2500) {
        return "#E9C46A";
      } else if (star === 2300) {
        return "#2A9D8F";
      } else if (star === 2100) {
        return " #F4A261";
      }

      return "#ff93a7";
    },
    barBackground: {},
    barStyle: {
      lineCap: "round",
    },
    intervalPadding: 6.1,

    xAxis: {
      label: null, // hide x-axis label
    },
  };
  return (
    <RadialBar
      style={{ height: "300px", marginTop: "-15px" }}
      tooltip={false}
      {...config}
      className="transition-from-right"
    />
  );
};

export default DemoRadialBar;
