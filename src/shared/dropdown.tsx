import { useState } from "react";
import { Button, Checkbox, MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import DropdownIcon from "../assets/icons/dropdownIcon.svg";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import { CheckboxChangeEvent } from "antd/es/checkbox";

const plainOptions = [
  "Productive Screecasts",
  "Unproductive Screecasts",
  "Low Activity Screecasts",
];
const DropdownWrapper = () => {
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

  const items: MenuProps["items"] = [
    {
      label: (
        <>
          <Checkbox
            indeterminate={indeterminate}
            onChange={onCheckAllChange}
            checked={checkAll}
          >
            All Screecasts
          </Checkbox>
          <Checkbox.Group
            options={plainOptions}
            value={checkedList}
            onChange={onChange}
          />
        </>
      ),
      key: "0",
    },
  ];

  return (
    <>
      <Dropdown
        visible={visible}
        menu={{ items }}
        placement="bottomLeft"
        trigger={["click"]}
      >
        <Space>
          <Button
            onClick={(e) => {
              setVisible(!visible);
              e.preventDefault();
            }}
          >
            <img src={DropdownIcon} alt="" style={{ marginRight: "10px" }} />
            Category
          </Button>
        </Space>
      </Dropdown>
    </>
  );
};

export default DropdownWrapper;
