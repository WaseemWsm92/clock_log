import { useCallback, useMemo, useState } from "react";
import {
  Button,
  Collapse,
  Modal,
  Avatar,
  Dropdown,
  Input,
  Space,
  Switch,
  Table,
  Form,
  Tabs,
  Checkbox,
  Row,
  Popover,
  Col,
  Tooltip,
} from "antd";
import type { MenuProps } from "antd";
import { ACHIVEMENTTABLEDATA } from "./BlockingMockData";
import { ColumnsType } from "antd/es/table";
import { v4 as uuidv4 } from "uuid";
import plusicon from "../../../assets/icons/Blocking/plusicon.svg";
// Interface
import {
  IACHIVEMENTSTABLEDATA,
  IACHIVEMENTSTABLEUSERNAME,
} from "./BlockingInterface";
// Icons / Images
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { options, teamoptions } from "../../../mock/Blocking";
// import editIcon from "../../../assets/icons/edit-icon.svg";
// import deleteIconselect from "../../../assets/icons/delete-icon.svg";
import DeleteModal from "../../../shared/DeleteModal";
import EllipseIcon from "../../../assets/icons/dots.png";
import editIcon from "../../../assets/icons/editicondropdown.svg";
import deleteIconselect from "../../../assets/icons/deleteIcon.svg";
import searchIcon from "../../../assets/icons/search-icon.svg";


import "./Blocking.scss";
//Common Scss
import "../../../sass/common.scss";
import { image } from "d3";

const { TabPane } = Tabs;

