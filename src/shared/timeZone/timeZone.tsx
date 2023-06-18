import { useState } from "react";
import { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import TimeZoneIcon from "../../assets/icons/TimeZoneIcon.svg";
import { useLocation } from "react-router";
import "../selectUser/selectUser.scss";
import Search from "antd/es/transfer/search";

const plainOptions = [
  "(UTC+05:00) Islamabad, Karachi",
  "(UTC+04:00) Tbilisi",
  "(UTC+04:30) Kabul",
  "(UTC+04:00) Yerevan",
];

const TimeZone = (props: any) => {
  const [visible, setVisible] = useState(false);
  const currentRoute = useLocation();
  const filterRoutes = currentRoute?.pathname?.split("/")[1];
  const onChange = () => {};
  const items: MenuProps["items"] = [
    {
      label: (
        <>
          {" "}
          <div style={{ marginBottom: "0.5rem" }}>
            {" "}
            <span className="custom-search-field">
              {" "}
              <Search placeholder="Search by city or time zone" />{" "}
            </span>{" "}
          </div>{" "}
          {plainOptions?.map((item) => (
            <li className="time_zone_hover fs-14 fw-400 line-height-16" style={{ padding: "10px" }}>
              {" "}
              {item}
            </li>
          ))}
        </>
      ),
      key: "0",
    },
  ];

  return (
    <div className="customized-dashboard buttons">
      {(props.dashboard ||
        props.activityLog ||
        filterRoutes === "reports/activity-log" ||
        filterRoutes === "screencasts") && (
        <Dropdown
          menu={{ items }}
          open={visible}
          onOpenChange={setVisible}
          placement="bottomLeft"
          trigger={["click"]}
        >
          <Space>
            <button
              className="fs-16 fw-500 cursor-pointer"
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 6,
              }}
            >
              <img
                src={TimeZoneIcon}
                alt="clock"
                className="white-img-theme-class cursor-pointer"
              />
              <span>Time Zone</span>
            </button>
          </Space>
        </Dropdown>
      )}
    </div>
  );
};

export default TimeZone;
