import React, { useState } from "react";
import type { ColumnsType } from "antd/es/table";
import { Space, Table, Input, Row, Col, Switch } from 'antd';
import deleteIcon from '../../../../assets/icons/settings/team/delete.svg';
import deleteIconWithbg from "../../../../assets/icons/settings/team/deleteIconWithbg.svg";
import { Memberdata } from "../TabsData";
import ActionModal from "../../../../shared/actionModal/actionModal";
import AddMember from "./AddModal/addMember";
import searchImage from '../../../../assets/icons/search-icon.svg'
import './member.scss';

const Members = (props: any) => {
  const { keyValue } = props;
  console.log(keyValue);

  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const onSelectChange = (newSelectedRowKeys: React.Key[]) => setSelectedRowKeys(newSelectedRowKeys);
  // rowSelection object indicates the need for row selection
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const showDeleteModal = () => setIsDeleteModalOpen(true);

  const columns: ColumnsType<any> = [
    {
      title: "Name",
      dataIndex: "name",
      width: 140,
      render: (name) => (
        <span className="fs-12 fw-400 line-height-22">{name}</span>
      )
    },
    {
      title: "Project Role",
      dataIndex: "projectRole",
      width: 130,
      render: (projectRole) => {

        return (
          <div className={`fs-12 fw-400 line-height-22 d-flex align-center ${keyValue === 'Active' ? "project-role" : "archive-role"}`}>
            {projectRole}
          </div>
        );
      }
    },
    ...(keyValue === "Active"
      ? [
        {
          title: "Manager",
          dataIndex: "manager",
          width: 120,
          render: () => (
            <div className="fs-12 fw-400 line-height-22">
              <Switch defaultChecked />
            </div>
          )
        }
      ]
      : []
    ),
    {
      title: "Actions",
      dataIndex: "actions",
      width: 120,
      key: "actions",
      render: () => (
        <div className="fs-12 fw-400 line-height-22">
          <img
            src={deleteIcon}
            alt="Delete"
            onClick={showDeleteModal}
            style={{ cursor: "pointer" }}
          />
        </div>
      )
    }
  ];

  const DeleteSubmitHandler = () => { }

  return (
    <div className="member-wrapper">

      <Row gutter={{ xs: 8, sm: 16, md: 12, lg: 32 }}>
        <Col xs={24} md={8} xl={8}>
          <Space className="d-flex align-center" style={{ height: '100%' }}>
            <span className=" fw-600 fs-16 title-color">Business Analyst </span>
            <span>
              {selectedRowKeys.length > 1 &&
                <img src={deleteIconWithbg} alt="craeteTeam" onClick={showDeleteModal} />}
            </span>
          </Space>
        </Col>
        <Col xs={24} md={16} xl={16}>
          <div className="activite-search-main d-flex justify-end">
            <Input placeholder="Search Member" className="activitySearch custom-input-field" onChange={(e) => console.log(e.target.value)}
              prefix={<img src={searchImage} alt='search icon' />}
              style={{ marginRight: '15px', height: '40px' }} />
            {keyValue === 'Active' && <div className="d-flex align-center">
              <AddMember />
            </div>}

          </div>
        </Col>
        <Col className="gutter-row " xs={24} sm={24} md={24} lg={24} xxl={24}>


          <div className="table-wrapper" style={{ marginTop: "18px" }}>
            <Table className="ant-table-content wrapper-table manage-team-table-border"
              rowSelection={rowSelection}
              columns={columns}
              dataSource={Memberdata}
              scroll={{ x: 'max-content' }}
              pagination={{ pageSize: 7 }}
            />

            <ActionModal
              isModalOpen={isDeleteModalOpen}
              setOpenModal={setIsDeleteModalOpen}
              submitHandler={DeleteSubmitHandler}
              actionClass='delete-btn-bg-color'
              actionText='Delete'
              mainText='Are you Sure? '
              secondaryText=' Do you want to delete this?'
              image={deleteIcon}
            />

          </div>

        </Col>
      </Row>
    </div>
  );
};

export default Members;
