import { Col, Form, Modal, Row, Input } from "antd";

function AddCustomScreen(props: any) {
  const { addDistraction, setAddDistraction } = props;

  return (
    <Modal
      title="Custom Screenshots"
      open={addDistraction}
      onOk={() => {
        setAddDistraction(false);
      }}
      onCancel={() => {
        setAddDistraction(false);
        props.setSendDropdownValue(" ");
        alert(props.sendDropdownValue);
      }}
      okText="Save"
      
      cancelText="Cancel"
      centered
      width="444px"
      className="modal-theme"
    >
      <Form layout="vertical">
        <Row gutter={[16, 8]} style={{ marginTop: "20px" }}>
          <Col xs={24} md={12}>
            <Form.Item>
              <Input type="Number" placeholder="Mins" />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item>
              <Input type="Number" placeholder="ScreenShots" />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
}

export default AddCustomScreen;
