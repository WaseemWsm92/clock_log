import React from 'react'
import { Button, Modal, Tooltip } from 'antd'
import User_Temp from "./../../../../../assets/images/MyAccounts/User_Temp.png";
import UploadImg from '../../../../../assets/images/MyAccounts/uploadImg.png';
import DeleteImg from '../../../../../assets/images/MyAccounts/deleteImg.png';

const EditProfileModal = (props: any) => {
  const { isEditModal, setIsEditModal } = props;


  return (
    <div>
      <Modal
        title="Edit Profile Photo"
        width={459}
        centered
        open={isEditModal}
        onCancel={() => setIsEditModal(false)}
        className="profile-modal-edit modal-theme"
        footer={[
          <Button key="back" onClick={() => setIsEditModal(false)}>
            Cancel
          </Button>,

          <Button key="save" type="primary" onClick={() => setIsEditModal(false)}>
            Save
          </Button>,
        ]}
      >
        <div style={{ textAlign: "center" }}>
          <img src={User_Temp} alt="" />
          <div style={{ marginTop: '17px' }}>
            <Tooltip placement="topRight" title="Upload Photo" color="rgba(233, 196, 106, 0.25)" overlayInnerStyle={{ color: '#F4A261' }}>
              <img src={UploadImg} alt='' style={{ paddingRight: '10px' }} />
            </Tooltip>
            <Tooltip placement="topLeft" title="Delete Photo" color="rgba(255, 77, 79, 0.25)" overlayInnerStyle={{ color: '#FF4D4F' }}>
              <img src={DeleteImg} alt='' />
            </Tooltip>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default EditProfileModal