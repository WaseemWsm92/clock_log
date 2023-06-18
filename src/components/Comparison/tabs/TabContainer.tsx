import { Row, Col, Layout } from "antd";
import { FC } from "react";
import { TasksIcon, webIcon, usageArrowIcon, attendanceIcon, balanceIcon, membersIcon, teamAbsenceIcon, projectIcon } from "../../../assets/export";
import { taskList, WorkBalanceData, cardsList, list, usersList, teamAbsence, usagecardTopData, usageData, members } from "../../../mock/comparison";
import AttendanceCard from "../cards/AttendanceCard";
import ListCard from "../cards/ListCard";
import MembersCard from "../cards/MembersCard";
import TaskCard from "../cards/TaskCard";
import TeamAbsence from "../cards/TeamAbsence";
import TimeCard from "../cards/TimeCard";
import UsageCard from "../cards/UsageCard";
import UserCard from "../cards/UserCard";
import WorkBalanceCard from "../cards/WorkBalanceCard";

const TabContainer: FC<{ selectedTab: string }> = (props) => {
  const { selectedTab } = props;
  return (
    <div className="col-wrapper">
      <Row gutter={[30, 28]}>
        {cardsList?.map(({ icon, title, value, color, progressValue }) => (
          <Col style={{ flexBasis: "50%" }} flex={1} key={title}>
            <TimeCard icon={icon} title={title} value={value} color={color} progressValue={progressValue} />
          </Col>
        ))}
        <Col flex={1}>
          <ListCard icon={projectIcon} title={"projects"} color={"#49416D"} list={list} />
        </Col>
        <Col flex={1}>
          <TaskCard icon={TasksIcon} title={"tasks"} color={"#267E7E"} taskList={taskList} />
        </Col>
      </Row>
      {selectedTab === "teams" && (
        <Layout style={{ marginTop: 30, borderRadius:'9px' }}>
          <MembersCard icon={membersIcon} title={"members"} count={5} color={"#2A9D8F"} members={members} />
        </Layout>
      )}
      <Layout style={{ marginTop: 30, borderRadius:'9px' }}>
        <UsageCard title="web & app usage" icon={webIcon} subIcon={usageArrowIcon} data={usagecardTopData} usageData={usageData} color="#4273F2" />
      </Layout>
      {selectedTab === "teams" && (
        <>
          <Layout style={{ marginTop: 30, borderRadius:'9px' }}>
            <UserCard usersList={usersList} />
          </Layout>
          <Layout style={{ marginTop: 30, borderRadius:'9px' }}>
            <TeamAbsence icon={teamAbsenceIcon} title={"Team Absence"} count={5} color={"#FF4D4F"} teamAbsenceList={teamAbsence} />
          </Layout>
        </>
      )}
      {selectedTab === "users" && (
        <Layout style={{ marginTop: 30, borderRadius:'9px' }}>
          <AttendanceCard title="Attendance" icon={attendanceIcon} color="#FF4D4F" />
        </Layout>
      )}
      <Layout style={{ marginTop: 30, borderRadius:'9px' }}>
        <WorkBalanceCard icon={balanceIcon} title={"Workload Balance"} color={"#37B4A4"} WorkBalanceData={WorkBalanceData} selectedTab={selectedTab} />
      </Layout>
    </div>
  );
};

export default TabContainer;
