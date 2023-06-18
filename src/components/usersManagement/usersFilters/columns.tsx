import { useState } from "react";
import { InsertRowLeftOutlined } from "@ant-design/icons";
import { Button, Checkbox, MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import "./usersFilter.scss";

const plainOptions = ["UserName", "User ID", "User Role","Shift", "Location", "Teams","Projects", "Actions"];

const ColumnFilter = () => {
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
        <div className='users-management-filter-checkbox-style'>
          <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange}>
            All
          </Checkbox>
          <Checkbox.Group
            options={plainOptions}
            value={checkedList}
            onChange={onChange}
          />
        </div>
      ),
      key: "0",
    },
  ];

  return (
    <div>
      <Dropdown open={visible} onOpenChange={(value)=>setVisible(value)} menu={{ items }} placement="bottomLeft" trigger={["click"]}>
        <Space>
          <Button
            onClick={(e) => {
              setVisible(!visible);
              e.preventDefault();
            }}
            style={{height:"39px",borderRadius:"4px !important"}}
          >
            <Space style={{ display: "flex", justifyContent: "space-between" }} className="extra-dull">
              <InsertRowLeftOutlined />
              Columns
            </Space>
          </Button>
        </Space>
      </Dropdown>
    </div>
  );
};

export default ColumnFilter;
