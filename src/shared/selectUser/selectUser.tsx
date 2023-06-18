import { useState } from "react";
import { useLocation } from "react-router";
import { Checkbox, MenuProps, Tabs, TabsProps, Dropdown, Space, Pagination } from "antd";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import Search from "antd/es/transfer/search";

import SelectUsers from "../../assets/icons/DownArrow.svg";
import "./selectUser.scss";

const plainOptions = ["Bilal", "Asad", "Waqar", "Asif", "Umer", "Ali", "Arslan", "Haroon", "Kyzer", "Pracha"];

const SelectUserFilter = (props: any) => {
  const currentRoute = useLocation();
  const filterRoutes = currentRoute?.pathname?.split("/")[1];
  const [checkedList, setCheckedList] = useState<CheckboxValueType[]>();
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);
  const [visible, setVisible] = useState(false);

  const onChange = (list: CheckboxValueType[]) => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < plainOptions.length);
    setCheckAll(list.length === plainOptions.length);
  };

  const onCheckAllChange = (e: CheckboxChangeEvent) => {
    setCheckedList(e.target.checked ? plainOptions : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };

  const TabItems: TabsProps["items"] = [
    {
      key: "1",
      label: `Users`,
      children: (
        <>
          <span className='custom-search-field'><Search placeholder="Search" /></span>
          <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
            All
          </Checkbox>
          <Checkbox.Group className="tabCheckBoxes" options={plainOptions} value={checkedList} onChange={onChange} />
        </>
      ),
    },
    {
      key: "2",
      label: `Teams`,
      children: (
        <>
          <span className='custom-search-field'><Search placeholder="Search" /></span>
          <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange}>
            All
          </Checkbox>
          <Checkbox.Group className="tabCheckBoxes" options={plainOptions} value={checkedList} onChange={onChange} />
        </>
      ),
    },
  ];
  const items: MenuProps["items"] = [
    {
      label: (
        <>
          <Tabs defaultActiveKey="1" items={TabItems} className="selectUsers" />
          <Pagination defaultCurrent={1} total={plainOptions.length} showTotal={(total, range) => `${range[0]}-${range[1]} of ${total}`} size="small" className="pagination-list" />
        </>
      ),
      key: "0",
    },
  ];

  return (
    <div className="buttons">
      {(props.dashboard || props.activityLog || props.reports || filterRoutes === "dashboard" || filterRoutes === "screencasts" || filterRoutes === "Reports web-app-usage") && (
        <Dropdown menu={{ items }} placement="bottomLeft" open={visible} onOpenChange={(value) => setVisible(value)} trigger={["click"]}>
          <button
            onClick={(e) => {
              setVisible(true);
              e.preventDefault();
            }}
            className="fs-16 fw-500 cursor-pointer d-flex align-center">
            <p className="fs-16 fw-500 m-0" style={{ paddingRight: "10px" }}>Select Users</p>
            <img src={SelectUsers} alt="search" className="white-img-theme-class cursor-pointer" />
          </button>
        </Dropdown>
      )}
    </div>
  );
};

export default SelectUserFilter;
