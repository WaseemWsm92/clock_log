import { Button } from 'antd';
import {useState} from 'react'
import AddSchedule from '../../assets/icons/AddSchedule.png'
import Edit from "../../assets/icons/edit.png";
import SubmitReportModal from './SubmitReportModal';
interface Props{
    isCustomButton?:boolean
}
const SubmitReport = (props:Props) => {
const {isCustomButton=false} = props;
      const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    return (
        <>{isCustomButton?<span style={{alignItems:"center",display:"flex",gap:"8px"}} onClick={() => { setIsModalOpen(true) }}>
            <img src={Edit} alt="edit"  />
            <p>Edit</p>
        </span>:
        <Button className="btn-simple" style={{ display: "flex", alignItems: "center", gap: "5px" }} onClick={() => { setIsModalOpen(true) }}>
                <img src={AddSchedule} alt="add_icon" className="white-img-theme-class cursor-pointer"/>
                <span className="fs-16 fw-500">Submit Report</span>
        </Button>
        }
        <SubmitReportModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
        </>
    )
}

export default SubmitReport
