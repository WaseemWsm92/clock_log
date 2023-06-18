import { Button, Col, Modal, Row } from 'antd';
import Deativate from "../../assets/icons/deactive.png";
import Activete from "../../assets/icons/active.png"

export default function ResetUser(props: any) {
  const { resetUser, setResetUser, rowData, rowIndex } = props
  console.log(rowData.map((d: any) => d.key === rowIndex));
  console.log(typeof rowData[0].key, typeof rowIndex)

  return (
    <Modal open={resetUser} className="reset_modal modal-theme" centered footer={null}
      onOk={() => { setResetUser(false) }}
      width={445}
      onCancel={() => { setResetUser(false) }}
      okText="Confirm"
      cancelText="Cancel">
      <Row>
        <Col md={24}>
          <div className="reset_icon">
            <img src={Deativate} alt="reset" style={{ backgroundColor: '#F4F9FF', padding: "15px", borderRadius: "50%" }} />
            <h2 className="fs-24 title-color">Are you sure?</h2>
            <p className="modal_text fs-14">Do you want to temporarily deactivate <br />this scheduled report</p>
            <Button style={{ margin: "20px 20px" }} onClick={() => { setResetUser(false) }}>Cancel</Button>
            <Button type="primary" onClick={() => { setResetUser(false) }}>Confirm</Button>
          </div>
        </Col>
      </Row>
    </Modal>
  )
}
