import { useCallback, useMemo, useState } from "react";
import {
  Checkbox,
  DatePicker,
  Dropdown,
  Form,
  Switch,
  Row,
  Col,
  Input,
} from "antd";
import TasksDependencies from "./TasksDependencies";
import Frequency from "./Frequency";
import labelIcon from "../../../../../../assets/icons/settings/projectandtasks/labelIcon.svg";
import { SearchOutlined } from "@ant-design/icons";
import startDate from "../../../../../../assets/icons/settings/projectandtasks/startDate.svg";
import endDate from "../../../../../../assets/icons/settings/projectandtasks/endDate.svg";
import assignee from "../../../../../../assets/icons/settings/projectandtasks/assignee.svg";
import { Select } from "antd";
import { assigneoptions } from "../../../../../../mock/ProjectandTasks";
import { v4 as uuidv4 } from "uuid";
import "./AddTasks.scss";

const layout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

export const AddTasks = () => {
  const [form] = Form.useForm();
  const [isShowFrequency, setIsShowFrequency] = useState(false);
  const handleShowFrequency = () => {
    setIsShowFrequency(!isShowFrequency);
  };
  const [searchText, setSearchText] = useState<string>("");
  const [selectedValues, setSelectedValues] = useState<any>([]);
  const [selectedAssigneValues, setSelectedAssigneValues] = useState<any>([]);

  //handle  Search value
  const handleSearchTextChange = useCallback((event: any) => {
    setSearchText(event.target.value);
  }, []);

  //On Finish used to reset form fields in form
  const onFinish = (values: any) => {
    form.resetFields();
  };
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const selectOptions = useMemo(
    () =>
      assigneoptions.filter((option: any) =>
        option.label.toLowerCase().includes(searchText.toLowerCase())
      ),
    [assigneoptions, searchText]
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

  const handleResponsibelOptionSelect = (value: any, option: any) => {
    const newSelectedValues = [...selectedAssigneValues];
    if (newSelectedValues.includes(value)) {
      const index = newSelectedValues.indexOf(value);
      newSelectedValues.splice(index, 1);
    } else {
      newSelectedValues.push(value);
    }
    setSelectedAssigneValues(newSelectedValues);
  };

  return (
    <div className="wrap-add-tasks-modal">
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col lg={12} md={24} sm={24} xs={24}>
            <div>
              <Form.Item
                name={["taskname", "taskname"]}
                label={
                  <label className="fs-14 fw-400 line-height-21 grey-color">
                    Task Name
                  </label>
                }
              >
                <Input style={{ height: "37px", marginBottom: "40px" }} />
              </Form.Item>
            </div>

            <div>
              <Form.Item
                name={["description", "description"]}
                label={
                  <label className="fs-14 fw-400 line-height-21 grey-color">
                    Description
                  </label>
                }
              >
                <Input.TextArea style={{ marginBottom: "30px" }} />
                <hr />
              </Form.Item>
            </div>

            <div>
              <Form.Item
                name={["user", "name"]}
                label={
                  <label className="fs-14 fw-400 line-height-21 grey-color">
                    Dependencies
                  </label>
                }
              >
                <TasksDependencies />
              </Form.Item>
            </div>
            <div>
              <span style={{ marginRight: "14px" }}>Recurring Task</span>
            </div>
            <Form.Item name="switch" valuePropName="checked">
              <Switch
                checked={isShowFrequency}
                onChange={handleShowFrequency}
              />
            </Form.Item>
            {isShowFrequency && <Frequency />}
          </Col>

          <Col
            className="gutter-row"
            md={24}
            sm={24}
            xs={24}
            lg={12}
            style={{ borderLeft: "1px solid rgba(160, 172, 187, 0.5)" }}
          >
            <div>
              <Form.Item
                name={["labels", "labels"]}
                label={
                  <label className="fs-14 fw-400 line-height-21 grey-color">
                    Labels
                  </label>
                }
              >
                <img
                  src={labelIcon}
                  alt=""
                  style={{
                    position: "absolute",
                    top: "8px",
                    right: "10px",
                    zIndex: "999",
                  }}
                />
                <Select
                  mode="tags"
                  style={{ width: "100%" }}
                  placeholder="Tags"
                  onChange={handleChange}
                  options={assigneoptions}
                />
              </Form.Item>
            </div>

            <div>
              <Form.Item
                name={["assignee", "assignee"]}
                label={
                  <label className="fs-14 fw-400 line-height-21 grey-color">
                    Assignee
                  </label>
                }
              >
                {/* <Input style={{ height: "40px" }} /> */}
                <Dropdown
                  placement="bottomLeft"
                  arrow={false}
                  trigger={["click"]}
                  dropdownRender={(menu) => (
                    <>
                      <div
                        style={{
                          border: "1px solid rgba(160, 172, 187, 0.4)",
                          padding: "0.5rem 1rem",
                          background: "white",
                        }}
                      >
                        <Input
                          placeholder="Search options"
                          value={searchText}
                          onChange={handleSearchTextChange}
                          style={{ marginBottom: "8px" }}
                          prefix={<SearchOutlined />}
                        />
                        <div
                          style={{
                            maxHeight: "300px",
                            overflowY: "auto",
                            padding: "0 1em",
                          }}
                        >
                          {selectOptions.map((option: any) => (
                            <div key={uuidv4()}>
                              <Checkbox
                                value={option.value}
                                checked={selectedValues.includes(option.value)}
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
                    </>
                  )}
                >
                  <div
                    style={{
                      padding: "0.625rem 1rem",
                      borderRadius: "0px",
                      backgroundColor: "white",
                      border: "1px solid rgba(160, 172, 187, 0.4)",
                    }}
                  >
                    {selectedValues.length
                      ? selectedValues.map((item: any) => (
                          <span
                            className="fs-14 fw-400 line-height-20"
                            style={{
                              borderLeft: "2px solid orange",
                              backgroundColor: "#F5F5F5",
                              borderRadius: "16px",
                              padding: "2px 10px",
                              marginRight: 3,
                            }}
                          >
                            {item}
                          </span>
                        ))
                      : "Select assignee"}
                  </div>
                </Dropdown>
                <img
                  src={assignee}
                  alt=""
                  style={{ position: "absolute", top: "11px", right: "11px" }}
                />
              </Form.Item>
            </div>
            <div>
              <Form.Item
                name={["assignee", "assignee"]}
                label={
                  <label className="fs-14 fw-400 line-height-21 grey-color">
                    Responsible
                  </label>
                }
              >
                {/* <Input style={{ height: "40px" }} /> */}
                <Dropdown
                  placement="bottomLeft"
                  arrow={false}
                  trigger={["click"]}
                  dropdownRender={(menu) => (
                    <>
                      <div
                        style={{
                          border: "1px solid rgba(160, 172, 187, 0.4)",
                          padding: "0.5rem 1rem",
                          background: "white",
                        }}
                      >
                        <Input
                          placeholder="Search options"
                          value={searchText}
                          onChange={handleSearchTextChange}
                          style={{ marginBottom: "8px" }}
                          prefix={<SearchOutlined />}
                        />
                        <div
                          style={{
                            maxHeight: "300px",
                            overflowY: "auto",
                            padding: "0 1em",
                          }}
                        >
                          {selectOptions.map((option: any) => (
                            <div key={uuidv4()}>
                              <Checkbox
                                value={option.value}
                                checked={selectedAssigneValues.includes(
                                  option.value
                                )}
                                onChange={() =>
                                  handleResponsibelOptionSelect(
                                    option.value,
                                    option
                                  )
                                }
                              >
                                {option.label}
                              </Checkbox>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                >
                  <div
                    style={{
                      padding: "0.625rem 1rem",
                      borderRadius: "0px",
                      backgroundColor: "white",
                      border: "1px solid rgba(160, 172, 187, 0.4)",
                    }}
                  >
                    {selectedAssigneValues.length
                      ? selectedAssigneValues.map((item: any) => (
                          <span
                            className="fs-14 fw-400 line-height-20"
                            style={{
                              borderLeft: "2px solid orange",
                              backgroundColor: "#F5F5F5",
                              borderRadius: "16px",
                              padding: "2px 10px",
                              marginRight: 3,
                            }}
                          >
                            {item}
                          </span>
                        ))
                      : "Select assignee"}
                  </div>
                </Dropdown>
                <img
                  src={assignee}
                  alt=""
                  style={{ position: "absolute", top: "11px", right: "11px" }}
                />
              </Form.Item>
            </div>

            <div>
              <Form.Item
                name="date-picker"
                label={
                  <label className="fs-14 fw-400 line-height-21 grey-color">
                    Select Start Date
                  </label>
                }
                // {...config}
              >
                <DatePicker
                  style={{
                    height: "40px",
                    width: "100%",
                    position: "relative",
                    paddingLeft: "45px",
                  }}
                />
                <img
                  src={startDate}
                  alt=""
                  style={{ position: "absolute", top: "9px", left: "12px" }}
                />
              </Form.Item>
            </div>

            <div>
              <Form.Item
                name="date-picker"
                label={
                  <label className="fs-14 fw-400 line-height-21 grey-color">
                    Select Due Date
                  </label>
                }
                // {...config}
              >
                <DatePicker
                  style={{
                    height: "40px",
                    width: "100%",
                    position: "relative",
                    paddingLeft: "45px",
                  }}
                />
                <img
                  src={endDate}
                  alt=""
                  style={{ position: "absolute", top: "9px", left: "12px" }}
                />
              </Form.Item>
            </div>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
