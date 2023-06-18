import { Modal } from "antd"
import deleteIcon from "../assets/icons/modaldelete.svg"
import AppSnackbar from "../utils/snackbar";

const DeleteModal = ({ isModalOpen, handleCancel, handleOk }: any) => {


    const handleDelete = () => {
        AppSnackbar({ type: "success", message: "Deleted Successfully", });
        handleCancel(false)
    }


    return (

        <Modal centered style={{ textAlign: "center" }} onOk={handleDelete} wrapClassName="blocking-main modal-theme" open={isModalOpen} onCancel={handleCancel} okText="Delete">
            <div className="image-container">
                <img src={deleteIcon} alt="deleteIcon" className='deletebutton' style={{ display: "block", margin: "auto", width: "30px", height: "30px", filter: "brightness(0) saturate(100%) invert(27%) sepia(100%) saturate(3944%) hue-rotate(332deg) brightness(87%) contrast(120%)" }}></img>
            </div>
            <span></span>
            <p className='fs-24 fw-700 sure heading-color' style={{ textAlign: "center", margin: "20px" }}>Are you sure?</p>
            <p className='fs-14' style={{ color: "#9D9D9D", textAlign: "center", margin: "8px" }}>Do you want to delete this?</p>
        </Modal>

    )

}
export default DeleteModal