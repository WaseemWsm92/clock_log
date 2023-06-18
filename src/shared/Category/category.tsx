import { useState } from "react";
import { Checkbox, MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { useLocation } from "react-router";
import SelectUsers from "../../assets/icons/DownArrow.svg";
import "../selectUser/selectUser.scss";

const plainOptions = ["Productive Screecasts", "Unproductive Screecasts", "Low Activity Screecasts"];

const Category = (props: any) => {
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
  const currentRoute = useLocation();
  const filterRoutes = currentRoute?.pathname?.split("/")[1];

  const items: MenuProps["items"] = [
    {
      label: (
        <>
          <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
            All Screecasts
          </Checkbox>
          <Checkbox.Group style={{ display:"flex", flexDirection:"column"}} options={plainOptions} value={checkedList} onChange={onChange} className="category-wrapper" />
        </>
      ),
      key: "0",
    },
  ];

  return (
    <div className="customized-dashboard buttons">
      {(props.dashboard || props.activityLog || filterRoutes === "reports/activity-log" || filterRoutes === "screencasts") && (
        <Dropdown menu={{ items }} open={visible} placement="bottomLeft" trigger={["click"]} onOpenChange={setVisible}>
          <Space>
            <button style={{ width: "100%", display: "flex", alignItems: "center" }} className="fs-16 fw-500 cursor-pointer">
              <span style={{  marginRight: "10px" }}>Category</span>
              <img src={SelectUsers} alt="select user" className="white-img-theme-class cursor-pointer"/>
            </button>
          </Space>
        </Dropdown>
      )}
    </div>
  );
};

export default Category;
