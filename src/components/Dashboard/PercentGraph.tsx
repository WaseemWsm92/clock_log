import { Progress } from '@ant-design/plots';
import { useEffect, useState } from 'react';

const ProgressBar = () => {
  const [percent, setPercent] = useState(1);

  useEffect(() => {
    const timer3 = setTimeout(() => {
      setPercent(0.7);
    }, 1000);

   
    const timer5 = setTimeout(() => {
      setPercent(0.75);
    }, 2000);
    const timer6 = setTimeout(() => {
      setPercent(0.8);
    }, 3000);

    return () => {
      clearTimeout(timer3);
      clearTimeout(timer5);
      clearTimeout(timer6);
    };
  }, []);
  const config = {
    height: 60,
    autoFit: true,
    percent: percent,
    color: ['#2A9D8F', '#FF4D4F'],
    borderRadius: 5,
    appendPadding:2,
    stroke: '#CCCCCC',
    lineWidth: 20,
    cursor: 'pointer',
    format: (percent:any) => `${(percent * 100).toFixed(0)}%`,
  };
  const percentStyle:any = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '16px',
    color:"#FFFFFF",
    fontWeight: '500',
  };
  const remainingPercentStyle: any = {
    position: 'absolute',
    top: '50%',
    left: `${percent * 100}%`,
    transform: 'translate(20%, -50%)',
    fontSize: '16px',
    color: '#FFFFFF',
    
    fontWeight: '500',
  };
  return (
    <div style={{ borderRadius: '10px', position: 'relative' }}>
      <Progress {...config} style={{ marginTop: '10px' ,marginBottom:"-10px", borderRadius: '10px'}} />
      {percent < 1 && (
          <div style={remainingPercentStyle}>{`${((1 - percent) * 100).toFixed(0)}%`}</div>
        )}
        <div style={percentStyle}>{`${(config.percent * 100).toFixed(0)}%`}</div>
    </div>
  );
};
export default ProgressBar