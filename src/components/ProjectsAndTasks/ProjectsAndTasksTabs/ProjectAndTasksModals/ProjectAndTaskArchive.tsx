import { Modal } from 'antd'
import archiveModal from "../../../../assets/icons/settings/projectandtasks/archiveModal.svg";
import React from 'react'

const ProjectAndTaskArchive = ({ isArchiveActiveOpen, setIsArchiveActiveOpen }: any) => {
  return (
    <>
      <Modal
        style={{ textAlign: "center", maxWidth: "445px" }}
        centered
        wrapClassName="archeive-modal modal-theme"
        open={isArchiveActiveOpen}
        onOk={() => setIsArchiveActiveOpen(false)}
        onCancel={() => setIsArchiveActiveOpen(false)}
        okText="Archeive"
      >
        <div className="image-container">
          <img
            src={archiveModal}
            alt="archiveModal"
            className="delete-icon"
          ></img>
        </div>
        <p
          className="fs-24 fw-600 sure heading-color text-center line-height-40"
          style={{ margin: "1.25rem 0 0.625rem 0" }}
        >
          Are You Sure?
        </p>
        <p
          className="fs-14 text-center"
          style={{ color: "#9D9D9D", margin: "0 0 1.875rem 0" }}
        >
          Do you want to archive seleted projects?
        </p>
      </Modal>
    </>
  )
}

export default ProjectAndTaskArchive