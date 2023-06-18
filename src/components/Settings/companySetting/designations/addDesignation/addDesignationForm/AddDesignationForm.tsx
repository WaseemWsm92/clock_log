import { Col, Input, Row, Select } from "antd";
import { addDesignationData } from "../../../../../../mock/settings";
import "./AddDesignationForm.scss";

interface IAddDesignationForm {
  isEdited: boolean
}
const AddDesignationForm = (props: IAddDesignationForm) => {
  const { isEdited } = props
  return (
    <div className="add-designation-form">
      <h1 className="title-color fs-16 m-0 fw-500 heading-color">{ isEdited ? 'Edit Designation' : 'Add Designation'}</h1>
      <Row className="m-t">
        <Col span={24}>
          <label className="grey-color">Designation Name</label>
          <Input placeholder="Enter designation" />
        </Col>
        <Col span={24}>
          <label className="grey-color">Department Name</label>
          <div>
            <Select
              placeholder="Select department"
              size="large"
              optionFilterProp="children"
              className="activitySelect select-input-theme"
              popupClassName="select-theme select-input-theme"
              onChange={(values: any) => console.log(values)}
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              options={addDesignationData}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AddDesignationForm;
