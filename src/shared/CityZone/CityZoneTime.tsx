import { useContext, useState } from "react";
import { Button, Checkbox, MenuProps, Tabs, TabsProps } from "antd";
import { Dropdown, Space } from "antd";
// import { CheckboxValueType } from "antd/es/checkbox/Group";
// import { CheckboxChangeEvent } from "antd/es/checkbox";
import CustomizedDashboardImage from "../../assets/icons/Dashboard/customizedDashboard.svg";
import { FilterContext } from "../../components/DatePicker/datePicker";
import { useLocation } from "react-router";

const plainOptions = ["Attendance Summary", "Productive Hours", "Idle Time", "Total Time Tracked"];

const City = (props: any) => {
  // const { isAllUserShow } = props;
  // const [checkedList, setCheckedList] = useState<CheckboxValueType[]>();
  // const [indeterminate, setIndeterminate] = useState(true);
  // const [checkAll, setCheckAll] = useState(false);
  const [visible, setVisible] = useState(false);

  // const onChange = (list: CheckboxValueType[]) => {
  //   setCheckedList(list);
  //   setIndeterminate(!!list.length && list.length < plainOptions.length);
  //   setCheckAll(list.length === plainOptions.length);
  // };

  // const onCheckAllChange = (e: CheckboxChangeEvent) => {
  //   setCheckedList(e.target.checked ? plainOptions : []);
  //   setIndeterminate(false);
  //   setCheckAll(e.target.checked);
  // };
  const { state, dispatch }: any = useContext(FilterContext);
  const currentRoute = useLocation();
  const filterRoutes = currentRoute?.pathname?.split("/")[1];

  const items: MenuProps["items"] = [
    {
      label: (
        <>
          <Tabs defaultActiveKey="1" />
        </>
      ),
      key: "0",
    },
  ];

  return (
    <div className="customized-dashboard">
      {props.dashboard && filterRoutes === "dashboard" && (
        <Dropdown menu={{ items }} placement="bottomLeft" trigger={["click"]}>
          <Space>
            <Button
              onClick={(e) => {
                setVisible(!visible);
                e.preventDefault();
              }}
              style={{ width: "100%" }}
            >
              <Space style={{ display: "flex", justifyContent: "space-between" }}>
                <>
                  <img src={CustomizedDashboardImage} />
                  <span style={{ color: "#3B4D60" }}>Category</span>
                </>
              </Space>
            </Button>
          </Space>
        </Dropdown>
      )}
    </div>
  );
};

export default City;
