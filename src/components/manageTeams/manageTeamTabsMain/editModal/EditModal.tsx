import { useState } from 'react';
import { Modal, Row, Col, Form, Input, Button, Divider, Space } from 'antd';
import { v4 as uuidv4 } from "uuid";
import AddTeamMate from '../members/addTeamMate';
import AddManager from '../members/addManager';
import AddProjects from '../ActiveTab/addProjects';
import './EditModal.scss';

const EditModal = ({ editOpenModal, seteditOpenModal }: any) => {
  const [managers, setManager] = useState<any>([]);
  const [mateModal, setMateModal] = useState<any>([]);
  const [projects, setProjects] = useState([]);
  const [teamMember, setTeamMember] = useState('');
  const [isShowMessage, setIsShowMessage] = useState(false);

  const onCrossHandler = (item: any) => {
    const filtered = managers.filter((name: any) => {
      return name !== item;
    });
    setManager(filtered);
  };

  const TeamMateHandler = (item: any) => {
    const filtered = mateModal.filter((name: any) => {
      return name !== item;
    });
    setMateModal(filtered);
  };

  const onCrossProjectHandler = (item: any) => {
    const filtered = projects.filter((name) => {
      return name !== item;
    });
    setProjects(filtered);
  };

  const matesError = isShowMessage && mateModal.length === 0;
  const managerError = isShowMessage && managers.length === 0;
  const projectError = isShowMessage && projects.length === 0;
  const onFinish = (values: any) => {
    setIsShowMessage(true)
    values && mateModal.length > 0 && managers.length > 0 && projects.length > 0 && seteditOpenModal(false)
  }
  const onCancelHandler = () => {
    setManager([])
    setMateModal([])
    setProjects([])
    setTeamMember('')
    seteditOpenModal(false);
    setIsShowMessage(false)
  }


  return (
    <div>
      <Modal
        open={editOpenModal}
        title={<span className='fw-400 fs-16 title-color'> Edit Team</span>}
        className='edit-modal-wrapper  modal-theme'
        centered
        onOk={() => seteditOpenModal(false)}
        onCancel={onCancelHandler}
        footer={false}
        width={692}

      >
        <Form layout="vertical" name="email" onFinish={onFinish}>
          <Row gutter={[20, 20]}>
            <Col xl={24} xs={24} md={24} lg={24} xxl={24} >
              <div>
                <Input style={{ maxWidth: 312, height: 39, border: (isShowMessage && !teamMember) ? " 1px solid #ff4d4f" : "1px solid #E8ECEE" }}
                  placeholder="Enter Team Name" value={teamMember} onChange={(e: any) => setTeamMember(e.target.value)}

                />
              </div>
              {isShowMessage && !teamMember && <span style={{ color: "#ff4d4f", position: "absolute" }}> Required field</span>}
            </Col>
            <Col xl={12} xs={24} sm={12} md={12} >
              <>
                <span className='label-color'>Teammates</span>
                <div style={{
                  height: "110px", border: matesError ? " 1px solid #ff4d4f" : "1px solid #E8ECEE",
                  borderRadius: "5px",
                  padding: "10px 10px 0px 10px",
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
                            onClick={() => TeamMateHandler(item)}
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
                <div style={{ position: "absolute" }}>
                  {isShowMessage && mateModal.length === 0 && <span style={{ color: "#ff4d4f" }}> Required field</span>}
                </div>
              </>

            </Col>
            <Col xl={12} xs={24} sm={12} >

              <>
                <span className='label-color'>Managers</span>
                <div style={{
                  height: "110px", border: managerError ? " 1px solid #ff4d4f" : "1px solid #E8ECEE",
                  borderRadius: "5px",
                  padding: "10px 10px 0px 10px",
                }}>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: '10px', height: '56px', overflowY: 'auto' }}>
                    {managers.length === 0 && (
                      <span className="fs-14 placeholder-color">Add Teammates here</span>
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
                <div style={{ position: "absolute" }}>
                  {isShowMessage && managers.length === 0 && <span style={{ color: "#ff4d4f" }}>Required field </span>}
                </div>
              </>
            </Col>
            <Col xl={12} xs={24} sm={12}>

              <>
                <span className='label-color'>Projects</span>
                <div style={{
                  height: "110px", border: projectError ? " 1px solid #ff4d4f" : "1px solid #E8ECEE",
                  borderRadius: "5px",
                  padding: "10px 10px 0px 10px",
                }}>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: '10px', height: '56px', overflowY: 'auto' }}>
                    {projects.length === 0 && (
                      <span className="fs-14 placeholder-color">Add Projects here</span>
                    )}
                    {projects.map((item: any) => (
                      <p className="m-0" key={uuidv4()}>
                        <span
                          style={{
                            backgroundColor: "#F5F5F5",
                            // color: '#4E6073',
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
                  <AddProjects project={projects} setProjects={setProjects} />
                </div>
                <div style={{ position: "absolute" }}>
                  {isShowMessage && projects.length === 0 && <span style={{ color: "#ff4d4f" }}> Required field </span>}
                </div>
              </>

            </Col>
            <Col span={24}>
              <div className='d-flex justify-end'>
                <Space>
                  <Button className='btn-cancel' onClick={onCancelHandler}>
                    Cancel
                  </Button>
                  <Button className='btn-secondary' htmlType='submit' >
                    Save
                  </Button>
                </Space>

              </div>
            </Col>
          </Row>
        </Form>

      </Modal>

    </div>
  )
}

export default EditModal