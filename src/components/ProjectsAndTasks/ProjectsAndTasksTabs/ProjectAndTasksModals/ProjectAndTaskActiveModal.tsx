// import React from 'react'

// const ProjectAndTaskActiveModal = () => {
//   return (
//     <div>ProjectAndTaskActiveModal</div>
//   )
// }

// export default ProjectAndTaskActiveModal



import { Modal } from 'antd'
import active from "../../../../assets/icons/settings/projectandtasks/active.svg";
import React from 'react'

const ProjectAndTaskActiveModal = ({ isArchivedActiveOpen, setIsArchivedActiveOpen }: any) => {
  return (
    <>
      <Modal
        style={{ textAlign: "center", maxWidth: "445px" }}
        centered
        wrapClassName="active-modal  modal-theme"
        open={isArchivedActiveOpen}
        onOk={() => setIsArchivedActiveOpen(false)}
        onCancel={() => setIsArchivedActiveOpen(false)}
        okText="Active"
      >
        <div className="image-container">
          <img
            src={active}
            alt="archiveModal"
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
          Do you want to active this projects?
        </p>
      </Modal>
    </>
  )
}

export default ProjectAndTaskActiveModal