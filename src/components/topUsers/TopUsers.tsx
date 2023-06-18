import dayjs from 'dayjs'
import { Input, Button, Table, Tooltip, Space, Avatar } from "antd";
import { ArrowLeftOutlined, InfoCircleOutlined } from "@ant-design/icons";
import { TooltipsData } from "../topUsers/TooltipsData";
import { topUsersMockData } from "../../mock/TopUsersMockData";
import DropdownIcon from "../../assets/images/activity-logs/column-img.svg";
import ColumnDropdownWrapper from "../../shared/ColumnDropdown";
import searchIcon from "../../assets/icons/search-icon.svg";
import "./TopUsers.scss";


const dropDownOptions = [
  "Name",
  "Overall Score",
  "Productivity Score",
  "Productivity %",
  "Idle Time Score",
  "Idle Time %",
  "Time Tracked Score",
  "Time Tracked %",
  "Total Time",
  "Productive Time",
  "Idle Time",
];
export const dropdownValues = [
  "Name",
  "Overall Score",
  "Productivity Score",
  "Productivity %",
  "Idle Time Score",
  "Idle Time %",
  "Time Tracked Score",
  "Time Tracked %",]
const TopUsers = (props: any) => {
  const handleFilterBtn = (item: any) => {
    setUserData(topUsersMockData);
    setIsBackBtn(false);
    setSelected({});
    setSearchFilter(true);
    setIsShowTableColumns((prevState: any) => {
      const newState = [...prevState]
      newState.shift();
      newState.unshift("Name")
      return newState
    })
  }
  const { isBackBtn, userData, setUserData, setIsBackBtn, setSelected, handleTableCellClick, setSearchFilter, searchFilter, IsShowTableColumns, setIsShowTableColumns } = props;

  const UserTableConstants = () => {
    const columns: any = [];
    IsShowTableColumns.includes("Name") && (
      columns.push(
        {
          title: "Name",
          dataIndex: "name",
          key: "name",
          render: (_: any, text: any) => (<Space className="cursor-pointer"><span><Avatar src={text.userImg} alt="profile" /></span><span className="fs-14 fw-400 title-color">{text.firstName}</span></Space>),
        },
      )
    )
    IsShowTableColumns.includes("Date") && (
      columns.push(
        {
          title: "Date",
          dataIndex: "date",
          key: "date",
          // render: (_: any, text: any) => (<Space className="cursor-pointer"><span><Avatar src={text.userImg} alt="profile" /></span><span className="fs-14 fw-400 title-color">{text.firstName}</span></Space>),
        },
      )
    )
    IsShowTableColumns.includes("Overall Score") && (
      columns.push({
        title: <div className="column-data">Overall Score<Tooltip overlayInnerStyle={{ width: '100%', minWidth: '360px', color: "black", background: "white" }} placement="top" title={TooltipsData.overall} color="#FCFCFD"><InfoCircleOutlined style={{ marginLeft: '8px', fontSize: '17px' }} /></Tooltip></div>,
        dataIndex: "overAllScore",
        key: "overAllScore",
      })
    );
    IsShowTableColumns.includes("Productivity Score") && (
      columns.push({
        title: <div className="column-data">Productivity Score<Tooltip overlayInnerStyle={{ width: '100%', minWidth: '360px', color: "black", }} placement="top" title={TooltipsData.productivityScore} color="#FCFCFD"><InfoCircleOutlined style={{ marginLeft: '8px', fontSize: '17px' }} /></Tooltip></div>,
        dataIndex: "productivityScore",
        key: "productivityScore",
      })
    );
    IsShowTableColumns.includes("Productivity %") && (
      columns.push(
        {
          title: "Productivity %",
          dataIndex: "productivity",
          key: "productivity",
          render: (productivity: any) => (
            <p
              style={{
                color: "#2A9D8F",
                backgroundColor: "rgba(42, 157, 143, 0.15)",
                borderRadius: "16px",
                fontSize: "14px",
                width: "100%",
                maxWidth: "60px",
                textAlign: "center",
                padding: "3px 0",
                margin: 0
              }}
            >
              {productivity}
            </p>
          ),
        },
      )
    );
    IsShowTableColumns.includes("Idle Time Score") && (
      columns.push(
        {
          title: <div className="column-data">Idle Time Score<Tooltip overlayInnerStyle={{ width: '100%', minWidth: '360px', color: "black", }} placement="top" title={TooltipsData.idleTimeScore} color="#FCFCFD"><InfoCircleOutlined style={{ marginLeft: '8px', fontSize: '17px' }} /></Tooltip></div>,
          dataIndex: "idleTimeScore",
          key: "idleTimeScore",
        },
      )
    );
    IsShowTableColumns.includes("Idle Time %") && (
      columns.push(
        {
          title: "Idle Time %",
          dataIndex: "idleTimePer",
          key: "idleTimePer ",
          render: (idleTime: any) => (
            <p
              style={{
                color: "#E76F51",
                backgroundColor: " rgba(231, 111, 81, 0.15)",
                borderRadius: "16px",
                fontSize: "14px",
                width: "100%",
                maxWidth: "60px",
                textAlign: "center",
                padding: "3px 0",
              }}
            >
              {idleTime}
            </p>
          ),
        },
      )
    );
    IsShowTableColumns.includes("Time Tracked Score") && (
      columns.push(
        {
          title: <div className="column-data">Time Tracked Score<Tooltip overlayInnerStyle={{ width: '100%', minWidth: '360px', color: "black", }} placement="top" title={TooltipsData.timeTrackedScore} color="#FCFCFD"><InfoCircleOutlined style={{ marginLeft: '8px', fontSize: '17px' }} /></Tooltip></div>,
          dataIndex: "timeTrackedScore",
          key: "timeTrackedScore",
        },
      )
    );

    IsShowTableColumns.includes("Time Tracked %") && (
      columns.push(

        {
          title: "Time Tracked % ",
          dataIndex: "timeTracked",
          key: "timeTracked",
          render: (timeTracked: any) => (
            <p
              style={{
                color: "#2A9D8F",
                backgroundColor: "rgba(42, 157, 143, 0.15)",
                borderRadius: "16px",
                width: "100%",
                maxWidth: "60px",
                fontSize: "14px",
                textAlign: "center",
                padding: "3px 0px",
              }}
            >
              {timeTracked}
            </p>
          ),
        },


      )
    );
    IsShowTableColumns.includes("Total Time") && (
      columns.push(
        {
          title: <div className="column-data">Total Time</div>,
          dataIndex: "totalTime",
          key: "totalTime",
        },
      )
    );
    IsShowTableColumns.includes("Productive Time") && (
      columns.push(
        {
          title: <div className="column-data">Productive Time</div>,
          dataIndex: "productiveTime",
          key: "productiveTime",
        },
      )
    );
    IsShowTableColumns.includes("Idle Time") && (
      columns.push(
        {
          title: <div className="column-data">Idle Time</div>,
          dataIndex: "idleTime",
          key: "idleTime",
        },
      )
    );
    return columns;
  }
  return (
    <>
      <div className="top-users-wrapper">
        <div className="topUserBar">
          <div>
            {isBackBtn &&
              <Button type="text" onClick={handleFilterBtn} className="title-color back-btn">
                <ArrowLeftOutlined /> Back
              </Button>
            }
          </div>
          <div className="rightSearch" style={{ alignItems: "center", display: "flex", justifyContent: "space-between", gap: "10px" }}>
            <span className="fs-12 fw-500 date">{dayjs().format("MMM DD, YYYY")}</span>
            {searchFilter &&
              <Input style={{ height: "40px" }} placeholder="Search by user name" className="topUsers-search custom-input-field" onChange={(e) => console.log(e.target.value)} prefix={<img src={searchIcon} alt="search" />} />
            }
            <div style={{ marginLeft: '10px' }}>
              <ColumnDropdownWrapper menuValue={IsShowTableColumns} setMenuValue={setIsShowTableColumns} options={dropDownOptions} >
                <Button className='d-flex align-center column_btn btn-theme-color'>
                  <img src={DropdownIcon} alt="colum_icon" />
                  <span style={{ marginLeft: '5px' }}>Column</span>
                </Button>
              </ColumnDropdownWrapper>
            </div>

          </div>
        </div>
        <div className="wrapper-table" style={{ marginTop: "40px", boxShadow: '0px 0px 2px rgba(16, 24, 40, 0.25)', borderRadius: '8px' }}>
          <Table
            size="small"
            scroll={{ x: 'max-content' }}
            columns={UserTableConstants()}
            dataSource={userData}
            pagination={false}
            onRow={(row: any, rowIndex: any) => {
              return { onClick: event => { handleTableCellClick(row, rowIndex) } }
            }}
          />
        </div>
      </div>
    </>
  );
};
export default TopUsers;