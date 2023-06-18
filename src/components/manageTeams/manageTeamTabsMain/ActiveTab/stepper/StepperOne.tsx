
import { Button, Form, Input, Space } from 'antd';
import "./stepper.scss"

const StepperOne = (props: any) => {
  const { handleNextStep } = props;
  const onFinish = (values: any) => {
    console.log(values);
    handleNextStep()
  }
  return (
    <div >
      <Form layout="vertical" name="email" onFinish={onFinish} className='stepper-two' >
        <Form.Item
          label={<span className="fs-12 grey-color fw-500 ">Team Name</span>}
          name="Teamname"
          rules={[
            {
              required: true,
              message: "Required field",
            },
            {
              pattern: /^[A-Za-z\s]*$/,
              message: "Start from alphabets.",
            },
          ]}
        >
          <Input placeholder="Enter Team Name" className='team-input custom-input-field' style={{ width: "100%", marginTop: "2px" }} />
        </Form.Item>
        {/* <Row gutter={[0, 10]} >
                        <Col xs={24} md={10} className="cancel-button" >
                            <Button className=" fs-16 fw-500 d-flex align-center">Cancel</Button>
                        </Col>
                        <Col xs={24} md={14}>

                            <Space>
                                <div>{current === 0 &&
                                    <Space >
                                        <div className='button-main'> <Button className="btn-secondary-cancel">Save & Close</Button></div>
                                        <div className='button-main'><Button className='btn-secondary' onClick={() => next()}>Next</Button></div>
                                    </Space>
                                }
                                    {current === 1 && (
                                        <Space>
                                            <Button className='btn-cancel' onClick={() => prev()}>Back</Button>
                                            <Button className='btn-secondary' onClick={() => next()}>Next</Button>
                                        </Space>
                                    )}
                                    {current === 2 && (
                                        <Space>
                                            <Button className='btn-cancel' onClick={() => prev()}>Back</Button>
                                            <Button className='btn-secondary'
                                                onClick={() => message.success('Processing complete!')}>Save</Button>
                                        </Space>
                                    )}
                                </div>
                            </Space>
                        </Col>
                    </Row> */}
        <Space className="stepper-main" >
          <div className='button-main'> <Button className="btn-secondary-cancel">Save & Close</Button></div>
          <div className='button-main'><Button className='btn-secondary' htmlType='submit' >Next</Button></div>
        </Space>
      </Form>


    </div>
  )
}

export default StepperOne
