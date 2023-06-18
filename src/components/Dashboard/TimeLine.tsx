import { Card, Layout, Tooltip } from 'antd';

import './AdminDashboard.scss';
import '../../sass/common.scss'
import ShowActiveTimeline from '../timeLine/showActiveTimeline/ShowActiveTimeline';
import ShowTimeline from '../timeLine/showTimeLine/ShowTimeline';

export const TimeLines = ({selectedOptions}:any) => {

  return (
    <Layout className='dashboard bg-unset' style={{marginBottom:"25px"}}>
     {selectedOptions.includes("TimeLine") &&<Card className='attendance-summary-card border-radius-8 card-bg-color' bordered={false} style={{minHeight:"200px", boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.15)"}}  >

<div  style={{display:"flex",justifyContent:"space-between"}}>
       <p className="fw-600 m-0 attendance-summary-text title-color fs-16 " style={{marginTop:"0px"}}>Attendance Summary </p>
       <p className="fw-400 m-0 attendance-summary-text grey-color fs-16 " >March 16, 2022 - Friday</p>
       </div>
       <div className='individualReport card-bg-color border-radius-8'style={{marginTop:"20px"}} >
            <ShowTimeline/>
          </div>
          <div style={{marginTop:"50px"}}>
         <ShowActiveTimeline/> 
          </div>
      </Card>}
    </Layout>

  );
};






