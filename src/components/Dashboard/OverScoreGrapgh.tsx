
import { Progress } from 'antd';
import './AdminDashboard.scss';
const DemoProgress = ({score}:any) => {
  let strokeColor: any[] = [];
  if (score < 100 && score >80) {
    strokeColor = ['#2A9D8F', '#DBE4EF'];
  } else if(score>69 && score<79){
    strokeColor = ['#E9C46A', '#DBE4EF'];
  }
  else if(score>20 && score <30)
  {
    strokeColor = ['#E9C46A', '#DBE4EF'];
  }
else{
  strokeColor = ['#F4664A', '#DBE4EF'];
}
  const config:any = {
    height: 39,
    width:"50%",
    autofit: "true",
    margintop: '30px',
    percent: (score / 100)*100,
    strokeColor,
    cursor: 'pointer',
  
  };
  return   <div className='dashboard'>
     <Progress {...config} className="progress-container" />
  </div>


};


export default DemoProgress