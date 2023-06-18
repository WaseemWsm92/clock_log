import { Input, Progress, Table } from "antd";
import { RightOutlined, SearchOutlined } from "@ant-design/icons";
import type { ColumnGroupType, ColumnType } from "antd/es/table";
import searchIcon from "../../assets/icons/search-icon.svg";
interface DataType {
  key: string;
  allTasks: string;
  time: string;
  strockColor: string;
  progress: number;
}
interface Props {
  setProjectDetails: any;
  IsShowTableColumns: any;
}
const TasksTable = (props: Props) => {
  const { setProjectDetails, IsShowTableColumns } = props;

  const data: DataType[] = [
    {
      key: "1",
      allTasks: "Web And App Designs",
      time: "30h 10m",
      progress: 90,
      strockColor: "#F4A261",
    },
    {
      key: "2",
      allTasks: "Company Settings",
      time: "10h 20m",
      progress: 30,
      strockColor: "#2A9D8F",
    },
    {
      key: "3",
      allTasks: "Activity Log",
      time: "4h 1m",
      progress: 20,
      strockColor: "#FF4D4F",
    },
    {
      key: "4",
      allTasks: "Users",
      time: "10h 20m",
      progress: 50,
      strockColor: "#F4A261",
    },
    {
      key: "5",
      allTasks: "Reports",
      time: "4h 1m",
      progress: 10,
      strockColor: "#FF4D4F",
    },
  ];
  const UserTableConstants = () => {
    const columns: (ColumnGroupType<DataType> | ColumnType<DataType>)[] = [];
    IsShowTableColumns.includes("Completed Task") &&
      columns.push({
        title: "Completed Task",
        dataIndex: "allTasks",
        key: "allTasks",
        width: 350,
        render: (_: any, data) => (
          <div className="cursor-pointer" onClick={() => setProjectDetails({ isToggled: true, name: data?.allTasks })}>
            <RightOutlined style={{ marginRight: "10px" }} />
            {data?.allTasks}
          </div>
        ),
      });
    IsShowTableColumns.includes("To-Do Task") &&
      columns.push({
        title: "To-Do Task",
        dataIndex: "allTasks",
        key: "allTasks",
        width: 350,
        render: (_: any, data) => (
          <div className="cursor-pointer" onClick={() => setProjectDetails({ isToggled: true, name: data?.allTasks })}>
            <RightOutlined style={{ marginRight: "10px" }} />
            {data?.allTasks}
          </div>
        ),
      });
    IsShowTableColumns.includes("Review Task") &&
      columns.push({
        title: "Review Task",
        dataIndex: "allTasks",
        key: "allTasks",
        width: 350,
        render: (_: any, data) => (
          <div className="cursor-pointer" onClick={() => setProjectDetails({ isToggled: true, name: data?.allTasks })}>
            <RightOutlined style={{ marginRight: "10px" }} />
            {data?.allTasks}
          </div>
        ),
      });
    IsShowTableColumns.includes("In-Progress") &&
      columns.push({
        title: "In-Progress",
        dataIndex: "allTasks",
        key: "allTasks",
        width: 350,
        render: (_: any, data) => (
          <div className="cursor-pointer" onClick={() => setProjectDetails({ isToggled: true, name: data?.allTasks })}>
            <RightOutlined style={{ marginRight: "10px" }} />
            {data?.allTasks}
          </div>
        ),
      });
    IsShowTableColumns.includes("All Task") &&
      columns.push({
        title: "All Task",
        dataIndex: "allTasks",
        key: "allTasks",
        width: 350,
        render: (_: any, data) => (
          <div className="cursor-pointer" onClick={() => setProjectDetails({ isToggled: true, name: data?.allTasks })}>
            <RightOutlined style={{ marginRight: "10px" }} />
            {data?.allTasks}
          </div>
        ),
      });
    IsShowTableColumns.includes("Time") &&
      columns.push({
        title: "Time",
        dataIndex: "time",
        key: "time",
        width: 400,
        render: (_: any, data) => (
          <div className="d-flex" >
            <div className="time" style={{ minWidth: "80px" }}>
              {data?.time}
            </div>
            <Progress style={{ width: "520px" }} percent={data.progress} strokeColor={data.strockColor} showInfo={false} />
          </div>
        ),
      });

    return columns;
  };
  return (
    <>
      <div className="search_input" style={{ display: "flex", float: "right", margin: "20px 0px" }}>
        <Input width={260} style={{ height: "40px" }} className="tasksSearch custom-input-field" placeholder="Search By Task" prefix={<img src={searchIcon} alt="search" />}></Input>
      </div>
      <Table columns={UserTableConstants()} className="wrapper-table" dataSource={data} scroll={{ x: "max-content" }} pagination={false} />
    </>
  );
};
export default TasksTable;
