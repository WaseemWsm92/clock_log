import { useState } from "react";
// Ant
import {
  Avatar,
  Button,
  Col,
  Collapse,
  Dropdown,
  Input,
  Modal,
  Popover,
  Row,
  Space,
  Switch,
  Table,
} from "antd";
import { ColumnsType, TableProps } from "antd/es/table";
import type { MenuProps } from "antd";
import { v4 as uuidv4 } from "uuid";
import Dots from "../../../../assets/icons/dots.png"
// Components
import GlobalSettingForm from "./GlobalSettingForm/GlobalSettingForm";
import ExceptionWeightageModalForm from "./ExceptionWeightageModalForm/ExceptionWeightageModalForm";
import ExceptionModalTab from "./ExceptionModalTab/ExceptionModalTab";

// Interface and Mock Data
import { IAchievementsTableData, IAchievementsTableUsername } from "../../../../types/settings/AchievementsInterface";
import { AchievementsTableData } from "../../../../mock/settings/AchievementsMockData";


// SCSS
import "./AchivementChilTab.scss";

// Icons / Images
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import editIcon from "../../../../assets/icons/editicondropdown.svg";
import deleteIcon from "../../../../assets/icons/deleteIcon.svg";
import darkExceptionalColor from "../../../../assets/icons/dark-exception.svg";
import searchIcon from "../../../../assets/icons/search-icon.svg";
import AppSnackbar from "../../../../utils/snackbar";


const { Panel } = Collapse;

