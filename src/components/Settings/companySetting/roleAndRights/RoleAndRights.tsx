import React from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { Checkbox } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import "./RoleAndRights.scss";

const RoleAndRights: React.FC = () => {
  interface DataType {
    key: React.ReactNode;
    rights: string;
    admin: string;
    manager: string;
    employee: string;
    children?: DataType[];
  }

  const columns: ColumnsType<DataType> = [
    {
      title: "Rights",
      dataIndex: "rights",
      key: "rights",
    },
    {
      title: "Admin",
      dataIndex: "admin",
      key: "admin",
      width: "12%",
      render: (_,record) => {
        if (record.children) {
          return null;      
         }
           return <Checkbox onChange={onChange} />;
      },    },
    {
      title: "Manager",
      dataIndex: "manager",
      width: "30%",
      key: "manager",
      render: (_, record) => {
        if (record.children) {
          return null;      
         }
           return <Checkbox onChange={onChange} />;
      },    },
    {
      title: "Employee",
      dataIndex: "employee",
      width: "30%",
      key: "employee",
      render: (_, record) => {
        if (record.children) {
          return null;      
         }
           return <Checkbox onChange={onChange} />;
      },
    
    },
  ];

  const data: DataType[] = [
    {
      key: 1,
      rights: "Reports",
      admin: "",
      manager: "",
      employee: "",
      children: [
        {
          key: 2,
          rights: "Activity Log",
          admin: "",
          manager: "",
          employee: "",
        },
        {
          key: 3,
          rights: "Project & Task",
          admin: "",
          manager: "",
          employee: "",
        },
        {
          key: 4,
          rights: "Web & App Usage",
          admin: "",
          manager: "",
          employee: "",
        },
        {
          key: 5,
          rights: "Top Users",
          admin: "",
          manager: "",
          employee: "",
        },
        {
          key: 6,
          rights: "Work Efficeency",
          admin: "",
          manager: "",
          employee: "",
        },
        {
          key: 7,
          rights: "Personal Insights",
          admin: "",
          manager: "",
          employee: "",
        },
        {
          key: 8,
          rights: "Activity Summary",
          admin: "",
          manager: "",
          employee: "",
        },
        {
          key: 9,
          rights: "Attendance",
          admin: "",
          manager: "",
          employee: "",
        },
        {
          key: 10,
          rights: "Hours Tracked",
          admin: "",
          manager: "",
          employee: "",
        },
        {
          key: 11,
          rights: "Customized Reports",
          admin: "",
          manager: "",
          employee: "",
        },
        {
          key: 12,
          rights: "Workload Balance",
          admin: "",
          manager: "",
          employee: "",
        },
        {
          key: 13,
          rights: "Timeline",
          admin: "",
          manager: "",
          employee: "",
        },
      ],
    },
    {
      key: 14,
      rights: "Edit Screencasts",
      admin: "",
      manager: "",
      employee: "",
    },
    {
      key: 15,
      rights: "Edit Timeline",
      admin: "",
      manager: "",
      employee: "",
    },
    {
      key: 16,
      rights: "Dashboard",
      admin: "",
      manager: "",
      employee: "",
    },
    {
      key: 17,
      rights: "Settings",
      admin: "",
      manager: "",
      employee: "",
      children: [
        {
          key: 18,
          rights: "Project and task settings",
          admin: "",
          manager: "",
          employee: "",
        },
        {
          key: 19,
          rights: "Web and App settings",
          admin: "",
          manager: "",
          employee: "",
        },
        {
          key: 20,
          rights: "Achievements",
          admin: "",
          manager: "",
          employee: "",
        },
      ],
    },
  ];
  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };

  return (
    <>
      <div className="roleRight" style={{marginBottom:"100px"}}>
        <Table className="wrapper-table"
          scroll={{ x: "max-content" }}
          columns={columns}
          dataSource={data}
          style={{marginTop:"14px"}}
        />
      </div>
    </>
  );
};

export default RoleAndRights;
