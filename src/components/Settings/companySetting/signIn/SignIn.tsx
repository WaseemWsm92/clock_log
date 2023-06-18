import { Button, Col, Space, Switch } from "antd";
import { useEffect } from "react";
import { useAppDispatch } from "../../../../hooks/useStoreHooks";
import { changeStatus } from "../../../../store/settings/companySettings/signInSettings/signInSettings.api";
import AppSnackbar from "../../../../utils/snackbar";
import "./SignIn.scss"


const SignIn = () => {

  const dispatch = useAppDispatch();

  useEffect(() => {
    const data = { first: 1, second: 2 }
    dispatch(changeStatus());
  }, []);


  return (<div className="setting-signIn">
    <div>
      <Space >
        <p className="title-color m-25 fw-500 fs-14 select-label-color">Two factor Authentication</p>
        <Switch defaultChecked rootClassName="theme-checkbox" />
      </Space>
    </div>
    <div>
      <Space className="m-t">
        <p className="title-color m-15 fw-500 fs-14 select-label-color">Enable Single sign on (SSO)</p>
        <Switch defaultChecked rootClassName="theme-checkbox" />
      </Space>
    </div>
    <Col>
      <Button className="btn-primary SaveBtn fs-16 fw-500" onClick={() => AppSnackbar({ type: "success", message: "Information Saved Successfully!" })}>Save</Button>
    </Col>
  </div>
  )
};

export default SignIn;




