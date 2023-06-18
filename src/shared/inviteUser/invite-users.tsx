import { useState } from "react";
import { Button, Modal, Radio, Select, Space, Tooltip } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Col, Row, Form, Input, Switch } from "antd";
import email from "../../assets/icons/email-wth-border.svg";
import { UpOutlined } from "@ant-design/icons";
import { CopyOutlined } from '@ant-design/icons';
import InviteTeam from "../../components/usersManagement/pendingEdit/Team";
import InviteProjects from "../../components/usersManagement/pendingEdit/projects";
import CustomIdleTimeOutModal from "../../components/usersManagement/Modals/CustomIdleTimeOUtModal";
import "../../sass/common.scss";
import "./invite-users.scss";

interface props {
  isShowAddModal: any;
  setIsShowModal?: any;
}
const InviteUser = (props: props) => {

  const [form] = Form.useForm();

  const { isShowAddModal, setIsShowModal } = props;
  const [isShowTimeOutModal, setIsShowTimeOutModal] = useState(false);
  ///////////************************* */
  const [userData, setUserData] = useState<any>({
    role: "",
    department: "",
    designation: "",
    shift: "",
    location: "",
    idleTimeOut: "",
  });

  const userChangeHandler = (value: any, type: string) => {
    switch (type) {
      case "role":
        setUserData({ ...userData, role: value });
        break;
      case "department":
        setUserData({ ...userData, department: value });
        break;
      case "designation":
        setUserData({ ...userData, designation: value });
        break;
      case "shift":
        setUserData({ ...userData, shift: value });
        break;
      case "location":
        setUserData({ ...userData, location: value });
        break;
      case "idleTimeOut":
        setUserData({ ...userData, idleTimeOut: value });
        break;
      default:
        break;
    }
  };
  ///////////************************* */
  const userRole = [
    { label: "Admin", value: "Admin" },
    { label: "Manager", value: "Manager" },
    { label: "Employee", value: "Employe" },
  ];
  const userDepartment = [
    { label: "Design", value: "Design" },
    { label: "Business Analysis", value: "Business Analysis" },
    { label: "Accounts", value: "Accounts" },
  ];
  const userDesignation = [
    { label: "UI Design", value: "UI Design" },
    { label: "Mid BA", value: "Mid BA" },
    { label: "Mid Designer", value: "Mid Designer" },
  ];
  const userShift = [
    { label: "Morning", value: "Morning" },
    { label: "Evening", value: "Evening" },
    { label: "Night", value: "Night" },
  ];
  const userLocation = [
    { label: "Lahore", value: "Lahore" },
    { label: "Islamabad", value: "Islamabad" },
    { label: "Rawalpindi", value: "Rawalpindi" },
  ];
  const userIdleTime = [
    { label: "5 Min", value: "5 Min" },
    { label: "10 Min", value: "10 Min" },
    { label: "15 Min", value: "15 Min" },
    { label: "20 Min", value: "20 Min" },
    { label: "25 Min", value: "25 Min" },
    { label: "30 Min", value: "30 Min" },
  ];

  ///////////************************* */

  const handleChange = (value: any) => {
  };

  const [textToCopy, setTextToCopy] = useState("https://clocklog.com/asujshd/asdsadsad/werretre");
  const [isTextCopied, setisTextCopied] = useState(false)
  const [isToggleLink, setisToggleLink] = useState(false)
  const handleCopyToClipboard = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(textToCopy);
      setisTextCopied(true)
    } else {
      setisTextCopied(false)
    }

  };

  const handleTagsChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const handelCancelForm = () => {
    setIsShowModal(false);
    form.resetFields()
  }


  return (
    <div className="invite-users">
      <Modal
        title={<span className="fs-24 title-color fw-600">Invite User </span>}
        open={isShowAddModal}
        onCancel={() => setIsShowModal(false)}
        footer={null}
        width={1120}
        className="inviteUserModal modal-theme"
        wrapClassName='inviteUserModal modal-theme'
        
      >
        <div>
          <Form layout="vertical" onFinish={() => console.log(userData)}>
            <Row gutter={15}>
              <Col xl={12} xs={24} md={12} lg={12}>
                <Form.Item
                  name="email"
                  rules={[{ required: true, message: "Required field" }]}
                  label="Email"
                >
                  {/* <Input
                    placeholder="Type email here sd as d"
                    // style={{ maxWidth: 520 }}
                    suffix={<img src={email} alt="email" />}
                    type="email"
                    className="users--input-cs-styles"
                  /> */}
                  <div className="wrapper-add-email">
                    <Select
                      mode="tags"
                      style={{ width: '100%' }}
                      placeholder="Type email here"
                      onChange={handleTagsChange}
                      className="users--input-cs-styles select-input-theme  placeholder-color"
                      popupClassName="select-theme"
                      suffixIcon={<img src={email} alt="email" />}
                    />

                    <Tooltip placement="topRight" title="add more email"
                      overlayInnerStyle={{
                        backgroundColor: "#F6E3BD",
                        color: "#E76F51",
                        borderRadius: '4px',
                        fontSize: "12px",
                        boxShadow: 'none',
                      }}
                      // arrowColor="#F6E3BD"
                      arrow={false}
                    >
                      <img className="inner-img-email-fld" src={email} alt="email" />
                    </Tooltip>
                  </div>
                </Form.Item>
              </Col>
              <Col xl={12} xs={24} md={12} lg={12}>
                <Form.Item
                  name="UserRole"
                  label="User Role"
                  rules={[
                    {
                      required: true,
                      message: "Required field",
                    },
                  ]}
                >
                  <div>
                    <Select
                      value={userData?.role ? userData.role : "Select User role"}
                      defaultValue={userData?.role}
                      // style={{ maxWidth: 520, height: 40 }}
                      className="users--input-cs-styles select-input-theme placeholder-color"
                      popupClassName="select-theme"
                      onChange={handleChange}
                      options={[
                        {
                          label: (
                            <Radio.Group
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: '16px'
                              }}
                              options={userRole}
                              value={userData?.role}
                              onChange={(val) =>
                                userChangeHandler(val.target.value, "role")
                              }
                            />
                          ),
                          key: "0",
                        },
                      ]}
                    />
                  </div>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={15}>
              <Col xl={12} xs={24} md={12} lg={12}>
                <Form.Item
                  label="Department"
                  name="department"
                  rules={[
                    {
                      required: false,
                      message: "Required field",
                    },
                  ]}
                >
                  <>
                    <Select
                      value={
                        userData?.department
                          ? userData.department
                          : "Select Department"
                      }
                      // style={{ maxWidth: 520 }}
                      className="users--input-cs-styles select-input-theme placeholder-color"
                      popupClassName="select-theme"
                      onChange={handleChange}
                      options={[
                        {
                          label: (
                            <Radio.Group
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: '16px'
                              }}
                              options={userDepartment}
                              value={userData?.department}
                              onChange={(val) =>
                                userChangeHandler(
                                  val.target.value,
                                  "department"
                                )
                              }
                            />
                          ),
                        },
                      ]}
                    />
                  </>
                </Form.Item>
              </Col>
              <Col xl={12} xs={24} md={12} lg={12}>
                <Form.Item
                  label="Designation"
                  name="designation"
                  rules={[
                    {
                      required: false,
                      message: "Required field",
                    },
                  ]}
                >
                  <>
                    <Select
                      value={
                        userData.designation
                          ? userData.designation
                          : "Select Designation"
                      }
                      // style={{ maxWidth: 520 }}
                      className="users--input-cs-styles select-input-theme"
                      popupClassName="select-theme"
                      onChange={handleChange}
                      options={[
                        {
                          label: (
                            <Radio.Group
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: '16px'
                              }}
                              options={userDesignation}
                              value={userData?.designation}
                              onChange={(val) =>
                                userChangeHandler(
                                  val.target.value,
                                  "designation"
                                )
                              }
                            />
                          ),
                        },
                      ]}
                    />
                  </>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={15}>
              <Col xl={12} xs={24} md={12} lg={12}>
                <Form.Item
                  label="Shift"
                  name="shift"
                  rules={[
                    { required: false, message: "Required field" },
                  ]}
                >
                  <>
                    <Select
                      value={userData.shift ? userData.shift : "Select Shift"}
                      // style={{ maxWidth: 520 }}
                      className="users--input-cs-styles select-input-theme"
                      popupClassName="select-theme"
                      onChange={handleChange}
                      options={[
                        {
                          label: (
                            <Radio.Group
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: '16px'
                              }}
                              options={userShift}
                              value={userData?.shift}
                              onChange={(val) =>
                                userChangeHandler(val.target.value, "shift")
                              }
                            />
                          ),
                        },
                      ]}
                    />
                  </>
                </Form.Item>
              </Col>
              <Col xl={12} xs={24} md={12} lg={12}>
                <Form.Item
                  label="Location"
                  name="location"
                  rules={[
                    { required: false, message: "Required field" },
                  ]}
                >
                  <>
                    <Select
                      value={userData.location ? userData.location : "Location"}
                      // style={{ maxWidth: 520 }}
                      className="users--input-cs-styles select-input-theme"
                      onChange={handleChange}
                      options={[
                        {
                          label: (
                            <Radio.Group
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: '16px'
                              }}
                              options={userLocation}
                              value={userData?.location}
                              onChange={(val) =>
                                userChangeHandler(val.target.value, "location")
                              }
                            />
                          ),
                        },
                      ]}
                    />
                  </>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={15}>
              <Col xl={12} xs={24} md={12} lg={12}>
                <Form.Item
                  name="MemberOf"
                  label="Member of"
                  rules={[
                    {
                      required: true,
                      message: "Required field",
                    },
                  ]}
                >

                  <div className="project">
                    <div
                      className="invite-user-modal-member-and-project "
                      // style={{
                      //   border: "1px solid #d9d9d9",
                      //   minHeight: "120px",
                      //   marginBlock: "10px",
                      //   position: "relative",
                      // }}
                    >
                      <InviteTeam />
                    </div>
                    <Space></Space>
                  </div>

                </Form.Item>
              </Col>
              <Col xl={12} xs={24} md={12} lg={12}>
                <Form.Item
                  name="Project"
                  label="Project"
                  rules={[
                    {
                      required: true,
                      message: "Required field",
                    },
                  ]}
                >
                  <div className="project">
                    {/* <label>Project</label> */}
                    <div
                      className="invite-user-modal-member-and-project"
                      // style={{
                      //   border: "1px solid #d9d9d9",
                      //   minHeight: "120px",
                      //   marginBlock: "10px",
                      //   position: "relative",
                      // }}
                    >
                      <InviteProjects />
                    </div>
                    <Space></Space>
                  </div>
                </Form.Item>
              </Col>
            </Row>

            {/* reb */}
            {userData?.role === 'Manager' &&
              <Row gutter={15}>
                <Col xl={12} xs={24} md={12} lg={12}>
                  <div className="project">
                    <label className="title-color">Project & Task</label>
                    <div
                      className="border-radius-6"
                      style={{
                        border: "1px solid #d9d9d9",
                        minHeight: "120px",
                        marginBlock: "10px",
                        position: "relative",
                        padding: '5px 16px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center'
                      }}
                    >
                      <Space style={{ display: 'flex', marginBottom: '12px' }}>
                        <Switch
                          style={{ maxWidth: 37.82, height: 21.2 }}
                        />
                        <label className="title-color">Create Project</label>
                      </Space>
                      <Space style={{ display: 'flex', marginBottom: '12px' }}>
                        <Switch
                          style={{ maxWidth: 37.82, height: 21.2 }}
                        />
                        <label className="title-color">Add Member  / Modify Member</label>
                      </Space>
                      <Space style={{ display: 'flex' }}>
                        <Switch
                          style={{ maxWidth: 37.82, height: 21.2 }}
                        />
                        <label className="title-color">Add Team / Modify Team</label>
                      </Space>
                    </div>
                  </div>
                </Col>
                <Col xl={12} xs={24} md={12} lg={12}>
                  <div className="project">
                    <label className="title-color">Manage Team</label>
                    <div
                      className="border-radius-6"
                      style={{
                        border: "1px solid #d9d9d9",
                        minHeight: "120px",
                        marginBlock: "10px",
                        position: "relative",
                        padding: '5px 16px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center'
                      }}
                    >
                      <Space style={{ display: 'flex', marginBottom: '12px' }}>
                        <Switch

                          style={{ maxWidth: 37.82, height: 21.2 }}
                        />
                        <label className="title-color">Create Team</label>
                      </Space>
                      <Space style={{ display: 'flex', marginBottom: '12px' }}>
                        <Switch

                          style={{ maxWidth: 37.82, height: 21.2 }}
                        />
                        <label className="title-color">Modify Member</label>
                      </Space>
                      <Space style={{ display: 'flex' }}>
                        <Switch

                          style={{ maxWidth: 37.82, height: 21.2 }}
                        />
                        <label className="title-color">Modify Project</label>
                      </Space>
                    </div>
                  </div>
                </Col>
              </Row>
            }
            {/* reb */}

            <Row gutter={15}>
              <Col xl={12} xs={24} md={12} lg={12}>
                <Form.Item
                  label="Idle Timeout"
                  name="idleTimeOut"
                  rules={[
                    {
                      required: !userData.idleTimeOut,
                      message: "Required field",
                    },
                  ]}
                >
                  <div>
                    <Select
                      value={
                        userData.idleTimeOut
                          ? userData.idleTimeOut
                          : "Select Idle Timeout"
                      }
                      // style={{ maxWidth: 520 }}
                      className="users--input-cs-styles select-theme" 
                      popupClassName="select-theme"
                      onChange={handleChange}
                      options={[
                        {
                          label: (
                            <>
                              <Radio.Group
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  gap: '16px',
                                  marginBottom: "10px"
                                }}
                                options={userIdleTime}
                                value={userData?.idleTimeOut}
                                onChange={(val) =>
                                  userChangeHandler(
                                    val.target.value,
                                    "idleTimeOut"
                                  )
                                }
                              />
                              <span
                                style={{ marginLeft: "22px", marginTop: "16px" }}
                                onClick={() => setIsShowTimeOutModal(true)}
                              >
                                Custom
                              </span>
                            </>
                          ),
                        },
                      ]}
                    />
                  </div>
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={15}>
              <Col xl={12} xs={24} md={12} lg={12}>
                <Space>
                  <Switch
                    defaultChecked
                    style={{ maxWidth: 37.82, height: 21.2 }}
                  />
                  <p className="title-color">Edit Time</p>
                </Space>
              </Col>
              <Col xl={12} xs={24} md={12} lg={12}>
                <Space>
                  <Switch defaultChecked />
                  <p className="title-color">Blur Screencast</p>
                </Space>
              </Col>
            </Row>
            <Row gutter={15} style={{ paddingBottom: "1px" }}>
              <Col xl={12} xs={24} md={12} lg={12}>
                <Space>
                  <Switch defaultChecked />
                  <p className="title-color">Show in Reports</p>
                </Space>
              </Col>
              <Col xl={12} xs={24} md={12} lg={12}>
                <Space>
                  <Switch defaultChecked />
                  <p className="title-color">Delete Screencast</p>
                </Space>
              </Col>
            </Row>
            <Row gutter={15} style={{ paddingBottom: "18px" }}>
              <Col xl={24} xs={24} md={12} lg={12}>
                <Space>
                  <Switch defaultChecked />
                  <p className="title-color">Allow Mobile App</p>
                </Space>
              </Col>
            </Row>
            <Row gutter={15}>
              <Col xl={24} md={24} lg={24}>
                <Space wrap style={{ paddingBottom: "14px" }}>
                  <Button
                    onClick={handelCancelForm}
                    className="btn-cancel"
                    htmlType="button"
                  >
                    Cancel
                  </Button>
                  <Button htmlType="submit" className="btn-secondary">
                    Send
                  </Button>
                </Space>
              </Col>
            </Row>
            <Row gutter={15}>
              <Col xl={12} xs={24} md={12} lg={12} style={{ display: 'flex', flexDirection: "column" }}>
                <Space onClick={() => setisToggleLink(!isToggleLink)} className='cursor-pointer title-color'>

                  {!isToggleLink ? <DownOutlined /> : <UpOutlined />}
                  <p className="title-color">Invite through link</p>
                </Space>
                {isToggleLink && <div style={{ display: 'flex', flexDirection: "column", justifyContent: 'start' }}>
                  <p style={{ margin: "8px 0px" }}>Invite user through sending them the link mentioned below</p>
                  <label className="fw-500 title-color">Link</label>
                  <Input value={textToCopy} onClick={handleCopyToClipboard} style={{ height: '36px', borderColor: "#e7e7e9" }} readOnly placeholder="large size" suffix={<CopyOutlined />} />
                  {isTextCopied && <span className="secondary-color title-color">Link Copied</span>}
                </div>}
              </Col>
            </Row>
          </Form>
        </div>
      </Modal>
      {isShowTimeOutModal && (
        <CustomIdleTimeOutModal
          isShowTimeOutModal={isShowTimeOutModal}
          setIsShowTimeOutModal={setIsShowTimeOutModal}
        />
      )}
    </div>
  );
};

export default InviteUser;
