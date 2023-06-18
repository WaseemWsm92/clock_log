import { Button, Col, Input, Row, Select } from "antd";
import Search from "antd/es/transfer/search";
import { days, industry } from "../../../../mock/settings";
import AppSnackbar from "../../../../utils/snackbar";
import "./OrganizationInformaion.scss";

const OrganizationInformation = () => {
  return (
    <>
      <div className="organization-wrapper">
        <Row
          gutter={[
            { xs: 8, sm: 16, md: 24, lg: 30 },
            { xs: 8, sm: 16, md: 24, lg: 25 },
          ]}
          className="organizationInformation"
        >
          <Col xs={24} md={12} lg={12} xl={12}>

            <label className="fs-14 fw-400 select-label-color">Company Name</label>
            <Input placeholder="example" className="w-100" size="large" />
          </Col>
          <Col xs={24} md={12} lg={12} xl={12}>
            <label className="fs-14 fw-400 select-label-color">Owner</label>
            <Input placeholder="example" size="large" />
          </Col>
          <Col xs={24} md={12} lg={12} xl={12}>
            <label className="fs-14 fw-400 select-label-color" >Logo</label>
            <Input type="file" placeholder="example" accept="image/*" style={{ marginTop: "9px" }} />
          </Col>
          <Col xs={24} md={12} lg={12} xl={12}>
            <label className="fs-14 fw-400 select-label-color">Industry</label>
            <div>
              <Select
                size="large"
                placeholder="Select"
                optionFilterProp="children"
                className="activitySelect w-100 select-input-theme"
                popupClassName="select-theme"
                onChange={(values: any) => console.log(values)}
                filterOption={(input, option) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                options={industry}
              />
            </div>
          </Col>
          <Col xs={24} md={12} lg={12} xl={12}>
            <label className="fs-14 fw-400 select-label-color select-label-color">Week Start Day</label>
            <div>
              <Select
                size="large"
                placeholder="Select"
                style={{ display: "flex", alignItems: "center" }}
                // Other props...
                optionFilterProp="children"
                className="activitySelect w-100 select-input-theme"
                popupClassName="select-theme"
                onChange={(values: any) => console.log(values)}
                filterOption={(input, option) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                options={days}
              />
            </div>
          </Col>
          <Col xs={24} md={12} lg={12} xl={12}>
            <label className="fs-14 fw-400 select-label-color">Timezone</label>
            <div>
              <Select
                placeholder="Select"
                className="select-input-theme"
                popupClassName="select-theme"
                // value={"Select"}
                // style={{ maxWidth: 520, height: 40 }}
                size="large"
                options={[
                  {
                    label: (<>
                      <span className="custom-search-field">
                        <Search placeholder="Search by city or time zone" />
                      </span>
                      <p>(UTC+05:00) Islamabad, Karachi</p>
                      <p>(UTC+04:00) Tbilisi</p>
                      <p>(UTC+04:30) Kabul</p>
                    </>
                    )
                  },
                ]}
              />
              {/* <Select
                size="large"
                placeholder="Select"
                optionFilterProp="children"
                className="activitySelect w-100 select-input-theme"
                popupClassName="select-theme"
                onChange={(values: any) => console.log(values)}
                filterOption={(input, option) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                options={days}
              /> */}
            </div>
          </Col>
          <Col xs={24} md={12} lg={12} xl={12}>
            <Button
              type="primary"
              className="SaveBtn fs-16 fw-500 organizationInformation "
              onClick={() => AppSnackbar({ type: "success", message: "Information Saved Successfully!" })}
            >
              Save
            </Button>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default OrganizationInformation;
