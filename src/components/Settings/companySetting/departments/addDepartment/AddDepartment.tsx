import { Col, Modal, Row } from "antd";
import { FC, useState } from "react";
import AddDepartmentImage from "../../../../../assets/images/settings/AddDepartment.png";
import AppSnackbar from "../../../../../utils/snackbar";
import "./AddDepartment.scss";
import AddDepartmentForm from "./addDepartmentForm/AddDepartmentForm";

interface IDepartmentModal {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isEdited: boolean;
  seIsEdited: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AddDepartment = (props: IDepartmentModal) => {
  const { open, setOpen, isEdited, seIsEdited } = props;
  const [confirmLoading, setConfirmLoading] = useState(false);

  const showModal = () => {
    setOpen(true);
    seIsEdited(false);
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
      <Col md={12} sm={24} className="addTimeButton">
        <button onClick={showModal} className="d-flex border-radius-4 add-department btn-theme-color">
          <img src={AddDepartmentImage} width="24px" height="12px" alt="icon" />
          <p className="fs-16 fw-500 ">Add Department</p>
        </button>
      </Col>
      <Modal
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        okText={isEdited ? "Update" : "Add"}
        width={450}
        centered
        className="modal-theme"
      >
        <AddDepartmentForm isEdited={isEdited} />
      </Modal>
    </Row>
  );
};
