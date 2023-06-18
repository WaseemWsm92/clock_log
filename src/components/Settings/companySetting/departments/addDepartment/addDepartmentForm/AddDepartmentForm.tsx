import { Col, Input, Row } from "antd";
import './AddDepartmentForm.scss';

interface IAddDepartmentForm {
  isEdited: boolean
}
const AddDepartmentForm = (props: IAddDepartmentForm) => {
  const { isEdited } = props
  return (
    <div className="add-designation-form">
      <h1 className="fw-500 fs-16 m-0 heading-color" style={{ marginBottom: "20px"}}>{isEdited ? 'Edit Department' : 'Add Department'}</h1>
      <Row

        className="m-t"

      >
        <Col span={24}>
          <label className="grey-color">Department Name</label>
          <Input placeholder="Enter designation" />
        </Col>
      </Row>
    </div>
  );
};

export default AddDepartmentForm;
