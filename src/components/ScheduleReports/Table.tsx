import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import { Popover, Table, Avatar, Switch, Row, Col, Button, Space, Dropdown, MenuProps } from "antd";
import { AntDesignOutlined, UserOutlined } from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";
import { DataType } from "../../types/ScheduleReports";
import { data } from "../../mock/ScheduleReports";
import Bin from "../../assets/icons/deleteIcon.svg";
import Dots from "../../assets/icons/dots.png"
import DeleteIcon from "../../assets/icons/delete-light.png";
import DeleteModal from "./DeleteModal";
import ResetUser from "./ResetUser";
import DropdownWrapper from "./DropDown";
import ScheduleReportsModal from "../../shared/ScheduleReports/index";
import "./scheduleReports.scss";

function ScheduleReports() {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const [isSelectedAll, setIsSelectedAll] = useState(false)
  const [resetUser, setResetUser] = useState(false);
  const [rowData, setRowData] = useState(data);
  const [rowIndex, setRowIndex] = useState<any>()
  const items: MenuProps["items"] = [
    {
      label: (
        <div>
          <ScheduleReportsModal isCustomButton={true} />
        </div>
      ),
      key: "1",
    },
    {
      label: (
        <div style={{ alignItems: "center", display: "flex", gap: "8px", paddingTop: "10px", paddingBottom: "5px" }} onClick={() => { setDeleteModal(true) }}>
          <img src={Bin} height={18} width={16} alt="delete" />
          <p>Delete</p>
        </div>
      ),
      key: "2",
    },
  ];

  // =============== Table actions popover =====================

  // =============== Avatar array users details =====================
  const UsersDetailsData = [{ email: "mubashir.yusuf@ceative.co.uk" }, { email: "abdullah.sarwar@ceative.co.uk" }, { email: "ali.hassan@ceative.co.uk" }, { email: "azeem.aslam@ceative.co.uk" }];
  const UsersContent = (
    <Row gutter={[10, 10]} className="popOverUsersMenu">
      {UsersDetailsData.map((data: any) => {
        return (
          <Col key={uuidv4()} xs={24} sm={10} md={10}>
            <span className="cursor-pointer">{data?.email}</span>
          </Col>
        );
      })}
    </Row>
  );
  // ================== Switch function =====================
  const onSwitchChange = (checked: boolean, record: any) => {
    setResetUser(true)
    const newData = [...data];
    const index = newData.findIndex((item) => record.key === item.key);
    setRowIndex(index)
    if (index > -1) {
      newData[index].active = checked;
      setRowData(newData);
    }
  };

  // ===================== Table columns and row selection functions=====================
  const columns: ColumnsType<DataType> = [
    {
      title: "Scheduled Report",
      dataIndex: "scheduleReport",
    },
    {
      title: "Report",
      dataIndex: "report",
      render: (_: DataType, data) => (
        <Link to={data.path} style={{ textDecoration: "underline" }}>
          {data.report}
        </Link>
      ),
    },
    {
      title: "Recipients",
      dataIndex: "recipients",
      render: () => (
        <Popover arrow={false} className="actions_popover" placement="bottomLeft" content={UsersContent} trigger="click">
          <div>
            <Avatar.Group
              className="cursor-pointer"
              maxCount={3}
              maxStyle={{
                color: "#f56a00",
                backgroundColor: "#fde3cf",
                cursor: "pointer",
              }}
            >
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              <Avatar style={{ backgroundColor: "#f56a00" }}>K</Avatar>
              <Avatar style={{ backgroundColor: "#87d068" }} icon={<UserOutlined />} />
              <Avatar style={{ backgroundColor: "#1890ff" }} icon={<AntDesignOutlined />} />
            </Avatar.Group>
          </div>
        </Popover>
      ),
    },
    {
      title: "Delivery Frequency",
      dataIndex: "deliveryFrequency",
    },
    {
      title: "Delivery Time",
      dataIndex: "deliveryTime",
    },
    {
      title: "File Type",
      dataIndex: "fileType",
    },
    {
      title: "Active",
      dataIndex: "active",
      render: (active: boolean, record: any) => <Switch checked={active} className="theme-checkbox" onChange={(checked: any) => onSwitchChange(checked, record)} />,
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: () => (
        <span className="fs-12 fw-400 line-height-18 title-color">
          <Dropdown
            menu={{ items }}
            placement="bottomRight"
            trigger={["click"]}
            overlayClassName="actionDropDownScheduled"
          >
            <Space>
              <div className="border-color cursor-pointer">
                <img src={Dots} alt="menu" />
              </div>
            </Space>
          </Dropdown>
        </span>
      ),
    },
  ];
  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <div className="schedule_reports">      <Row>        {selectedRowKeys.length >= 1 && (
      <Button
        type="primary"
        shape="circle"
        className="del_btn"
        onClick={() => {
          setIsSelectedAll(true);
        }}
        icon={<img src={DeleteIcon} alt="del_icon" />}
      />)}
      <Space style={{ margin: "0px 0px 20px 0px" }}>          <DropdownWrapper />        </Space>      </Row>      <Table scroll={{ x: `max-content` }} className="wrapper-table" rowSelection={rowSelection} columns={columns} dataSource={rowData} />     <DeleteModal deleteModal={deleteModal} setDeleteModal={setDeleteModal} isSelectedAll={isSelectedAll} setIsSelectedAll={setIsSelectedAll} />      {resetUser && <ResetUser rowData={rowData} resetUser={resetUser} setResetUser={setResetUser} rowIndex={rowIndex} />}
    </div>);
}

export default ScheduleReports;
