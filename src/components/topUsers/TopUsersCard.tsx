import { Col, Row } from "antd";
import { Progress } from "antd";
import Avatar from "antd/es/avatar";
import { useState } from "react";
import TrophyImg from '../../assets/images/TopUser/trophy.png';
import { topUsersMockData } from "../../mock/TopUsersMockData";
import TopUsers, { dropdownValues } from "./TopUsers";
import "./TopUsers.scss";

const TopUsersCard = (props: any) => {
    // const { topUsersMockData, handleFilterFunc, selected } = props;

    const [isBackBtn, setIsBackBtn] = useState(false);
  const [userData, setUserData] = useState(topUsersMockData);
  const [selected, setSelected] = useState<any>({});
  const [searchFilter, setSearchFilter] = useState(true);
  const [IsShowTableColumns, setIsShowTableColumns] = useState(dropdownValues);

  const handleFilterFunc = (item: any) => {
    setSelected(item);
    setIsBackBtn(true);
    setSearchFilter(false);
    setUserData(topUsersMockData.filter((data: any) => data.id === item.id))
    setIsShowTableColumns(prevState => {
      const newState = [...prevState]
      newState.shift();
      newState.unshift("Date")
      return newState
    })
  }
  const handleTableCellClick = (row: any, index: any) => {
    setUserData(userData.filter((data: any) => data.id === row.id));
    setSelected(row);
    setIsBackBtn(true);
    setSearchFilter(false);
    setIsShowTableColumns(prevState => {
      const newState = [...prevState]
      newState.shift();
      newState.unshift("Date")
      return newState
    })
  }

    return (
      <>
        <div className="top-users-wrapper">
            <Row gutter={[35, 35]}>
                {topUsersMockData.map((item: any) => (
                    <Col key={item?.id} xs={24} sm={24} md={24} lg={12} xl={6}>
                        <div
                            className="user-card  card-shadow-theme"
                            onClick={() => {
                                handleFilterFunc(item)
                            }}
                            style={{
                                border: selected.id === item.id ? `2px solid ${item.strokeColor}` : "2px solid transparent",
                            }}
                        >
                            <div
                                className="d-flex"
                                style={{
                                    justifyContent: "space-around",
                                    alignItems: "center",
                                    paddingTop: "22px",
                                }}
                            >
                                <Progress
                                    type="circle"
                                    percent={item.overAllScore}
                                    format={(percent) => <span style={{ color: item.strokeColor }}>{percent}</span>}
                                    width={90}
                                    strokeWidth={10}
                                    strokeColor={item.strokeColor}
                                    trailColor="#E6E6E6"
                                />
                                <Avatar
                                    src={item.userImg}
                                    className="user-img"
                                    style={{
                                        height: 75,
                                        width: 75,
                                        position: "absolute",
                                        top: 30,
                                        bottom: 0,
                                    }}
                                />
                            </div>
                            <div
                                className="d-flex"
                                style={{ flexDirection: "column", textAlign: "center" }}
                            >
                                <span className="fs-16 fw-400 line-height-24  user-name title-color">
                                    {item.firstName} {item.lastName}
                                </span>
                                <span className="fs-12 fw-400 line-height-18 border-color grey-color">
                                    {item.designation}
                                </span>
                            </div>
                            <div
                                className="d-flex justify-center align-center"
                                style={{ justifyContent: "center", paddingTop: "13px" }}
                            >
                                <img src={TrophyImg} alt="User_Image" />
                                <span className="fs-12 fw-400 line-height-18 progess-title grey-color">
                                    {item.progressTitle}
                                </span>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </div>
        <TopUsers
        IsShowTableColumns={IsShowTableColumns}
        setIsShowTableColumns={setIsShowTableColumns}
        setIsBackBtn={setIsBackBtn}
        isBackBtn={isBackBtn}
        userData={userData}
        setUserData={setUserData}
        setSelected={setSelected}
        handleTableCellClick={handleTableCellClick}
        setSearchFilter={setSearchFilter}
        searchFilter={searchFilter} />
      </>
    )
}
export default TopUsersCard