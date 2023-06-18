import React, { Fragment, useState } from "react";
import { Button, Col, Input, Row, Table, Dropdown, Space } from "antd";
import AddModal from "./AddModal";
import DeleteModal from "./DeleteModal";
import AddDistraction from "../../assets/icons/add_distraction.png";
import searchIcon from "../../assets/icons/search-icon.svg";
import Edit from "../../assets/icons/edit.png";
import Bin from "../../assets/icons/deleteIcon.svg";
import Dots from "../../assets/icons/dots.png";
import DeleteIcon from "../../assets/icons/delete-light.png";
import { data } from "../../mock/DistractionAlerts";
import { DataType } from "../../types/DistractionAlert";
import type { ColumnsType } from "antd/es/table";
import type { MenuProps } from "antd";
import "./distractionAlerts.scss";

const DistractionTable: React.FC = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [addDistraction, setAddDistraction] = useState<{
    isToggle: boolean;
    id: string;
  }>({ isToggle: false, id: "" });
  const [deleteModal, setDeleteModal] = useState<boolean>(false);


  const items: MenuProps["items"] = [
    {
      label: (
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }} onClick={() => { setAddDistraction({ isToggle: true, id: "Edit" }) }}>
          <img src={Edit} alt="edit" width={18} height={18} />
          <p>Edit</p>
        </div>
      ),
      key: "1",
    },
    {
      label: (
        <div style={{ display: "flex", alignItems: "center", gap: "8px", paddingTop: "10px" }} onClick={() => { setDeleteModal(true) }}>
          <img src={Bin} alt="delete" width={16} height={18} />
          <p>Delete</p>
        </div>
      ),
      key: "2",
    },
  ];

  // ===================== Table columns and row selection functions=====================
  const columns: ColumnsType<DataType> = [
    {
      title: "Distraction Name",
      dataIndex: "distractionName",
    },
    {
      title: "Condition",
      dataIndex: "condition",
    },
    {
      title: "Description",
      dataIndex: "description",
    },
    {
      title: "Select Users",
      dataIndex: "selectUsers",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: () => (
        <span className="fs-12 fw-400 line-height-18 title-color">
          <Dropdown
            menu={{ items }}
            placement="bottomRight"
            trigger={["click"]}
            overlayClassName="distraction-alerts-dropdown"
            className="actionDropDown "
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
    <Fragment>
      <div className="distraction_alert">
        <Row className="table_header d-flex justify-between">
          <Col xs={24} md={12} className="btn-wrapper">
            {selectedRowKeys.length >= 1 && (
              <Button
                type="primary"
                shape="circle"
                className="del_btn"
                onClick={() => {
                  setDeleteModal(true);
                }}
                icon={<img src={DeleteIcon} alt="del_iocn" />}
              />
            )}
            <Button
              className="add_btn align-items-center d-flex  btn-theme-color" style={{ borderColor: "transparent" }}
              icon={<img className="white-img-theme-class" src={AddDistraction} height={18} width={18} alt="add_distraction" />}
              onClick={() => {
                setAddDistraction({ isToggle: true, id: "Add" });
              }}
            >
              <span className="fw-500 fs-16"> Add Distraction</span>
            </Button>
          </Col>
          <Col xs={24} md={12} className="search_wrapper">
            <Input className="activitySearch" prefix={<img src={searchIcon} alt="search" />} placeholder="Serach by Distraction Name" style={{ height: "40px" }} />
          </Col>
        </Row>
      </div>
      <Table scroll={{ x: `max-content` }} className="wrapper-table" rowSelection={rowSelection} columns={columns} dataSource={data} />
      {addDistraction && <AddModal addDistraction={addDistraction} setAddDistraction={setAddDistraction} />}
      {deleteModal && <DeleteModal deleteModal={deleteModal} setDeleteModal={setDeleteModal} />}
    </Fragment>
  );
};

export default DistractionTable;
