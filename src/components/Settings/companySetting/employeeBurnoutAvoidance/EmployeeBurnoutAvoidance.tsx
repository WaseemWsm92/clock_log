import { Button, Col, Row, Select } from "antd";
import { minutesHours } from "../../../../mock/settings";
import AppSnackbar from "../../../../utils/snackbar";
import "./EmployeeBurnoutAvoidance.scss";

const EmployeeBurnoutAvoidance = () => {
  return (
    <div className="employee-Burnout">
      <Row
        gutter={[
          { xs: 8, sm: 16, md: 24, lg: 32 },
          { xs: 8, sm: 16, md: 24, lg: 32 },
        ]}
      >
        <Col xs={24} md={12} lg={12} xl={5} xxl={5}>
          <label className="grey-color fw-500 fs-14">Optimal Work Hours</label>
          <div>
            <Select
              placeholder="hh : mm"
              size="large"
              optionFilterProp="children"
              className="activitySelect select-input-theme"
              popupClassName="select-theme"
              onChange={(values: any) => console.log(values)}
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              options={minutesHours}
            />
          </div>
        </Col>
      </Row>
      <Row
        gutter={[
          { xs: 8, sm: 16, md: 24, lg: 32 },
          { xs: 8, sm: 16, md: 24, lg: 32 },
        ]}
      >
        <Col xs={24} md={12} lg={12} xl={5} xxl={5} className="m-t">
          <label className="grey-color fw-500 fs-14">Minimum Work Hours</label>
          <div>
            <Select
              placeholder="hh : mm"
              size="large"
              optionFilterProp="children"
              className="activitySelect select-input-theme"
              popupClassName="select-theme"
              onChange={(values: any) => console.log(values)}
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              options={minutesHours}
            />
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button className="btn-primary SaveBtn fs-16 fw-500" onClick={() => AppSnackbar({ type: "success", message: "Information Saved Successfully!"})}>Save</Button>
        </Col>
      </Row>
    </div>
  );
};

export default EmployeeBurnoutAvoidance;
