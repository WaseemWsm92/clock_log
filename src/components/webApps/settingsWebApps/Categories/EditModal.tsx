import { Col, Form, Modal, Row, Input } from 'antd';
import { SearchOutlined } from "@ant-design/icons";
import deleteIcon from "../../../../assets/images/WebApp/deleteIcon.png";

function EditModal(props: any) {
  const { editCategory, setEditCategory } = props

  return (
    <Modal
      title="Edit Category"
      open={editCategory}
      onOk={() => {
        setEditCategory(false);
      }}
      onCancel={() => {
        setEditCategory(false);
      }}
      okText="Save"
      cancelText="Cancel"
      centered
      width="444px"
       className="modal-theme"
    >
      <Form
        // form={form}
        layout="vertical"
      // initialValues={{ requiredMarkValue: requiredMark }}
      // onValuesChange={onRequiredTypeChange}
      // requiredMark={requiredMark}
      >
        <Row gutter={[16, 8]} style={{ marginTop: '24px' }}>
          <Col lg={24}>
            <Form.Item>
              <Input placeholder="example" value="Design" style={{ height: '37px' }} />
            </Form.Item>
            <Form.Item>
              <Input prefix={<SearchOutlined />} placeholder="Search by service name" style={{ height: '37px' }} />
            </Form.Item>

            <Form.Item  style={{marginBottom:'10px'}}>
              <div className='d-flex justify-between'>
                <p className="m-0 fs-12 title-color">Figma</p>
                <img src={deleteIcon} className="cursor-pointer" alt="deleteIcon" />
              </div>

            </Form.Item>

              <Form.Item style={{marginBottom:'10px'}}>
              <div className='d-flex justify-between'>
                <p className="m-0  fs-12 title-color">Illustartor</p>
                <img src={deleteIcon} className="cursor-pointer" alt="deleteIcon" />
              </div>

            </Form.Item>

              <Form.Item style={{marginBottom:'10px'}}>
              <div className='d-flex justify-between'>
                <p className="m-0 fs-12 title-color">Sketch</p>
                <img src={deleteIcon} className="cursor-pointer" alt="deleteIcon" />
              </div>

            </Form.Item>

              <Form.Item style={{marginBottom:'10px'}}>
              <div className='d-flex justify-between'>
                <p className="m-0 fs-12 title-color">XD</p>
                <img src={deleteIcon} className="cursor-pointer" alt="deleteIcon" />
              </div>

            </Form.Item>

          </Col>

        </Row>
      </Form>
    </Modal>
  )
}

export default EditModal