const AchivementsMain = () => {
  const [errorUsers, setErrorUsers] = useState("");
  const [buttonText, setButtonText] = useState("Add");
  const [borderUsers, setBorderUsers] = useState("#E6E6E6");
  const [selectErrorColor, setSelectError] = useState("#ff4d4f");
  const [selectedValues, setSelectedValues] = useState<any>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isShowExceptionModal, setIsShowExceptionModal] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [activeTab, setActiveTab] = useState("1");
  const [childAccordianActive, setChildAccordianActive] = useState<
    string[] | string | number | undefined
  >();
  const [form] = Form.useForm();

  const { Panel } = Collapse;

  //Active Tab
  const handleTabChange = (key: any) => {
    setActiveTab(key);
  };

  const handleSetAccordinaActive = (key: string | string[]) => {
    setChildAccordianActive(key);
  };
  //handle  Search value
  const handleSearchTextChange = useCallback((event: any) => {
    setSearchText(event.target.value);
  }, []);
  //On Finish used to reset form fields in form
  const onFinish = (values: any) => {
    form.resetFields();
    setIsShowExceptionModal(false);
  };
  //Failed form fields
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  const buttonWidth = 200;
  //Users Selected Values
  const selectOptions = useMemo(
    () =>
      options.filter((option) =>
        option.label.toLowerCase().includes(searchText.toLowerCase())
      ),
    [options, searchText]
  );
  //Teams Selected Values
  const selectOptionsTeams = useMemo(
    () =>
      teamoptions.filter((option) =>
        option.label.toLowerCase().includes(searchText.toLowerCase())
      ),
    [teamoptions, searchText]
  );
  //check and unchecked checkboxes
  const handleOptionSelect = (value: any, option: any) => {
    const newSelectedValues = [...selectedValues];
    if (newSelectedValues.includes(value)) {
      const index = newSelectedValues.indexOf(value);
      newSelectedValues.splice(index, 1);
    } else {
      newSelectedValues.push(value);
    }
    setSelectedValues(newSelectedValues);
  };

  //Open and close modal
  const showModal = () => {
    setIsModalOpen(true);
  };
  //Cancle Modal
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  //columns Fields In Table
  const items: MenuProps["items"] = [
    {
      label: (
        <Space
          onClick={() => {
            setIsShowExceptionModal(true);
            setButtonText("Update");
            form.resetFields();
            setSelectedValues([]);
            setBorderUsers("#E6E6E6");
            setSelectError("");
            setErrorUsers("");
          }}
        >
          <img src={editIcon} alt="edit" className="d-flex align-center" height={18} width={16} />
          <span className="m-0">Edit</span>
        </Space>
      ),
      key: "1",
    },
    {
      label: (
        <Space onClick={showModal}  >
          <img src={deleteIconselect} className="d-flex align-center" alt="delete" height={18} width={16} />
          <span>Delete</span>
        </Space>
      ),
      key: "2",
    },
  ];

  const ACHIVEMENTTABLECOLUMNS: ColumnsType<IACHIVEMENTSTABLEDATA> = [
    {
      title: "User Name/Team",
      dataIndex: "User Name/Team",
      key: "UserName",
      render: (_, { userName, team }: any) => (
        <span className="fs-12 fw-400 line-height-18 title-color">
          <Popover
            showArrow={false}
            className=""
            trigger="hover"
            placement="bottomLeft"
            content={
              <>
                {" "}
                {team && (
                  <h4
                    className="title-color"
                    style={{ margin: "0 0 0.75rem 0" }}
                  >
                    {team}
                  </h4>
                )}
                <Row
                  gutter={[10, 10]}
                  className="Blocking-user-exception-table-popover"
                >
                  {userName.map((data: IACHIVEMENTSTABLEUSERNAME) => {
                    return (
                      <div key={uuidv4()}>
                        <Col xs={24} sm={6} md={8}>
                          <span>{data?.name}</span>
                        </Col>
                      </div>
                    );
                  })}
                </Row>
              </>
            }
          >
            {!team ? (
              <div>
                <Avatar.Group
                  maxCount={3}
                  className="cursor-pointer"
                  maxPopoverTrigger="hover"
                  size="large"
                  maxStyle={{
                    color: "#f56a00",
                    backgroundColor: "#fde3cf",
                    cursor: "pointer",
                  }}
                >
                  <a href="https://ant.design">
                    <Avatar style={{ backgroundColor: "#f56a00" }}>K</Avatar>
                  </a>
                  {userName.map((data: IACHIVEMENTSTABLEUSERNAME) => {
                    return (
                      <Avatar
                        key={uuidv4()}
                        style={{ backgroundColor: "#f56a00" }}
                        icon={<img src={data.image} alt="user" />}
                      ></Avatar>
                    );
                  })}
                </Avatar.Group>
              </div>
            ) : (
              <Avatar size="large">{team}</Avatar>
            )}
          </Popover>
        </span>
      ),
    },

    {
      title: "Domain Name",
      dataIndex: "domainName",
      key: "domainName",

      render: (domainName: any) => (
        <span className="fs-16 fw-400 line-height-24 title-color">
          {domainName}
        </span>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: any, record: any, index: any) => (
        <div>
          <Tooltip
            placement="right"
            color="#FCFCFD"
            key="#FCFCFD"
            overlayClassName="my-tooltip-class-Blocking fs-14"
            title={index !== 0 ? "Blocking:Enable" : "Blocking Disable"}
          >
            <Switch rootClassName="theme-checkbox" style={{ color: "#E76F51" }} defaultChecked={index} />
          </Tooltip>
        </div>
      ),
    },
    {
      title: "Action",
      key: "Action",
      render: () => (

        <Dropdown
          menu={{ items }}
          // className="border-radius-4"
          placement="bottomLeft"
          trigger={["click"]}
          overlayClassName="actionDropDownBlocking my-dropdown-blocking"
          overlayStyle={{ borderRadius: '4px' }}
        >
          <Space>
            <div className="border-color cursor-pointer">
              <img src={EllipseIcon} alt="ElpiseIcon" />
            </div>
          </Space>
        </Dropdown>

      ),
    },
  ];

  //main
  return (
    <div className="blocking-main">
      <>
        <Row>
          <Col lg={12} md={12} sm={24} xs={24}>
            <Button
              type="text"
              icon={<img src={plusicon} alt="exceptional" />}
              className="fs-16 fw-500 line-height-24 d-flex align-center button-light-bg-color cursor-pointer btn-theme-color"
              style={{
                padding: "0.5rem 1rem",
                gap: "0.583rem",
                margin: "15px",
              }}
              onClick={() => {
                setIsShowExceptionModal(true);
                setButtonText("Add");
              }}
            >
              Add Domain
            </Button>
          </Col>
          <Col lg={12} md={12} sm={24} xs={24}>
            {" "}
            <div className="searchBar">
              <Input
                placeholder="Search user,domain"
                width="17.7px"
                height="17.67px"
                className="archived-team-input border-radius-4 activitySearch card-bg-color label-color "
                onChange={(e) => console.log(e.target.value)}
                prefix={
                  <img src={searchIcon} alt="search_icon" />
                }
              />
            </div>
          </Col>
        </Row>

        <Table
          dataSource={ACHIVEMENTTABLEDATA || "No Data"}
          className="wrapper-table c-box-shadow ant-table-content"
          style={{ padding: "1rem" }}
          tableLayout="fixed"
          pagination={{ pageSize: 10 }}
          columns={ACHIVEMENTTABLECOLUMNS}
          scroll={{ x: "max-content" }}
        />
        <DeleteModal isModalOpen={isModalOpen} handleCancel={handleCancel} />
        <Modal
          title={
            <span className="fs-16 fw-500 heading-color">
              {buttonText} Domain
            </span>
          }
          okText={buttonText}
          wrapClassName="add-exception-modal-classes-blocking modal-theme"
          closable={false}
          width={443}
          centered
          open={isShowExceptionModal}
          onOk={() => setIsShowExceptionModal(false)}
          onCancel={() => setIsShowExceptionModal(false)}
        >
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item name="domainName" label="Domain Name"
              rules={[{ required: true, message: "Required field" }]}>
              <Input
                placeholder="Domain Name"
                id="domainName"
                style={{
                  marginTop: "8px",
                  height: "40px",
                  borderRadius: "1px",
                }}
              />
            </Form.Item>

            <Collapse
              expandIconPosition="end"
              accordion
              bordered={false}
              onChange={handleSetAccordinaActive}
            >
              <Panel
                header={
                  <div
                    className="d-flex align-items justify-between"
                    style={{
                      padding: "0.625rem 1rem",
                      border: `1px solid ${selectedValues.length > 0 ? "#E6E6E6" : borderUsers
                        }`,
                      borderRadius: "0px",
                      // backgroundColor: "white",
                    }}
                  >
                    <span className="fs-14 fw-400 line-height-20 label-color">
                      {selectedValues.length > 0
                        ? selectedValues.map((item: any, index: number) => (
                          <span key={uuidv4()}>
                            {(index ? ", " : "") + item}
                          </span>
                        ))
                        : "Select User"}
                    </span>
                    {childAccordianActive == "1" ? (
                      <UpOutlined className="down-icon ico--active" />
                    ) : (
                      <DownOutlined className="down-icon" />
                    )}
                  </div>
                }
                showArrow={false}
                key="1"
                style={{ padding: 0 }}
              >
                <div>
                  {
                    <Tabs activeKey={activeTab} onChange={handleTabChange} className="wrapper-tabs" style={{ marginTop: "10px" }}>
                      <TabPane tab="Users" key="1" >
                        <div>
                          <Input
                            placeholder="Search options"
                            value={searchText}
                            onChange={handleSearchTextChange}
                            style={{ marginBottom: "8px" }}
                            prefix={<img src={searchIcon} alt="searchIcon" />}
                          />
                          <div
                            style={{ maxHeight: "300px", overflowY: "auto" }}
                          >
                            {selectOptions.map((option: any) => (
                              <div key={uuidv4()}>
                                <Checkbox
                                  style={{ marginTop: "10px" }}
                                  value={option.value}
                                  checked={selectedValues.includes(
                                    option.value
                                  )}
                                  onChange={() =>
                                    handleOptionSelect(option.value, option)
                                  }
                                >
                                  <span>{option.label}</span>
                                </Checkbox>
                              </div>
                            ))}
                          </div>
                        </div>
                      </TabPane>
                      <TabPane tab="Teams" key="2">
                        <div>
                          <Input
                            placeholder="Search options"
                            value={searchText}
                            onChange={handleSearchTextChange}
                            style={{ marginBottom: "8px" }}
                            prefix={<img src={searchIcon} alt="search_icon" />}
                          />
                          <div
                            style={{ maxHeight: "300px", overflowY: "auto" }}
                          >
                            {selectOptionsTeams.map((option: any) => (
                              <div key={uuidv4()}>
                                <Checkbox
                                  style={{ marginTop: "10px" }}
                                  value={option.value}
                                  checked={selectedValues.includes(
                                    option.value
                                  )}
                                  onChange={() =>
                                    handleOptionSelect(option.value, option)
                                  }
                                >
                                  {option.label}
                                </Checkbox>
                              </div>
                            ))}
                          </div>
                        </div>
                      </TabPane>
                    </Tabs>
                  }
                </div>
              </Panel>
            </Collapse>
            <p style={{ color: selectErrorColor }}>
              {selectedValues.length > 0 ? "" : errorUsers}
            </p>
            <Form.Item className="p-0 m-0">
              <Button
                style={{
                  marginRight: "15px",
                  marginTop: "10px",
                  marginBottom: 0,
                }}
                onClick={() => {
                  setIsShowExceptionModal(false);
                }}
              >
                Cancel
              </Button>
              <Button
                type="primary"
                htmlType="submit"
                onClick={() => {
                  setErrorUsers("Required field");
                  setBorderUsers("#ff4d4f");
                  setSelectError("#ff4d4f");
                }}
              >
                {buttonText}
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </>
    </div>
  );
};

export default AchivementsMain;
