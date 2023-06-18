import React, { useState } from "react";
import type { ColumnsType } from "antd/es/table";
import { Button, Space, Table, Input, Modal, Row, Col, Divider } from 'antd';
import deleteIcon from '../../../../assets/icons/settings/team/delete.svg';
import ArchiveAddProjectIcon from "../../../../assets/icons/settings/team/ArchiveAddProjectIcon.svg";
import deleteIconWithbg from "../../../../assets/icons/settings/team/deleteIconWithbg.svg"
import { ActiveProject } from "../TabsData";
import AddProjects from "../ActiveTab/addProjects";
import { v4 as uuidv4 } from "uuid";
import ActionModal from "../../../../shared/actionModal/actionModal";
import searchImage from '../../../../assets/icons/search-icon.svg'
import "./projects.scss";

const Projects = (props: any) => {

  const { keyValue } = props;
  const [open, setOpen] = useState(false);
  const [projects, setProjects] = useState([]);
  const [isShowMessage, setIsShowMessage] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const onSelectChange = (newSelectedRowKeys: React.Key[]) => setSelectedRowKeys(newSelectedRowKeys);
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const showModal = () => setOpen(true);
  const handleOk = () => {
    setIsShowMessage(true)
    projects.length > 0 && setOpen(false);
  }
  const handleCancel = () => setOpen(false);
  const showDeleteModal = () => setIsDeleteModalOpen(true);

  const onCrossProjectHandler = (item: any) => {
    const filtered = projects.filter((name) => {
      return name !== item;
    });
    setProjects(filtered);
  };

  const projectError = isShowMessage && projects.length === 0;

  const columns: ColumnsType<any> = [
    {
      title: " Name",
      dataIndex: "name",
      render: (name) => (
        <span className="fs-12 fw-400 line-height-22">{name}</span>
      )
    },

    {
      title: "Actions",
      dataIndex: "actions",
      key: 'actions',
      render: () => (
        <div className="fs-12 fw-400 line-height-22">
          <img src={deleteIcon} alt='Delete' onClick={() => setIsDeleteModalOpen(true)} style={{ cursor: "pointer" }} />
        </div>
      ),
    },

  ];

  return (
    <div className="wrapper-projects">

      <Modal
        open={open}
        title={<span className='fw-400 fs-16 title-color'>Add Projects</span>}
        className="project-modal modal-theme"
        centered
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Space style={{ paddingTop: "18px" }}>
            <Button className='btn-cancel' onClick={handleCancel}>
              Cancel
            </Button>
            <Button className='btn-secondary' onClick={handleOk}>
              Save
            </Button>
          </Space>
        ]}
        width={562}
      >
        <Row>
          <Col span={24}>
            <>
              <span className="fs-12 grey-color fw-500 "> Projects</span>
              <div style={{
                height: "110px", border: projectError ? " 1px solid #ff4d4f" : "1px solid #E8ECEE",
                borderRadius: "5px",
                padding: "10px 10px 0px 10px"
              }}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: '10px', height: '56px', overflowY: 'auto' }}>
                  {projects.length === 0 && (
                    <span className="fs-14 placeholder-color fw-400">Add Projects here</span>
                  )}
                  {projects.map((item: any) => (
                    <p className="m-0" key={uuidv4()}>
                      <span
                        style={{
                          backgroundColor: "#F5F5F5",
                          color: '#4E6073',
                          borderLeft: "1px solid #E76F51",
                          borderRadius: "16px",
                          padding: "2px 20px 2px 8px",
                          position: "relative",
                          marginRight: "8px",
                        }}
                      >
                        {item}
                        <span
                          onClick={() => onCrossProjectHandler(item)}
                          className="cursor-pointer"
                          style={{ position: "absolute", right: "5px", top: "0" }}
                        >
                          x
                        </span>
                      </span>
                    </p>
                  ))}
                </div>
                <Divider className="divider" />
                <AddProjects project={projects} setProjects={setProjects} />
              </div>
              {isShowMessage && projects.length === 0 && <span style={{ color: "#ff4d4f" }}> Required  field </span>}

            </>
          </Col>
        </Row>
      </Modal>

      <Row gutter={[0, 20]} className="d-flex justify-between">
        <Col xs={24} md={8} xl={8}>
          <Space className="d-flex align-center" style={{ height: '100%' }}>
            <span className=" fw-600 fs-16 title-color">Business Analyst </span>
            <span>
              {selectedRowKeys.length > 1 &&
                <img src={deleteIconWithbg} alt="craeteTeam" onClick={showDeleteModal} className="cursor-pointer" />}
            </span>
          </Space>
        </Col>
        <Col xs={24} md={16} xl={16} className="wrapper-search">
          <div className="activite-search-main d-flex justify-end">
            <Input placeholder="Search Project" className="activitySearch custom-input-field" onChange={(e) => console.log(e.target.value)}
              prefix={<img src={searchImage} alt='search icon' />}
              style={{ marginRight: '15px', height: '40px' }} />
            {keyValue === 'Active' && <div className="d-flex align-center">
              <Button icon={<img className="white-image-theme-class" src={ArchiveAddProjectIcon} alt="create Team" width="24px" height="24px" />}
                className="btn-theme-color d-flex justify-between align-center fw-500 fs-16" onClick={showModal}>
                <span className=" d-flex align-center fw-500 fs-16" style={{ marginLeft: "11px" }}>Add Project</span>
              </Button>
            </div>}

          </div>
        </Col>

        <Col span={24}>
          <div className="table-wrapper">
            <Table className="ant-table-content wrapper-table "
              rowSelection={rowSelection}
              columns={columns}
              dataSource={ActiveProject}
              scroll={{ x: "max-content" }}
              pagination={{ pageSize: 7 }}
            />
          </div></Col>
      </Row>

      <ActionModal
        isModalOpen={isDeleteModalOpen}
        setOpenModal={setIsDeleteModalOpen}
        submitHandler={() => { }}
        actionClass='delete-btn-bg-color'
        actionText='Delete'
        mainText='Are you sure?'
        secondaryText='Do you want to delete this?'
        image={deleteIcon}
      />


    </div>
  )
}

export default Projects