function AchivementChildTab({ renderChild }: any) {
  const [isShowExceptionModal, setIsShowExceptionModal] =
    useState<boolean>(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
  const [isShowPerformanceWeightage, setIsShowPerformanceWeightage] = useState<boolean>(false);
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const [selectedTeamValues, setSelectedTeamValues] = useState<string[]>([]);
  const [childAccordianActive, setChildAccordianActive] = useState<
    string[] | string | number | undefined
  >();

  const onChange: TableProps<IAchievementsTableData>["onChange"] = (
    pagination: any,
    filters: any,
    sorter: any,
    extra: any
  ) => {
    // console.log('params', pagination, filters, sorter, extra);
  };

  const items: MenuProps["items"] = [
    {
      label: (
        <Space onClick={() => setIsEditModalOpen(true)}>
          <div className="d-flex align-center">
            <img src={editIcon} alt="edit" />
            <p style={{ marginLeft: "7px" }}>Edit</p>
          </div>
        </Space>
      ),
      key: "1",
    },
    {
      label: (
        <Space onClick={() => setIsDeleteModalOpen(true)}>
          <div className="d-flex align-center">
            <img src={deleteIcon} alt="delete" height={18} width={16} />
            <p style={{ marginLeft: "7px" }}>Delete</p>
          </div>
        </Space>
      ),
      key: "2",
    },
  ];

  const ACHIVEMENTTABLECOLUMNS: ColumnsType<IAchievementsTableData> = [
    {
      title: "User Name/Team",
      dataIndex: "userName",
      key: "userName",
      render: (_, { userName, team }: any) => (
        <>
          <Popover
            showArrow={false}
            className=""
            overlayInnerStyle={{ margin: 0, padding: "1rem" }}
            trigger="hover"
            placement="bottomLeft"
            arrow={false}
            content={
              <>
                {team && <h4 className="title-color" style={{ margin: "0 0 0.75rem 0" }}>{team}</h4>}
                <Row
                  gutter={[10, 10]}
                  className="achivement-user-exception-table-popover"
                >
                  {userName.map((data: IAchievementsTableUsername) => {
                    return (
                      // <Col xs={24} md={6}>
                      <span>{data?.name}</span>
                      // </Col>
                    );
                  })}
                </Row>
              </>
            }
          >
            {!team ? (
              <div>
                <Avatar.Group
                  className="cursor-pointer"
                  maxCount={3}
                  maxStyle={{
                    color: "#f56a00",
                    backgroundColor: "#fde3cf",
                    cursor: "pointer",
                  }}
                >
                  {userName.map((data: IAchievementsTableUsername) => {
                    return (
                      <Avatar
                        style={{ backgroundColor: "#f56a00" }}
                        icon={<img src={data.image} alt="user" />}
                      ></Avatar>
                    );
                  })}
                </Avatar.Group>
              </div>
            ) : (
              <Avatar size="large">
                {team}
              </Avatar>
            )}

          </Popover>
        </>
      ),
    },
    {
      title: "Performance Evaluation",
      dataIndex: "performanceEvuluation",
      key: "performanceEvuluation",
      align: "center",
      render: (index) => (
        <span className="fs-12 fw-400 line-height-18 title-color">
          {index}
          <Switch defaultChecked={!(index === 1)} rootClassName="theme-checkbox" />
        </span>
      ),
    },
    {
      title: "Productivity Weightage",
      dataIndex: "productivityWeightage",
      key: "productivityWeightage",
      align: "center",

      render: (productivityWeightage) => (
        <span className="fs-12 fw-400 line-height-18 title-color">
          {productivityWeightage}
        </span>
      ),
    },
    {
      title: "Idle Time Weightage",
      dataIndex: "idleTimeWeightage",
      key: "idleTimeWeightage",
      align: "center",
      render: (idleTimeWeightage) => (
        <span className="fs-12 fw-400 line-height-18 title-color">
          {idleTimeWeightage}
        </span>
      ),
    },
    {
      title: "Time Tracked Weightage",
      dataIndex: "timeTrackedWeightage",
      key: "timeTrackedWeightage",
      align: "center",
      render: (timeTrackedWeightage) => (
        <span className="fs-12 fw-400 line-height-18 title-color">
          {timeTrackedWeightage}
        </span>
      ),
    },
    {
      title: "Actions",
      key: "Actions",
      align: "center",
      render: () => (
        <span className="fs-12 fw-400 line-height-18 title-color">
          <Dropdown
            menu={{ items }}
            placement="bottomRight"
            trigger={["click"]}
            overlayClassName="actionDropDownAchievements my-dropdown-Achievements"
            className="actionDropDown"
          >
            <Space>
              <div className="border-color cursor-pointer">
                <img src={Dots} alt="menu" />
              </div>
            </Space>
          </Dropdown>
        </span>
      ),
    },
  ];

  const handleSetAccordinaActive = (key: string | string[]) => {
    setChildAccordianActive(key);
  };

  return (
    <div
      className="achivement-child-tab"
      style={{ paddingLeft: "1.5rem", paddingRight: "1.5rem" }}
    >
      {renderChild.key === "Global Setting" || renderChild.key === undefined ? (
        <Row gutter={[16, 16]}>
          <Row gutter={[16, 16]}>
            <Col xs={24} lg={18} xl={24}>
              <p className="grey-p-color">
                The user performance i.e. the overall user score is calculated using 3 factor which are:
                <ul style={{ paddingLeft: "20px" }}>
                  <li>The user productivity</li>
                  <li>The user idle time </li>
                  <li>The total time tracked by the user</li>
                </ul>
                Their individual weightage in the overall score can be specified below.
              </p>
            </Col>
          </Row>
          <Row gutter={[16, 16]} className="w-100">
            <Col xs={24} lg={18} xl={12}>
              <GlobalSettingForm />
            </Col>
          </Row>
        </Row>
      ) : (
        <>
          <div
            className="d-flex justify-between align-items-center table-head-div"
            style={{ marginTop: "2px", marginBottom: "1.5rem" }}
          >
            <Button
              type="text"
              icon={<img src={darkExceptionalColor} alt="exceptional" />}
              className="fs-16 fw-500 line-height-24 d-flex align-center button-light-bg-color cursor-pointer add-exception-btn btn-theme-color"
              style={{ padding: "0.5rem 1rem", gap: "0.583rem" }}
              onClick={() => setIsShowExceptionModal(true)}
            >
              Add Exception
            </Button>
            <Input
              placeholder="Search user"
              className="fs-14 fw-400 line-height-20 border-color search-input card-bg-color label-color"
              prefix={<img src={searchIcon} alt="search" />}
              style={{ width: "260px", height: "40px" }}
            />
          </div>
          <Table
            dataSource={AchievementsTableData || "No Data"}
            className="ant-table-content wrapper-table"
            style={{ padding: "1rem" }}
            tableLayout="fixed"
            pagination={{ pageSize: 7 }}
            columns={ACHIVEMENTTABLECOLUMNS}
            scroll={{ x: 900 }}
            onChange={onChange}
          />

          {/* Add Exeption Modal */}
          <Modal
            title="Add Exception"
            okText="Save"
            wrapClassName="add-exception-modal-classes modal-theme"
            closable={false}
            centered
            open={isShowExceptionModal}
            onOk={() => setIsShowExceptionModal(false)}
            onCancel={() => setIsShowExceptionModal(false)}
          >
            <Collapse
              className="collapse-achievements"
              expandIconPosition="end"
              accordion
              bordered={false}
              onChange={handleSetAccordinaActive}
            >
              <Panel
                header={
                  <div
                    className="d-flex align-items justify-between"
                    style={{
                      padding: "0.625rem 1rem",
                      border: "1px solid #E6E6E6",
                      borderRadius: "4px",
                    }}
                  >
                    {/* <span className="fs-14 fw-400 line-height-20">
                      Select User
                    </span> */}
                    <span className="fs-14 fw-400 line-height-20 label-color">
                      {selectedValues.length > 0
                        ? selectedValues.map((item: any, index: number) => (
                          <span key={uuidv4()}>{(index ? ', ' : '') + item}</span>
                        ))
                        : "Select User"}
                    </span>
                    {childAccordianActive == "1" ? (
                      <UpOutlined className="down-icon ico--active" />
                    ) : (
                      <DownOutlined className="down-icon" />
                    )}
                  </div>
                }
                showArrow={false}
                key="1"
                style={{ padding: 0 }}
              >
                <ExceptionModalTab selectedValues={selectedValues} setSelectedValues={setSelectedValues} selectedTeamValues={selectedTeamValues} setSelectedTeamValues={setSelectedTeamValues} />
              </Panel>
            </Collapse>

            {!!isShowPerformanceWeightage && <ExceptionWeightageModalForm />}

            <Space
              size={18}
              style={{ marginTop: "1.688rem" }}
              className="fs-14 fw-400 line-height-22 title-color"
            >
              Performance Evaluation
              <Switch
                rootClassName="theme-checkbox"
                onChange={() =>
                  setIsShowPerformanceWeightage(!isShowPerformanceWeightage)
                }
              />
            </Space>
          </Modal>

          {/* Edit Modal */}
          <Modal
            style={{ maxWidth: "445px" }}
            centered
            wrapClassName="achivement-edit-modal modal-theme"
            open={isEditModalOpen}
            onOk={() => setIsEditModalOpen(false)}
            onCancel={() => setIsEditModalOpen(false)}
            okText="Save"
          >
            <h2 className="fs-16 fw-500 line-height-400 heading-color d-flex align-items-center">
              Edit Exception
            </h2>

            <Collapse
              expandIconPosition="end"
              className="achievements-collapse"
              accordion
              bordered={false}
              onChange={handleSetAccordinaActive}
            >
              <Panel
                header={
                  <div
                    className="d-flex align-items justify-between"
                    style={{
                      padding: "0.6rem 0.5rem",
                      border: "1px solid #E6E6E6",
                      borderRadius: "4px",
                    }}
                  >
                    {/* <span className="fs-14 fw-400 line-height-20">
                      Select User
                    </span> */}
                    <span className="fs-14 fw-400 line-height-20 label-color">
                      {selectedValues.length > 0
                        ? selectedValues.map((item: any, index: number) => (
                          <span key={uuidv4()}>{(index ? ', ' : '') + item}</span>
                        ))
                        : <span style={{ color: "#98A2B3" }}>Select User</span>}
                    </span>
                    {childAccordianActive == "1" ? (
                      <UpOutlined className="down-icon ico--active" />
                    ) : (
                      <DownOutlined className="down-icon" />
                    )}
                  </div>
                }
                showArrow={false}
                key="1"
                style={{ padding: 0 }}
              >
                <ExceptionModalTab selectedValues={selectedValues} setSelectedValues={setSelectedValues} selectedTeamValues={selectedTeamValues} setSelectedTeamValues={setSelectedTeamValues} />
              </Panel>
            </Collapse>
            <ExceptionWeightageModalForm setIsEditModalOpen={setIsEditModalOpen} />

          </Modal>

          {/* Delete Modal */}
          <Modal
            style={{ textAlign: "center", maxWidth: "445px" }}
            centered
            width={445}
            wrapClassName="achivement-delete-modal modal-theme"
            open={isDeleteModalOpen}
            onOk={() => { setIsDeleteModalOpen(false); AppSnackbar({ type: "success", message: "Deleted Successfully", }) }}
            onCancel={() => setIsDeleteModalOpen(false)}
            okText="Delete"
          >
            <div className="image-container">
              <img
                src={deleteIcon}
                alt="deleteIcon"
                className="delete-icon"
              ></img>
            </div>
            <p
              className="fs-24 fw-600 sure text-center line-height-40 heading-color"
              style={{ margin: "1.25rem 0 0.625rem 0" }}
            >
              Are You Sure?
            </p>
            <p
              className="fs-14 text-center"
              style={{ color: "#9D9D9D", margin: "0 0 1.875rem 0" }}
            >
              Do you want to delete this?
            </p>
          </Modal>
        </>
      )}
    </div>
  );
}

export default AchivementChildTab;
