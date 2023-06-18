
import React, { useState } from "react";
import { Button, Col, Input, Row, Table, Popover, Select, Switch, MenuProps, Space, Dropdown } from "antd";
import AddModal from "./AddModal";
import EditModal from "./EditModal";
import AddExceptions from "../../../../assets/images/WebApp/AddExceptions.png";
import EditCategory from "../../../../assets/images/WebApp/allDelete.png";
import Dots from "../../../../assets/icons/dots.png";
import searchIcon from "../../../../assets/icons/search-icon.svg";

import { data } from "../../../../mock/ExceptionsWebApps";
import { DataType } from "../../../../types/ExceptionsWebApps";
import type { ColumnsType } from "antd/es/table";
import editIcon from "../../../../assets/icons/editicondropdown.svg";
import deleteIconselect from "../../../../assets/icons/deleteIcon.svg";
import './Exceptions.scss'
import ActionModal from "../../../../shared/actionModal/actionModal";
import DeleteIcon from "../../../../assets/icons/deleteIcon.svg";


const Exceptions = (props: any) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [addCategory, setAddCategory] = useState<boolean>(false);
  const [editCategory, setEditCategory] = useState<boolean>(false);
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const [tableData, setTableData] = useState(data);

  const items: MenuProps["items"] = [
    {
      label: (
        <Space
          onClick={() => setEditCategory(true)}
        >
          <img src={editIcon} alt="edit" className="d-flex align-center" height={18} width={16} />
          <span className="m-0">Edit</span>
        </Space>),
      key: "1",
    },
    {
      label: (
        <Space onClick={() => { setDeleteModal(true) }}>
          <img src={deleteIconselect} className="d-flex align-center" alt="delete" height={18} width={16} />
          <span>Delete</span>
        </Space>),
      key: "2",
    },
  ];

  const columns: ColumnsType<DataType> = [
    {
      title: "Sr.no",
      dataIndex: "Srno",
    },
    {
      title: "Name",
      dataIndex: "Name",
    },
    {
      title: "User",
      dataIndex: "User",
    },
    {
      title: "Services",
      dataIndex: "Services",
    },
    {
      title: "Productivity Status",
      dataIndex: "ProductivityStatus",
      width: "200px",
      render: (_, record) => (
        <>
          <div className={`ProductivityStatusExceptions ${record.ProductivityStatus === 'Neutral' ? 'NeutralStatus' : record.ProductivityStatus === 'Productive' ? 'ProductiveStatus' : record.ProductivityStatus === 'Unproductive' ? 'UnproductivelStatus' : "ProductivityStatusTagged"}`}>
            <Select value={record.ProductivityStatus || "Select Status"} onChange={(value) => handleSelectChange(value, record)} placeholder="Select Status" >
              {options.map(option => (<Select.Option key={option.value} value={option.value} style={{ backgroundColor: option.value === 'Neutral' ? '#EBEAEA' : option.value === 'Productive' ? '#D9FFDA' : option.value === 'Unproductive' ? '#FFCBCB' : "", borderRadius: '25px', width: 'fit-content', marginTop: "10px", color: option.value === 'Neutral' ? '#4E4B66' : option.value === 'Productive' ? '#0FBE16' : option.value === 'Unproductive' ? '#FF3737' : "" }}>
                {option.label}
              </Select.Option>))}
            </Select>
          </div>
        </>
      ),
    },
    {
      title: "Enable/Disable",
      dataIndex: "EnableDisable",
      render: () => (
        <Switch defaultChecked rootClassName="theme-checkbox" />
      ),
    },
    {
      title: "Action",
      dataIndex: "action",
      render: () => (
        <div>
          <Dropdown
            menu={{ items }}
            placement="bottomLeft"
            trigger={["click"]}
            overlayClassName="actionDropDownBlocking my-dropdown-blocking"
            overlayStyle={{ borderRadius: '4px' }}
          >
            <Space>
              <div className="border-color cursor-pointer">
                <img src={Dots} alt="ElpiseIcon" />
              </div>
            </Space>
          </Dropdown>
        </div>
      ),
    },
  ];

  const options = [
    {
      value: 'Neutral',
      label: 'Neutral',
    },
    {
      value: 'Productive',
      label: 'Productive',
    },
    {
      value: 'Unproductive',
      label: 'Unproductive',
    },
  ]
  const handleSelectChange = (value: any, selectedRecord: any) => {
    let temp = [...tableData]
    temp = temp.map((ele) => {
      if (ele.key == selectedRecord.key) {
        ele.ProductivityStatus = value
      }
      return ele
    })
    setTableData(temp)
  }


  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  return (
    <div>
      <div style={{ marginBottom: 16 }} className="webAppExceptions">
        <div>
          <Row className="table_header">
            <Col md={12} className="btn-wrapper">
              {selectedRowKeys.length >= 1 && (
                <Button
                  className="all_del_btn d-flex align-items-center" onClick={() => { setDeleteModal(true) }}>
                  <img src={EditCategory} alt="EditCategory" />
                </Button>)}
              <Button
                className="add_btn b d-flex align-items-center btn-theme-color"
                onClick={() => { setAddCategory(true) }}>
                <img src={AddExceptions} alt="AddCategory" /> <span> Add Exception</span>
              </Button>
            </Col>
            <Col xs={24} md={4} className="search_wrapper">
              <Input className="grey-color custom-input-field" prefix={<img src={searchIcon} alt="settings" />} placeholder="Search" />
            </Col>
          </Row>
        </div>
      </div>
      <Table scroll={{ x: 768 }} rowSelection={rowSelection} columns={columns} dataSource={data} className="wrapper-table" />
      <AddModal addCategory={addCategory} setAddCategory={setAddCategory} />
      <EditModal editCategory={editCategory} setEditCategory={setEditCategory} />
      {/* {deleteModal && <DeleteModal deleteModal={deleteModal} setDeleteModal={setDeleteModal} />} */}
      <ActionModal isModalOpen={deleteModal}
        setOpenModal={setDeleteModal}
        submitHandler={() => { }}
        actionClass='delete-btn-bg-color' actionText='Delete' mainText='Are you Sure? ' secondaryText=' Do you want to delete this?' image={DeleteIcon}
      />
    </div>
  )
}

export default Exceptions
