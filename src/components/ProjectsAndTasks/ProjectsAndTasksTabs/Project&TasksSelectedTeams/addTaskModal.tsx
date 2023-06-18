import { Modal } from 'antd';
import React, { useState } from 'react'
import { AddTasks } from './TeamSelectedForms/AddTask/AddTasks';

const AddTaskModal = ({ isOpenModal, setIsOpenModal }: any) => {

  const [isModalOpen, setIsModalOpen] = useState(false);



  return (
    <div>
      <Modal
        title="Add Task"
        open={isOpenModal}
        onOk={() => setIsOpenModal(false)}
        onCancel={() => setIsOpenModal(false)}
        width={810}
        okText="Save"
        wrapClassName='modal-theme'
      >
        <AddTasks />
      </Modal>
    </div>
  )
}

export default AddTaskModal