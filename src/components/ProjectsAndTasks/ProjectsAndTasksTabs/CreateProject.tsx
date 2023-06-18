import { useState } from "react";
import {
  Form,
  Input,
  Modal,
  DatePicker,
  DatePickerProps,
  Button,
  Pagination,
  Checkbox, Col, Row
} from "antd";
import crossIcon from "../../../assets/icons/settings/projectandtasks/cross.svg";
import teamsIcon from "../../../assets/icons/settings/projectandtasks/teamsIcon.svg"
import { teamsCheckBoxesData } from "../../../mock/settings/ProjectAndTaskCheckBoxes";
import searchIcon from "../../../assets/icons/search-icon.svg";
import "./CreateProject.scss";
import { ArrowLeftOutlined } from "@ant-design/icons";


const layout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};

const validateMessages = {
  required: "Required field",
};

const config = { rules: [{ type: "object" as const, required: true, message: "Required field" },], };



// date function
const onDateChange: DatePickerProps["onChange"] = (date, dateString) => {
  console.log(date, dateString);
};

export const CreateProject = ({ createProjectTabs, setCreateProjectTabs, setIsCreateModalOpen }: any) => {
  const { role }: any = JSON.parse(localStorage.getItem("UserData") || "{}");
  // state start here
  const [isModalOpen, setIsModalOpen] = useState(false);

  // modal functionality
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [menuValue, setMenuValue] = useState([]);
  const HandleCheckBoxValue = (list: any) => {
    setMenuValue(list);
  };

  // cross functionality start here
  const crossHandler = (item: any) => {
    const filtered = menuValue.filter((name) => {
      return name !== item;
    });
    setMenuValue(filtered);
  };

  const onFinish = (values: any) => {
    console.log(values);
    if (values != null) {
      setCreateProjectTabs("members");
    }
  };
  return (
    <div className="wrap-create-project">
      {(createProjectTabs === "project" || createProjectTabs === "" || createProjectTabs === null) && (
        <Form
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          style={{ maxWidth: 600 }}
          validateMessages={validateMessages}
        >
          <Form.Item
            className="fs-12 fw-500"
            name={["projectName"]}
            label="Project Name"
            rules={[{ required: true }]}
          >
            <Input style={{ height: "39px" }} placeholder="Enter Project Name" />
          </Form.Item>

          <Form.Item
            className="fs-12 fw-500"
            name={["dueDate"]}
            label="Due Date"
            {...config}
          >
            {/* <Input style={{height:"39px"}}/> */}
            <DatePicker
              style={{ height: "39px" }}
              onChange={onDateChange}
              className="w-100"
            />
          </Form.Item>
          <Form.Item>
            <div className="wrap-button" style={{ display: "flex", justifyContent: "space-between" }}>
              <Button
                onClick={() => setIsCreateModalOpen()}
                type="primary"
                htmlType="submit"
                className="fs-16 fw-500 line-height-24 cancel-btn"
              >
                Cancel
              </Button>
              <div className="wrap-btns">
                <Button
                  onClick={() => setIsCreateModalOpen()}
                  type="primary"
                  htmlType="submit"
                  className="secondary-color fs-16 fw-500 line-height-24 save-close-btn"
                >
                  Save & close
                </Button>
                <Button
                  className="fs-16 fw-500 line-height-24"
                  type="primary"
                  htmlType="submit"
                >
                  Next
                </Button>
              </div>
            </div>
          </Form.Item>
        </Form>
      )}

      {createProjectTabs === "members" && (
        <div className="create-project-members">
          <label className="d-flex fs-12 fw-500 label-color" style={{ marginBottom: "8px" }}>Teams
            <img src={teamsIcon} alt="teamsIcon" className="white-img-theme-class" style={{ marginLeft: "7px" }} />
          </label>
          <div className="wrapper-inner-modal-teams">
            <div className="selected-teams">
              {menuValue.map((item: any, i: any) => (
                <div key={i} className="selected-members">
                  {item}
                  <img
                    src={crossIcon}
                    alt=""
                    style={{ marginLeft: "10px", cursor: "pointer" }}
                    onClick={() => {
                      crossHandler(item);
                    }}
                  />
                </div>
              ))}


              {/* modal */}
              <Modal
                title={
                  <>
                    <ArrowLeftOutlined onClick={handleCancel} style={{ marginRight: "7px" }} /> Add Team
                  </>}
                centered
                open={isModalOpen}
                okText="Add"
                onOk={handleOk}
                onCancel={handleCancel}
                bodyStyle={{ borderRadius: "2px" }}
                className="modal-theme"
              >
                <Input
                  style={{ height: "40px", margin: "20px 0" }}
                  placeholder="Search Team"
                  className="activitySearch"
                  onChange={(e) => console.log(e.target.value)}
                  prefix={<img src={searchIcon} alt="search" />}
                />
                {/* <Checkbox.Group style={{ width: "100%" }} onChange={onChange}> */}
                <Checkbox.Group
                  style={{ marginBottom: "40px" }}
                  value={menuValue}
                  onChange={HandleCheckBoxValue}
                >
                  <Row>
                    {teamsCheckBoxesData.map((item: any) => <Col span={8}>
                      <Checkbox value={item.value} style={{ marginBottom: "10px" }}>{item.label}</Checkbox>
                    </Col>)}
                  </Row>

                </Checkbox.Group>
                <Pagination
                  total={teamsCheckBoxesData.length}
                  style={{ display: "flex", justifyContent: "end" }}
                  showTotal={(total, range) => (
                    <p className="fs-12 m-0" style={{ color: "#8D8D8D", position: "absolute", left: "27px" }}>
                      {range[0]}-{range[1]} of {total}
                    </p>)}
                  defaultCurrent={3}
                  size="small"
                />
              </Modal>
            </div>
            <button className="fs-14 fw-400" onClick={showModal}>
              + Add More Teams
            </button>
          </div>
          {
            <div className="d-flex justify-between" style={{ flexWrap: "wrap" }}>
              <div className="d-flex" style={{ gap: "11px" }}>
                <Button
                  type="primary"
                  style={{
                    backgroundColor: "transparent",
                    // color: "#3B4D60",
                    border: "1px solid gray",
                    marginBottom: "10px"
                  }}
                  onClick={() => setIsCreateModalOpen()}
                >
                  Cancel
                </Button>
              </div>
              <div className="d-flex" style={{ gap: "11px" }}>
                <Button
                  onClick={() => {
                    setCreateProjectTabs("project");
                  }}
                  type="primary"
                  style={{
                    backgroundColor: "transparent", border: "1px solid gray",
                  }}
                >
                  Back
                </Button>
                <Button type="primary" htmlType="submit" onClick={() => setIsCreateModalOpen()}>
                  save
                </Button>
              </div>
            </div>
          }
        </div>
      )}
    </div>
  );
};
