import { useState } from "react";
import { Dropdown, MenuProps } from "antd";
import SelectUsers from "../../assets/icons/DownArrow.svg";

const TimeInterval = () => {
  const [visible, setVisible] = useState(false);
  const onChange = () => { };
  const plainOptions = ["5 minutes", "5 minutes", "10 minutes", "15 minutes"];
  const items: MenuProps["items"] = plainOptions?.map((item, index) => ({
    label: (
      <li onClick={onChange} className="time_zone_hover fs-14 fw-400 line-height-16" style={{ padding: "10px" }}>
        {item}
      </li>
    ),
    key: index,
  }));

  return (
    <div className="buttons">
      <Dropdown menu={{ items }} placement="bottomLeft" open={visible} onOpenChange={(value) => setVisible(value)} trigger={["click"]}>
        <button
          onClick={(e) => {
            setVisible(true);
            e.preventDefault();
          }}
          className="fs-16 fw-500 cursor-pointer"
          style={{ minWidth: "166px", display: "flex", justifyContent: "space-between", alignItems: "center" }}
        >
          <span className="fs-16 fw-500">Time Interval</span>
          <img src={SelectUsers} alt="select" className="white-img-theme-class cursor-pointer" />
        </button>
      </Dropdown>
    </div>
  );
};

export default TimeInterval;
