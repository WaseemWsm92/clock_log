import { useState } from 'react'
import { Button, Form, Input, Space, Switch, Tooltip } from 'antd';
import infoImage from "../../../../../assets/icons/Info.svg";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
  },
  wrapperCol: {
    xs: { span: 24 },
  },
};


const ExceptionWeightageModalForm = ({ setIsEditModalOpen }: any) => {
  const [isShowPerformanceWeightage, setIsShowPerformanceWeightage] = useState<boolean>(false);
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Success:', values);
    form.resetFields();
    setIsEditModalOpen(false)
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const validateWeightage = (rule: any, value: any, callback: any) => {
    if (value && (value < 1 || value > 100)) {
      callback('Value must be between 1 and 100');
    } else {
      callback();
    }
  };


  return (
    <Form
      form={form}
      {...formItemLayout}
      layout="vertical"
      scrollToFirstError={true}
      style={{ maxWidth: 600, marginTop: "1.25rem" }}
      onFinishFailed={onFinishFailed}
      onFinish={onFinish}
      autoComplete="off"
    >
      <h2 className='fs-16 fw-500 title-color line-height-400 heading-color d-flex align-items-center' style={{ marginTop: "0px" }}>
        <span className='fs-16 fw-500 line-height-40'>Performance Weightage</span>
        <Tooltip
          placement="bottomLeft"
          autoAdjustOverflow={true}
          showArrow={false}
          overlayInnerStyle={{ backgroundColor: "#fff", color: "#264653", maxWidth: "314px" }}
          title={"The following Performance Weightage should add up to 100"}>
          <img src={infoImage} alt="info" className="white-img-theme-class cursor-pointer" style={{ margin: "0.5rem 0.625rem" }} />
        </Tooltip>
      </h2>

      <Form.Item
        label="Productivity Weightage"
        name="productivityWeightage"
        rules={[{ required: true, message: "Required field" }, { validator: validateWeightage },]}
      >
        <Input placeholder="1 to 100" id="productivityWeightage" style={{ height: "37px", borderRadius: "2px" }} />
      </Form.Item>

      <Form.Item
        label="Idle Time Weightage"
        name="idleTimeWeightage"
        rules={[{ required: true, message: "Required field" }, { validator: validateWeightage },]}

      >
        <Input placeholder="1 to 100" id="idleTimeWeightage" style={{ height: "37px", borderRadius: "2px" }} />
      </Form.Item>

      <Form.Item
        label="Time Tracked Weightage"
        name="timeTrackedWeightage"
        rules={[{ required: true, message: "Required field" }, { validator: validateWeightage },]}
      >
        <Input placeholder="1 to 100" id="timeTrackedWeightage" style={{ height: "37px", borderRadius: "2px" }} />
      </Form.Item>

      <Space
        size={18}
        style={{ marginTop: "1rem" }}
        className="fs-14 fw-400 line-height-22 title-color"
      >
        Performance Evaluation
        <Switch
          rootClassName='theme-checkbox'
          onChange={() =>
            setIsShowPerformanceWeightage(!isShowPerformanceWeightage)
          }
        />
      </Space>
      <Form.Item style={{ marginTop: "2rem" }} >
        <div style={{ textAlign: "end" }}>
          <Button
            style={{
              marginRight: "15px",
              marginTop: "10px",
              marginBottom: 0,
            }}
          >
            Cancel
          </Button>
          <Button type="primary" htmlType="submit" style={{ marginRight: "1rem" }}>
            Save
          </Button>
        </div>
      </Form.Item>
    </Form>
  )
}

export default ExceptionWeightageModalForm