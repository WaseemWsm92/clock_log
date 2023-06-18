import { Modal } from 'antd'
import deleteIcon from "../../../../assets/icons/settings/projectandtasks/delete.svg";
import React from 'react'

const ProjectAndTaskDeleteModal = ({ isDeleteActiveOpen, setIsDeleteActiveOpen }: any) => {
  return (
    <>
      <Modal
        style={{ textAlign: "center", maxWidth: "445px" }}
        centered
        wrapClassName="teams-delete-modal modal-theme"
        open={isDeleteActiveOpen}
        onOk={() => setIsDeleteActiveOpen(false)}
        onCancel={() => setIsDeleteActiveOpen(false)}
        okText="Delete"
      >
        <div className="image-container">
          <img
            src={deleteIcon}
            alt="deleteIcon"
            className="delete-icon"
          ></img>
        </div>
        <p
          className="fs-24 fw-600 heading-color sure text-center line-height-40"
          style={{ margin: "1.25rem 0 0.625rem 0" }}
        >
          Are You Sure?
        </p>
        <p
          className="fs-14 text-center"
          style={{ color: "#9D9D9D", margin: "0 0 1.875rem 0" }}
        >
          Do you want to delete this?
        </p>
      </Modal>
    </>
  )
}

export default ProjectAndTaskDeleteModal