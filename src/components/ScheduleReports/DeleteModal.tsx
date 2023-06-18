import { Button, Col, Modal, Row, Typography } from 'antd';
import DeleteIcon from "../../assets/icons/deleteicon.png";
import AppSnackbar from '../../utils/snackbar';
export default function DeleteModal(props: any) {
  const { deleteModal, setDeleteModal, isSelectedAll, setIsSelectedAll } = props
  const { Paragraph } = Typography
  return (
    <Modal
      open={isSelectedAll ? isSelectedAll : deleteModal}
      className="delete_modal modal-theme"
      width={445}
      centered
      footer={null}
      onOk={() => { setDeleteModal(false); setIsSelectedAll(false) }}
      onCancel={() => { setDeleteModal(false); setIsSelectedAll(false) }}>      <Row>        <Col xs={24} md={24}>          <div className="delete_icon">            <img src={DeleteIcon} alt="delete" />            <h4 className="fs-24 fw-600 heading-color" style={{ marginBottom: "10px" }}>Are you sure?</h4>            <Paragraph className="modal_text fs-14 fw-400" style={{ marginBottom: "10px" }}>{isSelectedAll ? "Do you want to delete this Scheduled Reports" : "Do you want to delete this Scheduled Report"}</Paragraph>            <Button className="button-distraction fs-16 fw-500" style={{ margin: "20px 20px" }} onClick={() => { setDeleteModal(false); setIsSelectedAll(false) }}>Cancel</Button>            <Button className='delete-button-distraction button-distraction fs-16 fw-500' type="primary" onClick={() => { setDeleteModal(false); setIsSelectedAll(false); AppSnackbar({ type: "success", message: "Deleted Successfully", }) }}>Delete</Button>          </div>        </Col>      </Row>    </Modal>)
}