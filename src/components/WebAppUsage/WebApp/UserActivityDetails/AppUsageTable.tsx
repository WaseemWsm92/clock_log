import {  Progress,Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import {ArrowLeftOutlined } from "@ant-design/icons";
import { AppDailyProgress } from "../../../../mock/web&AppUsageData";
import "../UserTab/UserTab.scss";

interface DataType {
  key: string;
  name: string;
  time: string;
  percentage: number;
}

const AppUsageTable = (props: any) => {
  const { setIsShowAppUsage } = props;

  const columns: ColumnsType<DataType> = [
    {
      title: (
        <span
          className="cursor-pointer"
          style={{ paddingLeft: "4px" }}
          onClick={() => setIsShowAppUsage(true)}
        >
          <ArrowLeftOutlined style={{ marginRight: "18px", fontSize: 16 }} />
          Google
        </span>
      ),
      width:400,
      dataIndex: "Name",
      key: "name",
      // ellipsis: true,

      render: (_: any, text: any) => (
        <div>
          <span className="fs-14 fw-400 title-color">{text.name}</span>
        </div>
      ),
    },
    {
      title: (
        <div className="d-flex">
           <span className="fs-14 fw-400 title-color" style={{ minWidth: "70px" }}> 30h 20m</span>
           <Progress  percent={70} strokeColor={"#2A9D8F"} strokeWidth={6} showInfo={false}/>
        </div>
      ),
      dataIndex: "time",
      key: "time",

      responsive: ["xs", "sm", "md", "lg", "xl", "xxl"],
      render: (_, text) => (
        <div className='d-flex'>
          <span className='fs-14 fw-400 title-color' style={{ minWidth: "70px" }}>{text?.time}</span>
          <Progress  percent={text?.percentage} strokeColor={text?.percentage > 30 ? "#2A9D8F" : "#F4A261"} strokeWidth={6} showInfo={false} />
        </div>
      ),
    },
  ];
  return (
    <div>
      <Table
        className="wrapper-table"
        columns={columns}
        dataSource={AppDailyProgress}
        scroll={{ x: 'max-content' }}
        pagination={{pageSize:4}}
      />
    </div>
  );
};
export default AppUsageTable;
