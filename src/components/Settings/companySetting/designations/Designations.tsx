

import { Dropdown, MenuProps, Popover, Space, Table, TableColumnsType } from 'antd';

import Dots from "../../../../assets/icons/dots.png";

import Delete from "../../../../assets/icons/delete.png";
import Edit from "../../../../assets/icons/edit.png";
import deleteIcon from '../../../../assets/icons/deleteIcon.svg';





// Ant Design



// SCSS
import './Designations.scss';
import { AddDesignation } from './addDesignation/AddDesignation';
import DeleteModal from '../../../usersManagement/Modals/DeleteModal';
import { useState } from 'react';
import ActionModal from '../../../../shared/actionModal/actionModal';
import AppSnackbar from '../../../../utils/snackbar';


// Mock Data


const Designations = () => {
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
    designations: string,
    departments: string,
    actions: string;

  }
  const columns: TableColumnsType<DataType> = [
    {
      title: 'Sr.No',
      dataIndex: 'srNo',
      key: 'srNo',
    },
    {
      title: 'Designations',
      dataIndex: 'designations',
      key: 'designations',
    },

    {
      title: 'Departments',
      dataIndex: 'departments',
      key: 'departments',
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
      designations: 'PBO',
      departments: 'Information & Technology',
      actions: '',
    },
    {
      key: '',
      srNo: '02',
      designations: 'UI/UX Designer',
      departments: 'Design',
      actions: '',
    },
    {
      key: '',
      srNo: '03',
      designations: 'Business Analyst',
      departments: 'Information & Technology',
      actions: '',
    },
    {
      key: '',
      srNo: '04',
      designations: 'Graphic Designer',
      departments: 'Design',
      actions: '',
    },
    {
      key: '',
      srNo: '05',
      designations: 'Project Manager',
      departments: 'Project Management',
      actions: '',
    },
    {
      key: '',
      srNo: '06',
      designations: 'Recrutment',
      departments: 'HR',
      actions: '',
    },
    {
      key: '',
      srNo: '07',
      designations: 'Accountant',
      departments: 'Finance',
      actions: '',
    },
    {
      key: '',
      srNo: '08',
      designations: 'Web Developer',
      departments: 'Website Development',
      actions: '',
    }

  ];
  return (
    <div className='designation-main'>
      <AddDesignation open={open} setOpen={setOpen} isEdited={isEdited} seIsEdited={seIsEdited}/>
      <Table scroll={{ x: 'max-content' }} columns={columns} dataSource={data} className="wrapper-table" />
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

export default Designations

