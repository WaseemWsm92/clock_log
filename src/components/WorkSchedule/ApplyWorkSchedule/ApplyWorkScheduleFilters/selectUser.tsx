import { useState } from "react";
import {
  Checkbox,
  Dropdown,
  Input,
  MenuProps,
  Pagination,
  Space,
  Tabs,
  TabsProps,
} from "antd";
import { DownOutlined } from "@ant-design/icons";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import { SearchOutlined } from "@ant-design/icons";
import "./applyWorkScheduleFilters.scss";

const usersDataList = [
  "Asad",
  "Waqar",
  "Asif",
  "Umer",
  "Ali",
  "Arslan",
  "Khyzer",
  "Haroon",
  "Pracha",
];

const teamsDataList = [
  "Designer",
  "ClockLog",
  "BuzzHr",
  "Pet",
  "Care Libarary",
  "Social media sheet",
  "Formation Book",
  "Foster app",
];

const SelectUser = () => {
  const [checkedListUsers, setcheckedListUsers] =
    useState<CheckboxValueType[]>();
  const [checkedListTeams, setcheckedListTeams] =
    useState<CheckboxValueType[]>();
  const [indeterminateUsers, setIndeterminateUsers] = useState(false);
  const [indeterminateTeams, setIndeterminateTeams] = useState(false);
  const [checkAllUsers, setCheckAllUsers] = useState(false);
  const [checkAllTeams, setCheckAllTeams] = useState(false);

  const onUserChange = (list: CheckboxValueType[]) => {
    setcheckedListUsers(list);
    setIndeterminateUsers(!!list.length && list.length < usersDataList.length);
    setCheckAllUsers(list.length === usersDataList.length);
  };
  const onCheckAllUserChange = (e: CheckboxChangeEvent) => {
    setcheckedListUsers(e.target.checked ? usersDataList : []);
    setIndeterminateUsers(false);
    setCheckAllUsers(e.target.checked);
  };

  const onTeamsChange = (list: CheckboxValueType[]) => {
    setcheckedListTeams(list);
    setIndeterminateTeams(!!list.length && list.length < teamsDataList.length);
    setCheckAllTeams(list.length === teamsDataList.length);
  };
  const onCheckAllTeamsChange = (e: CheckboxChangeEvent) => {
    setcheckedListTeams(e.target.checked ? teamsDataList : []);
    setIndeterminateTeams(false);
    setCheckAllTeams(e.target.checked);
  };

  const TabItems: TabsProps["items"] = [
    {
      key: "1",
      label: `Users`,
      children: (
        <>
          <Input
            className="users-search-input custom-input-field"
            placeholder="Search"
            prefix={<SearchOutlined />}
            style={{ height: "40px" }}
          />
          <Checkbox
            indeterminate={indeterminateUsers}
            onChange={onCheckAllUserChange}
          >
            All
          </Checkbox>
          <Checkbox.Group
            options={usersDataList}
            value={checkedListUsers}
            onChange={onUserChange}
            className="group-checkbox-flex"
          />
        </>
      ),
    },
    {
      key: "2",
      label: `Teams`,
      children: (
        <>
          <Input
            className="users-search-input custom-input-field"
            placeholder="Search"
            prefix={<SearchOutlined />}
            style={{ height: "40px" }}
          />
          <Checkbox
            indeterminate={indeterminateTeams}
            onChange={onCheckAllTeamsChange}
          >
            All
          </Checkbox>
          <Checkbox.Group
            options={teamsDataList}
            value={checkedListTeams}
            onChange={onTeamsChange}
            className="group-checkbox-flex"
          />
        </>
      ),
    },
  ];
  const items: MenuProps["items"] = [
    {
      label: (
        <>
          <Tabs defaultActiveKey="1" items={TabItems} className="wrapper-tabs" />
          <Pagination
            defaultCurrent={1}
            total={usersDataList.length}
            showTotal={(total: any, range: any[]) =>
              `${range[0]}-${range[1]} of ${total}`
            }
            size="small"
            className="pagination-list"
          />
        </>
      ),
      key: "0",
    },
  ];

  const [isOpenDropdown, setisOpenDropdown] = useState(false);

  return (
    <div className="select-user">
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
            Select User
            <DownOutlined />
          </Space>
        </div>
      </Dropdown>
    </div>
  );
};

export default SelectUser;
