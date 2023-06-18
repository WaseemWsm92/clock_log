import React from 'react'

// Ant Design
import { Tabs } from 'antd';



// SCSS
import './CompanySettingsTabs.scss';
import Locations from '../locations/Locations';
import OrganizationInformation from '../organizationInformation/OrganizationInformaion';
import Tracking from '../tracking/Tracking';
import EmployeeBurnoutAvoidance from '../employeeBurnoutAvoidance/EmployeeBurnoutAvoidance';
import SignIn from '../signIn/SignIn';
import RoleAndRights from '../roleAndRights/RoleAndRights';
import Designations from '../designations/Designations';
import Department from '../departments/Department';
import { useAppDispatch } from '../../../../hooks/useStoreHooks';
import { getLocationsData } from '../../../../store/settings/companySettings/signInSettings/signInSettings.api';


// Mock Data


const CompanySettingsTabs = () => {

  const dispatch = useAppDispatch();
  const items = [
    {
      key: '1',
      label: `Organization Information`,
      children: <OrganizationInformation/>,
    },
    {
      key: '2',
      label: `Locations`,
      children: <Locations/>,
    },
    {
      key: '3',
      label: `Tracking`,
      children: <Tracking/>,
    },
    {
      key: '4',
      label: `Employee Burnout Avoidance`,
      children: <EmployeeBurnoutAvoidance/>,
    },
    {
      key: '5',
      label: `Sign In`,
      children: <SignIn/>,
    },
    {
      key: '6',
      label: `Roles and Rights`,
      children: <RoleAndRights/>,
    },
    {
      key: '7',
      label: `Designations`,
      children: <Designations/>,
    },
    {
      key: '8',
      label: `Departments`,
      children:<Department/>,
    },
  ];



  const getTabsData=(key: any):any=>{
    console.log(typeof key)
    switch(key) {
      case "1":
  
        case "2":
          // code 
          return  dispatch(getLocationsData())

          case "3":
            // code 
            return console.log("third")
    }
  }

  return (
    <div className='company-settings-tabs-main card-bg-color'>
      <Tabs defaultActiveKey="1" items={items} onTabClick={(key)=>getTabsData(key)} className="wrapper-tabs"/>
    </div>

  )
}

export default CompanySettingsTabs