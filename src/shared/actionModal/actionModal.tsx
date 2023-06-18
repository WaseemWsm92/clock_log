import { Modal, Space } from 'antd'
import './actionModal.scss';

import deleteCrossIcon from '../../assets/icons/cancel.svg';



const ActionModal = (props: any) => {
    const { isModalOpen, setOpenModal, submitHandler, actionClass, actionText, mainText, secondaryText, image } = props;
    return (
        <Modal centered style={{ textAlign: "center" }} wrapClassName="action-modal-wrapper modal-theme"
            onCancel={() => setOpenModal(false)}
            open={isModalOpen}
            footer={[
                <Space size={30} className=" d-flex justify-center align-center  cursor-pointer">
                    <button className='btn-cancel' onClick={() => setOpenModal(false)}>
                        Cancel
                    </button>
                    <button className={`${actionClass} text-white cursor-pointer action-button-size fs-16 fw-500`} onClick={submitHandler}>
                        {actionText}
                    </button>
                </Space >
            ]}
            width={445}
            closeIcon={<img src={deleteCrossIcon} alt="cross" height={24} width={24} style={{ filter: "var(--dynamic-img-filter)" }} />}
        >
            <div className="image-container">
                <img src={image} alt="deleteIcon" className='deletebutton'
                    style={{
                        display: "block", margin: "auto", width: "30px", height: "30px",
                    }} />
            </div>
            <p className='fs-24 fw-700 sure heading-color' style={{ textAlign: "center", margin: "20px" }}>{mainText}</p>
            <p className='fs-14 heading-color' style={{ color:'#9d9d9d', textAlign: "center", margin: "8px" }}>{secondaryText}</p>
        </Modal >

    )
}

export default ActionModal