import { useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import { Button, Checkbox, MenuProps, Tabs, TabsProps } from "antd";
import { Dropdown, Space } from "antd";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { Pagination } from "antd";
import "./usersFilter.scss";
import Search from "antd/es/transfer/search";

const plainOptions = [
  "Bilal",
  "Azeem",
  "Asad",
  "Ali",
  "Asim",
  "Manan",
  "Mubashir",
  "Ahmad",
  "Abrar",
];

const SelectUserFilter = () => {
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
  const onTabChange = (key: string) => {
    console.log(key);
  };

  const TabItems: TabsProps["items"] = [
    {
      key: "1",
      label: `Users`,
      children: (
        <>
          <Search placeholder="Search" />
          <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange}>
            All
          </Checkbox>
          <Checkbox.Group
            options={plainOptions}
            value={checkedList}
            onChange={onChange}
            style={{ display: 'flex', flexDirection: "column" }}

          />
        </>
      ),
    },
    {
      key: "2",
      label: `Teams`,
      children: (
        <>
          <span className="custom-search-field">
            <Search placeholder="Search" />
          </span>
          <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange}>
            All
          </Checkbox>
          <Checkbox.Group
            options={plainOptions}
            value={checkedList}
            onChange={onChange}
            // className="group-checkbox-flex2"
            style={{display:'flex', flexDirection:"column"}}
          />
        </>
      ),
    },
  ];
  const items: MenuProps["items"] = [
    {
      label: (
        <div className="users-management-filter-checkbox-style">
          <Tabs defaultActiveKey="1" items={TabItems} onChange={onTabChange} />
          <Pagination
            defaultCurrent={1}
            total={plainOptions.length}
            showTotal={(total, range) => `${range[0]}-${range[1]} of ${total}`}
            size="small"
            className="pagination-list d-flex justify-between w-100"
          />
        </div>
      ),
      key: "0",
    },
  ];

  return (
    <>
      <Dropdown
        className="wrap-select-user-filter "
        open={visible}
        onOpenChange={(value) => setVisible(value)}
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
            style={{ width: "272px", height:"39px" ,borderRadius:"4px"}}
            className="select-theme "
          >
            <Space style={{ display: "flex", justifyContent: "space-between" }} className="extra-dull">
              Select User
              <DownOutlined />
            </Space>
          </Button>
        </Space>
      </Dropdown>
    </>
  );
};

export default SelectUserFilter;
