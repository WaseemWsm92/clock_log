import { useState } from "react";
import { Button, Col, Form, Input, Modal, Row, Select, Switch } from "antd";
import "./submitReportModal.scss";
import TextArea from "antd/es/input/TextArea";
import {
  dateRangeData,
  deliveryFrequency,
  deliveryTime,
} from "../../../mock/submitReportModal";
const { Option } = Select;

const SubmitReportModal = (props: any) => {
  const { isModalOpen, setIsModalOpen } = props;
  const [form] = Form.useForm();
  const [formField, setFormField] = useState<any>({
    separateEmail: "",
    emailBody: "",
    fileType: {},
    scheduleTimeSheet: false,
    dateRange: {},
    deliveryFrequency: {},
    deliveryTime: {},
  });

  const handleSubmitReport = (value: any, type: string) => {
    switch (type) {
      case "separateEmail":
        setFormField({ ...formField, separateEmail: value.target.value });
        break;
      case "emailBody":
        setFormField({ ...formField, emailBody: value.target.value });
        break;
      case "fileType":
        setFormField({ ...formField, fileType: value });
        break;
      case "scheduleTimeSheet":
        setFormField({ ...formField, scheduleTimeSheet: value });
        // setFormField({ ...formField, separateEmail: value });
        break;
      case "dateRange":
        setFormField({ ...formField, dateRange: value });
        break;
      case "deliveryFrequency":
        setFormField({ ...formField, deliveryFrequency: value });
        break;
      case "deliveryTime":
        setFormField({ ...formField, deliveryTime: value });
        break;
      default:
        break;
    }
  };

  const onFinish = (values: any) => {
    form.resetFields();
    setIsModalOpen(false);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Modal
        title="Submit Timesheet"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        okText={"Add"}
        width="100%"
        style={{ maxWidth: "800px" }}
        className="submit-report-modal "
      >
        <Form
          // {...layout}
          name="control-hooks"
          form={form}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <div className="report-field-wrap">
            <h2 className="title-color fs-20 fw-600 line-height-28 m-0">
              Recipients<span className="error-color">*</span>
            </h2>
            <Form.Item
              name="separateEmail"
              rules={[{ required: true, message: "Required Field" }]}
            >
              <label className="grey-color fs-14 fw-400 m-0">
                Separate email addresses with comas
              </label>
              <Input
                placeholder="Hr@orcalo.com.uk, Finance@orcalo.co.uk"
                onChange={(val) => handleSubmitReport(val, "separateEmail")}
              />
            </Form.Item>

            <div className="report-field-subject">
              <h2 className="title-color fs-20 fw-600 line-height-28 m-0">
                Subject
              </h2>
              <p className="fs-14 line-height-20 border-color m-0 fw-400">
                Timesheet submission
              </p>
            </div>
            <div className="report-field-email">
              <h2 className="title-color fs-20 fw-600 line-height-28 m-0">
                Email Body
              </h2>
              <TextArea
                rows={3}
                placeholder="The Orcalo Ltd Timesheet  is attached. Please download, Thankyou."
                onChange={(val) => handleSubmitReport(val, "emailBody")}
              />
            </div>
            <div className="report-field-form">
              <Row gutter={[15, 15]} align="middle">
                <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                  <Form.Item
                    name="fileType"
                    rules={[{ required: true, message: "Required Field" }]}
                  >
                    <label>
                      File Type <span className="error-color">*</span>
                    </label>
                    <Select
                      onChange={(val) => handleSubmitReport(val, "fileType")}
                      id="fileType"
                      className="w-100"
                      allowClear
                    >
                      <Option value="china">China</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                  <Form.Item
                    name="timeSheet"
                    rules={[{ required: true, message: "Required Field" }]}
                    valuePropName="checked"
                  >
                    <div className="d-flex justify-between">
                      <label>
                        Schedule Timesheet{" "}
                        <span className="error-color">*</span>
                      </label>
                      <Switch
                        onChange={(val) =>
                          handleSubmitReport(val, "scheduleTimeSheet")
                        }
                      />
                    </div>
                  </Form.Item>
                </Col>
                {formField.scheduleTimeSheet === true && (
                  <>
                    <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                      <Form.Item
                        name="dateRange"
                        rules={[{ required: true, message: "Required Field" }]}
                      >
                        <label>
                          Date Range <span className="error-color">*</span>
                        </label>
                        <Select
                          className="w-100"
                          allowClear
                          options={dateRangeData}
                          onChange={(val) =>
                            handleSubmitReport(val, "dateRange")
                          }
                        />
                      </Form.Item>
                    </Col>
                    <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                      <Form.Item
                        name="deliveryFrequency"
                        rules={[{ required: true, message: "Required Field" }]}
                      >
                        <label>
                          Delivery Frequency{" "}
                          <span className="error-color">*</span>
                        </label>
                        <Select
                          className="w-100"
                          allowClear
                          options={deliveryFrequency}
                          onChange={(val) =>
                            handleSubmitReport(val, "deliveryFrequency")
                          }
                        />
                      </Form.Item>
                    </Col>
                    <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                      <Form.Item
                        name="deliveryTime"
                        rules={[{ required: true, message: "Required Field" }]}
                      >
                        <label>
                          Delivery Time <span className="error-color">*</span>
                        </label>
                        <Select
                          className="w-100"
                          allowClear
                          options={deliveryTime}
                          onChange={(val) =>
                            handleSubmitReport(val, "deliveryTime")
                          }
                        />
                      </Form.Item>
                    </Col>
                  </>
                )}

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                  <Button type="primary" htmlType="submit">
                    Add
                  </Button>
                </Form.Item>
              </Row>
            </div>
          </div>
        </Form>
      </Modal>
    </>
  );
};

export default SubmitReportModal;
