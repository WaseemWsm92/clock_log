import React from 'react'
import { Button, Col, Modal, Row } from "antd"
import deleteIcon from "../../../assets/icons/deleteicon.png"


const DeleteModal = ({ deleteModal, setDeleteModal, deleteDiscription }: any) => {
  return (
    <Modal
      centered
      open={deleteModal}
      className="delete_modal modal-theme"
      footer={null}
      onOk={() => {
        setDeleteModal(false);
      }}
      onCancel={() => {
        setDeleteModal(false);
      }}
      okText="Delete"
      cancelText="Cancel"
    >
      <Row style={{ textAlign: "center" }}>
        <Col md={24}>
          <div className="action-modal">
            <img src={deleteIcon} alt="delete" />
            <h2 className="fs-24 fw-600 heading-color">Are you sure?</h2>
            <p className="fs-14" style={{ color: "#9D9D9D" }}>
              {deleteDiscription}
            </p>
            <Button
              className="btn-cancel"
              style={{ margin: "20px 20px" }}
              onClick={() => {
                setDeleteModal(false);
              }}
            >
              Cancel
            </Button>
            <Button
              className="btn-danger"
              onClick={() => {
                setDeleteModal(false);
              }}
            >
              Delete
            </Button>
          </div>
        </Col>
      </Row>
    </Modal>
  )
}

export default DeleteModal