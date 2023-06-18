import React, { useEffect, useState } from "react";
import { Button, Popover, Table, Input, Dropdown, Space, MenuProps, } from "antd";
import { UndoOutlined } from "@ant-design/icons";
import type { ColumnGroupType, ColumnType } from "antd/es/table";
import Dots from "../../assets/icons/dots.png";
import Delete from "../../assets/icons/delete.png";
import DeleteIcon from "../../assets/icons/DeleteUserManagementIcon.svg";
import Avatar from "../../assets/images/users/master.svg";
import Edit from "../../assets/icons/edit.png";
import DeActivate from "../../assets/icons/deactivate.png";
import ResendIcon from "../../assets/icons/resend-icon.svg";
import ActivateUser from "../../assets/icons/activate-user.svg";
import { columnsData } from "../../mock/users-mock-data";
import { dropdownValues, optionsColumn, projects, teams, projectContent, teamContent } from "./Users-data";
// import restoreSvgIcon from "../../assets/icons/restore-icon.svg";
import restoreIcon from "../../assets/images/users/restore.png";
import DeleteModal from "./Modals/DeleteModal";
import DeactivateModal from "./Modals/DeactivateModal";
import RestoreModal from "./Modals/RestoreModal";
import LocationFilter from "./usersFilters/locationFIlter";
import SelectUserFilter from "./usersFilters/selectUser";
import ShiftFilter from "./usersFilters/shiftFIlter";
import UserRoleFilter from "./usersFilters/UserRole";
import { SearchOutlined } from "@ant-design/icons";
import Invitation from "../../assets/icons/invitation.png";
import DropdownIcon from "../../assets/icons/reports/webApp/column.svg";
import BulkActions from "./usersFilters/bulkActions";
import EditInfoSettingModal from "./Modals/editInfoSettingModal/edit-info-setting";
import InvitationStatusModal from "./Modals/invitation-status/invitation-statusModal";
import PendingEditUser from "./pendingEdit/invite-users";
import ColumnDropdownWrapper from "../../shared/ColumnDropdown";
import AppSnackbar from "../../utils/snackbar";
import "./usersFilters/usersFilter.scss";
import restoreSvgIcon from "../../assets/icons/restore-icon.svg";

interface Props {
  tabsKey: any;
  setIsEditPage: any;
}

