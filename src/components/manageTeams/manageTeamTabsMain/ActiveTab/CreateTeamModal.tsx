import { Button, Col, Modal, Row, Steps } from 'antd'
import { useState } from 'react'
import StepperOne from './stepper/StepperOne';
import StepperThree from './stepper/StepperThree';
import StepperTwo from './stepper/StepperTwo';
import { v4 as uuidv4 } from "uuid";
import createTeam from "../../../../assets/icons/settings/team/createTeam.svg";
import './CreateTeamModal.scss';


const CreateTeamModal = () => {

    const [isCreateTeamModalOpen, setCreateTeamModalOpen] = useState(false);
    const OpenTeamModal = () => setCreateTeamModalOpen(false);
    const CloseTeamModal = () => setCreateTeamModalOpen(false);
    const [current, setCurrent] = useState(0);
    const next = () => setCurrent(current + 1);
    const prev = () => setCurrent(current - 1);

    const steps = [
        { title: 'Create Team', content: <StepperOne handleNextStep={next} />, },
        { title: 'Add Members', content: <StepperTwo handleNextStep={next} handlePrevStep={prev} />, },
        { title: 'Add Projects', content: <StepperThree handlePrevStep={prev} />, },
    ];

    <Col xs={24} md={14}>

        {/* <Space>
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
    </Space> */}
    </Col>



    const itemsStepper = steps.map((item) => ({
        key: item.title,
        title: <span className='stepper-label fs-14 fw-400 primary-color'>
            {item.title}
        </span>
    }));

    const stepperLabels = ['Create Team', 'Add Members', 'Add Projects'];
    return (
        <div  >
            <Button className="btn-theme-color d-flex fw-500 fs-16" onClick={() => setCreateTeamModalOpen(true)}>
                <div className='d-flex align-center'>
                    <img src={createTeam} alt="" style={{ marginRight: "5px" }} />
                    <span className="d-flex fw-500 fs-16" style={{ marginLeft: "5px" }}>Create Team</span>
                </div >
            </Button>

            <Modal centered title={<span className='fw-400 fs-16 title-color'> Add Team</span>} className='custom-stepper-wrapper modal-theme' open={isCreateTeamModalOpen} onOk={OpenTeamModal} onCancel={CloseTeamModal}
                footer={[
                    <Row  >
                        <Col xs={24} md={10} className="cancel-button" >
                            <Button className=" fs-16 fw-500 d-flex align-center" onClick={CloseTeamModal}>Cancel</Button>
                        </Col>

                    </Row>]}
                width={596}
            >
                <Row  >
                    <Col xs={5} md={8} style={{ height: "100%" }}>
                        <div >
                            <Steps current={current} items={itemsStepper} percent={60} direction="vertical" className="d-flex " style={{ stroke: 'black' }} >
                                {steps.map((item) => (
                                    <Steps.Step key={uuidv4()} />
                                ))}
                            </Steps>
                        </div>

                    </Col>
                    <Col xs={19} md={16} style={{ height: "100%" }} >
                        <div>
                            <span className='stepper-label2 fs-16 fw-400 primary-color'>{stepperLabels[current]}</span>
                            {steps[current].content}
                        </div>
                    </Col>
                </Row>



            </Modal>
        </div>
    )
}

export default CreateTeamModal