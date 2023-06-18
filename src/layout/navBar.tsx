import { Fragment, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MenuOutlined, DownOutlined, UpOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Badge, Drawer, Dropdown, Switch } from "antd";
import { v4 as uuidv4 } from "uuid";
import ClickAwayListener from "react-click-away-listener";
import { navItems } from "./navData";
import { SubItemsType } from "../types/NavbarTypes";
import Logo from "../../src/assets/images/brands/Final-Clock.gif";
import Bell from "../assets/images/header/bell.png";
import DrawerNavsLinks from "./DrawerNavsLinks";
import DrawerComp from "./DrawerComp";
import NotifyTabs from "../components/notifications/notificationTabs";
import type { MenuProps } from "antd";
import "./navBar.scss";

const NavBar = () => {
  const [toggleDrawer, setToggleDrawer] = useState({
    open: false,
    placement: "",
    type: "",
  });
  const [toggleNotifications, setToggleNotifications] = useState({
    open: false,
    placement: "",
    type: "",
  });
  const [active, setActive] = useState<string>("Dashboard");
  const [dropDown, setDropDown] = useState(false);
  const [visible, setVisible] = useState(false);
  const [activeChild, setActiveChild] = useState("");
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const { pathname } = useLocation();

  const renderComponent: any = {
    navbar: <DrawerNavsLinks setToggleDrawer={setToggleDrawer} toggleDrawer={toggleDrawer} />,
  };
  const onLogOut = () => {
    setVisible(false);
    localStorage.removeItem("UserData");
    navigate("/login");
  };
  const handleMyAccount = () => {setVisible(false);setActive("");setActiveChild("");};useEffect(() => { handleMyAccount()}, [pathname.includes('my-account')])
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <Link to="/my-account" className="m-0 title-color fs-14 d-block links-hover" onClick={handleMyAccount}>My Account</Link>
      ),
    },
    {
      key: '2',
      label: (<p className="m-0 title-color fs-14 d-block links-hover" onClick={onLogOut}>Sign Out</p>)
    },
  ];

  const userData: any = JSON.parse(localStorage.getItem("UserData") || "{}");
  const handleRole = (item: any) => {
    if (userData.role === "Employee" && item.title === "Reports") {
      navigate("reports/project-task/1");
      setActive("Reports");
    } else {
      navigate(item.path);
      setActive(item.title);
    }
  };

  // ###################### Effect to get theme mode #####################
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  useEffect(() => {
    navItems?.map((e: any) => {
      if (e?.path.includes(pathname)) {
        setActive(e?.title);
        setActiveChild("");
      }
      e?.subItems?.map((subitem: any) => {
        if (`/${subitem?.path}` === pathname) {
          setActive(e.title);
          setActiveChild(subitem.title);
        }
      });
    });
  }, [pathname]);
  const overlayStyle = { borderRadius: 0 };
  return (
    <>
      <div className="header-main-wrapper header-bg">
        <div className="logo">
          <MenuOutlined className="menu-bar" onClick={() => setToggleDrawer({ open: true, placement: "left", type: "navbar" })} />
          <img
            src={Logo}
            alt="brand_logo"
            height={60}
            className="brand cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          />
        </div>
        <div className={userData.role === "Employee" ? "employeeMenu" : "menus"}>
          <nav className="nav">
            <ul className="nav-title">
              {navItems.map((item: any) => {
                return (
                  <Fragment key={uuidv4()}>
                    {item.toshowforrole.includes(userData.role) && (
                      <div>
                        <li className={`nav-link ${active === item.title && "activeNav"}`}>
                          <img className="nav-img" src={(isDarkMode ? item.darkIcon : item.lightIcon)} alt={"icon"} onClick={() => {
                            handleRole(item);
                          }}
                          />
                          <span
                            className="fs-12 nav-text title-color"
                            style={{
                              color: active === item.title ? "#e76f51" : "",
                            }}
                            onClick={() => {
                              item.subItems ? setDropDown(true) : navigate(item.path);
                              setActive(item.title);
                            }}
                          >
                            {item.title} {item.subItems && (dropDown && active && active === item.title ? <UpOutlined style={{ fontSize: "10px" }} /> : <DownOutlined style={{ fontSize: "10px" }} />)}
                          </span>
                        </li>
                        {item.subItems && dropDown && active === item.title && (
                          <ClickAwayListener onClickAway={() => setDropDown(false)}>
                            <div className="dropDown select-theme">
                              {item.subItems.map(
                                (subNav: SubItemsType) =>
                                  subNav.toshowforrole.includes(userData.role) && (
                                    <Fragment key={uuidv4()}>
                                      <p
                                        onClick={() => {
                                          navigate(subNav.path);
                                          setActiveChild(subNav.title);
                                          setDropDown(false);
                                        }}
                                        style={{
                                          color: activeChild === subNav.title ? "#e76f51" : "",
                                        }}
                                      >
                                        {subNav.title}
                                      </p>
                                    </Fragment>
                                  )
                              )}
                            </div>
                          </ClickAwayListener>
                        )}
                      </div>
                    )}
                  </Fragment>
                );
              })}
            </ul>
          </nav>
        </div>
        <div className="short_hands">
          <Switch className="switch fs-12" checkedChildren="Dark" unCheckedChildren="Light" onChange={() => setIsDarkMode(!isDarkMode)} />
          <Badge count={10}>
            <img
              className="cursor-pointer white-img-theme-class "
              src={Bell}
              alt="notification_icon"
              onClick={() =>
                setToggleNotifications({
                  open: true,
                  placement: "right",
                  type: "",
                })
              }
            />
          </Badge>
          <Dropdown overlayClassName="profileDropDown" overlayStyle={overlayStyle} open={visible} onOpenChange={setVisible} menu={{ items }} placement="bottomLeft" arrow={false} trigger={["click"]}>
            <Avatar className="cursor-pointer" icon={<UserOutlined />} />
          </Dropdown>
        </div>
      </div>
      {toggleDrawer && (
        <DrawerComp open={toggleDrawer.open} placement={toggleDrawer.placement} onClose={() => setToggleDrawer({ ...toggleDrawer, open: false, type: "navbar" })} width={270}>
          {renderComponent[toggleDrawer.type]}
        </DrawerComp>
      )}
      {toggleNotifications && (
        <Drawer
          className="notificationDrawer"
          maskStyle={{ background: "none", border: "none" }}
          style={{
            padding: "10px",
            height: "80%",
            position: "absolute",
            top: "65px",
            right: "15px",
            borderRadius: "6px",
          }}
          placement="right"
          width={window.innerWidth > 1200 ? "30%" : "90%"}
          onClose={() =>
            setToggleNotifications({
              ...toggleNotifications,
              open: false,
              type: "",
            })
          }
          open={toggleNotifications.open}
          closable={false}
        >
          <p className="fs-24 fw-600 p-0 m-0 title-color">Notifications</p>
          <NotifyTabs />
        </Drawer>
      )}
    </>
  );
};
export default NavBar;
