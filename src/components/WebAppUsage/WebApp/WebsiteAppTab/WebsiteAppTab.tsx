import { useState } from 'react'
import { Col, Row, Input, Space, Checkbox, Select, Button } from 'antd';
import Filter from "../../../../assets/icons/reports/webApp/Filter.svg";
import Productive from "../../../../assets/images/reports/webApps/productive.png";
import { CloseOutlined, SearchOutlined } from '@ant-design/icons';
import Explore from "../../../../assets/icons/reports/webApp/explore.svg";
import DailyActivityTable from './DailyActivityTable';
import ColumnDropdownWrapper from '../../../../shared/ColumnDropdown';
import UserActivityTable from './UserActivityTable';
import UserReportTable from './UserReportTable';
import dayjs from "dayjs";
import "./WebsiteAppTab.scss"


const WebsiteAppTab = () => {
  const dropDownOptions = ['Productive', 'UnProductive', 'Neutral', 'Unrated'];
  const [filterValue, setFilterValue] = useState(['Neutral', 'Unrated']);
  const [IsShowServices, setIsShowServices] = useState(true);
  const [showUserReport, setShowUserReport] = useState(true);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionChange = (optionValue: string) => {
    setSelectedOption(optionValue);
  }

  const handleSelectChange = (value: string) => {
    setSelectedOption(value);
  }

  const options = [
    {
      value: 'Website & Apps',
      label: 'Website & Apps',
    },
    {
      value: 'Websites',
      label: 'Websites',
    },
    {
      value: 'Apps',
      label: 'Apps',
    },
  ]
  return (
    <div className="website-app-wrapper">
      {IsShowServices && <>
        <Row className='user-details' gutter={[{ xs: 0, sm: 0, md: 0, lg: 30 }, { xs: 12, sm: 12, md: 12, lg: 32 }]} >
          <Col xs={24} lg={8} xl={8} xxl={8} md={24}>
            <Select
              value={selectedOption}
              onChange={handleSelectChange}
              style={{ width: '100%' }}
              placeholder="Website & Apps"
              className='select-webapp select-input-theme'
              popupClassName="select-theme"
            >
              {options.map(option => (
                <Select.Option key={option.value} value={option.value}>
                  <Checkbox
                    value={option.value}
                    checked={selectedOption === option.value}
                    onChange={() => handleOptionChange(option.value)}
                  />
                  &nbsp; {option.label}
                </Select.Option>
              ))}
            </Select>
          </Col>
          <Col xs={24} lg={16} xl={16} xxl={16} md={24} >
            <div className="rightSearch d-flex justify-end">
              <span className="fs-12 fw-500 d-flex align-center" style={{ marginRight: '15px' }}>{dayjs().format("MMM DD, YYYY")}</span>
              <Input placeholder="Search by service name" className="webapp-input"
                onChange={(e) => console.log(e.target.value)} prefix={<SearchOutlined className="site-form-item-icon" />}
                style={{ marginRight: '15px', height: '40px' }} />
              <div className='d-flex align-center'>
                <ColumnDropdownWrapper menuValue={filterValue} setMenuValue={setFilterValue} options={dropDownOptions} >
                  <Button className='d-flex align-center cursor-pointer filter_btn btn-theme-color'>
                    <img src={Filter} alt="Column" style={{ marginRight: "5px" }} />
                    <span className='filterby fw-500'>Filter By</span>
                  </Button>
                </ColumnDropdownWrapper>
              </div>
            </div>

          </Col>
        </Row>
        <Row gutter={[20, 20]}>
          <Col span={24} style={{ marginTop: '20px' }}>
            <DailyActivityTable setIsShowServices={setIsShowServices} />
          </Col>
        </Row>

      </>
      }
      {
        !IsShowServices && <>
          <Row className="border-radius-8 user-details" justify="space-between" gutter={[20, 20]} >
            <Col lg={24}>
              <Row gutter={[1, 20]}>
                <Col xs={24} sm={12} >
                  <Space size={15} >
                    <img src={Explore} alt="Explore" />
                    <div>
                      <span className="fs-14 fw-400 title-color">Explore</span>
                      <div className="fs-14 fw-400"> 7h 23m <span className="fs-12 fw-400" style={{ paddingLeft: "10px" }}> <img src={Productive} alt="productive" /> Productive </span> </div>
                    </div>

                  </Space>
                </Col>
                <Col xs={24} sm={12} className='d-flex justify-end'>
                  <div>
                    <Space align="center" className="close-icon" size={15}>
                      <span className="fs-12 fw-500 border-color ">
                        March 16,2022
                      </span>
                      {
                        showUserReport ?
                          <CloseOutlined className="cursor-pointer webUsage-icons" onClick={() => { setIsShowServices(true) }} />
                          :
                          <CloseOutlined className="cursor-pointer webUsage-icons" onClick={() => { setShowUserReport(true) }} />

                      }

                    </Space>
                  </div>

                </Col>


              </Row>
            </Col>



            {showUserReport && <>
              <Col lg={12} xl={7} xxl={7} sm={20} xs={24} >
                {/* <Input size="large" placeholder="Search by User" prefix={<SearchOutlined />} /> */}
                <Input placeholder="Search by User" className="webapp-input"
                  onChange={(e) => console.log(e.target.value)} prefix={<SearchOutlined className="site-form-item-icon" />}
                  style={{ marginRight: '15px', height: '40px' }} />
              </Col>
              <Col span={24} className="user-activity-Table border-radius-8" >
                <UserActivityTable setIsShowServices={setIsShowServices} setShowUserReport={setShowUserReport} />
              </Col>
            </>

            }
            {
              !showUserReport && <>
                <Col lg={12} xl={7} xxl={7} sm={20} xs={24} >
                  <Input placeholder="Search by service" className="webapp-input"
                    onChange={(e) => console.log(e.target.value)} prefix={<SearchOutlined className="site-form-item-icon" />}
                    style={{ marginRight: '15px', height: '40px' }} />
                </Col>
                <Col span={24}>
                  <UserReportTable setShowUserReport={setShowUserReport} />
                </Col>
              </>

            }

          </Row>
        </>
      }
    </div>
  )
}

export default WebsiteAppTab