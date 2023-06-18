import { useState } from 'react';
import { Button } from 'antd'
import InviteUserImg from "../../assets/icons/invite-user.png";
import InviteUser from './invite-users';

const InviteUserModal = () => {
    const [isShowAddModal, setIsShowModal] = useState<boolean>(false);

    return (<>
        <Button className="btn-primary" style={{ borderRadius: 20,display:'flex',gap:'8px',alignItems:'center' }} onClick={() => setIsShowModal(true)}>
            <img src={InviteUserImg} alt='inviteUsers' />
            Invite User
        </Button>
        <InviteUser
            isShowAddModal={isShowAddModal}
            setIsShowModal={setIsShowModal}
        />
    </>)
}

export default InviteUserModal