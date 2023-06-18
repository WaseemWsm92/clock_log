import { useState } from "react";
import { Dropdown, MenuProps, Radio, RadioChangeEvent, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import MoveUserModal from "./ApplyWorkScheduleModals/moveUserModal";
import "./applyWorkScheduleFilters.scss";

const MoveSelectedUser = (props:any) => {
  const { isSelectedUser } = props;
  const [value, setValue] = useState("");

  const [isMoveSelectedUserModal, setIsMoveSelectedUserModal] = useState(false);

  const handelMoveSelectedUser = (e: RadioChangeEvent) => {
    setValue(e.target.value);
    setIsMoveSelectedUserModal(true);
  };
  const items: MenuProps["items"] = [
    {
      label: (
        <Radio.Group onChange={handelMoveSelectedUser} value={value}>
          <Space direction="vertical">
            <Radio value="Morning">Morning</Radio>
            <Radio value="Evening">Evening</Radio>
            <Radio value="Night">Night</Radio>
          </Space>
        </Radio.Group>
      ),
      key: "1",
    },
  ];

  return (
    <div className="select-sim-filters">
      <Dropdown disabled={isSelectedUser} menu={{ items }} trigger={["click"]}>
        <div
          onClick={(e) => {
            e.preventDefault();
          }}
          style={{ height: "39px" }}
          className="select-dropdown-btn fs-14 fw-400 border-radius-4"
        >
          <Space>
            Move Selected User
            <DownOutlined />
          </Space>
        </div>
      </Dropdown>
      <MoveUserModal
        initialState={isMoveSelectedUserModal}
        setState={setIsMoveSelectedUserModal}
        selectedTime={value}
      />
    </div>
  );
};

export default MoveSelectedUser;
