import { Col, Form, Modal, Row, Input, Button, Space } from 'antd';


function AddModal(props: any) {
  const { addCategory, setAddCategory } = props


  const onSuccessfullyFinish = (values: any) => {
    values && setAddCategory(false);
  }


  return (
    <Modal
      title={<><span>Add Category</span></>}
      open={addCategory}
      onCancel={() => {
        setAddCategory(false);
      }}
      centered
      footer={false}
      width="444px"
      className="modal-theme"
    >
      <Form
        layout="vertical"
        onFinish={onSuccessfullyFinish}
      >
        <Row gutter={[16, 8]} style={{ marginTop: '24px' }}>
          <Col lg={24}>
            <Form.Item name='team-mate' rules={[{ required: true, message: 'Required field' }]}>
              <Input placeholder="Category" style={{ height: '37px' }} />
            </Form.Item>
          </Col>

          <Col span={24}><div className='d-flex justify-end' >
            <Space> <Button className='btn-cancel' htmlType='submit' onClick={() => {
              setAddCategory(false);
            }}
            >
              Cancel
            </Button>
              <Button type='primary' htmlType='submit' style={{ backgroundColor: "#E76F51" }}>
                Save
              </Button>
            </Space>

          </div>
          </Col>

        </Row>
      </Form>
    </Modal>
  )
}

export default AddModal
