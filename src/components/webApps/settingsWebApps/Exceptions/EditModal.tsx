import { useCallback, useMemo, useState } from "react";
import {
  Button,
  Collapse,
  Modal,
  Tag,
  Input,
  Form,
  Tabs,
  Checkbox,
  Select,
} from "antd";
import { v4 as uuidv4 } from "uuid";
// Icons / Images
import { SearchOutlined, DownOutlined, UpOutlined } from "@ant-design/icons";
import "../../../../sass/common.scss";
const { TabPane } = Tabs;

function EditModal(props: any) {
  const { editCategory, setEditCategory } = props;
  const [errorUsers, setErrorUsers] = useState("");
  const [borderUsers, setBorderUsers] = useState("#E6E6E6");
  const [selectErrorColor, setSelectError] = useState("#ff4d4f");
  const [selectedValues, setSelectedValues] = useState<any>([]);
  const [selectedServicesValues, setSelectedServicesValues] = useState<any>([]);
  const [searchText, setSearchText] = useState("");
  const [activeTab, setActiveTab] = useState("1");
  const [activeServiceTab, setActiveServiceTab] = useState("1");
  const [childAccordianActive, setChildAccordianActive] = useState<
    string[] | string | number | undefined
  >();
  const [selectedOption, setSelectedOption] = useState(
    "Select Productivity Status"
  );
  const [form] = Form.useForm();
  const { Panel } = Collapse;

  const options = [
    { label: "Basit", value: "Basit" },
    { label: "Ali", value: "Ali" },
    { label: "Nouman", value: "Nouman" },
    { label: "Zahir", value: "Zahir" },
  ];

  const teamoptions = [
    { label: "Clock Log", value: "ClockLog" },
    { label: "Buzz HR", value: "BuzzHR" },
    { label: "0 code", value: "0code" },
    { label: "Foster App", value: "FosterApp" },
    { label: "Ppcn", value: "Ppcn" },
  ];

  const service = [
    { label: "Service 1", value: "Service 1" },
    { label: "Service 2", value: "Service 2" },
    { label: "Service 3", value: "Service 3" },
    { label: "Service 4", value: "Service 4" },
  ];

  const category = [
    { label: "Category 1", value: "Category 1" },
    { label: "Category 2", value: "Category 2" },
    { label: "Category 3", value: "Category 3" },
    { label: "Category 4", value: "Category 4" },
  ];

  const ProductivityStatus = [
    {
      value: "Neutral",
      label: "Neutral",
    },
    {
      value: "Productive",
      label: "Productive",
    },
    {
      value: "Unproductive",
      label: "Unproductive",
    },
  ];
  const handleSelectChange = (value: string) => {
    setSelectedOption(value);
  };
  const handleTabChange = (key: any) => {
    setActiveTab(key);
  };
  const handleServiceTabChange = (key: any) => {
    setActiveServiceTab(key);
  };
  const handleSetAccordinaActive = (key: string | string[]) => {
    setChildAccordianActive(key);
  };
  const handleTagClose = useCallback(
    (value: any) => {
      setSelectedValues(selectedValues.filter((val: any) => val !== value));
    },
    [selectedValues, setSelectedValues]
  );
  const handleServicesTagClose = useCallback(
    (value: any) => {
      setSelectedServicesValues(
        selectedServicesValues.filter((val: any) => val !== value)
      );
    },
    [selectedServicesValues, setSelectedServicesValues]
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
  //check and unchecked checkboxes
  const handleOptionSelectService = (value: any, option: any) => {
    const newSelectedValues = [...selectedServicesValues];
    if (newSelectedValues.includes(value)) {
      const index = newSelectedValues.indexOf(value);
      newSelectedValues.splice(index, 1);
    } else {
      newSelectedValues.push(value);
    }
    setSelectedServicesValues(newSelectedValues);
  };
  //Teams Selected Values
  const selectOptionsTeams = useMemo(
    () =>
      teamoptions.filter((option) =>
        option.label.toLowerCase().includes(searchText.toLowerCase())
      ),
    [teamoptions, searchText]
  );
  //category Selected Values
  const selectCategory = useMemo(
    () =>
      category.filter((option) =>
        option.label.toLowerCase().includes(searchText.toLowerCase())
      ),
    [category, searchText]
  );
  //handle  Search value
  const handleSearchTextChange = useCallback((event: any) => {
    setSearchText(event.target.value);
  }, []);
  //Users Selected Values
  const selectOptions = useMemo(
    () =>
      options.filter((option) =>
        option.label.toLowerCase().includes(searchText.toLowerCase())
      ),
    [options, searchText]
  );
  //Users Selected Values
  const selectService = useMemo(
    () =>
      service.filter((option) =>
        option.label.toLowerCase().includes(searchText.toLowerCase())
      ),
    [service, searchText]
  );
  //Failed form fields
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  //On Finish used to reset form fields in form
  const onFinish = (values: any) => {
    form.resetFields();
    setEditCategory(false);
  };
  return (
    <Modal
      title="Edit Exception"
      open={editCategory}
      onOk={() => {
        setEditCategory(false);
      }}
      onCancel={() => {
        setEditCategory(false);
      }}
      closable={false}
      centered
      className="modal-theme"
      wrapClassName="addException-modal-classes"
    >
      <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Form.Item
          name="domainName"
          rules={[{ required: true, message: "Input Required" }]}
          style={{ marginBottom: "8px" }}
        >
          <Input
            placeholder="youtube.com"
            id="domainName"
            style={{ marginTop: "8px", height: "40px", borderRadius: "1px" }}
          />
        </Form.Item>

        <Collapse
          expandIconPosition="end"
          accordion
          bordered={false}
          onChange={handleSetAccordinaActive}
          style={{ padding: 0 }}
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
                  {selectedValues.length > 0 ? selectedValues : "Select User"}
                </span>
                {childAccordianActive === "1" ? (
                  <UpOutlined className="down-icon ico--active" />
                ) : (
                  <DownOutlined className="down-icon" />
                )}
                {/* </span> */}
              </div>

              // </Form.Item>
            }
            showArrow={false}
            key="1"
            style={{ padding: 0 }}
          >
            <div>
              {
                <Tabs activeKey={activeTab} onChange={handleTabChange} className="wrapper-tabs" style={{ marginTop: "10px" }}>
                  <TabPane tab="Users" key="1">
                    <div>
                      <Input
                        placeholder="Search options"
                        value={searchText}
                        onChange={handleSearchTextChange}
                        style={{ marginBottom: "8px" }}
                        prefix={<SearchOutlined />}
                      />
                      <div style={{ maxHeight: "300px", overflowY: "auto" }}>
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
                  </TabPane>
                  <TabPane tab="Teams" key="2">
                    <div>
                      <Input
                        placeholder="Search options"
                        value={searchText}
                        onChange={handleSearchTextChange}
                        style={{ marginBottom: "8px" }}
                        prefix={<SearchOutlined />}
                      />
                      <div style={{ maxHeight: "300px", overflowY: "auto" }}>
                        {selectOptionsTeams.map((option: any) => (
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
                  </TabPane>
                </Tabs>
              }
            </div>
          </Panel>
        </Collapse>

        <span style={{ color: selectErrorColor, }} className="m-0">
          {selectedValues.length > 0 ? "" : errorUsers}
        </span>

        <Collapse
          expandIconPosition="end"
          accordion
          bordered={false}
          onChange={handleSetAccordinaActive}
          style={{ padding: 0 }}
        >
          <Panel
            header={
              <div
                className="d-flex align-items justify-between"
                style={{
                  padding: "0.625rem 1rem",
                  border: `1px solid ${selectedServicesValues.length > 0 ? "#E6E6E6" : borderUsers
                    }`,
                  borderRadius: "0px",
                  // backgroundColor: "white",
                }}
              >
                <span className="fs-14 fw-400 line-height-20 label-color">
                  {selectedServicesValues.length > 0
                    ? selectedServicesValues
                    : "Select Service"}
                </span>
                {childAccordianActive === "1" ? (
                  <UpOutlined className="down-icon ico--active" />
                ) : (
                  <DownOutlined className="down-icon" />
                )}
                {/* </span> */}
              </div>

              // </Form.Item>
            }
            showArrow={false}
            key="1"
            style={{ padding: 0 }}
          >
            <div>
              {
                <Tabs
                  activeKey={activeServiceTab}
                  onChange={handleServiceTabChange}
                  className="wrapper-tabs"
                  style={{ marginTop: "10px" }}
                >
                  <TabPane tab="Service" key="1">
                    <div>
                      <Input
                        placeholder="Search options"
                        value={searchText}
                        onChange={handleSearchTextChange}
                        style={{ marginBottom: "8px" }}
                        prefix={<SearchOutlined />}
                      />
                      <div style={{ maxHeight: "300px", overflowY: "auto" }}>
                        {selectService.map((option: any) => (
                          <div key={uuidv4()}>
                            <Checkbox
                              value={option.value}
                              checked={selectedServicesValues.includes(
                                option.value
                              )}
                              onChange={() =>
                                handleOptionSelectService(option.value, option)
                              }
                            >
                              {option.label}
                            </Checkbox>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabPane>
                  <TabPane tab="Category" key="2">
                    <div>
                      <Input
                        placeholder="Search options"
                        value={searchText}
                        onChange={handleSearchTextChange}
                        style={{ marginBottom: "8px" }}
                        prefix={<SearchOutlined />}
                      />
                      <div style={{ maxHeight: "300px", overflowY: "auto" }}>
                        {selectCategory.map((option: any) => (
                          <div key={uuidv4()}>
                            <Checkbox
                              value={option.value}
                              checked={selectedServicesValues.includes(
                                option.value
                              )}
                              onChange={() =>
                                handleOptionSelectService(option.value, option)
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

        <span style={{ color: selectErrorColor, }} className="m-0">
          {selectedServicesValues.length > 0 ? "" : errorUsers}
        </span>


        <Form.Item name="status" rules={[{ required: true, message: "Please select Value" }]}
          style={{ marginBottom: "8px", marginTop: "7px" }}
        >          <Select value={selectedOption}
          onChange={handleSelectChange}
          className="ProductivityStatusTagged "
          placeholder={<span className="fs-14 fw-400 line-height-20">Select Productivity Status</span>}          >            {ProductivityStatus.map((option) => (
            <Select.Option key={option.value}
              value={option.value}
              style={{
                backgroundColor:
                  option.value === "Neutral" ? "#EBEAEA" : option.value === "Productive" ? "#D9FFDA" : option.value === "Unproductive" ? "#FFCBCB" : "",
                borderRadius: "25px",
                width: "fit-content",
                marginTop: "10px",
                color:
                  option.value === "Neutral" ? "#4E4B66" : option.value === "Productive" ? "#0FBE16" : option.value === "Unproductive" ? "#FF3737" : "",
              }}
            >                {option.label}
            </Select.Option>))}
          </Select>
        </Form.Item>

        <Form.Item style={{ textAlign: "end" }}>
          <Button
            style={{ marginRight: "15px", marginTop: "10px" }}
            onClick={() => {
              setEditCategory(false);
            }}
          >
            Cancel
          </Button>
          <Button
            type="primary"
            htmlType="submit"
            onClick={() => {
              setErrorUsers("Please Select Value");
              setBorderUsers("#ff4d4f");
              setSelectError("#ff4d4f");
            }}
          >
            Save
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default EditModal;
