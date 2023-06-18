import { Card, Layout, Tooltip } from "antd";
import AttendanceSummaryImage from "../../assets/icons/Dashboard/attendance-summary.png";
import Absents from "../../assets/icons/Dashboard/absents.png";
import Lates from "../../assets/icons/Dashboard/lates.svg";
import { Col, Row } from "antd";
import infocircle from "../../assets/icons/Dashboard/infocircle.svg";
import "./AdminDashboard.scss";
import "../../sass/common.scss";


export const AttendanceDashboard = (props: any) => {
  // const { snackbar} = useAppSelector(state=>state)

  return (
    <Layout className="dashboard bg-unset">
      {/* {snackbar?.show && <Snackbar />} */}

      {props.selectedOptions.includes("Attendance Summary") && (
        <Card
          className="attendance-summary-card border-radius-8 card-bg-color"
          bordered={false}
          style={{ minHeight: "180px", backgroundColor: "inherit" }}>
          <div style={{ display: "flex" }}>
            <p className="fw-600 m-0 attendance-summary-text title-color fs-16 "
            >
              Attendance Summary{" "}
             </p>
            <Tooltip overlayClassName="tooltip-dashboard theme-dark-tooltip" overlayStyle={{
              width: '282px', height: "58px", borderRadius: "4px" }} placement='right' title={<span className="fw-400 fs-14">Summarized view of the attendance for the selected date.</span>}>
            <img className="white-img-theme-class cursor-pointer" src={infocircle} alt="info_icon" style={{ marginLeft: '5px',zIndex:1 }} />
      </Tooltip>
           
          </div>

          <Row gutter={[16, 16]}>
            <Col
              xs={24}
              sm={8}
              style={{ marginTop: "23px" }}
              className="center border-sumamry"
            >
              <div className="attendance-image  text-center  green">
                <img src={AttendanceSummaryImage} alt="attendance" />
              </div>
              <div className="present-div grey-color fs-14">Present</div>
              <div className="custom-div grey-color fw-500 fs-24">24</div>
            </Col>

            <Col
              xs={24}
              sm={8}
              style={{ marginTop: "23px" }}
              className="center border-sumamry"
            >
              <div className="attendance-image text-center  red">
                <img src={Absents} alt="absents" />
              </div>
              <div className="present-div grey-color fs-14">Absents</div>
              <div className="custom-div grey-color fw-500 fs-24">00</div>
            </Col>
            <Col
              xs={24}
              sm={8}
              style={{ marginTop: "23px" }}
              className="center late-card"
            >
              <div className="attendance-image text-center  yellow">
                <img src={Lates} alt="lates" />
              </div>
              <div className="present-div grey-color fs-14">Lates</div>
              <div className="custom-div grey-color fw-500 fs-24">03</div>
            </Col>
          </Row>
        </Card>
      )}
    </Layout>
  );
};
