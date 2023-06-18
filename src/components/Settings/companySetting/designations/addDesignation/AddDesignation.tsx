import { Col, Modal, Row } from "antd";
import { FC, useState } from "react";
import AddDesignationImage from "../../../../../assets/images/settings/AddDesignation.png";
import AddDesignationForm from "./addDesignationForm/AddDesignationForm";
import './AddDesignation'
import AppSnackbar from "../../../../../utils/snackbar";

interface IDesignationModal {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isEdited: boolean
    seIsEdited:React.Dispatch<React.SetStateAction<boolean>>;
}

export const AddDesignation = (props: IDesignationModal) => {
    const { open, setOpen, isEdited,seIsEdited } = props
    // const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);

    const showModal = () => {
        setOpen(true);
        seIsEdited(false)
    };

    const handleOk = () => {
        setConfirmLoading(true);
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false)
            AppSnackbar({ type: "success", message: isEdited ? "Record Updated Successfully!" : "Record Added Successfully!" });
        }, 2000);
    };

    const handleCancel = () => {
        setOpen(false);
    };
    return (
        <Row className="showTime">
            <Col md={12} sm={24}  className="addTimeButton">
                <button style={{}} onClick={showModal} className="d-flex border-radius-4 btn-theme-color">
                    <img src={AddDesignationImage} width="20px" height="19px" alt="icon" />
                    <p className="fs-16 fw-500 button-textt">Add Designation</p>
                </button>
            </Col>
            <Modal
                open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
                okText={isEdited ? 'Update' : 'Add'}
                width={450}
                centered
                className="modal-theme"
            >
                <AddDesignationForm isEdited={isEdited} />
            </Modal>
        </Row>
    )
}
