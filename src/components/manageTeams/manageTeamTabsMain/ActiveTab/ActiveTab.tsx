import React, { useState } from "react";
import type { ColumnsType } from "antd/es/table";
import { Avatar, Dropdown, Space, Table, Input, Row, Col, Tabs } from "antd";
import { AntDesignOutlined } from "@ant-design/icons";
import Dots from "../../../../assets/icons/dots.png"
import editIcon from '../../../../assets/icons/settings/team/edit.svg';
import deleteImage from '../../../../assets/icons/settings/team/delete.svg';
import deleteIcon from '../../../../assets/icons/deleteIcon.svg';
import archiveIcon from '../../../../assets/icons/settings/team/archive.svg';
import memberOne from "../../../../assets/images/team/memberOne.png";
import memberTwo from "../../../../assets/images/team/memberTwo.png";
import memberThree from "../../../../assets/images/team/memberThree.png";
import managerAvtar from "../../../../assets/icons/settings/team/manager.svg";
import addTeam from "../../../../assets/icons/settings/team/addTeam.svg";
import activeTeamImg from "../../../../assets/icons/settings/team/activeTeamImg.svg";
import ArchiveImage from '../../../../assets/icons/archiveIcon.svg';
import AllArchiveIcon from "../../../../assets/icons/settings/team/archiveIconWithbg.svg";
import AllDeleteIcon from "../../../../assets/icons/settings/team/deleteIconWithbg.svg";
import searchIcon from "../../../../assets/icons/search-icon.svg";
import Members from "../members/Members";
import Projects from "../projects/Projects";
import EditModal from "../editModal/EditModal";

import { ActiveData } from "../TabsData";
import CreateTeamModal from "./CreateTeamModal";
import ActionModal from "../../../../shared/actionModal/actionModal";
import "./ActiveTab.scss";

const tabsData: any = [
  { key: "members", label: `Members`, children: <Members keyValue='Active' /> },
  { key: "projects", label: `Projects`, children: <Projects keyValue='Active' /> },
];

