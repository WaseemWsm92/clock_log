import React from "react";
import { Button, Col, Modal, Row } from "antd";
import deleteIcon from "../../../assets/images/timeSheet/deleteModalIcon.png";
import './deleteModal.scss';

const DeleteModal = (props: any) => {
    const { isDeleteModalOpen, setIsDeleteModalOpen } = props;
    return (
        <Modal
            centered
            open={isDeleteModalOpen}
            className="timesheet-delete-modal"
            footer={null}
            onOk={() => {
                setIsDeleteModalOpen(false);
            }}
            onCancel={() => {
                setIsDeleteModalOpen(false);
            }}
            okText="Delete"
            cancelText="Cancel"
        >
            <Row style={{ textAlign: "center" }}>
                <Col md={24}>
                    <div className="timesheet-delete-content d-flex align-center justify-center flex-column">
                        <div className="timesheet-delete-wrap">
                            <img src={deleteIcon} alt="delete" />
                            <h2 className="fs-24 fw-600 heading-color m-0">Do you really want to delete this data?</h2>
                            <p className="fs-14 m-0" style={{ color: "#9D9D9D" }}>
                                The deletion of your data will result in a calculation of the current day.
                            </p>
                        </div>
                        <div className="d-flex align-center" >
                            <Button
                                className="btn-cancel"
                                style={{ margin: "20px 20px" }}
                                onClick={() => {
                                    setIsDeleteModalOpen(false);
                                }}
                            >
                                Cancel
                            </Button>
                            <Button
                                className="btn-danger"
                                onClick={() => {
                                    setIsDeleteModalOpen(false);
                                }}
                            >
                                Delete
                            </Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Modal>
    );
};

export default DeleteModal;
