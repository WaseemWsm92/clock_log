import { Fragment, useState } from "react";
import { Row, Col, Button, Form, Select, Modal, Input, Switch } from "antd";
import "./submit-report-modal.scss";
const appliedWorkSchedule = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const SubmitReportModal = (props: any) => {
  const { setIsModalOpen, isModalOpen } = props;
  const [weeksArray, setWeeksArray] = useState<any>([]);
  const [isScheduleTimeSheet, setIsScheduleTimeSheet] = useState<boolean>(false);
  const [form] = Form.useForm();
  const onFinish = () => {
    setIsModalOpen(false);
    form.resetFields();
  };
  return (
    <Fragment>
      {/* Edit modal starts here  */}
      <Modal
        className="reset_modal modal-theme"
        width={862}
        title={<span className="fs-24 fw-600 line-height-36 title-color">Submit Timesheet</span>}
        open={isModalOpen}
        onCancel={() => {
          setIsModalOpen(false);
          form.resetFields();
        }}
        footer={false}
      >
        <Form layout="vertical" onFinish={onFinish} form={form}>
          <Row gutter={[15, 1]}>
            <Col xs={24} md={24}>
              <h4 className="fs-20 p-0 m-0 title-color">Recipients</h4>
              <Form.Item style={{ height: "70px" }} className="input-fields-scheduled" label="Separate email addresses with comas" name="email" rules={[{ required: true, message: "Required field" }]}>
                <Input style={{ borderRadius: "2px", height: "37px" }} type="email" placeholder="Hr@orcalo.com.uk, Finance@orcalo.co.uk" />
              </Form.Item>
            </Col>
            <Col xs={24} md={24}>
              <h4 className="fs-20 m-0 p-0 fw-600 title-color">Subject</h4> <p className="p-0 m-0 label-color">Timesheet submission</p> <h4 className="fs-20 fw-600 title-color">Email Body</h4>
              <Form.Item name="textArea" className="my-textarea-class-scheduled" style={{ borderRadius: "2px" }} rules={[{ required: true, message: "Required field" }]}>
                <Input.TextArea placeholder="The Orcalo Ltd Schedule report is attached. Please download, Thankyou." />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item label="File Type" name="fileType" rules={[{ required: true, message: "Required field" }]}>
                <Select defaultValue="PDF" className="select-parameter-add select-input-theme" popupClassName="select-theme">
                  <Select.Option value="PDF">PDF</Select.Option>
                  <Select.Option value="CSV">CSV</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} md={12} style={{ margin: "auto 0" }}>
              <div className="d-flex justify-between align-items-center">
                <p className="fs-14 line-height-21 fw-400 grey-color m-0">Schedule Timesheet</p>
                <Switch defaultChecked rootClassName="theme-checkbox" onChange={() => setIsScheduleTimeSheet(!isScheduleTimeSheet)} checked={isScheduleTimeSheet} />
              </div>
            </Col>
            {isScheduleTimeSheet && (
              <>
                <Col xs={24} md={12}>
                  <Form.Item label="Date Range" name="daterange" rules={[{ required: true, message: "Required field" }]}>
                    <Select className="select-parameter-add select-input-theme" popupClassName="select-theme" defaultValue="Today">
                      <Select.Option value="Today">Today</Select.Option> <Select.Option value="Yesterday">Yesterday</Select.Option> <Select.Option value="Last 7 Days">Last 7 Days</Select.Option>
                      <Select.Option value="Last Week">Last Week</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label="Delivery Frequency" name="deliveryfreq" rules={[{ required: true, message: "Required field" }]}>
                    <Select defaultValue="Daily" className="select-parameter-add select-input-theme" popupClassName="select-theme">
                      <Select.Option value="Daily">Daily</Select.Option> <Select.Option value="Weekly">Weekly</Select.Option> <Select.Option value="Monthly">Monthly</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label="Delivery Time" name="deliverytime" rules={[{ required: true, message: "Required field" }]}>
                    <Select defaultValue="9:00 AM" className="select-parameter-add select-input-theme" popupClassName="select-theme">
                      <Select.Option value="9:00 AM">9:00 AM</Select.Option> <Select.Option value="9:30 AM">9:30 AM</Select.Option> <Select.Option value="10:00 AM">10:00 AM</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
              </>
            )}
            <div className="d-flex justify-between align-items-center w-100">
              <Col className="applied-work d-flex align-items-center">
                {appliedWorkSchedule.map((item, i: number) => (
                  <p
                    className="d-flex cursor-pointer align-items-center justify-center text-center m-0 fs-14 line-height-20"
                    style={{
                      backgroundColor: weeksArray.includes(item) ? "#E76F51" : "#DBE4EF",
                      color: weeksArray.includes(item) ? "#FFFFFF" : "#3B4D60",
                      padding: "3px 8.5px",
                      borderRadius: "50%",
                      marginRight: "6px",
                    }}
                    key={i}
                    onClick={() => {
                      !weeksArray.includes(item) ? setWeeksArray([...weeksArray, item]) : setWeeksArray(weeksArray.filter((week: any) => week !== item));
                    }}
                  >
                    {item.charAt(0).toUpperCase()}
                  </p>
                ))}
              </Col>
              <Col>
                <div className="modal_btn_wrapper">
                  <Button
                    className="btn-cancel"
                    onClick={() => {
                      setIsModalOpen(false);
                      form.resetFields();
                    }}
                  >
                    Cancel
                  </Button>
                  <Button className="btn-save" type="primary" htmlType="submit">
                    Submit
                  </Button>
                </div>
              </Col>
            </div>
          </Row>
        </Form>
      </Modal>
    </Fragment>
  );
};
export default SubmitReportModal;
