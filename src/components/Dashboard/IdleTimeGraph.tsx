import { Progress } from '@ant-design/plots';
import { useEffect, useState } from 'react';

const DemoProgress = () => {
  
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setPercent(0.1);
    }, 1000);

    const timer2 = setTimeout(() => {
      setPercent(0.4);
    }, 2000);

    const timer3 = setTimeout(() => {
      setPercent(0.7);
    }, 3000);

    const timer4 = setTimeout(() => {
      setPercent(1);
    }, 4000);
    const timer5 = setTimeout(() => {
      setPercent(0.7);
    }, 5000);
    const timer6 = setTimeout(() => {
      setPercent(0.54);
    }, 6000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
      clearTimeout(timer6);
    };
  }, []);

  const config = {
    height: 60,
    autoFit: true,
    percent: percent,
    color: ['#FACD74', '#E5ECF3'],
    borderRadius: 5,
    appendPadding:2,
    lineWidth: 1,
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
  return (
    <div style={{ borderRadius: '10px', position: 'relative' }}>
      <Progress {...config}  style={{ marginTop: '10px' ,marginBottom:"-10px", borderRadius: '10px'}} />
      <div style={percentStyle}>{`${(config.percent * 100).toFixed(0)}%`}</div>
    </div>
  );
};
export default DemoProgress