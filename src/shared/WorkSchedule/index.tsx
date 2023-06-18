import { useState } from 'react';
import { Button } from 'antd'
import AddSchedule from '../../assets/icons/addSchedule.svg'
import AddModal from './AddModal';
import Edit from "../../assets/icons/edit.png";

interface Props{
    isCustomButton?:boolean
}
function AddWorkSchedules(props:Props) {
    const {isCustomButton=false} = props;
    const [isAddModal, setIsAddModal] = useState({ isOpen: false, id: "" });
    return (
        <>
        {isCustomButton?<span style={{alignItems:"center",display:"flex",gap:"8px"}} onClick={() => { setIsAddModal({ isOpen: true, id: "Add" }) } }>
            <img src={Edit} alt="edit" />
            <p>Edit</p>
        </span>:
            <Button className="btn-simple" style={{ display: "flex", alignItems: "center", gap: "5px" }} onClick={() => { setIsAddModal({ isOpen: true, id: "Add" }) }}>
                    <img src={AddSchedule} className="white-img-theme-class" alt="add_icon" />
                <span className="fs-16 fw-500"> Add Work Schedule</span>
            </Button>
        }
            <AddModal isAddModal={isAddModal} setIsAddModal={setIsAddModal}/>
        </>
       
    )
}

export default AddWorkSchedules
