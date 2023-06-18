import { useState } from "react";
import { Button, Checkbox, MenuProps, Typography} from "antd";
import { Dropdown, Space } from "antd";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import { DownOutlined } from "@ant-design/icons";
import './scheduleReports.scss'

const plainOptions = [
  "Activity Log",
  "Project & Task",
  "TimeLine",
  "Web & App Usage",
  "Top Users",
  "Work Effeciency",
  "Personal Insight",
  "Attendance",
  "Hours Tracked",
  "Customized Reports",
  "Work Load Balance",
  "Team Comparison",
];
const DropdownWrapper = () => {
  const [checkedList, setCheckedList] = useState<CheckboxValueType[]>();
  const [visible, setVisible] = useState(false);
  const onChange = (list: CheckboxValueType[]) => {
    setCheckedList(list);
  };

  const items: MenuProps["items"] = [
    {
      label: (
        <div className="column-checkbox"><Checkbox.Group options={plainOptions} value={checkedList} onChange={onChange} /></div>
      ),
      key: "0",
    },
  ];

  return (
    <>
      <Dropdown className="drop" open={visible} menu={{ items }} placement="bottomLeft" trigger={["click"]} onOpenChange={setVisible}>
        <div className="selectWrapper" >
        {/* style={{ width: "272px", display: "block" }} */}
          <Button
            style={{width:'100%',display:'flex',justifyContent:'space-between',alignItems:'center',borderRadius:"4px",height:"40px",border:"1px solid #E6E6E6"}} className="btn-all-reports">
            <Typography className="select-label-color fs-14 fw-400" style={{color:"#A0ACBB"}}>All Reports</Typography>
            <DownOutlined />
          </Button>
        </div>
      </Dropdown>
    </>
  );
};

export default DropdownWrapper;
