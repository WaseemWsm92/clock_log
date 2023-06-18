import { Rose } from '@ant-design/plots';
import { useEffect,  useState } from 'react';
import Services from '../../assets/icons/Dashboard/center.svg'
const DemoRose = () => {
  const {role}: any = JSON.parse(localStorage.getItem("UserData") || "{}");
  const [data, setData] = useState([
    {
      type: 'Teams 90%',
      value: 90,
      show: true,
    },
    {
      type: 'Figma 70%',
      value: 80,
      show: false,
    },
    {
      type: 'Jira 50%',
      value: 70,
      show: false,
    },
    {
      type: 'Excel 40%',
      value: 60,
      show: false,
    },
    {
      type: 'Teams 30%',
      value: 50,
      show: false,
    },
    {
      type: 'YTube 20%',
      value: 40,
      show: false,
    },
  
  ]);

  const [showIndex, setShowIndex] = useState(0);

  useEffect(() => {
    setData(prevData => prevData.map((d, i) => ({
      ...d,
      show: i <= showIndex,
    })));
    if (showIndex < data.length - 1) {
      setTimeout(() => setShowIndex(showIndex + 1), 3000);
    }
  }, [showIndex]);
  
  const config:any = {
    data: data.filter(d => d.show),
    xField: 'type',
    yField: 'value',
    autoFit: true,
    seriesField: 'type',
    angleField: 'value',
    interactions: [],
    padding: [0, 0, 0, 0],
    animation: {
      delay: 500
    },
    rotate: -145,
    radius: 0.92,
    label: {
      offset: -20,
      style: {
        fontSize: 8,
      },
    },
    legend: {
      visible: false,
    },
    
    color: ['#E76F51', '#1890FF', '#2A9D8F', '#F4C145', '#F09044', '#E83D56'],
    
  };

  return <div className='dashboard' style={{position:"relative"}}>
     <Rose   {...config} className={role==="Admin"? "mostusedServicesGrapgh":"EmployeeServices" } /> 
  { <img src={Services} alt="circle" className="circleimage"/>}
   </div>;
};
export default DemoRose