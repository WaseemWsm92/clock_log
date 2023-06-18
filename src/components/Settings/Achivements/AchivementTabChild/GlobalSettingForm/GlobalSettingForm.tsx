import { Button, Col, Form, Input, Row } from "antd";
import "./GlobalSettingForm.scss";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
  },
  wrapperCol: {
    xs: { span: 24 },
  },
};

const GlobalSettingForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    form.resetFields();
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log(
      "Global settings form submittion failed with values:",
      errorInfo
    );
  };

  return (
    <Form
      form={form}
      {...formItemLayout}
      className="global-setting-form"
      layout="vertical"
      scrollToFirstError={true}
      style={{ maxWidth: 600 }}
      onFinishFailed={onFinishFailed}
      onFinish={onFinish}
      autoComplete="off"

    >
      <Form.Item
        label="Overall Score"
        name="overallScore"
        className="label-color"
        // requiredMark={'optional'}
        rules={[
          { required: false, message: "Overall score is required" },
          { whitespace: true, message: "Overall score is required" },
        ]}
      >
        <Input
          placeholder="Enter overall score"
          id="overallScore"
          className="label-color"
          style={{ height: "37px",borderRadius:"2px"}}
        />
      </Form.Item>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12}>
          <Form.Item
            label="Productivity Weightage"
            name="productivityWeightage"
            rules={[
              { required: false, message: "Productivity weightage is required" },
            ]}
          >
            <Input
              placeholder="Enter productivity weightage"
              id="productivityWeightage"
              style={{ height: "37px",borderRadius:"2px"}}
            />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12}>
          <Form.Item
            label="Idle Time Weightage"
            name="idleTimeWeightage"
            rules={[
              { required: false, message: "Idle time weightage is required" },
            ]}
          >
            <Input
              placeholder="Enter idle time weightage"
              id="idleTimeWeightage"
              style={{ height: "37px",borderRadius:"2px"}}
            />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12}>
          <Form.Item
            label="Time Tracked Weightage"
            name="timeTrackedWeightage"
            rules={[
              { required: false, message: "Time tracked weightage is required" },
            ]}
          >
            <Input
              placeholder="Enter time tracked weightage"
              id="timeTrackedWeightage"
              style={{ height: "37px",borderRadius:"2px"}}
            />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12}>
          <Form.Item
            label="Time Tracked Threshold"
            name="timeTrackedThreshold"
            rules={[
              { required: false, message: "Time tracked threshold is required" },
            ]}
          >
            <Input
              placeholder="Enter time tracked threshold"
              id="timeTrackedThreshold"
              style={{ height: "37px",borderRadius:"2px"}}
            />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Save
        </Button>
      </Form.Item>
    </Form>
  );
};

export default GlobalSettingForm;
