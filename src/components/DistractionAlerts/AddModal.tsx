import { useState } from "react";
import { Col, Form, Modal, Row, Select, Input, Radio, Tabs, Button } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import type { RadioChangeEvent, TabsProps } from "antd";
import UsersTab from "./UsersTab";
import TeamsTabs from "./TeamsTabs";
import AppSnackbar from "../../utils/snackbar";
function AddModal(props: any) {
  const { addDistraction, setAddDistraction } = props;
  const [radioValue, setRadioValue] = useState(1);
  const [selectedUsers, setSelectedUsers] = useState(false);
  const [form] = Form.useForm();
  const onFinish = () => {
    setAddDistraction({ isToggle: false, id: "" });
    addDistraction.id === "Add" ? AppSnackbar({ type: "success", message: "Record Added Successfully!" }) : AppSnackbar({ type: "success", message: "Record Updated Successfully!" })
    form.resetFields()
  };
  const onRadioChange = (e: RadioChangeEvent) => {
    setRadioValue(e.target.value);
    e.target.value === 2 && setSelectedUsers(true);
  };
  const onTabChange = (key: string) => {
    console.log(key);
  };
  const tabItems: TabsProps["items"] = [
    {
      key: "1",
      label: `Users`,
      children: <UsersTab setSelectedUsers={setSelectedUsers} setAddDistraction={setAddDistraction} />,
    },
    {
      key: "2",
      label: `Teams`,
      children: <TeamsTabs setSelectedUsers={setSelectedUsers} setAddDistraction={setAddDistraction} />,
    },
  ];
  return (
    <Modal
      width={862}
      className='modal-theme'
      wrapClassName="add-exception-modal-classes-distraction-alerts"
      title={
        !selectedUsers ? (
          <span className="fs-24 fw-600" style={{ paddingBottom: "24px" }}>{addDistraction.id} Distraction Alert</span>) : (
          <span className="fs-24 d-flex align-items-center">
            <ArrowLeftOutlined
              onClick={() => { setSelectedUsers(false); }}
              style={{ fontSize: "15px", paddingRight: "10px" }} />
            <span className="heading-color fs-24 fw-600">Select Users</span>          </span>)
      }
      open={addDistraction.isToggle}
      footer={false}
      onCancel={() => {
        setAddDistraction({ isToggle: false, id: "" });
        form.resetFields()
      }}
    >      {!selectedUsers && (
      <Form layout="vertical" onFinish={onFinish} form={form}>
        <Row gutter={[16, 8]}>
          <Col xs={24} md={12} style={{ paddingTop: "8px" }}>
            <Form.Item label="Distraction Name" className="input-distraction-alerts" name={["distractionName"]} rules={[{ required: true, message: "Required field" }]}>
              <Input placeholder="Name" style={{ borderRadius: "2px", height: "37px" }} />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col xs={24} md={12}>
            <h4 className="m-0 p-0 title-color fs-20 fw-600" style={{ paddingBottom: "10px" }}>Conditions</h4>
            <Form.Item label="Parameter" name={["condition"]} rules={[{ required: true, message: "Required field" }]}  >
              <Select
                placeholder="Start time"
                className={addDistraction.id === "Update" ? "select-input-theme select-parameter" : "select-input-theme select-parameter-add"}
                popupClassName="select-theme"
              >                  <Select.Option value="StartTime">Start Time</Select.Option>
                <Select.Option value="WorkSchedule">Did not follow Work Schedule</Select.Option>
                <Select.Option value="Productivity">Productivity</Select.Option>
                <Select.Option value="Idle Time ">Idle Time </Select.Option>
                <Select.Option value="BlockedServices">Accessed Blocked Services</Select.Option>
                <Select.Option value="TimeTracked">Time Tracked</Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 8]} className="operator">
          <Col xs={24} md={12} className="operator-input">
            <Form.Item label="Operator" name="laterThan" rules={[{ required: true, message: "Required field" }]}>
              <Select
                placeholder="Later than"
                //  style={{paddingTop: "6px"}}
                className="select-input-theme operator-select select-parameter-add"
                popupClassName="select-theme ">
                <Select.Option value="laterThan">Later Than</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} md={12} className="operator-input">
            <Form.Item label="Time" className="input-distraction-alerts" name="time" rules={[{ required: true, message: "Required field" }]} >
              <Input min={0} type="Number" placeholder="08:10 AM" style={{ borderRadius: "2px", height: "37px" }} />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item label="Triggers in a Week" className="input-distraction-alerts" name="triggers" rules={[{ required: true, message: "Required field" }]} style={{ paddingTop: "6px" }}>
              <Input min={0} type="Number" placeholder="3" style={{ borderRadius: "2px", height: "37px" }} />              </Form.Item>
          </Col>            <Col xs={24} md={24}>              <h4 className="m-0 p-0 title-color fs-20 fw-600">Email Body</h4>
            <Form.Item name="textArea" rules={[{ required: true, message: "Required field" }]}>
              <Input.TextArea style={{ paddingTop: "10px" }} className="my-textarea-class" showCount maxLength={100} placeholder="The Orcalo Ltd Distraction Alert report is attached. Please download, Thankyou." />              </Form.Item>              <h4 className="p-0 m-0 title-color fs-20 fw-600" style={{ paddingBottom: "10px" }}>Select Users</h4>              <Form.Item name="selectUser" >                <Radio.Group onChange={onRadioChange} value={radioValue} style={{ display: "flex", flexDirection: "column" }}>                  <Radio className="custom-radio-btn" value={1}>All Users</Radio>                  <Radio className="custom-radio-btn" value={2} style={{ paddingTop: "6px" }}>Select Users</Radio>                </Radio.Group>              </Form.Item>            </Col>            <Col xs={24} md={24}>              <div
                style={{
                  display: "flex",
                  justifyContent: "end",
                  marginBottom: "0px",
                }}
              >                <Button
                className="cancel-btn fs-16 fw-500 button-distraction"
                onClick={() => {
                  {
                    setAddDistraction({ isToggle: false, id: "" });
                    form.resetFields()
                  }
                }}
              >                  Cancel
                </Button>                <Button type="primary" className="button-distraction" htmlType="submit" style={{ marginLeft: "10px", backgroundColor: "#E76F51" }}>                  {addDistraction.id === "Add" ? <span className="fs-16 fw-500" style={{ color: " #FFFFFF" }}>Add</span> : <span className="fs-16 fw-500" style={{ color: " #FFFFFF" }}>Update</span>}
                </Button>              </div>            </Col>          </Row>        </Form>)}
      {selectedUsers && <Tabs defaultActiveKey="1" className="wrapper-tabs" style={{ marginTop: "10px" }} items={tabItems} onChange={onTabChange} />}
    </Modal>);
}
export default AddModal;