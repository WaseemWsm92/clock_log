import { Col, Row } from "antd";
import ImageSideSignInSection from "./ImageSideSignIn";
import AuthLayout from "./AuthLayout";
import AuthFooter from "./auth-footer/AuthFooter";

const SignInComponent = () => {

  return (
      <Row>
        <Col xs={0} sm={0} md={12}>
          <ImageSideSignInSection />
        </Col>
        <Col sm={24} md={12}>
          <AuthLayout />
        </Col>
        <Col xs={24} style={{ maxWidth: "95%", margin: "0 auto" }}>
          <AuthFooter />
        </Col>
      </Row>
  );
};

export default SignInComponent;
