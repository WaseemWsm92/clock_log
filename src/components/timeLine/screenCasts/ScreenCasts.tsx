import { Card, Col, Row } from "antd"
import Avatar from "antd/es/avatar"
import Screen from "../../../assets/images/timeline/screenshot.png";
import Keyboard from "../../../assets/icons/Keyboard.svg";
import mouse from "../../../assets/icons/mouse.svg";
import userProfile from '../../../assets/images/timeline/userProfile.png';
import './ScreenCasts.scss'

interface DataType {
    key: string;
    name: string;
    userProfile:String;
    time:String;
    screen:String;
    screenshotNumber:String;
    email:String;
}

const data: DataType[] = [
    {
        key: '1',
        name: 'Esther Howard',
        userProfile: userProfile,
        time:'6:34PM',
        screen:Screen,
        screenshotNumber:'Screen: 1',
        email:'timedoctor.com',
    },
    {
        key: '2',
        name: 'Esther Howard',
        userProfile: userProfile,
        time:'3:45PM',
        screen:Screen,
        screenshotNumber:'Screen: 1',
        email:'timedoctor.com',
    },
    {
        key: '3',
        name: 'Esther Howard',
        userProfile: userProfile,
        time:'7:56PM',
        screen:Screen,
        screenshotNumber:'Screen: 1',
        email:'timedoctor.com',
    },
    {
        key:'4',
        name:'Esther Howard',
        userProfile: userProfile,
        time:'2:12PM',
        screen:Screen,
        screenshotNumber:'Screen: 1',
        email:'timedoctor.com',
    },
];

const ScreenCasts = () => {
    return (
        <>
            <Row gutter={14}>
            {data.map((item) => {
                    return (
                        <Col xxl={6} xl={8} lg={12} md={12} xs={24} style={{marginTop:'20px' }}>
                        <Card className="cardMain" bodyStyle={{ padding: "12px"}}>
                            <div className="cardHeader d-flex" >
                                <div className="d-flex" style={{ alignItems: "center", gap: "10px" }}>
                                    <Avatar src={item.userProfile} />
                                    <span className="fs-16 font-Poppins title-color">{item.name}</span>
                                </div>
                                <div>
                                    <span className="fs-12 font-Poppins title-color">{item.time}</span>
                                </div>
                            </div>
                            <Card className="bgWhite-color innerCard" bodyStyle={{ padding: "15px" }}>
    
    
                                <Row style={{ marginBottom: "13px" }}>
    
                                    <Col xs={24} md={12} xl={12}>
                                        <Avatar src={item.screen} className="ssImage" />
                                    </Col>
                                    <Col xs={24} md={12} xl={12}>
                                        <div style={{ display: "block", marginLeft: "15px" }}>
                                       
                                            <p className="fs-12 font-Poppins title-color" style={{ margin: "15px 0 0 0" }}>Screen: 1</p>
                                            <p className="fs-14 font-Poppins fw-600" style={{ color: "#056906", margin: "0",wordWrap: 'break-word' }}>{item.email}</p>
                                        </div>
                                    </Col>
                                </Row>
    
                                <Row style={{ marginBottom: "13px" }}>
    
                                    <Col span={12} xs={24} md={12} xl={12}>
                                        <Avatar src={item.screen} className="ssImage" />
                                    </Col>
                                    <Col span={12} xs={24} md={12} xl={12}>
                                        <div style={{ display: "block", marginLeft: "15px" }}>
                                            <p className="fs-12 font-Poppins title-color" style={{ margin: "15px 0 0 0" }}>Screen: 2</p>
                                            <p className="fs-14 font-Poppins fw-600" style={{ color: "#056906", margin: "0",wordWrap: 'break-word' }}>{item.email}</p>
                                        </div>
                                    </Col>
                                </Row>
    
                                <Row gutter={8} style={{ marginTop: "18px" }}>
                                    <Col xs={24} md={24} lg={24} xl={12}>
                                        <div className="d-flex cardFooter button-stat-bg" >
                                            <div className="d-flex align-center">
                                                <img width="22px" height="22px"  style={{ marginRight: "10px" }} src={Keyboard} alt="Keyboard" />
                                                <span className="fs-10 font-Poppins title-color">Keyboard</span>
                                            </div>
                                            <div className="fs-10 font-Poppins title-color">
                                                69/100
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={24} md={24} lg={24} xl={12}>
                                        <div className="d-flex cardFooter button-stat-bg" >
                                            <div className="d-flex align-center" >
                                                <img width="22px" height="22px" style={{ marginRight: "10px" }} src={mouse} alt="Mouse" />
                                                <span className="fs-10 font-Poppins title-color">Mouse</span>
                                            </div>
                                            <div className="fs-10 font-Poppins title-color">
                                                69/100
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
    
                            </Card>
                        </Card>
                    </Col>
                    );
                })}
              
            </Row>
        </>
    )
}

export default ScreenCasts
