import { useState } from "react";
import { Button, Checkbox, Dropdown, MenuProps, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import "./TasksSelectedStatus.scss";

const plainOptions = ["All", "To Do", "In Progress", "Review", "Completed"];

const TasksSelectedStatus = () => {
  const [checkedList, setCheckedList] = useState<CheckboxValueType[]>();
  const [isOpenDropdown, setisOpenDropdown] = useState(false);

  const onChange = (checkedValues: CheckboxValueType[]) => {
    setCheckedList(checkedValues);
  };

  const items: MenuProps["items"] = [
    {
      label: (
        <Checkbox.Group
          options={plainOptions}
          value={checkedList}
          onChange={onChange}
          className="pr-tabs-select-status"
        />
      ),
      key: "1",
    },
  ];

  return (
    <div className="select-sim-filters">
      <Dropdown
        menu={{ items }}
        trigger={["click"]}
        open={isOpenDropdown}
        onOpenChange={setisOpenDropdown}
        className="card-bg-color card-bg-3-border-color title-color btn-theme-color"
      >
        <Button
          onClick={(e) => {
            e.preventDefault();
          }}
          style={{
            height: "39px",

            // padding: "6px",
            // width: "116px",
          }}
          className="select-dropdown-btn fs-16 fw-500 border-radius-4 btn-simple"
        >
          <Space>
            Status
            <DownOutlined />
          </Space>
        </Button>
      </Dropdown>
    </div>
  );
};

export default TasksSelectedStatus;