const ActiveTab = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [editOpenModal, seteditOpenModal] = useState<boolean>(false);
  const [EditOkModal, setEditOkModal] = useState<boolean>(false);
  // const [form] = Form.useForm();
  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;


  const items: any = [
    {
      label: (
        <div onClick={() => seteditOpenModal(true)}>
          <Space>
            <img src={editIcon} alt="Edit" />
            <p>Edit</p>
          </Space>
        </div>
      ),
      key: "1",
    },
    {
      label: (
        <Space onClick={() => setIsOpenModal(true)}>
          <img src={deleteImage} alt="Delete" />
          <p>Delete</p>
        </Space>
      ),
      key: "3",
    },
    {
      label: (
        <Space onClick={() => setIsOpenArchiveModal(true)}>
          <img src={archiveIcon} alt="Archive" />
          <p>Archive</p>
        </Space>
      ),
      key: "4",
    },
  ];
  const columns: ColumnsType<any> = [
    {
      title: "Team Name",
      dataIndex: "teamName",
      width: 200,
      render: (teamName: any) => (
        <span className="fs-12 fw-400 line-height-22">{teamName}</span>
      ),
    },
    {
      title: "Members",
      dataIndex: "members",
      width: 150,
      render: () => (
        <div className="fs-12 fw-400 line-height-22">
          <Avatar.Group
            maxCount={3}
            maxPopoverTrigger="click"
            maxStyle={{
              color: "#f56a00",
              backgroundColor: "#fde3cf",
              cursor: "pointer",
            }}
          >
            <Avatar src={memberOne} />
            <Avatar src={memberTwo} />
            <Avatar src={memberThree} />
            <Avatar
              style={{ backgroundColor: "#1890ff" }}
              icon={<AntDesignOutlined />}
            />
          </Avatar.Group>
        </div>
      ),
    },
    {
      title: "Projects",
      dataIndex: "projects",
      width: 100,
      render: (projects) => (
        <span className="fs-12 fw-400 line-height-22">{projects}</span>
      ),
    },
    {
      title: "Manager",
      dataIndex: "manager",
      width: 150,
      render: (manager) => (
        <div className="fs-12 fw-400 line-height-22">
          {" "}
          <Avatar src={managerAvtar} />
          <span
            className="fs-12 fw-400 line-height-22"
            style={{ marginLeft: "5px" }}
          >
            {manager}
          </span>
        </div>
      ),
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      width: 100,
      render: () => (
        <Dropdown
          menu={{ items }}
          placement="bottomRight"
          trigger={["click"]}
          className="actionDropDown"
        >
          <Space>
            <div className="border-color cursor-pointer">
              <img src={Dots} alt="menu" />
            </div>
          </Space>
        </Dropdown>
      ),
    },
  ];

  const [IsOpenModal, setIsOpenModal] = useState(false);
  const [IsOpenArchiveModal, setIsOpenArchiveModal] = useState(false);
  const DeleteSubmitHandler = () => { }

  return (
    <div className="wrapper-manage-team ">

      <EditModal editOpenModal={editOpenModal} seteditOpenModal={seteditOpenModal} EditOkModal={EditOkModal} setEditOkModal={setEditOkModal} />
      <ActionModal
        isModalOpen={IsOpenModal}
        setOpenModal={setIsOpenModal}
        submitHandler={DeleteSubmitHandler}
        actionClass='delete-btn-bg-color'
        actionText='Delete'
        mainText='Are you Sure? '
        secondaryText=' Do you want to delete this?'
        image={deleteIcon}
      />
      <ActionModal
        isModalOpen={IsOpenArchiveModal}
        setOpenModal={setIsOpenArchiveModal}
        submitHandler={DeleteSubmitHandler}
        actionClass='bgOrange-color'
        actionText='Archive'
        mainText='Are you Sure? '
        secondaryText='Do you want to archive selected teams?'
        image={ArchiveImage}
      />
      <Row gutter={[25, 20]} >

        <Col className="gutter-row " xs={24} xl={12}>

          <div className="active-team-main ">
            <Row >
              <Col xs={24} sm={12} >
                <div className="d-flex align-center wrap-delete-archive-icon">
                  {selectedRowKeys.length > 1 &&
                    <Space >
                      <img src={AllDeleteIcon} alt="deleteTeam" />
                      <img src={AllArchiveIcon} alt="createTeam" className="cursor-pointer" />
                    </Space>}
                </div>
              </Col>
              <Col xs={24} sm={12} className='d-flex justify-end wrapper-search'>
                <div className="d-flex justify-end activite-search-main">
                  <Input placeholder="Search Team" className="activitySearch custom-input-field" onChange={(e) => console.log(e.target.value)}
                    prefix={<img src={searchIcon} className="site-form-item-icon" />}
                    style={{ marginRight: '15px', height: '40px' }} />
                  <div className="d-flex btn-create-team align-center">
                    <CreateTeamModal />
                  </div>
                </div>

              </Col>
            </Row>

            <div className="manage-table-main">
              <Table className="ant-table-content wrapper-table manage-team-table-border"
                rowSelection={rowSelection}
                columns={columns}
                dataSource={ActiveData}
                scroll={{ x: "max-content" }}
                pagination={{ pageSize: 7 }}
              />
            </div>
          </div>
        </Col>
        <Col className="gutter-row " xs={24} xl={12}>
          <div className="active-team-main " style={{ height: "100%" }}>
            {selectedRowKeys.length === 1 ?
              <div className="wrap-manage-team-member-table-tabs">
                <Tabs defaultActiveKey="members" items={tabsData} className="wrapper-tabs" />
              </div>
              :
              <div className="d-flex justify-center manage-image">
                {hasSelected ?
                  <img src={activeTeamImg} alt="add team" className="manage-team-image" />
                  :
                  <img src={addTeam} alt="add team" className="manage-team-image" />

                }
              </div>
            }
          </div>

        </Col>
      </Row>
    </div>
  );
};

export default ActiveTab;
