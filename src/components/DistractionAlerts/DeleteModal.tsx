import { Button, Col, Modal, Row } from 'antd';
import DeleteIcon from "../../assets/icons/deleteicon.png";
import AppSnackbar from '../../utils/snackbar';

export default function DeleteModal(props: any) {
  const { deleteModal, setDeleteModal } = props
  return (
    <Modal
      open={deleteModal}
      className="delete_modal modal-theme"
      centered
      width={445}
      footer={null}
      onOk={() => {setDeleteModal(false)}}
      onCancel={() => {setDeleteModal(false)}}>
      <Row>
        <Col xs={24} md={24}>
          <div className="delete_icon">
            <img src={DeleteIcon} alt="delete" />
            <h2 className="fs-24 fw-600 heading-color" style={{marginBottom:"10px"}}>Are you sure?</h2>
            <p className="modal_text fs-14 fw-400" style={{marginBottom:"10px"}}>Do you want to delete Selected Teams?</p>
            <Button style={{ margin: "20px 20px" }} onClick={() => { setDeleteModal(false) }}>Cancel</Button>
            <Button type="primary" className='delete-button-distraction' onClick={() => { setDeleteModal(false);   AppSnackbar({ type: "success", message: "Record Sucessfully deleted", }) }} >Delete</Button>
          </div>
        </Col>
      </Row>
    </Modal>
  )
}
