import { Button, Col, Divider, Modal, Row, Space } from 'antd';
import { useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import AddManager from '../addManager';
import AddTeamMate from '../addTeamMate';
import './addMember.scss';
import ArchiveAddMemberIcon from "../../../../../assets/icons/settings/team/ArchiveAddMemberIcon.svg";

const AddMember = () => {

  const [open, setOpen] = useState(false);
  const [mateModal, setMateModal] = useState<any>([]);
  const [managers, setManager] = useState<any>([]);
  const [isShowMessage, setIsShowMessage] = useState(false);

  const handleCancel = () => setOpen(false);
  const showModal = () => setOpen(true);

  const matesError = isShowMessage && mateModal.length === 0;
  const managerError = isShowMessage && managers.length === 0;

  const handleOk = () => {
    setIsShowMessage(true);
    managers.length > 0 && mateModal.length > 0 && setOpen(false);
  }

  const onCrossHandler = (item: any) => {
    const filtered = managers.filter((name: any) => {
      return name !== item;
    });
    setManager(filtered);
  };

  const onCrossProjectHandler = (item: any) => {
    const filtered = mateModal.filter((name: any) => {
      return name !== item;
    });
    setMateModal(filtered);
  };

  return (
    <div>
      <Button
        icon={
          <img className="white-image-theme-class" src={ArchiveAddMemberIcon} alt="createTeam" width="24px" height="24px"
          />
        }
        className="btn-theme-color btn-create-team d-flex justify-between align-center fw-500 fs-16"
        onClick={showModal}
      >
        <span
          className=" d-flex  align-center fw-500 fs-16  "
          style={{ marginLeft: "11px" }}
        >
          Add Member
        </span>
      </Button>
      <Modal
        open={open}
        className='add-member'
        title={<span className='fw-400 fs-16 title-color'>Add Member</span>}
        onOk={handleOk}
        wrapClassName='modal-theme'
        centered
        onCancel={handleCancel}
        footer={[
          <Space style={{ paddingTop: "18px" }}>
            <Button className='btn-cancel' onClick={handleCancel}>
              Cancel
            </Button>
            <Button className='btn-secondary' onClick={handleOk}>
              Save
            </Button>
          </Space>
        ]}
        width={562}
      >

        <Row gutter={[0, 20]}>
          <Col span={24} >
            <>
              <span className="fs-12 grey-color fw-500 ">Teammates</span>
              <div style={{
                height: "110px", border: matesError ? " 1px solid #ff4d4f" : "1px solid #E8ECEE",
                borderRadius: "5px",
                padding: "10px 10px 0px 10px"
              }}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: '10px', height: '56px', overflowY: 'auto' }}>
                  {mateModal.length === 0 && (
                    <span className="fs-14 placeholder-color">Add Teammates here</span>
                  )}
                  {mateModal.map((item: any) => (
                    <p className="m-0" key={uuidv4()}>
                      <span
                        style={{
                          backgroundColor: "#F5F5F5",
                          color: '#4E6073',
                          borderLeft: "1px solid #E76F51",
                          borderRadius: "16px",
                          padding: "2px 20px 2px 8px",
                          position: "relative",
                          marginRight: "8px",
                        }}
                      >
                        {item}
                        <span
                          onClick={() => onCrossProjectHandler(item)}
                          className="cursor-pointer"
                          style={{ position: "absolute", right: "5px", top: "0" }}
                        >
                          x
                        </span>
                      </span>
                    </p>
                  ))}
                </div>
                <Divider className='divider' />
                <AddTeamMate teamMate={mateModal} setTeamMate={setMateModal} />
              </div>

              {isShowMessage && mateModal.length === 0 && <span style={{ color: "#ff4d4f" }}> Required field</span>}
            </>


          </Col>
          <Col span={24} >

            <>
              <span className="fs-12 grey-color fw-500 ">Managers</span>
              <div style={{
                height: "110px", border: managerError ? " 1px solid #ff4d4f" : "1px solid #E8ECEE",
                borderRadius: "5px",
                padding: "10px 10px 0px 10px"
              }}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: '10px', height: '56px', overflowY: 'auto' }}>
                  {managers.length === 0 && (
                    <span className="fs-14 placeholder-color">Add Managers here</span>
                  )}
                  {managers.map((item: any) => (
                    <p className="m-0" key={uuidv4()}>
                      <span
                        style={{
                          backgroundColor: "#F5F5F5",
                          color: '#4E6073',
                          borderLeft: "1px solid #E76F51",
                          borderRadius: "16px",
                          padding: "2px 20px 2px 8px",
                          position: "relative",
                          marginRight: "8px",
                        }}
                      >
                        {item}
                        <span
                          onClick={() => onCrossHandler(item)}
                          className="cursor-pointer"
                          style={{ position: "absolute", right: "5px", top: "0" }}
                        >
                          x
                        </span>
                      </span>
                    </p>
                  ))}
                </div>
                <Divider className='divider' />
                <AddManager managers={managers} setManager={setManager} />
              </div>
              {isShowMessage && managers.length === 0 && <span style={{ color: "#ff4d4f" }}> Required field </span>}

            </>

          </Col>
        </Row>


      </Modal>



    </div>
  )
}

export default AddMember