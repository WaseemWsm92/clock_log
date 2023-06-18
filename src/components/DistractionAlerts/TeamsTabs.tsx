import { Col, Input, Row, Checkbox, Pagination, Button } from "antd";
import type { CheckboxValueType } from "antd/es/checkbox/Group";
import searchIcon from "../../assets/icons/search-icon.svg";
import "./distractionAlerts.scss";

function TeamsTabs(props: any) {
  const checkboxOptions = ["ClockLog", "Buzz HR", "Care Library", "Identity Gram"];
  const onCheckChange = (checkedValues: CheckboxValueType[]) => {
    console.log("checked = ", checkedValues);
  };
  return (
    <Row className="tabs">
      <Col xs={24} md={12}>
        <Input
          type="text"
          style={{
            borderRadius: "2px",
            border: " 1px solid rgba(160, 172, 187, 0.4)",
            height: "40px",
          }}
          placeholder="Search"
          prefix={<img className="white-img-theme-class" src={searchIcon} alt="Search icon" />}
        />
      </Col>
      <Col xs={24} md={24}>
        <Checkbox.Group options={checkboxOptions} onChange={onCheckChange} />
      </Col>
      <Col xs={24} md={24}>
        <Pagination
          size="small"
          total={checkboxOptions.length}
          showTotal={(total, range) => `${range[0]}-${range[1]} of ${total}`}
          defaultPageSize={20}
          defaultCurrent={1}
        />
      </Col>
      <Col xs={24}>
        <div className="d-flex justify-end">
          <Button
            className="cancel-btn fs-16 fw-500 button-distraction"
            onClick={() => props.setSelectedUsers(false)}
          >                  Cancel
          </Button>               
           <Button type="primary" className="button-distraction" htmlType="submit" style={{ marginLeft: "10px", backgroundColor: "#E76F51" }} onClick={()=>props.setAddDistraction({ isToggle: false, id: "" })}> 
            Add
          </Button>
        </div>
      </Col>
    </Row>
  );
}

export default TeamsTabs;
