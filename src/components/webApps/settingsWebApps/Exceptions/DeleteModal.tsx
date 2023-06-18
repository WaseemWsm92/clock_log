import { Button, Col, Modal, Row } from 'antd';
import DeleteIcon from "../../../../assets/icons/deleteicon.png";

export default function DeleteModal(props:any) {
    const{deleteModal,setDeleteModal} = props
  return (
    <Modal
    open={deleteModal}
    className="delete_modal modal-theme"
    centered
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
    <Row>
      <Col md={24}>
        <div className="delete_icon">
          <img src={DeleteIcon} alt="delete" />
          <h2 className="fs-24 title-color">Are you sure?</h2>
          <p className="modal_text fs-14">Do you want to delete Selected Teams?</p>
          <Button  style={{ margin: "20px 20px" }}onClick={() => {setDeleteModal(false)}}>Cancel</Button>
          <Button  type="primary" onClick={() => {setDeleteModal(false)}}>Delete</Button>
        </div>
      </Col>
    </Row>
  </Modal>
  )
}
