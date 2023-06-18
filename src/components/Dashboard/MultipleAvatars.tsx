import React from "react";
import { AntDesignOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Tooltip } from "antd";

const MultipleAvatars: React.FC = () => (
  <>
    <Avatar.Group
      maxCount={3}
      maxPopoverTrigger="click"
      size="small"
      maxStyle={{
        color: "#3F4059",
        backgroundColor: "#E5E5E5",
        cursor: "pointer",
      }}
    >
      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      <Avatar style={{ backgroundColor: "#f56a00" }}>K</Avatar>
      <Tooltip title="Ant User" placement="top">
        <Avatar
          style={{ backgroundColor: "#87d068" }}
          icon={<UserOutlined />}
        />
      </Tooltip>
      <Avatar
        style={{ backgroundColor: "#1890ff" }}
        icon={<AntDesignOutlined />}
      />
        <Avatar
    style={{ backgroundColor: "#722ed1" }}
    icon={<AntDesignOutlined />}
  />
    </Avatar.Group>
  </>
);

export default MultipleAvatars;
