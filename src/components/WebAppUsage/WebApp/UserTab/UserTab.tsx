import { Input, Row, Col, Space, Avatar, Button } from "antd";
import { Table } from "antd";
import type { ColumnGroupType, ColumnType } from "antd/es/table";
import DropdownIcon from "../../../../assets/icons/reports/webApp/column.svg";
import { RightOutlined, SearchOutlined } from "@ant-design/icons";
import { webUserData } from "../../../../mock/web&AppUsageData";
import { useState } from "react";
import ColumnDropdownWrapper from "../../../../shared/ColumnDropdown";
import "./UserTab.scss";
import dayjs from "dayjs";

export interface DataType {
  key: string;
  name: string;
  profile?: string;
  totalTime: string;
  productive: string;
  productivepercentage: number;
  unproductivity: string;
  unproductivepercentage: number;
  neutral: string;
  neutralpercentage: number;
}
export interface UserTableProps {
  setIsShowUserActivity: (value: boolean) => void;
}
const dropDownOptions = [
  "Name",
  "Total Time",
  "Productive",
  "Productive %",
  "UnProductive",
  "UnProductive %",
  "Neutral",
  "Neutral %",
  "UnRated",
  "UnRated %",
];
const UserTab = (props: any) => {
  const { setIsShowUserActivity } = props;
  const dropdownValues = [
    "Name",
    "Total Time",
    "Productive",
    "Productive %",
    "UnProductive",
    "UnProductive %",
    "Neutral",
    "Neutral %",
  ];
  const [IsShowTableColumns, setIsShowTableColumns] = useState(dropdownValues);

  const UserTableConstants = () => {
    const columns: (ColumnGroupType<DataType> | ColumnType<DataType>)[] = [];
    IsShowTableColumns.includes("Name") &&
      columns.push({
        title: <span style={{ paddingLeft: "30px" }}>Name</span>,
        dataIndex: "Name",
        key: "name",
        width: 250,

        ellipsis: true,
        render: (_: any, text: any) => (
          <Space
            className="cursor-pointer"
            onClick={() => setIsShowUserActivity(false)}
          >
            <RightOutlined style={{ fontSize: 12 }} />
            <span>
              {" "}
              <Avatar src={text.profile} alt="profile" />
            </span>
            <span className="fs-14 fw-400 title-color">{text.name}</span>
          </Space>
        ),
      });
    IsShowTableColumns.includes("Total Time") &&
      columns.push({
        title: "Total Time",
        dataIndex: "totalTime",
        key: "totalTime",
        width: 115,
        render: (text: any) => (
          <span className="fs-14 fw-400 title-color">{text}</span>
        ),
      });

    IsShowTableColumns.includes("Productive") &&
      columns.push({
        title: "Productive",
        dataIndex: "productive",
        key: "productive",
        width: 115,
        render: (text) => (
          <span className="fs-14 fw-400 title-color">{text}</span>
        ),
      });
    IsShowTableColumns.includes("Productive %") &&
      columns.push({
        title: "Productivity %",
        key: "productivepercentage",
        dataIndex: "productivepercentage",
        width: 150,
        render: (text) => (
          <span className="fs-14 fw-400 title-color productivity" style={{
            color: "#2A9D8F",
            backgroundColor: "rgba(42, 157, 143, 0.15)",
            borderRadius: "16px",
            fontSize: "14px",
            width: "100%",
            maxWidth: "60px",
            textAlign: "center",
            padding: "3px 10px",
          }}>
            {text}%
          </span>
        ),
      });
    IsShowTableColumns.includes("UnProductive") &&
      columns.push({
        title: "Unproductivity",
        dataIndex: "unproductivity",
        key: "unproductivity",

        render: (text) => (
          <span className="title-color">{text}</span>
        ),
      });
    IsShowTableColumns.includes("UnProductive %") &&
      columns.push({
        title: "Unproductivity %",
        dataIndex: "unproductivepercentage",
        key: "unproductivepercentage",

        render: (text) => (
          <span className="primary-color" style={{
            color: "#E76F51",
            backgroundColor: "rgba(231, 111, 81, 0.15)",
            borderRadius: "16px",
            fontSize: "14px",
            width: "100%",
            maxWidth: "60px",
            textAlign: "center",
            padding: "3px 10px",
          }}>
            {text}%
          </span>
        ),
      });
    IsShowTableColumns.includes("Neutral") &&
      columns.push({
        title: "Neutral",
        dataIndex: "neutral",
        key: "neutral",

        render: (text) => <span className="fs-14 fw-400 ">{text}</span>,
      });

    IsShowTableColumns.includes("Neutral %") &&
      columns.push({
        title: "Neutral %",
        dataIndex: "neutralpercentage",
        key: "neutralpercentage",

        render: (text) => (
          <span style={{
            color: "#F4A261",
            backgroundColor: "rgba(244, 162, 97, 0.15)",
            borderRadius: "16px",
            fontSize: "14px",
            width: "100%",
            maxWidth: "60px",
            textAlign: "center",
            padding: "3px 10px",
          }}>
            {text}%
          </span>
        ),
      });
    return columns;
  };

  return (
    <div className="user-webapp-wrapper">
      <div className="rightSearch d-flex justify-end" style={{ marginBottom: "20px" }}>
        <span
          className="fs-12 fw-500 d-flex align-center"
          style={{ marginRight: "15px" }}
        >
          {dayjs().format("MMM DD, YYYY")}
        </span>
        <Input
          placeholder="Search by user name"
          className="activitySearch"
          onChange={(e) => console.log(e.target.value)}
          prefix={<SearchOutlined className="site-form-item-icon" />}
          style={{ marginRight: "15px", height: "40px" }}
        />
        <div className="d-flex align-center">
          <ColumnDropdownWrapper
            menuValue={IsShowTableColumns}
            setMenuValue={setIsShowTableColumns}
            options={dropDownOptions}
          >
            <Button className="d-flex align-center column_btn fw-500 btn-theme-color">
              <img src={DropdownIcon} alt="columns" style={{ marginRight: "10px" }} />
              <span style={{ marginLeft: "5px" }}>Column</span>
            </Button>
          </ColumnDropdownWrapper>
        </div>
      </div>
      <Row className="user-column" gutter={[20, 20]}>
        <Col span={24}>
          <div className="user-table  table-dark-theme">
            <Table
              className="wrapper-table"
              columns={UserTableConstants()}
              dataSource={UserTableConstants().length === 0 ? [] : webUserData}
              scroll={{ x: "max-content" }}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default UserTab;
