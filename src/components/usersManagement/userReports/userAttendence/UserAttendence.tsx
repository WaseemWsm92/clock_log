import { Row } from "antd";
import userImage from "../../../../assets/images/users/user-1.svg";
import DateRangePickerComp from "../../../../shared/datePicker/DatePicker";
import AttendanceTable from "../../../Attendance/AttendanceTable/AttendanceTable";
import TabCard from "../../../Attendance/TabCard/TabCard";
import "./style.scss";

const UserAttendence = () => {
  return (
    <div className="user-attendence-wrapper">
      <div className="user-info">
        <div className="user-details">
          <img
            src={userImage}
            alt="user"
            width="40px"
            height="40px"
            className="border-radius-50"
          />
          <div className="user-name-email">
            <h2 className="fs-16 fw-600 title-color m-0">Tayyaba Gul</h2>
            <p className="email m-0">Allan john@ceative.co.uk</p>
          </div>
        </div>
        <div className="time-stamp">
            <DateRangePickerComp />
            <p className="fs-12 fw-400 m-0 line-height-16 date">March 13, 2022 &mdash; March 19, 2022</p>
          </div>
      </div>
      {/* My Tab Cards */}
      <Row>
        <TabCard />
      </Row>

      {/* My Attendance Table */}
      <Row style={{ marginTop: "1.5rem" }}>
        <AttendanceTable />
      </Row>
    </div>
  );
};

export default UserAttendence;
