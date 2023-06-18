import { Button, Card, Col, Row } from "antd";
import Avatar from "antd/es/avatar";
import Checkbox from "antd/es/checkbox";
import S1 from "../../assets/images/screen-casts/s1.png";
import S2 from "../../assets/images/screen-casts/s2.png";
import AvatarImg from "../../assets/images/screen-casts/master.png";
import DeleteIcon from "../../assets/icons/Delete.svg";
import DownloadIcon from "../../assets/icons/download.svg";
import MouseIcon from "../../assets/icons/mouse.svg";
import KeyboardIcon from "../../assets/icons/Keyboard.svg";
import "./ScreenCasts.scss";
interface ISSCard {
  checkboxHandler({ }, { }): void;
  handleOpenPreview: () => void;
  id: number | string | any;
  selected: string[];
  // setOpenDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
  // setOpenDownloadModal: React.Dispatch<React.SetStateAction<boolean>>;
  showCheckBoxes: any;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  setIsDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
}
let value = 40;

const DevicesStatsWrapper = [
  {
    device: "Keyboard",
    icon: KeyboardIcon,
    stats: 53,
  },
  {
    device: "Mouse",
    icon: MouseIcon,
    stats: 63,
  },
];
const ScreensShotsData = [
  {
    img: S1,
    screenNumber: 1,
    website: "youtube.com",
  },
  {
    img: S2,
    screenNumber: 2,
    website: "timedoctor.com",
  },
];
const ScreenShotCard = (props: ISSCard) => {
  const { id, checkboxHandler, handleOpenPreview, selected, showCheckBoxes, setIsOpenModal, setIsDeleteModal } = props;

  return (
    <div className="sscard-wrapper">
      <Card
        className="ss-card-wrapper-inner"
        style={{
          background: selected.includes(id) ? "var(--theme-ss-selected-card-color)" : "var(--theme-ss-unselect-card-color)",
          border: "none",
          boxShadow: "0px 2px 12px rgba(0, 0, 0, 0.06)",
        }}
        bodyStyle={{ padding: "12px" }}
      >
        <div className="d-flex justify-between align-items-center" style={{ marginBottom: "15px" }}>
          <div className="d-flex align-items-center" style={{ gap: "10px" }}>
            {!showCheckBoxes && <Checkbox onChange={(e) => checkboxHandler(e, id)} checked={selected.includes(id)}></Checkbox>}
            <Avatar src={AvatarImg} />
            <span className="title-color">Name</span>
          </div>
          <div>
            <span className="title-color">2:36 PM</span>
          </div>
        </div>
        <div
          style={{
            background: `linear-gradient(0deg, #FFFFFF 40%, ${value > 50 ? "#056906" : "#E76F51"} 100%)`,
            padding: "2px",
            borderRadius: "9px",
          }}
        >
          <Card
            className="screenshot-imgs-card-wrapper"
            bordered={false}
            bodyStyle={{
              padding: "10px",
              background: selected.includes(id) ? "var(--selected-ss-img-bg)" : "var(--theme-ss-unselect-card-color)",
              borderRadius: "8px",
            }}
          >
            {ScreensShotsData.map((item: any, index: number) => (
              <div key={index} className="ss-img-flex" style={{ marginBottom: "13px" }}>
                <img
                  onClick={handleOpenPreview}
                  src={item.img}
                  alt=""
                  style={{ maxWidth: "192px", width: "100%", height: "125px", cursor: "pointer", borderRadius: "10px" }}
                />
                <div style={{ display: "block", marginLeft: "15px" }}>
                  <p className="fs-12 title-color" style={{ margin: "15px 0 0 0" }}>{`Screen: ${item.screenNumber}`}</p>
                  <p className="fs-14 fw-600 m-0" style={{ color: `${value > 50 ? "#056906" : "#E76F51"}`, wordBreak: "break-all" }}>
                    {item.website}
                  </p>
                </div>
              </div>
            ))}
          </Card>
        </div>
        <Row gutter={24} style={{ marginTop: "18px" }}>
          {DevicesStatsWrapper.map((item: any, index: number) => (
            <Col key={index} xs={24} sm={24} md={24} lg={24} xxl={12}>
              <div className="sscard-stats-wrapper button-stat-bg title-color" style={{ marginBottom: "10px" }}>
                <div className="d-flex align-items-center">
                  <img height="22px" width="22px" style={{ marginRight: "7px", cursor: "pointer" }} src={item.icon} alt="device-icon" />
                  <span>{item.device}</span>
                </div>
                <div>{`${item.stats}/100`}</div>
              </div>
            </Col>
          ))}
        </Row>
        {!showCheckBoxes && (
          <div className="card-btn" style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "20px", marginTop: "10px" }}>
            <Button shape="circle" className="icon-button icons-div-color download" size="small" style={{ background: selected.includes(id) && selected.length == 1 ? '#264653b2' : '' }} disabled={selected.length > 1} onClick={() => { setIsDeleteModal(false); setIsOpenModal(true) }}>
              <img src={DownloadIcon} alt="icon" />
            </Button>
            <span className="separator"></span>
            <Button
              shape="circle"
              className="icon-button icons-div-color delete"
              size="small"
              style={{ display: "flex", justifyContent: "center", alignItems: "center", background: selected.includes(id) && selected.length == 1 ? '#ff4d4fcc' : '' }}
              onClick={() => { setIsDeleteModal(true); setIsOpenModal(true) }}
              disabled={selected.length > 1}
            >
              <img src={DeleteIcon} alt="icon" />
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
};

export default ScreenShotCard;
