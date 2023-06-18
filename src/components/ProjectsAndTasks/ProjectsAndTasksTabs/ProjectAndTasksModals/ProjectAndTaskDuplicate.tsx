// import React from 'react'

// const ProjectAndTaskDuplicate = () => {
//   return (
//     <div>ProjectAndTaskDuplicate</div>
//   )
// }

// export default ProjectAndTaskDuplicate


import { Modal } from 'antd'
import duplicate from "../../../../assets/icons/settings/projectandtasks/duplicate.svg";
import React from 'react'

const ProjectAndTaskDuplicate = ({ isDuplicateActiveOpen, setIsDuplicateActiveOpen }: any) => {
  return (
    <>
      <Modal
        style={{ textAlign: "center", maxWidth: "445px" }}
        centered
        wrapClassName="teams-dupliacte-modal modal-theme"
        open={isDuplicateActiveOpen}
        onOk={() => setIsDuplicateActiveOpen(false)}
        onCancel={() => setIsDuplicateActiveOpen(false)}
        okText="Duplicate"
      >
        <div className="image-container">
          <img
            src={duplicate}
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
          Do you want to duplicate this project?
        </p>
      </Modal>
    </>
  )
}

export default ProjectAndTaskDuplicate