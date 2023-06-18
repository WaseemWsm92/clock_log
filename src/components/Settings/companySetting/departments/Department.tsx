

import { Dropdown, MenuProps, Popover, Space, Table, TableColumnsType } from 'antd';
import Dots from "../../../../assets/icons/dots.png";
import Delete from "../../../../assets/icons/delete.png";
import Edit from "../../../../assets/icons/edit.png";
// Ant Design
// SCSS
import './Department.scss';
import { AddDepartment } from './addDepartment/AddDepartment';
import { useState } from 'react';
import ActionModal from '../../../../shared/actionModal/actionModal';
import deleteIcon from '../../../../assets/icons/deleteIcon.svg';
import AppSnackbar from '../../../../utils/snackbar';


// Mock Data

const Department = () => {
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const [IsOpenModal, setIsOpenModal] = useState(false);
  const [isLoading, setIsloading] = useState(false)
  const [open, setOpen] = useState(false);
  const [isEdited, seIsEdited] = useState(false);

  // const deleteRecord = () => {
  //   setIsloading(true)
  //   setTimeout(() => {
  //     // dispatch(deleteLocation(selectedRecord.id))
  //     setDeleteModal(false)
  //     setIsloading(false)
  //   }, 2000);

  // }

  const deleteRecord = () => {
    setIsOpenModal(false)
    setIsloading(false)
    AppSnackbar({ type: "success", message: "Record Deleted Successfully!" })
  };

  const items: MenuProps["items"] = [
    {
      label: (
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }} onClick={() => { setOpen(true); seIsEdited(true) }}>
          <img src={Edit} alt="edit" />
          <p>Edit</p>
        </div>
      ),
      key: "1",
    },
    {
      label: (
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }} onClick={() => { setIsOpenModal(true) }}>
          <img src={Delete} alt="delete" />
          <p>Delete</p>
        </div>
      ),
      key: "2",
    }
  ];
  interface DataType {
    key: string;
    srNo: string;
    departments: string,
    employees: string;
    actions: string;

  }
  const columns: TableColumnsType<DataType> = [
    {
      title: 'Sr.No',
      dataIndex: 'srNo',
      key: 'srNo',
    },

    {
      title: 'Departments',
      dataIndex: 'departments',
      key: 'departments',
    },
    {
      title: 'Employees',
      dataIndex: 'employees',
      key: 'employees',
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      key: 'actions',
      render: () => (
        <span className="fs-12 fw-400 line-height-18 title-color" >
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
        </span>
      ),
    },
  ];




  const data: DataType[] = [
    {
      key: '',
      srNo: '01',
      departments: 'General Management',
      employees: '10',
      actions: '',
    },
    {
      key: '',
      srNo: '02',
      departments: 'Information & Technology',
      employees: '12',
      actions: '',
    },
    {
      key: '',
      srNo: '03',
      departments: 'Customer Service',
      employees: '08',
      actions: '',
    },
    {
      key: '',
      srNo: '04',
      departments: 'Finance/Accounting',
      employees: '12',
      actions: '',
    },
    {
      key: '',
      srNo: '05',
      departments: 'Quality Assurance',
      employees: '13',
      actions: '',
    },
    {
      key: '',
      srNo: '06',
      departments: 'Marketing',
      employees: '13',
      actions: '',
    },
    {
      key: '',
      srNo: '07',
      departments: 'Human Resource',
      employees: '20',
      actions: '',
    },
    {
      key: '',
      srNo: '08',
      departments: 'Design',
      employees: '24',
      actions: '',
    }

  ];
  return (
    <div className='department-main'>
      <AddDepartment open={open} setOpen={setOpen} isEdited={isEdited} seIsEdited={seIsEdited}/>
      <Table className='wrapper-table' scroll={{ x: 'max-content' }} columns={columns} dataSource={data} />
      <ActionModal
        actionClass='delete-btn-bg-color'
        actionText='Delete'
        mainText='Are you sure? '
        secondaryText=' Do you want to delete this?'
        isModalOpen={IsOpenModal}
        setOpenModal={setIsOpenModal}
        handleCancel={() => setDeleteModal(false)}
        submitHandler={deleteRecord}
        confirmLoading={isLoading}
        image={deleteIcon}
      />
    </div>

  )
}

export default Department

