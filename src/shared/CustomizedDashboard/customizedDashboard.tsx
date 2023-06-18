import { useContext,  useState } from "react";
import {Checkbox, Dropdown, Menu} from "antd";
import { CheckboxValueType } from "antd/lib/checkbox/Group";
import { CheckboxChangeEvent } from "antd/lib/checkbox";
import CustomizedDashboardIcon from "../../assets/icons/CustomizedDashboardIcon.svg";
import { FilterContext } from "../../components/DatePicker/datePicker";
import { useLocation } from "react-router";
import "./customizedDashboard.scss";

const plainOptions = [
  "Attendance Summary",
  "Productive Hours",
  "Idle Time",
  "Total Time Tracked",
  "Most Used Services",
  "Distraction  Alert",
  "Workload Balance Issues",
  "Top Projects",
  "Employees of the Month",
  "Overall Score",
  "Productivity Hours",
  "Idle Minutes",
  "Haven't Started Tracking Time",
  "Manual Added Time",
  "Organization Productivity (Last 7 Days)",
];
const plainOptionsEmployee = [
  "Attendance Summary",
  "Productive Hours",
  "Idle Time",
  "Total Time Tracked",
  "TimeLine",
  "Top Projects",
  "Employees of the Month",
  "Employee Most Used Services",
  "Unproductive Services",
  "Unrated Services",
  "Manual Added Time",
  "Haven't Started Tracking Time",
  "Hours Tracked",
  "Organization Productivity (Last 7 Days)",
];


let optionsToDisplay:any = [];
const CustomizedDashboard = (props: any) => {
  const { isAllUserShow } = props;
  const { role }: any = JSON.parse(localStorage.getItem("UserData") || "{}");
  if(role === "Admin" || role === "Manager"){
    optionsToDisplay = plainOptions;
  }
  if(role==="Employee"){
    optionsToDisplay=plainOptionsEmployee
  }
  const [checkedList, setCheckedList] = useState<CheckboxValueType[]>(optionsToDisplay);
  const [indeterminate, setIndeterminate] = useState(true);
  const { dispatch }: any = useContext(FilterContext);
  const [visible, setVisible] = useState(false);
  const onChange = (list: CheckboxValueType[]) => {
    dispatch({ type: "updateSelectedOptions", payload: list });
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < optionsToDisplay.length);
  };

  const onCheckAllChange = (e: CheckboxChangeEvent) => {
    setCheckedList(e.target.checked ? optionsToDisplay : []);
    setIndeterminate(false);
  };

  const currentRoute = useLocation();
  const filterRoutes = currentRoute?.pathname?.split("/")[1];

  const menu  = (
    <Menu>
      {isAllUserShow && (
        <Menu.Item key="0">
          <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange}>
            All
          </Checkbox>
        </Menu.Item>
      )}
      <Menu.Item key="1">
        <Checkbox.Group
          options={optionsToDisplay}
          value={checkedList}
          onChange={onChange}
          className="select-user-wrap-dashboard"
        />
      </Menu.Item>
    </Menu>
  );

  const handleVisibleChange = (flag: boolean) => {
    setVisible(flag);
  };

  return (
    <div className="customized-dashboard">
      {props.dashboard && filterRoutes === "dashboard" && (
        <Dropdown
        overlay={menu}
          placement="bottomLeft"
          open={visible}
          onOpenChange={handleVisibleChange}
          trigger={["click"]}
        >
          <button
            onClick={(e) => {
              e.preventDefault();
            }}
            className='fs-16 fw-500 cursor-pointer dashboard-btn'
          >
              <img src={CustomizedDashboardIcon} alt="custom_icon" className="white-img-theme-class cursor-pointer"/>
              <span >Customize Dashboard</span>
          </button>
        </Dropdown>
      )}
    </div>
  );
};

export default CustomizedDashboard;

