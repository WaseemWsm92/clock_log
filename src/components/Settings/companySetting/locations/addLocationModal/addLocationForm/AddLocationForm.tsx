import { Button, Col, Form, Input, Row, Select } from "antd";
import { useAppDispatch, useAppSelector } from "../../../../../../hooks/useStoreHooks";
import { postLocation, updateLocation } from "../../../../../../store/settings/companySettings/signInSettings/signInSettings.api";
import "./AddLocationForm.scss";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import { countryNames, days } from "../../../../../../mock/settings";
import AppSnackbar from "../../../../../../utils/snackbar";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
  },
  wrapperCol: {
    xs: { span: 24 },
  },
};

const AddLocationForm = (props: any) => {
  const { selectedRecord, setIsModalOpen, form, view } = props;
  const [initialFormValues, setInitialFormValues] = useState({});
  const { Option } = Select;
  const renderOption = ({ value, label, image }: any) => (
    <div>
      <img src={image} alt={label} width={20} height={20} style={{ marginRight: 8 }} />
      <span>{label}</span>
    </div>
  );
  const [isLoading, setIsloading] = useState(false);

  const isEmptyObj = (obj: {}) => {
    return obj && Object.keys(obj).length === 0 && Object.getPrototypeOf(obj) === Object.prototype;
  };

  const dispatch = useAppDispatch();

  const status = useAppSelector((state) => state.companySettings.status);

  const data = {
    locationName: "abc",
    primaryPhone: "124",
  };

  const onFinish = (values: any) => {
    setIsloading(true);

    setTimeout(() => {
      if (isEmptyObj(selectedRecord)) {
        setIsModalOpen(false);
        dispatch(postLocation(values));
        AppSnackbar({ type: "success", message: "Record Added Successfully!" })
      } else {
        values.id = selectedRecord.id;
        setIsModalOpen(false);
        dispatch(updateLocation(values));
        AppSnackbar({ type: "success", message: "Record Updated Successfully!" })
      }
    }, 2000);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Global settings form submittion failed with values:", errorInfo);
  };

  useEffect(() => {
    if (status === "SUCCEEDED" || status === "FAILED") {
      setIsloading(false);
    }
  }, [status]);
  console.log("selectedRecord", selectedRecord);
  return (
    <Form
      size={"large"}
      form={form}
      {...formItemLayout}
      layout="vertical"
      scrollToFirstError={true}
      onFinishFailed={onFinishFailed}
      onFinish={onFinish}
      autoComplete="off"
      initialValues={initialFormValues}
      className="addLocationForm"

    >
      {/* <h1 className="title-color fs-20">{!isEmptyObj(selectedRecord) ? "Edit Location" : view ? "Location" : "Add Location"}</h1> */}
      <h1 className="title-color fs-20 m-0" style={{marginBottom:"14px"}}>{view ? "Location" : !isEmptyObj(selectedRecord) ? "Edit Location" : "Add Location"}</h1>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12}>
          <Form.Item
            className="formlable"
            label="Location Name"
            name="locationName"
            rules={[{ required: true, message: "Required field" }]}

          >
            <Input placeholder="Location name" id="locationName" style={{ height: "37px" }} disabled={view} />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12}>
          <Form.Item
            className="formlable"
            label="Primary Phone"
            name="primaryPhone"
            rules={[{ required: true, message: "Required field" }]}

          >
            <Input placeholder="Primary phone" id="primaryPhone" style={{ height: "37px" }} disabled={view} />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12}>
          <Form.Item
            className="formlable"
            label="Secondary Phone"
            name="secondaryPhone"
            rules={[{ required: true, message: "Required field" }]}

          >
            <Input placeholder="Secondary phone" id="secondaryPhone" style={{ height: "37px" }} disabled={view} />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12}>
          <Form.Item className="formlable" label="Fax" name="fax" rules={[{ required: true, message: "Required field" }]} >
            <Input placeholder="Fax" id="fax" style={{ height: "37px" }} disabled={view} />
          </Form.Item>
        </Col>
      </Row>
      <h1 className="title-color fs-20">Mailing Address:</h1>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12}>
          <Form.Item
            className="formlable"
            label="Address"
            name="mailingAddress"
            rules={[{ required: true, message: "Required field" }]}

          >
            <Input placeholder="Address" id="mailingAddress" style={{ height: "37px" }} disabled={view} />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12}>
          <Form.Item className="formlable" label="Zip" name="mailZip" rules={[{ required: true, message: "Required field" }]} >
            <Input placeholder="Zip" id="mailZip" style={{ height: "37px" }} disabled={view} />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12}>
          <Form.Item className="formlable" label="City" name="mailCity" rules={[{ required: true, message: "Required field" }]} >
            <Input placeholder="City" id="mailCity" style={{ height: "37px" }} disabled={view} />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12}>
          <Form.Item
            className="formlable"
            label="Country"
            name="mailCountry"
            rules={[{ required: true, message: "Required field" }]}

          >
            <Select placeholder="Select" className="select-input-theme" popupClassName="select-theme">
              {countryNames.map((country) => (
                <Option key={country.value} value={country.value} renderOption={() => renderOption(country)}>
                  <Row>
                    <Col md={2} lg={2}><img src={country.image} /></Col>
                    <Col md={8} lg={8}>{country.label}</Col>
                  </Row>
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <h1 className="title-color fs-20">Billing Address:</h1>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12}>
          <Form.Item
            className="formlable"
            label="Address"
            name="billingAddress"
            rules={[{ required: true, message: "Required field" }]}

          >
            <Input placeholder="Address" id="billingAddress" style={{ height: "37px" }} disabled={view} />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12}>
          <Form.Item className="formlable" label="Zip" name="billingZip" rules={[{ required: true, message: "Required field" }]} >
            <Input placeholder="Zip" id="billingZip" style={{ height: "37px" }} disabled={view} />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12}>
          <Form.Item className="formlable" label="City" name="billingCity" rules={[{ required: true, message: "Required field" }]} >
            <Input placeholder="City" id="billingCity" style={{ height: "37px" }} disabled={view} />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12}>
        <Form.Item
            className="formlable"
            label="Country"
            name="mailCountry"
            rules={[{ required: true, message: "Required field" }]}

          >
            <Select placeholder="Select" className="select-input-theme" popupClassName="select-theme">
              {countryNames.map((country) => (
                <Option key={country.value} value={country.value} renderOption={() => renderOption(country)}>
                  <Row>
                    <Col md={2} lg={2}><img src={country.image} /></Col>
                    <Col md={8} lg={8}>{country.label}</Col>
                  </Row>
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
      </Row>

      <Form.Item className="modalBtn">
        <Button onClick={() => setIsModalOpen(false)}>{view ? 'Close' : 'Cancel'}</Button>
        {
          !view &&
          <Button type="primary" htmlType="submit" loading={isLoading}>
            {!isEmptyObj(selectedRecord) ? 'Update' : 'Add'}
          </Button>
        }
      </Form.Item>
    </Form>
  );
};

export default AddLocationForm;
