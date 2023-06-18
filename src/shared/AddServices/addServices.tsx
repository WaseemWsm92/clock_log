import { useState } from "react";
import { Button, Modal, Input, Form, Select } from "antd";
import addServices from "../../assets/icons/addServices.svg";
import AddCustomScreen from "../../components/webApps/tagged/AddCustomScreen";
import "./addServices.scss";

function AddServcesModal() {
  // const { addCategory, setAddCategory } = props
  const [addCategory, setAddCategory] = useState<boolean>(false);
  const [errorUsers, setErrorUsers] = useState("");
  const [borderUsers, setBorderUsers] = useState("#E6E6E6");
  const [selectErrorColor, setSelectError] = useState("#ff4d4f");
  const [sendDropdownValue, setSendDropdownValue] = useState(false);
  const [addDistraction, setAddDistraction] = useState<boolean>(false);
  const [form] = Form.useForm();

  //Failed form fields
  const onFinishFailed = (errorInfo: any) => { };
  const handleShowmodal = (e: any) => {
    if (e === 'Custom') {
      console.log('abc', e);
      setAddDistraction(true)
      setSendDropdownValue(e)
    }
  };
  //On Finish used to reset form fields in form
  const onFinish = (values: any) => {
    form.resetFields();
    setAddCategory(false);
  };
  return (
    <>
      <Button
        className="addServicesbtn d-flex align-items-center justify-between fs-16 fw-500"
        onClick={() => {
          setAddCategory(true);
        }}
      >
        <img src={addServices} alt="AddCategory" className="white-img-theme-class" /> <span> Add Services</span>
      </Button>
      <Modal
        title="Add Service"
        open={addCategory}
        onOk={() => {
          setAddCategory(false);
        }}
        onCancel={() => {
          setAddCategory(false);
          form.resetFields();
        }}
        closable={false}
        centered
        wrapClassName="addException-modal-classes modal-theme"
      >
        <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
          <Form.Item name="ServiceTitle" rules={[{ required: true, message: "Required field" }]} className="mb-10">
            <Input placeholder="Service Title" id="ServiceTitle" style={{ marginTop: "8px", height: "40px", borderRadius: "1px" }} />
          </Form.Item>

          <Form.Item name="ServiceURL" rules={[{ required: true, message: "Required field " }]} className="mb-10">
            <Input placeholder="Service URL" id="ServiceURL" style={{ marginTop: "8px", height: "40px", borderRadius: "1px" }} />
          </Form.Item>

          <Form.Item name="Category" rules={[{ required: true, message: "Required field" }]} className="mb-10">
            <Select
              placeholder="Select Category"
              className="select-input-theme"
              popupClassName="select-theme"

              options={[
                { value: "Design", label: "Design" },
                { value: "Email", label: "Email" },
                { value: "Social Media", label: "Social Media" },
                { value: "Music", label: "Music" },
              ]}
            />
          </Form.Item>

          <Form.Item name="ProductivityStatus" rules={[{ required: true, message: "Required field" }]} className="mb-10">
            <Select
              placeholder="Select Productivity Status"
              className="select-input-theme"
              popupClassName="select-theme"
              options={[
                { value: "Neutral", label: "Neutral" },
                { value: "Productive", label: "Productive" },
                { value: "Unproductive", label: "Unproductive" },
              ]}
            />
          </Form.Item>

          <Form.Item name="Screencast" rules={[{ required: true, message: "Required field" }]} className="mb-10">
            <Select onChange={(value) => { handleShowmodal(value) }}
              placeholder="No of Screencasts"
              className="select-input-theme"
              popupClassName="select-theme"
              options={[
                { value: "3 Min - 1 Screenshot", label: "3 Min - 1 Screenshot" },
                { value: "5 Min - 2 Screenshot", label: "5 Min - 2 Screenshot" },
                { value: "10 Min - 3 Screenshot", label: "10 Min - 3 Screenshot" },
                { value: "15 Min - 4 Screenshot", label: "15 Min - 4 Screenshot" },
                { value: "20 Min - 5 Screenshot", label: "20 Min - 5 Screenshot" },
                { value: "Custom", label: "Custom" },
              ]}
            />
          </Form.Item>

          <Form.Item style={{ textAlign: "end" }}>
            <Button
              style={{ marginRight: "15px", marginTop: "10px" }}
              onClick={() => {
                setAddCategory(false); form.resetFields();
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
      {addDistraction && <AddCustomScreen addDistraction={addDistraction} setAddDistraction={setAddDistraction} sendDropdownValue={sendDropdownValue} setSendDropdownValue="" />}
    </>
  );
}

export default AddServcesModal;
