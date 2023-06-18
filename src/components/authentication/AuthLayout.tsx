import ClockLog from "../../assets/images/brands/Final-Clock.gif";
import AuthFormBox from "./AuthFormBox";
import { Row } from "antd";
import "./AuthLayout.scss";
const AuthLayout = () => {
  return (
    <div className="auth-layout">
      <Row style={{ justifyContent: "center" }}>
        <div style={{ width: "100%", height: "auto" }}>
          <img className="auth-box-image" src={ClockLog}  alt="logo"/>
          <h1 className="m-0 heading">
            Clock<span>Log</span>
          </h1>
        </div>
        <AuthFormBox />
      </Row>
    </div>
  );
};

export default AuthLayout;
