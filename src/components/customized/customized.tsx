import React, { useState } from "react"
import { customizedMockData, employeeInformationData, exportMockData, productivityMockData, timeFormatMockData, timeTrackedData } from "../../mock/customizedMockData"
import './customized.scss';
import { Checkbox, Select } from "antd";

const Customized = () => {
  const [customizedFilter, setCustomizedFilter] = useState<any>({
    information: [],
    timeTracked: [],
    timeFormat: [],
    productivity: [],
    idleTime: [],
    export: []
  })

  const handleChange = (value: any, type: string) => {
    switch (type) {
      case 'employee':
        setCustomizedFilter({ ...customizedFilter, information: value })
        break;
      case 'timeTrack':
        setCustomizedFilter({ ...customizedFilter, timeTracked: value })
        break;
      case 'timeFormat':
        setCustomizedFilter({ ...customizedFilter, timeFormat: value })
        break;
      case 'productivity':
        setCustomizedFilter({ ...customizedFilter, productivity: value })
        break;
      case 'idleTime':
        setCustomizedFilter({ ...customizedFilter, idleTime: value })
        break;
      case 'export':
        setCustomizedFilter({ ...customizedFilter, export: value })
        break;
      default:
        break;
    }
  }

  return (
    <>
      <div className='customized-wrapper  border-radius-8 w-100 main-bg-color'>
        <div className='profile-information-wrap'>
          <h2 className="title-color fs-16 line-height-24 fw-500 m-0">Employee information</h2>
          <div className="profile-information-checkbox">
            <Checkbox.Group className="title-color" options={employeeInformationData} onChange={(val) => handleChange(val, 'employee')} defaultValue={['Name']} />
          </div>
        </div>
        <div className='time-tracked-wrap'>
          <h2 className="title-color fs-16 line-height-24 fw-500 m-0">Time Tracked</h2>
          <div className="time-tracked-checkbox w-100">
            <Checkbox.Group options={timeTrackedData} onChange={(val) => handleChange(val, 'timeTrack')} />
          </div>
        </div>
        <div className='time-format-wrap'>
          <h2 className="title-color fs-14 line-height-20 fw-400 m-0">Time Format</h2>
          <div className="time-format-select w-100">
            <Select
            className="select-input-theme"
            popupClassName="select-theme"
              labelInValue
              style={{ width: "100%", maxWidth: "400px", }}
              defaultValue={{ value: 'Select', label: 'Select' }}
              onChange={(val) => handleChange(val, 'timeFormat')}
              options={timeFormatMockData}
              
            />
          </div>
        </div>
        <div className='productivity-format-wrap'>
          <h2 className="title-color fs-16 line-height-24 fw-500 m-0">Productivity</h2>
          <div className="productivity-checkbox w-100">
            <Checkbox.Group options={productivityMockData} onChange={(val) => handleChange(val, 'productivity')} />
          </div>
        </div>
        <div className='idle-time-wrap'>
          <h2 className="title-color fs-16 line-height-24 fw-500 m-0">Idle Time</h2>
          <div className="idle-time w-100">
            <Checkbox.Group options={customizedMockData} onChange={(val) => handleChange(val, 'idleTime')} />
          </div>
        </div>
        <div className='export-wrap'>
          <h2 className="title-color fs-14 line-height-24 fw-400 m-0">Export</h2>
          <div className="export w-100">
            <Select
            className="select-input-theme"
            popupClassName="select-theme"
              labelInValue
              style={{ width: "100%", maxWidth: "400px", }}
              defaultValue={{ value: 'Select', label: 'Select' }}
              onChange={(val) => handleChange(val, 'export')}
              options={exportMockData}
            />
          </div>
        </div>
        <div className="export-btn">
          <button type="button" className="text-white fs-16 fw-500 cursor-pointer border-radius-8 fw-500">Export Custom Report</button>
        </div>
      </div>
    </>
  )
}

export default Customized