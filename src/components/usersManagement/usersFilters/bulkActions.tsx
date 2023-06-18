import { useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import { Button, MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import "./usersFilter.scss";
interface Props {
  setDeleteModal: any;
  setDeactivateModal: any;
  setIsShowInfoModal: any;
  tabKey: any;
}
const BulkActions = (props: Props) => {
  const { setDeleteModal, setDeactivateModal, setIsShowInfoModal, tabKey } = props;
  const [visible, setVisible] = useState(false);

  const items: MenuProps["items"] = [
    { label: <div onClick={() => setIsShowInfoModal({ isToggled: true, id: '1' })}>Edit Info</div>, key: 0 },
    { label: <div onClick={() => setIsShowInfoModal({ isToggled: true, id: '2' })}>Edit Setting</div>, key: 1 },
    {
      label: (
        <div onClick={() => setDeactivateModal(true)}>{tabKey === '1' ? "Deactivate" : "Activate"} Users</div>
      ),
      key: 2,
    },
    {
      label: <div onClick={() => setDeleteModal(true)}>Delete Users</div>,
      key: 3,
    },
  ];

  return (
    <Dropdown onOpenChange={(value) => setVisible(value)} menu={{ items }} placement="bottomLeft" trigger={["click"]}>
      <Space>
        <Button
          onClick={(e) => {
            setVisible(!visible);
            e.preventDefault();
          }}
          style={{ width: "199px", height:'39px', borderRadius:"4px"  }}
        >
          <Space style={{ display: "flex", justifyContent: "space-between" }} className="extra-dull">
            Bulk Actions
            <DownOutlined />
          </Space>
        </Button>
      </Space>
    </Dropdown>
  );
};

export default BulkActions;
