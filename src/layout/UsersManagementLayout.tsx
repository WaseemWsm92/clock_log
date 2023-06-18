import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Checkbox, Layout, Menu } from "antd";
import { RightOutlined, LeftOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { ProjectsDetails, usersManagementSidbar } from "./ReportData";
import ExportIcon from "../assets/icons/reports/sidebar/Export.png";
import FileImg from "../assets/icons/reports/sidebar/file.png";
import "./Reports.scss";
const { Sider, Content } = Layout;
const UsersManagementLayout = () => {
  const [hovered, setHovered] = useState(false);
  const [selected, setSelected] = useState<any[]>([]);
  const [collapsed, setCollapsed] = useState(false);
  const [ProjectItems, setProjectItems] = useState(false);
  const [pageToShow, setPageToShow] = useState("0");
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [projectSelectedItemPath, setProjectSelectedItemPath] = useState<any>();
  const handleCheckboxChange = (e: any, label: string) => {
    if (e.target.checked) {
      setSelected([...selected, label]);
    } else {
      setSelected(selected.filter((select: any) => select !== label));
    }
  };
  return (
    <>
      {" "}
      <Layout className="siderWrapper only-white-and-primary-color">
        {" "}
        <Sider
          width={250}
          className="border-radius-8 reportsSideBar"
          trigger={null}
          collapsible
          collapsed={collapsed}
          style={{
            position: "relative",
            boxShadow: "2px 0px 7px rgb(16 24 40 / 20%)",
            minHeight: "67vh",
            background: "var(--card-bg-color)",
            padding: "0 2px 0 10px",
          }}
        >
          {" "}
          <div style={{ marginTop: collapsed ? 40 : 0 }}>
            {" "}
            {!collapsed && (
              <div className="d-flex justify-between" style={{ padding: "0 10px", alignItems: "center" }}>
                {" "}
                <p className="fs-18 fw-700 title-color"> All {ProjectItems ? "Projects" : "Reports"}</p>{" "}
                {ProjectItems && selected.length >= 1 && <img src={ExportIcon} alt="" className="cursor-pointer" width={24} height={24} />}
              </div>
            )}
            {!collapsed && ProjectItems && (
              <div className="d-flex cursor-pointer" onClick={() => setProjectItems(false)}>
                {" "}
                <ArrowLeftOutlined />{" "}
                <p className="fs-14 title-color" style={{ marginLeft: "10px" }}>
                  {" "}
                  Back to Reports
                </p>{" "}
              </div>
            )}
            {ProjectItems && projectSelectedItemPath !== undefined ? (
              <Menu
                theme="light"
                mode="vertical"
                defaultActiveFirst
                className="card-bg-color"
                selectedKeys={[projectSelectedItemPath?.key]}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(selected?.length >= 1 ? true : false)}
                // style={{ color: "#3B4D60", border: "none" }}
              >
                {" "}
                {ProjectsDetails.map((item: any) => (
                  <Menu.Item key={item.key} style={{ alignItems: "center" }}>
                    {" "}
                    {!collapsed && hovered ? (
                      <Checkbox key={item.label} checked={selected.includes(item.label)} onChange={(e) => handleCheckboxChange(e, item.label)} />
                    ) : (
                      <img src={FileImg} alt="sidebar" style={{ width: 20, height: 16 }} />
                    )}
                    {!collapsed && (
                      <span className="title-color" style={{ marginLeft: "10px", paddingRight: "100%" }} onClick={() => navigate(`reports/project-task/${item.key}`)}>
                        {" "}
                        {item.label}
                      </span>
                    )}
                  </Menu.Item>
                ))}
              </Menu>
            ) : (
              <Menu
                theme="light"
                mode="vertical"
                className="card-bg-color"
                items={usersManagementSidbar}
                // style={{ color: "#3B4D60", border: "none" }}
                style={{ color: "var(--title-color", border: "none" }}
                onClick={(event) => {
                  setPageToShow(event.key);
                }}
              />
            )}
          </div>{" "}
          <Layout
            style={{
              position: "absolute",
              top: 0,
              right: -13,
              marginTop: 16,
              padding: "5px",
              background: "#E76F51",
              borderRadius: "20px",
            }}
            onClick={() => setCollapsed(!collapsed)}
          >
            {" "}
            {collapsed ? <RightOutlined className="cursor-pointer  fs-12 text-white" /> : <LeftOutlined className="cursor-pointer fs-12 text-white" />}
          </Layout>{" "}
        </Sider>{" "}
        <Layout className={pathname?.includes("web") ? "site-layout-no-padding border-radius-8" : "sideBar-layout border-radius-8"} style={{ backgroundColor: "unset" }}>
          {" "}
          <Content
            style={{ boxShadow: "2px 0px 7px rgb(16 24 40 / 20%)" }}
            className={`${pathname?.includes("web") ? "site-layout-Nopadding border-radius-8" : "sideBar-layout-content border-radius-8"} card-bg-color`}
          >
            {" "}
            {usersManagementSidbar[+pageToShow].content}
          </Content>{" "}
        </Layout>{" "}
      </Layout>{" "}
    </>
  );
};
export default UsersManagementLayout;
