import { Button, Col, Modal, Row } from "antd";
import Restore from "../../../assets/icons/restore.png";
import "./modals.scss";

interface props {
    restoreModal: any;
    setRestoreModal: any;
}
const RestoreModal = (props: props) => {
  const { restoreModal, setRestoreModal } = props;

  return (
    <Modal
      centered
      open={restoreModal}
      className="delete_modal"
      wrapClassName="modal-theme"
      footer={null}
      onOk={() => {
        setRestoreModal(false);
      }}
      onCancel={() => {
        setRestoreModal(false);
      }}
      okText="Restore"
      cancelText="Cancel"
    >
      <Row style={{ textAlign: "center" }}>
        <Col xs={24}>
          <div className="action-modal">
            <img src={Restore} alt="delete" />
            <h2 className="fs-24 heading-color">Are you sure?</h2>
            <p className="modal_text fs-14 heading-color">
              Do you want to restore this user?
            </p>
            <Button
              className="btn-cancel"
              style={{ margin: "20px 20px" }}
              onClick={() => {
                setRestoreModal(false);
              }}
            >
              Cancel
            </Button>
            <Button
              className="btn-danger"
              onClick={() => {
                setRestoreModal(false);
              }}
              style={{backgroundColor:'#F4A261'}}
            >
              Restore
            </Button>
          </div>
        </Col>
      </Row>
    </Modal>
  );
};

export default RestoreModal;
