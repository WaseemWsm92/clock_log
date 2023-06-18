import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Checkbox, Layout, Menu } from "antd";
import { RightOutlined, LeftOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { ProjectsDetails, SideBarItems } from "./ReportData";
import ExportIcon from "../assets/icons/reports/sidebar/Export.png";
import FileImg from "../assets/icons/reports/sidebar/file.png";
import "./Reports.scss";

const { Sider, Content } = Layout;

const ReportsLayout = ({ children }: any) => {
  const [hovered, setHovered] = useState(false);
  const [selected, setSelected] = useState<any[]>([]);
  const [collapsed, setCollapsed] = useState(false);
  const [ProjectItems, setProjectItems] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const userData: any = JSON.parse(localStorage.getItem("UserData") || "{}");
  const roleBaseSideBar = SideBarItems.filter((e: any) =>
    e?.toshowforrole.includes(userData?.role)
  );
  const [selectedItemPath, setSelectedItemPath] = useState<any>();
  const [projectSelectedItemPath, setProjectSelectedItemPath] = useState<any>();

  const handleSideBarNavigation = (event: any) => {
    const selectedItem = SideBarItems.find((item: any) => item.key === event.key);
    if (selectedItem?.label.includes("Project")) setProjectItems(true);
    selectedItem?.path && navigate(selectedItem.path);
  };

  const handleCheckboxChange = (e: any, label: string) => {
    if (e.target.checked) {
      setSelected([...selected, label]);
    } else {
      setSelected(selected.filter((select: any) => select !== label));
    }
  };

  useEffect(() => {
    const selectedPath = roleBaseSideBar.find((item: any) => item.path === pathname);
    const projectSelectedPath = ProjectsDetails.find(
      (item: any) => item.key === pathname.slice(-1)
    );
    setSelectedItemPath(selectedPath);
    setProjectSelectedItemPath(projectSelectedPath);

    if (selectedPath !== undefined && projectSelectedPath === undefined) {
      setProjectItems(false);
    } else {
      setProjectItems(true);
    }
  }, [pathname]);

  return (
    <>
      <Layout className="siderWrapper only-white-and-primary-color">
        <Sider
          width={250}
          className="border-radius-8 reportsSideBar common-layout-margin"
          trigger={null}
          collapsible
          collapsed={collapsed}
          style={{
            position: "relative",
            // background: "#ffffff",
            background: "var(--card-bg-color)",
            padding: "0 2px 0 10px",
          }}
        >
          <div style={{ marginTop: collapsed ? 40 : 0 }}>
            {!collapsed && (
              <div
                className="d-flex justify-between"
                style={{ padding: "0 10px", alignItems: "center" }}
              >
                <p className="fs-18 fw-700 title-color">
                  All {ProjectItems ? "Projects" : "Reports"}
                </p>
                {ProjectItems && selected.length >= 1 && (
                  <img src={ExportIcon} alt="" className="cursor-pointer" width={24} height={24} style={{marginRight:'10px'}} />
                )}
              </div>
            )}
            {!collapsed && ProjectItems && (
              <div className="d-flex cursor-pointer" onClick={() => setProjectItems(false)}>
                <ArrowLeftOutlined />
                <p className="fs-14 title-color" style={{ marginLeft: "10px" }}>
                  Back to Reports
                </p>
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
                style={{ color: "var(--title-color", border: "none" }}
              >
                {ProjectsDetails.map((item: any) => (
                  <Menu.Item key={item.key} title={null} style={{ alignItems: "center" }} onClick={() => navigate(`reports/project-task/${item.key}`)}>
                    {!collapsed && hovered ? (
                      <Checkbox
                        key={item.label}
                        checked={selected.includes(item.label)}
                        onChange={(e) => handleCheckboxChange(e, item.label)}
                      />
                    ) : (
                      <img src={FileImg} alt="sidebar" style={{ width: 20, height: 16 }} />
                    )}
                    {!collapsed && (
                      <span className="title-color" style={{ marginLeft: "10px", paddingRight: "100%" }}>
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
                selectedKeys={[selectedItemPath?.key]}
                items={roleBaseSideBar}
                style={{ color: "var(--title-color", border: "none" }}
                onClick={(event) => {
                  handleSideBarNavigation(event);
                }}
              />
            )}
          </div>
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
            {collapsed ? (
              <RightOutlined className="cursor-pointer  fs-12 text-white" />
            ) : (
              <LeftOutlined className="cursor-pointer fs-12 text-white" />
            )}
          </Layout>
        </Sider>

        <Layout
          className={
            `${pathname?.includes("web")
              ? "site-layout-no-padding "
              : "sideBar-layout "} common-layout-margin border-radius-8`
          }
          style={{ backgroundColor: "unset" }}
        >
          <Content
            // only-card-box-shadow add it for box shadow
            className={
              `${pathname?.includes("web")
                ? "site-layout-Nopadding"
                : "sideBar-layout-content card-bg-color only-card-box-shadow"}  border-radius-8 `
            }>
            {/* Outlet here for children components  */}
            {children || <Outlet />}
          </Content>
        </Layout>
      </Layout>
    </>
  );
};
export default ReportsLayout;
