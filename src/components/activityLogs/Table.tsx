import { Avatar, Space, Table } from "antd";
import type { ColumnGroupType, ColumnType } from "antd/es/table";
import { useEffect, useState } from "react";
import {
  ActivityLogsTableData,
  DataType,
  renderBackgroundColor,
  renderColor,
} from "../../mock/ActivityLogs-MockData";
import "../../sass/common.scss";
import "./activityLogs.scss";

interface Props {
  IsShowTableColumns: any;
  user: string;
}
const ActivityLogsTable = (props: Props) => {
  const { IsShowTableColumns, user } = props;

  const [userActivityLog, setUserActivityLog] = useState(ActivityLogsTableData);

  const UserTableConstants = () => {
    const columns: (ColumnGroupType<DataType> | ColumnType<DataType>)[] = [];
    IsShowTableColumns.includes("ID-Name") &&
      columns.push({
        title: "Name",
        dataIndex: "name",
        key: "name",
        width: 280,
        // ellipsis: true,
        render: (_: any, text: any) => (
          <Space className="cursor-pointer">
            <span>
              <Avatar src={text.profile} alt="profile" />
            </span>
            <span className="fs-14 fw-400 title-color">{text.name}</span>
          </Space>
        ),
      });
    IsShowTableColumns.includes("Date/Time") &&
      columns.push({
        title: "Date/Time",
        dataIndex: "date",
        key: "date",
        width: 220,
      });
    IsShowTableColumns.includes("Web/App Name") &&
      columns.push({
        title: "Web/App Name",
        dataIndex: "web",
        key: "web",
        width: 240,
      });
    IsShowTableColumns.includes("Description") &&
      columns.push({
        title: "Description",
        dataIndex: "description",
        key: "description",
        width: 320,
      });
    IsShowTableColumns.includes("URLs") &&
      columns.push({
        title: "URL",
        dataIndex: "url",
        key: "url",
        width: 220,
        render: (text) => <a>{text}</a>,
      });
    IsShowTableColumns.includes("Duration") &&
      columns.push({
        title: "Duration",
        dataIndex: "duration",
        key: "duration",
        width: 150,
      });
    IsShowTableColumns.includes("Productivity Status") &&
      columns.push({
        title: "Productivity Status",
        key: "status",
        dataIndex: "status",
        width: 250,
        // ellipsis: true,
        render: (status) => (
          <p
            style={{
              color: renderColor[status],
              backgroundColor: renderBackgroundColor[status],
              borderRadius: "13px",
              padding: "5.5px 10px",
              width: "100%",
              maxWidth: "fit-content",
              textAlign: "center",
              fontSize: "14px",
              margin:0
            }}
          >
            {status}
          </p>
        ),
      });
    IsShowTableColumns.includes("Idle Minutes %") &&
      columns.push({
        title: "Idle Minutes %",
        dataIndex: "idleMinutesP",
        key: "idleMinutesP",
        width: 220,
      });
    IsShowTableColumns.includes("Idle Minutes") &&
      columns.push({
        title: "Idle Minutes",
        dataIndex: "idleMinutes",
        key: "idleMinutes",
        width: 220,
      });
    IsShowTableColumns.includes("Manually Added Time %") &&
      columns.push({
        title: "Manually Added Time %",
        dataIndex: "manualTimeP",
        key: "manualTimeP",
        width: 220,
      });
    IsShowTableColumns.includes("Manually Added Time") &&
      columns.push({
        title: "Manually Added Time",
        dataIndex: "manualTime",
        key: "manualTime",
        width: 220,
      });

    return columns;
  };

  useEffect(() => {
    if (user) {
      const filteredData = ActivityLogsTableData?.filter((item: any) => item?.name === user);
      setUserActivityLog(filteredData);
    }
  },[]);

  return (
    <div className="ActivityTable">
      <Table
        columns={UserTableConstants()}
        className="wrapper-table"
        dataSource={UserTableConstants().length === 0 ? [] : userActivityLog}
        scroll={{ x: UserTableConstants().length !== 0 ? "max-content" : "" }}
        tableLayout="fixed"
        pagination={{ pageSize: 10 }}
      />
    </div>
  );
};
export default ActivityLogsTable;