const UsersTable = (props: Props) => {
  const [IsShowTableColumns, setIsShowTableColumns] = useState(dropdownValues);
  const [columnOption, setColumnOption] = useState(optionsColumn);
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const [deactivateModal, setDeactivateModal] = useState<boolean>(false);
  const [restoreModal, setRestoreModal] = useState<boolean>(false);
  const [isShowEditModal, setIsShowEditModal] = useState<boolean>(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState<any>([]);
  const [isShowStatusModal, setIsShowStatusModal] = useState(false);
  const [isShowInfoModal, setIsShowInfoModal] = useState<{
    isToggled: boolean;
    id: string;
  }>({ isToggled: false, id: "1" });

  const handleResendMessage = () => {
    props.tabsKey === "4" && AppSnackbar({ type: "success", message: "Resend Successfully", })
  }
  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };
  //action popover content
  const items: MenuProps["items"] = [
    {
      label: (
        <div
          style={{ display: "flex", alignItems: "center", gap: "8px" }}
          onClick={() => {
            props.tabsKey !== "4"
              ? props.setIsEditPage(true)
              : setIsShowEditModal(true);
          }}
        >
          <img height={18.33} width={18.33} src={Edit} alt="editicon" />
          <span>Edit</span>
        </div>
      ),
      key: "1",
    },
    {
      label: (
        <div
          style={{ display: "flex", alignItems: "center", gap: "11px" }}
          onClick={() => {
            setDeleteModal(true);

          }}
        >
          <img src={Delete} alt="delete" height={18} width={16} /> <span>Delete</span>
        </div>
      ),
      key: "2",
    },
    {
      label: (
        <div
          style={{ display: "flex", alignItems: "center", gap: "12px" }}
          onClick={() => {
            handleResendMessage();
            props.tabsKey !== "4" && setDeactivateModal(true);
          }}
        >
          {/* <img src={DeActivate} alt="delete_icn" /> */}
          <>
            {props.tabsKey === "4"
              ? <img src={ResendIcon} alt="ResendIcon" />
              : props.tabsKey === "2"
                ? <img src={ActivateUser} alt="ActivateUser" />
                : <img src={DeActivate} alt="delete_icn" />
            }
          </>
          <span >
            {props.tabsKey === "4"
              ? "Resend"
              : props.tabsKey === "2"
                ? "Activate"
                : "Deactivate"}
          </span>
        </div>
      ),
      key: "3",
    },
  ];

  const UserTableConstants: any = () => {
    const columns: (ColumnGroupType<any> | ColumnType<any>)[] = [];
    IsShowTableColumns.includes("UserName") &&
      columns.push({
        title: "User Name",
        dataIndex: "username",
        render: (src: string) => <div className="d-flex align-center"><img src={Avatar} alt="" /><span style={{ marginLeft: "10px" }}>Azeem Aslam</span></div>,
      });
    IsShowTableColumns.includes("Email") &&
      columns.push({
        title: "Email",
        dataIndex: "email",
        render: (src: string) => <div className="d-flex align-center"><img src={Avatar} alt="" /><span style={{ marginLeft: "7px" }}>azeem.aslam@ceative.co.uk</span></div>,
      });
    IsShowTableColumns.includes("User ID") &&
      columns.push({
        title: "User ID",
        dataIndex: "id",
      });
    IsShowTableColumns.includes("User Role") &&
      columns.push({
        title: "User Role",
        dataIndex: "role",
      });
    IsShowTableColumns.includes("Shift") &&
      columns.push({
        title: "Shift",
        dataIndex: "shift",
      });
    IsShowTableColumns.includes("Location") &&
      columns.push({
        title: "Location",
        dataIndex: "location",
      });
    IsShowTableColumns.includes("Teams") &&
      columns.push({
        title: "Teams",
        dataIndex: "teams",
        render: () => (
          <>
            {teams.slice(0, 2).map((e: any, index: number) => (
              <span key={index}>
                <span>{e}{index === 0 && ', '}</span>
              </span>
            ))}
            <Popover
              overlayClassName="my-popover-users" placement="bottomRight" content={teamContent} trigger="click">
              <span
                className="fs-10 cursor-pointer themeMoreUser"
                style={{
                  borderRadius: "50%",
                  padding: "5px 6px",
                  marginLeft: "10px",
                  border: "2px solid #fff"
                }}
              >
                +{teams.length - 2}
              </span>
            </Popover>
          </>
        ),
      });
    IsShowTableColumns.includes("DateDelete") &&
      columns.push({ title: "Date Delete", dataIndex: "dateDelete" });
    IsShowTableColumns.includes("Projects") &&
      columns.push({
        title: "Projects",
        dataIndex: "projects",
        render: () => (
          <>
            {projects.slice(0, 2).map((e: any, index: number) => (
              <span key={index}>
                <span>{e}{index === 0 && ', '}</span>
              </span>
            ))}
            <Popover placement="bottomRight" content={projectContent} trigger="click">
              <span
                className="fs-10 cursor-pointer themeMoreUser"
                style={{
                  borderRadius: "50%",
                  padding: "5px 6px",
                  backgroundColor: "#E5E5E5",
                  marginLeft: "10px",
                  border: "2px solid #fff"
                }}
              >
                +{projects.length - 2}
              </span>
            </Popover>
          </>
        ),
      });
    IsShowTableColumns.includes("DaysLeft") &&
      columns.push({ title: "Days Left", dataIndex: "daysLeft" });
    IsShowTableColumns.includes("Actions") &&
      columns.push({
        title: "Actions",
        dataIndex: "action",
        render: () => (
          <>
            {props.tabsKey === "3" ? (
              <div
                onClick={() => setRestoreModal(true)}
                className="cursor-pointer"
              >
                <img src={restoreIcon} className="cursorPointer" alt="restoreIcon" />
              </div>
            ) : (
              <span className="fs-12 fw-400 line-height-18 title-color">
                <Dropdown
                  menu={{ items }}
                  placement="bottomRight"
                  trigger={["click"]}
                  className="actionDropDown"
                >
                  <Space>
                    <div className="border-color cursor-pointer">
                      <img
                        src={Dots}
                        className="cursor-pointer"
                        alt="action_iocn"
                      />
                    </div>
                  </Space>
                </Dropdown>
              </span>
            )}
          </>
        ),
      });

    return columns;
  };
  // *********************************
  useEffect(() => {
    switch (props.tabsKey) {
      case "3":
        setIsShowTableColumns([
          "UserName",
          "User ID",
          "User Role",
          "Shift",
          "Location",
          "DateDelete",
          "DaysLeft",
          "Actions",
        ]);
        setColumnOption([
          "UserName",
          "User ID",
          "User Role",
          "Shift",
          "Location",
          "DateDelete",
          "DaysLeft",
          "Actions",
        ]);

        break;
      case "4":
        setIsShowTableColumns([
          "Email",
          "User Role",
          "Shift",
          "Location",
          "Teams",
          "Projects",
          "Actions",
        ]);
        setColumnOption([
          "Email",
          "User Role",
          "Shift",
          "Location",
          "Teams",
          "Projects",
          "Actions",
        ]);
        break;
      default:
        setIsShowTableColumns([
          "UserName",
          "User ID",
          "User Role",
          "Shift",
          "Location",
          "Teams",
          "Projects",
          "Actions",
        ]);
        setColumnOption([
          "UserName",
          "User ID",
          "User Role",
          "Shift",
          "Location",
          "Teams",
          "Projects",
          "Actions",
        ]);
        break;
    }
  }, [props.tabsKey]);


  console.log("props.tabsKey", props.tabsKey)

  return (
    <div>
      <div className="wrap-user-management-myFilters">
        <div className="filters">
          <div className="filtersColumns">
            {selectedRowKeys.length >= 1 && (
              <>
                {(props.tabsKey === "1" || props.tabsKey === "2") && (
                  <BulkActions
                    tabKey={props.tabsKey}
                    setDeleteModal={setDeleteModal}
                    setDeactivateModal={props.tabsKey && setDeactivateModal}
                    setIsShowInfoModal={setIsShowInfoModal}
                  />
                )}
                {(props.tabsKey === "3" || props.tabsKey === "4") && (
                  <Button
                    shape="circle"
                    className={`${props.tabsKey === "3" ? "user-management-icon-bg-style-restore" : "user-management-icon-bg-style-delete"
                      }`}
                    onClick={() => {
                      props.tabsKey === "4"
                        ? setDeleteModal(true)
                        : setRestoreModal(true);
                    }}
                    icon={
                      props.tabsKey === "3" ? (
                        <div className="">
                          <img src={restoreSvgIcon} alt='restore-icon' style={{ margin: "-5px" }} />
                        </div>
                      ) : (
                        <div className="user-management-icon-bg-style-delete" style={{ margin: "-5px" }}>
                          <img src={DeleteIcon} alt='delete-icon' width={24} height={24} style={{ margin: "6px" }} />
                        </div>
                      )
                    }
                  />
                )}
              </>
            )}

            {props.tabsKey !== "4" && <SelectUserFilter />}
            <UserRoleFilter />
            <ShiftFilter />
            <LocationFilter />
          </div>
          <div className="filtersColumns">
            <Input
              placeholder={`Search ${props.tabsKey === "4" ? "Invitation" : "User"
                }`}
              className="activitySearch fs-14 fw-400 line-height-20"
              onChange={(e) => console.log(e.target.value)}
              prefix={<SearchOutlined className="site-form-item-icon" style={{ color: "#98A2B3", fontSize: "17px" }} width={24} height={24} />}
            />
            {/* <ColumnFilter /> */}
            <ColumnDropdownWrapper
              menuValue={IsShowTableColumns}
              setMenuValue={setIsShowTableColumns}
              options={columnOption}
            >
              <Button className="showTableColumn white-img-theme-class column_btns" style={{ height: '39px', borderRadius: "4px" }}>
                <div className="d-flex align-center">
                  <img
                    src={DropdownIcon}
                    alt="downArrow"
                    className="white-img-theme-class cursor-pointer"
                    style={{ marginRight: "10px" }} />
                  <span style={{ marginLeft: "5px" }}>Column</span>
                </div>
              </Button>
            </ColumnDropdownWrapper>
            {props.tabsKey === "4" && (
              <Button
                className="btn-simple white-img-theme-class"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "10px",
                }}
                onClick={() => setIsShowStatusModal(true)}
              >
                <img src={Invitation} alt="Invitation" />
                Invitation Status
              </Button>
            )}
          </div>
        </div>

        <Table
          rowSelection={{ onChange: onSelectChange }}
          className="wrapper-table"
          columns={UserTableConstants()}
          dataSource={UserTableConstants().length >= 1 ? columnsData : []}
          scroll={{ x: 768 }}
          style={{ marginTop: "16px" }}
        />
        {deleteModal && (
          <DeleteModal
            deleteModal={deleteModal}
            setDeleteModal={setDeleteModal}
            deleteModalContent={props.tabsKey == "4" ? "Do you want to delete this invite?" : "Do you want to delete this user?"}
          />
        )}
        {deactivateModal && (
          <DeactivateModal
            deactivateModal={deactivateModal}
            setDeactivateModal={setDeactivateModal}
            tabKey={props.tabsKey}
          />
        )}
        {restoreModal && (
          <RestoreModal
            restoreModal={restoreModal}
            setRestoreModal={setRestoreModal}
          />
        )}
        {isShowInfoModal && (
          <EditInfoSettingModal
            isShowInfoModal={isShowInfoModal}
            setIsShowInfoModal={setIsShowInfoModal}
          />
        )}
        {isShowStatusModal && (
          <InvitationStatusModal
            isShowStatusModal={isShowStatusModal}
            setIsShowStatusModal={setIsShowStatusModal}
          />
        )}
        {isShowEditModal && (
          <PendingEditUser
            isShowEditModal={isShowEditModal}
            setIsShowEditModal={setIsShowEditModal}
            data={columnsData}
          />
        )}
      </div>
    </div>
  );
};

export default UsersTable;