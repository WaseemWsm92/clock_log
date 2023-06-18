import { Button, Col, Modal, Row } from "antd";
import "./modals.scss";

import DeleteIcon from "../../../assets/icons/modaldelete.svg";
import deleteCrossIcon from "../../../assets/icons/cancel.svg";
import AppSnackbar from "../../../utils/snackbar";


interface props {
  deleteModal: any;
  setDeleteModal: any;
  deleteModalContent:string;
}
const DeleteModal = (props: props) => {
  const { deleteModal, setDeleteModal, deleteModalContent } = props;

  return (
    <Modal
      centered
      open={deleteModal}
      className="delete_modal"
      wrapClassName="modal-theme add-exception-modal-classes-users"
      closeIcon={<img src={deleteCrossIcon} alt="cross" height={24} width={24} style={{ filter: "var(--dynamic-img-filter)"}} />}
      footer={null}
      onOk={() => {
        setDeleteModal(false);
      }}
      onCancel={() => {
        setDeleteModal(false);
      }}
      okText="Delete"
      cancelText="Cancel"
    >
      <Row style={{ textAlign: "center" }}>
        <Col xs={24}>
          <div className="action-modal">
            <div className="image-container"><img  className='deletebutton' src={DeleteIcon} alt="delete" /></div>
     
            <h2 className="fs-24 fw-600 heading-color">Are you sure?</h2>
            <p className="fs-14" style={{color:"#9D9D9D"}}>
              {deleteModalContent}
            </p>
            <Button
              className="btn-cancel"
              style={{ margin: "20px 20px" }}
              onClick={() => {
                setDeleteModal(false);
                AppSnackbar({ type: "error", message: "Record deletion Failed!", })
              }}
            >
              Cancel
            </Button>
            <Button
              className="btn-danger"
              onClick={() => {
                setDeleteModal(false);
                AppSnackbar({ type: "success", message: "Record has been deleted!", })
              }}
            >
              Delete
            </Button>
          </div>
        </Col>
      </Row>
    </Modal>
  );
};

export default DeleteModal;
