import { Button, Col, Modal, Row } from "antd";
import DeactivateImg from "../../../assets/icons/deactivate.png";
import ActivateImg from "../../../assets/icons/activate.png";

import "./modals.scss";
interface props {
  deactivateModal: any;
  setDeactivateModal: any;
  tabKey: any;
}
const DeactivateModal = (props: props) => {
  const { deactivateModal, setDeactivateModal, tabKey } = props;

  return (
    <Modal
      centered
      open={deactivateModal}
      className="delete_modal"
      wrapClassName="add-exception-modal-classes-users modal-theme"
      style={{ borderRadius: "4px" }}
      footer={null}
      onOk={() => {
        setDeactivateModal(false);
      }}
      onCancel={() => {
        setDeactivateModal(false);
      }}
      okText="Deactivate"
      cancelText="Cancel"
    >
      <Row style={{ textAlign: "center" }}>
        <Col xs={24}>
          <div className="action-modal">
          <div className="image-container">
            <img src={tabKey === "2" ? ActivateImg : DeactivateImg} className='deletebutton' alt="delete" />
            </div>
            <h2 className="fs-24 fw-600 heading-color">Are you sure?</h2>
            <p className="fs-14" style={{ color: "#9D9D9D" }}>
              {`Do you want to ${
                tabKey === "2" ? "activate" : "deactivate"
              } this
              user?`}
            </p>
            <Button
              className="btn-cancel"
              style={{ margin: "20px 20px" }}
              onClick={() => {
                setDeactivateModal(false);
              }}
            >
              Cancel
            </Button>
            <Button
              className="btn-deactive"
              onClick={() => {
                setDeactivateModal(false);
              }}
            >
              {tabKey === "2" ? "Activate" : "Deactivate"}
            </Button>
          </div>
        </Col>
      </Row>
    </Modal>
  );
};

export default DeactivateModal;
