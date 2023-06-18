import { useState } from "react";
import { useNavigate } from "react-router";
import { Button, Col, Row } from "antd";

import User_Temp from "./../../../assets/images/MyAccounts/User_Temp.png";
import InfoIcon from "./../../../assets/images/MyAccounts/info.png";
import ChangePassword from "./../../../assets/images/MyAccounts/changePassword.png";
import ChangeEmail from "./../../../assets/images/MyAccounts/changeEmail.png";
import EditImg from "../../../assets/images/MyAccounts/editImg.png";
import SignOut_img from "../../../assets/images/MyAccounts/signoutButton.png";
import DeleteIcon from "../../../assets/images/MyAccounts/deleteIcon.png";

import EditProfileModal from "./modals/editProfileModal/editProfileModal";
import { DeleteAccountModal } from "./modals//deleteAccountModal/DeleteAccountModal";
import "./MyAccount.scss";

const TabsSection = (props: any) => {
  const navigate = useNavigate();

  const [selectedTab, setSelectedTab] = useState<number>(1);
  const [isEditModal, setIsEditModal] = useState(false);
  const [delteModalCount, setDeleteModalCount] = useState(0);

  const onSetTab = (tabNumber: number) => {
    setSelectedTab(tabNumber);
  };
  const onLogOut = () => {
    localStorage.removeItem("UserData");
    navigate("/login");
  };
  return (
    <>
      <div
        style={{
          marginRight: "10px",
          // backgroundColor: "white",
          boxShadow: "0px 0px 6px rgba(16, 24, 40, 0.1)",
          borderRadius: "8px",
          minHeight: "75vh",
          padding: "20px 0px",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
        className="tabs-section-wrapper card-bg-color"
      >
        <div>
          <div style={{ textAlign: "center" }}>
            <div style={{ position: "relative" }}>
              <img src={User_Temp} alt="User-Img" className="cursor-pointer" onClick={() => setIsEditModal(true)} />
              <div
                style={{
                  position: "absolute",
                  left: "55%",
                  top: "80px",
                  cursor: "pointer",
                }}
                onClick={() => setIsEditModal(true)}
              >
                <img src={EditImg} alt="editImg" />
              </div>
            </div>
            <h2 className="fs-16 title-color select-label-color" style={{ marginBottom: "0px" }}>
              Abdul Rehman
            </h2>
            <p className="fs-12 title-color select-label-color" style={{ marginTop: "0px" }}>
              ID: 90010
            </p>
          </div>
          <div className="tab-wrapper">
            <p
              className={`fs-14 title-color m-0 d-flex align-center  select-label-color  ${(!props.isModalOpen && !props.isModalTwoOpen) && "selected-tab"} `}
              onClick={(e) => onSetTab(1)}
            >
              <img src={InfoIcon} className="white-img-theme-class" alt="info-icon" height={20} width={20} style={{ marginRight: "10px" }} />
              Information
            </p>
            <p
              className={`fs-14 title-color m-0 select-label-color d-flex align-center  ${(selectedTab === 2 && props.isModalOpen) && "selected-tab"} `}
              onClick={() => {
                props.showModal();
                onSetTab(2);
              }}
            >
              <img src={ChangeEmail} className="white-img-theme-class" alt="info-icon" height={18} width={22} style={{ marginRight: "10px" }} />
              Change Email
            </p>
            <p
              className={`fs-14 title-color m-0 select-label-color d-flex align-center  ${(selectedTab === 3 && props.isModalTwoOpen) && "selected-tab"} `}
              onClick={() => {
                props.showSecondModal();
                onSetTab(3);
              }}
            >
              <img src={ChangePassword} className="white-img-theme-class" alt="info-icon" height={21} width={21} style={{ marginRight: "10px" }} />
              Change Password
            </p>
          </div>
        </div>
        <div
          className=""
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            height: "100%",
          }}
        >
          <Row>
            <Col xs={24} xxl={11} className="col-responsive" style={{ padding: "0px 4px" }}>
              <Button style={{ borderColor: "#C1C1C7", border: " 1px solid black" }} className="btn-simple responsive-btns d-flex align-center" onClick={onLogOut}>
                <img src={SignOut_img} className="white-img-theme-class" alt="sign_out" height={24} width={24} style={{ marginRight: "0.5rem" }} /> Sign out
              </Button>
            </Col>
            <Col xs={24} xxl={12} className="col-responsive del-account" style={{ padding: "0px 4px" }}>
              <Button className="btn-danger responsive-btns d-flex align-center" onClick={() => setDeleteModalCount(1)}>
                <img src={DeleteIcon} alt="delete-account" height={20} width={16} style={{ marginRight: "0.5rem" }} /> Delete Account
              </Button>
            </Col>
          </Row>
        </div>
      </div>
      {isEditModal && <EditProfileModal isEditModal={isEditModal} setIsEditModal={setIsEditModal} />}
      {delteModalCount >= 1 && <DeleteAccountModal delteModalCount={delteModalCount} setDeleteModalCount={setDeleteModalCount} />}
    </>
  );
};
export default TabsSection;
