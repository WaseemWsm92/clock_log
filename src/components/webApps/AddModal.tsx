import { Modal, Input, Form, Select } from 'antd';

function AddModal(props: any) {
  const { addCategory, setAddCategory } = props;
  const [form] = Form.useForm();

  //Failed form fields
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  //On Finish used to reset form fields in form
  const onFinish = (values: any) => {
    form.resetFields();
    setAddCategory(false);
  };
  return (
    <Modal
      title="Add Service"
      open={addCategory}
      okText="Save"
      onOk={() => {
        setAddCategory(false);
      }}
      onCancel={() => {
        setAddCategory(false);
      }}
      closable={false}
      centered
      wrapClassName="addException-modal-classes modal-theme"
    >
      <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Form.Item
          name="ServiceTitle"
          rules={[{ required: true, message: "Required field" }]}
          className="mb-10"
        >
          <Input
            placeholder="Service Title"
            id="ServiceTitle"
            style={{ marginTop: "8px", height: "40px", borderRadius: "1px" }}
          />
        </Form.Item>

        <Form.Item
          name="ServiceURL"
          rules={[{ required: true, message: "Required field" }]}
          className="mb-10"
        >
          <Input
            placeholder="Service URL"
            id="ServiceURL"
            style={{ marginTop: "8px", height: "40px", borderRadius: "1px" }}
          />
        </Form.Item>

        <Form.Item
          name="Category"
          rules={[{ required: true, message: "Required field" }]}
          className="mb-10"
        >
          <Select
            placeholder="Select Category"
            popupClassName="select-theme"
            className='select-input-theme'
            options={[
              { value: "Design", label: "Design" },
              { value: "Email", label: "Email" },
              { value: "Social Media", label: "Social Media" },
              { value: "Music", label: "Music" },
            ]}
          />
        </Form.Item>

        <Form.Item
          name="ProductivityStatus"
          rules={[
            { required: true, message: "Required field" },
          ]}
          className="mb-10"
        >
          <Select
            placeholder="Select Productivity Status"
            options={[
              { value: "Neutral", label: "Neutral" },
              { value: "Productive", label: "Productive" },
              { value: "Unproductive", label: "Unproductive" },
            ]}
          />
        </Form.Item>

        <Form.Item
          name="Screencast"
          rules={[
            { required: true, message: "Required field" },
          ]}
          className="mb-10"
        >
          <Select
            placeholder="No of Screencasts"
            options={[
              { value: "3 Min - 1 Screenshot", label: "3 Min - 1 Screenshot" },
              { value: "5 Min - 2 Screenshot", label: "5 Min - 2 Screenshot" },
              {
                value: "10 Min - 3 Screenshot",
                label: "10 Min - 3 Screenshot",
              },
              {
                value: "15 Min - 4 Screenshot",
                label: "15 Min - 4 Screenshot",
              },
              {
                value: "20 Min - 5 Screenshot",
                label: "20 Min - 5 Screenshot",
              },
              { value: "Custom", label: "Custom" },
            ]}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default AddModal;
