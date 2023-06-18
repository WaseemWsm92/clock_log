import { Button, Col, Modal, Row } from "antd";
import "./moveUserModal.scss";
interface props {
  initialState: any;
  setState: any;
  selectedTime: any;
}
const MoveUserModal = (props: props) => {
  const { initialState, setState, selectedTime } = props;

  return (
    <Modal
      centered
      open={initialState}
      className="move-user-modal"
      footer={null}
      onOk={() => {
        setState(false);
      }}
      onCancel={() => {
        setState(false);
      }}
      okText="Save"
      cancelText="Cancel"
    >
      <div className="wrapper-move-user">
        <Row style={{ textAlign: "center" }}>
          <Col md={24}>
            <h2 className="fs-24">Are you sure?</h2>
            <p className="modal_text fs-14">
              Do you want to Change the Schedule of Selected employee to{" "}
              {selectedTime}.
            </p>
            <Button
              className="btn-cancel"
              style={{ margin: "20px 20px" }}
              onClick={() => {
                setState(false);
              }}
            >
              Cancel
            </Button>
            <Button
              className="btn-danger cus--save"
              onClick={() => {
                setState(false);
              }}
            >
              Save
            </Button>
          </Col>
        </Row>
      </div>
    </Modal>
  );
};

export default MoveUserModal;
