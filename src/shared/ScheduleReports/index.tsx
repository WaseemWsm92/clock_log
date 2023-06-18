import { Button } from 'antd';
import {useState} from 'react'
import AddSchedule from '../../assets/icons/AddSchedule.png'
import ScheduleReportsModal from './ScheduleReportsModal';
import Edit from "../../assets/icons/edit.png";
interface Props{
    isCustomButton?:boolean
}
function ScheduleReports(props:Props) {
const {isCustomButton=false} = props;
      const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    return (
        <>{isCustomButton?<span style={{alignItems:"center",display:"flex",gap:"8px"}} onClick={() => { setIsModalOpen(true) }}>
            <img src={Edit} alt="edit"  />
            <p>Edit</p>
        </span>:
        <Button className="btn-simple" style={{ display: "flex", alignItems: "center", gap: "5px" }} onClick={() => { setIsModalOpen(true) }}>
                <img src={AddSchedule} alt="add_icon" className="white-img-theme-class cursor-pointer"/>
                <span className="fs-16 fw-500">Schedule Report</span>
        </Button>
        }
        <ScheduleReportsModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
        </>
    )
}

export default ScheduleReports
