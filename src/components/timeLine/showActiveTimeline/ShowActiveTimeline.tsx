
import { useState } from 'react';
import {Col, Row, Tooltip } from "antd";
import { PlusOutlined } from '@ant-design/icons';
import './ShowActiveTimeline.scss';
import { AddTimeModal } from '../AddTimeModal';


const ShowActiveTimeline = (props: any) => {
    const [showInActiveTime] = useState(true);
    const [open, setOpen] = useState(false);
    // const { showAddButton } = props;
    console.log(props.numberOfActive);

    const showModal = () => {
        setOpen(true);
    };

    return (

       <div>   
        <Row className="ShowActiveTimeline">
            <Col xs={3} md={2} xl={1} className={`AddTimeBtn ${props.showAddButton ? 'individual' : 'allUserTimelines'}`}><div onClick={showModal}>{props.showAddButton && <PlusOutlined />}  </div> </Col>
            <Col xs={0} md={0} xl={1} className={`AddTimeBtn ${props.showAddButton ? 'individual' : 'allUserTimelines'}`}><div onClick={showModal}>{props.showAddButton && <PlusOutlined />}  </div> </Col>
            <Col xs={0} md={2} xl={1} className={`AddTimeBtn ${props.showAddButton ? 'individual' : 'allUserTimelines'}`}><div onClick={showModal}>{props.showAddButton && <PlusOutlined />}  </div> </Col>
            <Col xs={0} md={0} xl={1} className={`AddTimeBtn ${props.showAddButton ? 'individual' : 'allUserTimelines'}`}><div onClick={showModal}>{props.showAddButton && <PlusOutlined />}  </div> </Col>
            <Tooltip placement="top" title={showInActiveTime && 'ClockLog (3h 10m)Task : User Stories'} color="#264653">
            <Col xs={0} md={2} xl={1} className={showInActiveTime ? 'activeTime' : 'AddTimeBtn'}>{!showInActiveTime && <div onClick={showModal}><PlusOutlined />  </div>} </Col>
            </Tooltip>
            <Col xs={0} md={0} xl={1} className={showInActiveTime ? 'activeTime' : 'AddTimeBtn'}>{!showInActiveTime && <div onClick={showModal}><PlusOutlined />  </div>}  </Col>
            <Col xs={3} md={2} xl={1} className={showInActiveTime ? 'activeTime' : 'AddTimeBtn'}> {!showInActiveTime && <div onClick={showModal}><PlusOutlined />  </div>} </Col>
            <Col xs={0} md={0} xl={1} className={`AddTimeBtn ${props.showAddButton ? 'individual' : 'allUserTimelines'}`}><div onClick={showModal}>{props.showAddButton && <PlusOutlined />}  </div> </Col>
            <Col xs={0} md={0} xl={1} className={`AddTimeBtn ${props.showAddButton ? 'individual' : 'allUserTimelines'}`}><div onClick={showModal}>{props.showAddButton && <PlusOutlined />}  </div> </Col>
            <Col xs={0} md={2} xl={1} className={`AddTimeBtn ${props.showAddButton ? 'individual' : 'allUserTimelines'}`}><div onClick={showModal}>{props.showAddButton && <PlusOutlined />}  </div> </Col>
            <Col xs={0} md={0} xl={1} className={`AddTimeBtn ${props.showAddButton ? 'individual' : 'allUserTimelines'}`}><div onClick={showModal}>{props.showAddButton && <PlusOutlined />}  </div>  </Col>
            <Col xs={3} md={2} xl={1} className={`AddTimeBtn ${props.showAddButton ? 'individual' : 'allUserTimelines'}`}><div onClick={showModal}>{props.showAddButton && <PlusOutlined />}  </div>  </Col>
            <Col xs={3} md={2} xl={1} className={`AddTimeBtn ${props.showAddButton ? 'individual' : 'allUserTimelines'}`}><div onClick={showModal}>{props.showAddButton && <PlusOutlined />}  </div> </Col>
            <Tooltip placement="top" title={showInActiveTime && 'Manual Time (15m)'} color="#264653">
            <Col xs={0} md={0} xl={1} className={showInActiveTime ? 'addManualTime' : 'AddTimeBtn'}>{!showInActiveTime && <div onClick={showModal}><PlusOutlined />  </div>} </Col>
             </Tooltip>
            <Col xs={0} md={2} xl={1} className={`AddTimeBtn ${props.showAddButton ? 'individual' : 'allUserTimelines'}`}><div onClick={showModal}>{props.showAddButton && <PlusOutlined />} </div> </Col>
            <Col xs={0} md={0} xl={1} className={`AddTimeBtn ${props.showAddButton ? 'individual' : 'allUserTimelines'}`}><div onClick={showModal}>{props.showAddButton && <PlusOutlined />}</div> </Col>
            <Col xs={0} md={2} xl={1} className={`AddTimeBtn ${props.showAddButton ? 'individual' : 'allUserTimelines'}`}><div onClick={showModal}>{props.showAddButton && <PlusOutlined />}</div> </Col>
            <Col xs={0} md={0} xl={1} className={`AddTimeBtn ${props.showAddButton ? 'individual' : 'allUserTimelines'}`}><div onClick={showModal}>{props.showAddButton && <PlusOutlined />}</div>  </Col>
            <Col xs={3} md={2} xl={1} className={`AddTimeBtn ${props.showAddButton ? 'individual' : 'allUserTimelines'}`}><div onClick={showModal}>{props.showAddButton && <PlusOutlined />}</div>  </Col>
            <Col xs={0} md={0} xl={1} className={`AddTimeBtn ${props.showAddButton ? 'individual' : 'allUserTimelines'}`}><div onClick={showModal}>{props.showAddButton && <PlusOutlined />}</div> </Col>
            <Col xs={0} md={0} xl={1} className={`AddTimeBtn ${props.showAddButton ? 'individual' : 'allUserTimelines'}`}><div onClick={showModal}>{props.showAddButton && <PlusOutlined />}</div> </Col>
            <Col xs={0} md={0} xl={1} className={`AddTimeBtn ${props.showAddButton ? 'individual' : 'allUserTimelines'}`}><div onClick={showModal}>{props.showAddButton && <PlusOutlined />}</div> </Col>
            <Col xs={3} md={2} xl={1} className={`AddTimeBtn ${props.showAddButton ? 'individual' : 'allUserTimelines'}`}><div onClick={showModal}>{props.showAddButton && <PlusOutlined />}</div>  </Col>
        </Row>
        {open && <AddTimeModal open={open} setOpen={setOpen} />}
     </div>

    )
}

export default ShowActiveTimeline