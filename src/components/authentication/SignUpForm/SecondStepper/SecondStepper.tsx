import { AutoComplete, Button, Form, Select } from "antd";
import { TeamOutlined, EnvironmentOutlined } from "@ant-design/icons";

import { countries, employees, companies, SelectField } from "./formData";

import companyIcon from "../../../../assets/images/SignIn/company.png";
import ArrowBack from "../../../../assets/images/SignIn/arrowBack.png";
import "./SecondStepper.scss";

const { Option } = Select;

const SecondStepper = ({ handleNextStep, handlePrevStep }: any) => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    handleNextStep();
  };

  return (
    <div style={{ marginTop: "8px" }} className="second-form">
      <Form form={form} name="control-hooks" onFinish={onFinish}>
        <Form.Item
          name="company"
          rules={[
            {
              required: true,
              message: "Required field",
            },
          ]}
        >
          <div className="select-wrapper">
            <img className="custom-icon" src={companyIcon} alt="compnay" />
            <AutoComplete
              size="large"
              options={companies}
              onChange={(value: string) => form.setFieldsValue({ company: value })}
              filterOption={(inputValue, option: any) =>
                option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
              }
              placeholder="Company Name"
            />
          </div>
        </Form.Item>
        <Form.Item
          name="employees"
          rules={[
            {
              required: true,
              message: "Required field",
            },
          ]}
        >
          <div className="select-wrapper">
            <TeamOutlined style={{ color: "#A5AEB5" }} className="custom-icon" />
            <Select
              placeholder="No of Employees"
              onChange={(value: string) => form.setFieldsValue({ employees: value })}
              size="large"
              allowClear
            >
              {employees.map((employee: SelectField) => {
                return (
                  <Option key={employee.key} value={employee.value}>
                    {employee.value}
                  </Option>
                );
              })}
            </Select>
          </div>
        </Form.Item>
        <Form.Item
          name="country"
          rules={[
            {
              required: true,
              message: "Required field",
            },
          ]}
        >
          <div className="select-wrapper">
            <EnvironmentOutlined style={{ color: "#A5AEB5" }} className="custom-icon" />
            <Select
              placeholder="Country"
              onChange={(value: string) => form.setFieldsValue({ country: value })}
              size="large"
              allowClear
            >
              {countries.map((country: SelectField) => {
                return (
                  <Option key={country.key} value={country.value}>
                    {country.value}
                  </Option>
                );
              })}
            </Select>
          </div>
        </Form.Item>
        <div
          style={{
            marginTop: '6rem',
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <img src={ArrowBack} alt="Arrow-back" onClick={() => handlePrevStep()} />
          <Button className="step-btn fs-16 fw-500" htmlType="submit" type="primary">
            Next
          </Button>
        </div>
      </Form>
    </div>
  );
};
export default SecondStepper;
