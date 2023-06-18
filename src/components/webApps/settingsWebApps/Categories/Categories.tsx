
import React, { useState } from "react";
import { Button, Col, Input, Row, Table, MenuProps, Space, Dropdown } from "antd";

import AddModal from "./AddModal";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";
import AddCategory from "../../../../assets/images/WebApp/AddCategory.png";
import EditCategory from "../../../../assets/images/WebApp/allDelete.png";
import Dots from "../../../../assets/icons/dots.png";
import searchIcon from "../../../../assets/icons/search-icon.svg";
import { data } from "../../../../mock/CategoriesWebApps";
import { DataType } from "../../../../types/CategoriesWebApps";
import type { ColumnsType } from "antd/es/table";
import './Categories.scss';
import editIcon from "../../../../assets/icons/editicondropdown.svg";
import deleteIconselect from "../../../../assets/icons/deleteIcon.svg";

const Categories = (props: any) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [addCategory, setAddCategory] = useState<boolean>(false);
  const [editCategory, setEditCategory] = useState<boolean>(false);
  const [deleteModal, setDeleteModal] = useState<boolean>(false);

  const items: MenuProps["items"] = [
    {
      label: (
        <Space
          onClick={() => setEditCategory(true)}
        >
          <img src={editIcon} alt="edit" className="d-flex align-center" height={18} width={16} />
          <span className="m-0">Edit</span>
        </Space>
      ),
      key: "1",
    },
    {
      label: (
        <Space onClick={() => { setDeleteModal(true) }}>
          <img src={deleteIconselect} className="d-flex align-center" alt="delete" height={18} width={16} />
          <span>Delete</span>
        </Space>
      ),
      key: "2",
    },
  ];

  const columns: ColumnsType<DataType> = [
    {
      title: "Sr.no",
      dataIndex: "Srno",
    },
    {
      title: "Category",
      dataIndex: "Category",
    },
    {
      title: "Services",
      dataIndex: "Services",
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
      <div style={{ marginBottom: 16 }} className="webAppCategories">
        <div>
          <Row className="table_header">
            <Col xs={24} md={12} className="btn-wrapper">
              {selectedRowKeys.length >= 1 && (
                <Button
                  className="all_del_btn d-flex align-items-center justify-center" onClick={() => { setDeleteModal(true) }}>
                  <img src={EditCategory} alt="EditCategory" />
                </Button>)}
              <Button
                className="add_btn btn-theme-color"
                onClick={() => { setAddCategory(true) }}>
                <img src={AddCategory} alt="AddCategory" /> <span> Add Category</span>
              </Button>
            </Col>
            <Col xs={24} md={4} className="search_wrapper">
              <Input prefix={<img src={searchIcon} alt="settings" />} className="custom-input-field" placeholder="Search" />
            </Col>
          </Row>
        </div>
      </div>
      <Table scroll={{ x: 768 }} rowSelection={rowSelection} columns={columns} dataSource={data} className="wrapper-table" />
      {addCategory && <AddModal addCategory={addCategory} setAddCategory={setAddCategory} />}
      {editCategory && <EditModal editCategory={editCategory} setEditCategory={setEditCategory} />}
      {deleteModal && <DeleteModal deleteModal={deleteModal} setDeleteModal={setDeleteModal} />}
    </div>
  )
}

export default Categories
