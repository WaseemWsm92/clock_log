import React, { useState } from "react";
import type { ColumnsType } from "antd/es/table";
import {
  Avatar,
  Dropdown,
  Space,
  Table,
  Input,
  Row,
  Col,
  Tabs,
} from "antd";
import { AntDesignOutlined, SearchOutlined } from "@ant-design/icons";
import AllDeleteIcon from "../../../../assets/icons/settings/team/deleteIconWithbg.svg";
import Dots from "../../../../assets/icons/dots.png"
import deleteIcon from "../../../../assets/icons/settings/team/delete.svg";
import memberOne from "../../../../assets/images/team/memberOne.png";
import memberTwo from "../../../../assets/images/team/memberTwo.png";
import memberThree from "../../../../assets/images/team/memberThree.png";
import managerAvtar from "../../../../assets/icons/settings/team/manager.svg";
import archiveImage from "../../../../assets/icons/settings/team/archiveImage.svg";
import active from "../../../../assets/icons/settings/projectandtasks/active.svg";
import ActiveIcon from "../../../../assets/icons/active_icon.svg";
import activeTeamImg from "../../../../assets/icons/settings/team/activeTeamImg.svg";
import activeIcon from "../../../../assets/icons/settings/team/activeIcon.svg";
import searchIcon from "../../../../assets/icons/search-icon.svg";
import "../ActiveTab/ActiveTab.scss";
import Members from "../members/Members";
import Projects from "../projects/Projects";
import { ActiveData } from "../TabsData";
import ActionModal from "../../../../shared/actionModal/actionModal";

const tabsData: any = [
  { key: "members", label: `Members`, children: <Members keyValue="Archive" /> },
  { key: "projects", label: `Projects`, children: <Projects keyValue="Archive" /> },
];

const ArchivedTab = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [IsDeleteModal, setIsDeleteModal] = useState(false);
  const [IsActiveModal, setIsActiveModal] = useState(false);

  const showhandleActive = () => setIsActiveModal(true);
  const showModal = () => setIsDeleteModal(true);
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
        <Space onClick={showModal}>
          <img src={deleteIcon} alt="deleteIcon" />
          <p>Delete</p>
        </Space>
      ),
      key: "1",
    },
    {
      label: (
        <Space onClick={showhandleActive}>
          <img src={activeIcon} alt="activeIcon" width="24px" height="24px" />
          <p>Active</p>
        </Space>
      ),
      key: "2",
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

  return (
    <div className="wrapper-manage-team ">
      <Row
        gutter={[20, 20]}
        className=" d-flex justify-between"
      >
        <Col className="gutter-row " xs={24} xl={12}>
          <div className="active-team-main ">

            <Row >
              <Col xs={24} sm={12} >
                <div className="d-flex align-center wrap-delete-archive-icon">
                  {selectedRowKeys.length > 1 &&
                    <Space >
                      <img src={AllDeleteIcon} alt="deleteTeam" className="cursor-pointer" onClick={showModal} />
                      <div style={{
                        width: "40px",
                        height: "40px",
                        background: "#F4F9FF",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "6px 10px 35px rgba(0, 0, 0, 0.01)",
                        borderRadius: "50px"
                      }}>
                        <img src={active} height={24} width={24} alt="createTeam "
                          className=" cursor-pointer white-img-theme-class"
                          style={{
                            width: "20px", height: "20px",
                          }}
                          onClick={showhandleActive} />
                      </div>

                    </Space>}
                </div>
              </Col>
              <Col xs={24} sm={12} className='d-flex justify-end wrapper-search'>
                <div className="d-flex justify-end activite-search-main">
                  <Input placeholder="Search Team" className="activitySearch custom-input-field" onChange={(e) => console.log(e.target.value)}
                    prefix={<img src={searchIcon} className="site-form-item-icon" />}
                    style={{ marginRight: '15px', height: '40px' }} />
                </div>

              </Col>
            </Row>

            <div
              className="manage-table-main"
              style={{ marginTop: "18px" }}
            >
              <Table
                className="ant-table-content wrapper-table manage-team-table-border"
                rowSelection={rowSelection}
                columns={columns}
                dataSource={ActiveData}
                scroll={{ x: 'max-content' }}
                pagination={{ pageSize: 7 }}
              />

            </div>
          </div>
        </Col>
        <Col className="gutter-row " xs={24} xl={12} >
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
                  <img src={archiveImage} alt="add team" className="manage-team-image" />

                }
              </div>
            }
          </div>

        </Col>

      </Row>

      <ActionModal
        isModalOpen={IsDeleteModal}
        setOpenModal={setIsDeleteModal}
        submitHandler={() => { }}
        actionClass='delete-btn-bg-color'
        actionText='Delete'
        mainText='Are you sure? '
        secondaryText=' Do you want to delete this?'
        image={deleteIcon}
      />

      <ActionModal
        isModalOpen={IsActiveModal}
        setOpenModal={setIsActiveModal}
        submitHandler={() => { }}
        actionClass='bg-progress-color'
        actionText='Active'
        mainText='Are you sure? '
        secondaryText='Do you want to active selected teams?'
        image={ActiveIcon}

      />

    </div >
  );
};

export default ArchivedTab;
