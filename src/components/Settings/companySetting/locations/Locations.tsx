import { Dropdown, Form, MenuProps, Popover, Space, Table, TableColumnsType } from 'antd';
import { useState } from 'react'
import { AddLocation } from './addLocationModal/AddLocation';
import viewIcon from '../../../../assets/icons/settings/viewIcon.svg';

import Dots from "../../../../assets/icons/dots.png";
import deleteIcon from '../../../../assets/icons/deleteIcon.svg';
import Delete from "../../../../assets/icons/delete.png";
import Edit from "../../../../assets/icons/edit.png";



// Ant Design



// SCSS
import './Locations.scss';
import { useAppDispatch, useAppSelector } from '../../../../hooks/useStoreHooks';
import { deleteLocation } from '../../../../store/settings/companySettings/signInSettings/signInSettings.api';
import DeleteModal from '../../../../shared/DeleteModal';
import ActionModal from '../../../../shared/actionModal/actionModal';
import AppSnackbar from '../../../../utils/snackbar';
// Mock Data


const Locations = () => {
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const [selectedRecord, setSelectedRecord] = useState<any>({});
  const [isEditMOdalOpen, setIsEditMOdalOpen] = useState(false);
  const [view, setView] = useState(false);
  const [IsOpenModal, setIsOpenModal] = useState(false);
  const [isLoading, setIsloading] = useState(false)


  const [form] = Form.useForm()

  const isEmptyObj = (obj: {}) => {
    return obj && Object.keys(obj).length === 0 && Object.getPrototypeOf(obj) === Object.prototype;
  };



  const deleteRecord = () => {
    setIsOpenModal(false)
    setIsloading(false)
    AppSnackbar({ type: "success", message: "Record Deleted Successfully!" })
  };
  const items: MenuProps["items"] = [
    {
      label: (
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }} onClick={() => {
          setIsEditMOdalOpen(true); setDeleteModal(false); form.setFieldsValue(selectedRecord); setView(false)
        }}>
          <img src={Edit} alt="edit" />
          <p>Edit</p>
        </div>
      ),
      key: "1",
    },
    {
      label: (
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }} onClick={() => { setDeleteModal(true); setIsOpenModal(true) ;setIsEditMOdalOpen(false) }}>
          <img src={Delete} alt="delete" />
          <p>Delete</p>
        </div>
      ),
      key: "2",
    },
    {
      label: (
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }} onClick={() => { setIsEditMOdalOpen(true); setView(true); setDeleteModal(false); form.setFieldsValue(selectedRecord) }}>
          <img src={viewIcon} alt="delete" />
          <p>View</p>
        </div>
      ),
      key: "3",
    },
  ];
  const dispatch = useAppDispatch();

  const locationData = useAppSelector(
    (state) => state.companySettings.data
  );
  interface DataType {
    locationName: string;
    primaryPhone: string,
    secondaryPhone: string;
    mailingAddress: string;
    fax: string;
    mailZip: string;
    mailCity: string;
    mailCountry: string;
    billingAddress: string;
    billingZip: string;
    billingCity: string;
    billingCountry: string;

  }
  const columns: TableColumnsType<any> = [
    {
      title: 'Location Name',
      dataIndex: 'locationName',
      key: 'locationName',
    },

    {
      title: 'Primary Phone',
      dataIndex: 'primaryPhone',
      key: 'primaryPhone',
    },
    {
      title: 'Mailing Address',
      dataIndex: 'mailingAddress',
      key: 'mailingAddress',
    },
    {
      title: 'Billing Address',
      dataIndex: 'billingAddress',
      key: 'billingAddress',
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      key: 'actions',
      render: (_, record: any) => (
        <span className="fs-12 fw-400 line-height-18 title-color" onClick={() => { setSelectedRecord(record) }}>
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
      locationName: 'Washington',
      primaryPhone: '(239) 555-0108',
      mailingAddress: '1901 Thornridge Cir. Shiloh Office, Hawaii 81063',
      billingAddress: '2715 Ash Dr. San Jose, South Dakota 83475',
      secondaryPhone: '+112345567',
      fax: '+61344401923',
      mailZip: '64000',
      mailCity: 'Los Angeles',
      mailCountry: 'Pakistan',
      billingZip: '640000',
      billingCity: 'Los Angeles',
      billingCountry: 'Pakistan'

    },
    {
      locationName: 'Franklin',
      primaryPhone: '(603) 555-0123',
      billingAddress: '2464 Royal Ln. Mesa, New Jersey 45463',
      secondaryPhone: '+112345567',
      fax: '+61344401923',
      mailingAddress: '1902 Thornnridge cir,Shiloh',
      mailZip: '64000',
      mailCity: 'Los Angeles',
      mailCountry: 'Pakistan',
      billingZip: '640000',
      billingCity: 'Los Angeles',
      billingCountry: 'Pakistan'

    },
    {
      locationName: 'Clinton',
      primaryPhone: '(252) 555-0126',
      mailingAddress: '2715 Ash Dr. San Jose Office, South Dakota 83475',
      billingAddress: '4140 Parker Rd. Allentown, New Mexico 31134',
      secondaryPhone: '+112345567',
      fax: '+61344401923',
      mailZip: '64000',
      mailCity: 'Los Angeles',
      mailCountry: 'Pakistan',
      billingZip: '640000',
      billingCity: 'Los Angeles',
      billingCountry: 'Pakistan'

    },
    {
      locationName: 'Arlington',
      primaryPhone: '(405) 555-0128',
      mailingAddress: '4517 Washington Ave. Manchester Office, Kentucky 39495',
      billingAddress: '4517 Washington Ave. Manchester, Kentucky 39495',
      secondaryPhone: '+112345567',
      fax: '+61344401923',
      mailZip: '64000',
      mailCity: 'Los Angeles',
      mailCountry: 'Pakistan',
      billingZip: '640000',
      billingCity: 'Los Angeles',
      billingCountry: 'Pakistan',

    },
    {
      locationName: 'Centerville',
      primaryPhone: '(316) 555-0116',
      mailingAddress: '6391 Elgin St. Celina, Delaware 10299',
      billingAddress: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
      secondaryPhone: '+112345567',
      fax: '+61344401923',
      mailZip: '64000',
      mailCity: 'Los Angeles',
      mailCountry: 'Pakistan',
      billingZip: '640000',
      billingCity: 'Los Angeles',
      billingCountry: 'Pakistan'

    },
    {
      locationName: 'Lebanon',
      primaryPhone: '(229) 555-0109',
      mailingAddress: '2118 Thornridge Cir. Syracuse Office, Connecticut 35624',
      billingAddress: '4517 Washington Ave. Manchester, Kentucky 39495',
      secondaryPhone: '+112345567',
      fax: '+61344401923',
      mailZip: '64000',
      mailCity: 'Los Angeles',
      mailCountry: 'Pakistan',
      billingZip: '640000',
      billingCity: 'Los Angeles',
      billingCountry: 'Pakistan'

    },
    {
      locationName: 'Georgetown',
      primaryPhone: '(307) 555-0133',
      mailingAddress: '2118 Thornridge Cir. Syracuse Office, Connecticut 35624',
      billingAddress: '4140 Parker Rd. Allentown, New Mexico 31134',
      secondaryPhone: '+112345567',
      fax: '+61344401923',
      mailZip: '64000',
      mailCity: 'Los Angeles',
      mailCountry: 'Pakistan',
      billingZip: '640000',
      billingCity: 'Los Angeles',
      billingCountry: 'Pakistan'

    },
    {
      locationName: 'Georgetown',
      primaryPhone: '(307) 555-0133',
      mailingAddress: '2118 Thornridge Cir. Syracuse Office, Connecticut 35624',
      billingAddress: '4140 Parker Rd. Allentown, New Mexico 31134',
      secondaryPhone: '+112345567',
      fax: '+61344401923',
      mailZip: '64000',
      mailCity: 'Los Angeles',
      mailCountry: 'Pakistan',
      billingZip: '640000',
      billingCity: 'Los Angeles',
      billingCountry: 'Pakistan'

    },
  ];

  return (
    <div className='location-main'>
      <AddLocation form={form} selectedRecord={selectedRecord} setView={setView} setSelectedRecord={setSelectedRecord} isOpen={isEditMOdalOpen} setIsOpen={setIsEditMOdalOpen} view={view} />
      <Table scroll={{ x: 'max-content' }} columns={columns} dataSource={data} className='wrapper-table' />

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

export default Locations