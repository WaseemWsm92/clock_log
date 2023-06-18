import { useState } from "react";
import { Checkbox, Dropdown, MenuProps, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import "./applyWorkScheduleFilters.scss";

const plainOptions = ["Absent", "Present", "Late"];

const SelectStatus = () => {
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
          className='group-checkbox-flex'
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
      >
        <div
          onClick={(e) => {
            e.preventDefault();
          }}
          style={{ height: "39px" }}
          className="select-dropdown-btn fs-14 fw-400 border-radius-4"
        >
          <Space>
            Select Status
            <DownOutlined />
          </Space>
        </div>
      </Dropdown>
    </div>
  );
};

export default SelectStatus;
