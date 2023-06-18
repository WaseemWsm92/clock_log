import { Col, Row, Space } from "antd";
import { useNavigate } from "react-router-dom";
import settingsIcon from '../../../assets/icons/settings/settingsIcon.svg'
import achivementsIcon from '../../../assets/icons/settings/achivementsIcon.svg'
import alertIcon from '../../../assets/icons/settings/alertIcon.svg'
import blockingIcon from '../../../assets/icons/settings/blockingIcon.svg'
import clockIcon from '../../../assets/icons/settings/clockIcon.svg'
import emailIcon from '../../../assets/icons/settings/emailIcon.svg'
import folderIcon from '../../../assets/icons/settings/folderIcon.svg'
import manageTeamIcon from '../../../assets/icons/settings/manageTeamIcon.svg'
import sheduledReportsIcon from '../../../assets/icons/settings/sheduledReportsIcon.svg'
import webAppsIcon from '../../../assets/icons/settings/webAppsIcon.svg'
import CommonCard from "../../card";
import { cardsData } from "../../../mock/settings";
import './SettingsMain.scss';


const SettingsMain = () => {
  const navigate = useNavigate();

  // get role from  localstorage
  const { role }: any = JSON.parse(localStorage.getItem("UserData") || "{}");
// Testing
  // cardsData.map((card: any, index: number) => console.log(card?.role.find((itemm: any) => itemm === role)))

  const showIcon = (index: number) => {
    switch (index) {
      case 1:
        return settingsIcon
      case 2:
        return clockIcon

      case 3:
        return folderIcon

      case 4:
        return manageTeamIcon
      case 5:
        return webAppsIcon

      case 6:
        return alertIcon

      case 7:
        return sheduledReportsIcon

      case 8:
        return achivementsIcon

      case 9:
        return blockingIcon

      case 10:
        return emailIcon
    }
  }
  return <div>
    <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 16 }, { xs: 8, sm: 16, md: 24, lg: 32 }]} style={{ boxSizing: "border-box" }}>
      {
        cardsData.map((card: any, index: number) => {

          return (
            card?.role.find((cardRole: any) => cardRole === role) && (
              <Col xs={24} md={12} lg={8} xl={6} xxl={4} className="cardWidth" style={{ boxSizing: "border-box", marginLeft: 'auto', marginRight: "auto" }} onClick={() => navigate(card.link)} >
                <CommonCard color={card.color} hoverColor={card.backGround}>
                  <Space className="cardIcon" size={16} style={{ display: "block", textAlign: "center", }}>
                    {/* <img src={item?.headerImage} alt="calendar" width="24px" height="24px" className='hover-white-image' />
                                <h2 className='fs-16' style={{ margin: 0 }}>{item?.name}</h2> */}
                    <img src={showIcon(index + 1)} alt="calendar" className='hover-white-image' style={{ marginTop: "66px" }} />
                  </Space>
                  <Space className='fs-16 fw-500 title-color' style={{ display: "block", textAlign: "center", marginTop: "35px" }}>
                    {card.title}
                  </Space>
                  <div className='fs-14 fw-400 title-color' style={{ display: "block", textAlign: "center", marginTop: "0.875rem", marginBottom: "1.4rem", padding: '0 22px' }}>
                    {card.description}
                  </div>
                </CommonCard>

              </Col>
            )

          )
        })
      }

    </Row>
  </div>;
};

export default SettingsMain;

