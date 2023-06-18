import {
  Button,
  Col,
  Input,
  InputNumber,
  Row,
  Select,
  Space,
  Switch,
} from "antd";
import { minutes } from "../../../../mock/settings";
import AppSnackbar from "../../../../utils/snackbar";
import "./Tracking.scss";

const Tracking = () => {
  return (
    <div className="tracking">
      <Row
        gutter={[
          { xs: 8, sm: 16, md: 24, lg: 32 },
          { xs: 8, sm: 16, md: 24, lg: 32 },
        ]}
      >
        <Col xs={24} md={12} lg={12} xl={5} xxl={5}>
          <label className="grey-color fw-500 fs-14">
            Start Idle Time After ( Inactivity )
          </label>
          <div>
            <Input
              style={{ borderRadius: "1px" }}
              placeholder="15 minutes"
              className="w-100 custom-input-number"
              size="large"
              type="number"
              min="0"
            />
          </div>
        </Col>
        <Col xs={24} md={12} lg={12} xl={5} xxl={5}>
          <label className="grey-color fw-500 fs-14">
            Stop Tracking Time After ( Inactivity )
          </label>
          <div>
            <Input
              style={{ borderRadius: "1px" }}
              placeholder="15 minutes"
              className="w-100 custom-input-number"
              size="large"
              type="number"
              min="0"
            />
          </div>
        </Col>
      </Row>
      <Space className="m-t">
        <p className="title-color m-20 fw-500 fs-14">
          Auto Start
        </p>
        <Switch defaultChecked rootClassName="theme-checkbox" />
      </Space>
      <div className="title-color fw-600 fs-16" style={{ marginTop: "10px" }}>
        Screencast
      </div>
      <div className="m-t fs-14 grey-color">
        These default settings are applied for all users.
      </div>
      <Row
        gutter={[
          { xs: 8, sm: 16, md: 24, lg: 32 },
          { xs: 8, sm: 16, md: 24, lg: 32 },
        ]}
      >
        <Col xs={24} md={12} lg={12} xl={5} xxl={5} className="m-t">
          <label className="grey-color fs-14">
            Screencast Frequency
          </label>
          <div>
            <Select
              placeholder="3 Min - 1 Screenshot"
              optionFilterProp="children"
              className="activitySelect select-input-theme"
              popupClassName="select-theme"
              size="large"
              onChange={(values: any) => console.log(values)}
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              options={minutes}
            />
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button className="btn-primary SaveBtn fs-16 fw-500"
            onClick={() => AppSnackbar({ type: "success", message: "Information Saved Successfully!" })}
          >Save</Button>
        </Col>
      </Row>
    </div>
  );
};

export default Tracking;
