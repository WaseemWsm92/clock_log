import { useState } from "react";
import { Col, Row } from "antd";
import WebApp from "./WebApp/WebApp";
import WebUsage from "./WebUsage/WebUsage";
import Show from "../../assets/images/reports/webApps/show.svg"
import UserActivityDetails from "./WebApp/UserActivityDetails/UserActivityDetails";
import "./WebAppUsage.scss";


const WebAppUsageUI = () => {
    const [IsShowUsage, setIsShowUsage] = useState(true);
    const { role }: any = JSON.parse(localStorage.getItem("UserData") || "{}");

    return (
        <Row gutter={[{ xs: 8, sm: 16, md: 12, lg: IsShowUsage ? 30 : 0 }, { xs: 8, sm: 16, md: 12, lg: 10 }]} className="webAppUsage">
            {IsShowUsage && <Col className="gutter-row " xs={24} sm={24} lg={24} xl={7} xxl={8}>
                <div className=" webCommon border-radius-8 header-bg" style={{ minHeight: "750px", padding: "1rem" }}>
                    <WebUsage setIsShowUsage={setIsShowUsage} />
                </div>
            </Col>}
            {!IsShowUsage && <Col xs={23} xxl={1} xl={2} >
                <div className=" border-radius-8 d-flex justify-center align-center icon-hover-color cursor-pointer"   >
                    <img src={Show} alt="" className="cursor-pointer white-image " onClick={() => setIsShowUsage(true)} />
                </div>
            </Col>
            }
            {role === 'Employee' ? <Col xs={24} sm={24} lg={24} xl={IsShowUsage ? 17 : 23} xxl={IsShowUsage ? 16 : 22}>
                <div className=" webCommon border-radius-8 header-bg" style={{ minHeight: "750px", padding: "1rem" }}>
                    < UserActivityDetails />
                </div>
            </Col> : <Col className="gutter-row " xs={24} sm={24} lg={24} xl={IsShowUsage ? 17 : 23} xxl={IsShowUsage ? 16 : 22} >
                    <div className=" webCommon border-radius-8 header-bg" style={{ height: "100%" }}> <WebApp /></div>
            </Col>
            }
        </Row>
    );
};

export default WebAppUsageUI;
