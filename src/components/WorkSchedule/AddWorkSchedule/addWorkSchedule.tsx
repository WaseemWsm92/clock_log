import { useState } from "react";
import { Dropdown, Input, Space, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import deleteIconWhite from "../../../assets/icons/delete-white.svg";
import deleteIcon from "../../../assets/icons/delete.png";
import { IWorkSchedule, workScheduleData } from "../../../mock/AddWorkScheduleTableData";
import { SearchOutlined } from "@ant-design/icons";
import DeleteModal from "../DeleteModal/deleteModal";
import Dots from "../../../assets/icons/dots.png"
import "./addWorkSchedule.scss";
import AddWorkSchedules from "../../../shared/WorkSchedule";
import searchImage from '../../../assets/icons/search-icon.svg';

const AddWorkSchedule = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<any>([]);
  const [deleteModal, setDeleteModal] = useState<boolean>(false);

  const isDeleteButton = selectedRowKeys.length > 1;


  const items: any = [
    {
      label: (
        <div>
          <AddWorkSchedules isCustomButton={true} />
        </div>
      ),
      key: "1",
    },
    {
      label: (
        <Space
          onClick={() => {
            setDeleteModal(true);
          }}
        >
          <img src={deleteIcon} alt="" />
          <p>Delete</p>
        </Space>
      ),
      key: "2",
    },
  ];

  const workScheduleColumns: ColumnsType<IWorkSchedule> = [
    {
      title: "Sr.no",
      dataIndex: "srNo",
      key: "srNo",
    },
    {
      title: "Shift Name",
      dataIndex: "shiftName",
      key: "shiftName",
    },
    {
      title: "Shift Start Time",
      dataIndex: "shiftStartTime",
      key: "shiftStartTime",
    },
    {
      title: "Shift End Time",
      dataIndex: "shiftEndTime",
      key: "shiftEndTime",
    },
    {
      title: "Total Hours",
      dataIndex: "totalHours",
      key: "totalHours",
    },
    {
      title: "Break Start",
      dataIndex: "breakStart",
      key: "breakStart",
    },
    {
      title: "Break End",
      dataIndex: "breakEnd",
      key: "breakEnd",
    },
    {
      title: "Min Effective Hours",
      dataIndex: "minEffectiveHours",
      key: "minEffectiveHours",
    },
    {
      title: "Relaxation Time",
      dataIndex: "relaxationTime",
      key: "relaxationTime",
    },
    {
      title: "Applied On",
      dataIndex: "appliedOn",
      key: "appliedOn",
      render: (_, { appliedOn }) => (
        <>
          <div className="applied-days-flex">
            {appliedOn.map((days: any, index: any) => (
              <div className="rounded-days bgSecondary-color" key={index}>
                <span className="fs-14 fw-400">{days}</span>
              </div>
            ))}
          </div>
        </>
      ),
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
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
    <div className="add-work-schedule-main-wrapper">
      <div className="wrapper-lower-head">
        <div>
          {isDeleteButton && (
            <div
              onClick={() => {
                setDeleteModal(true);
              }}
              className="delete-button-work-schedule">
              <img src={deleteIconWhite} alt="delete" />
            </div>
          )}
        </div>
        <Input
          className="search-input add-work-schedule  custom-input-field"
          placeholder="Search Schedule"
          prefix={<img src={searchImage} alt='search icon' />}
          style={{ height: "40px" }}
        />
      </div>
      <div className="wrapper-width--scroll custom-scroll-hor">
        <Table
          rowSelection={{
            selectedRowKeys,
            onChange: (selectedRowKeys) => { setSelectedRowKeys(selectedRowKeys) },
          }}
          className="wrapper-table"
          columns={workScheduleColumns}
          dataSource={workScheduleData}
          pagination={{ pageSize: 9 }}
          scroll={{ x: "max-content", scrollToFirstRowOnChange: true }}
        />
      </div>
      {/* <EditModal isAddModal={isAddModal} setIsAddModal={setIsAddModal} /> */}
      {/* <DeleteModal isModalOpen={isModalOpen} handleCancel={handleCancel} /> */}
      {/* <DeleteModal isModalOpen={isModalOpen} handleCancel={handleCancel} deleteDiscription={'Do you want to delete Selected Work Schedule?'} /> */}
      <DeleteModal
        deleteModal={deleteModal}
        setDeleteModal={setDeleteModal}
        deleteDiscription={"Do you want to delete Selected Work Schedule?"}
      />
    </div>
  );
};

export default AddWorkSchedule;
