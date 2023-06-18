import { Image, Popover, Tooltip } from 'antd'

import "./tableToolTip.scss"

import InfoIcon from "../../../assets/icons/Info.svg"

const TableToolTip = (props:any) => {



    return (
        <div className='wrapper-table-tooltip'>
            <Tooltip placement="bottomRight" 
            overlayInnerStyle={{
                backgroundColor: "#284652",
                color: "#fff",
                width: "fit-content",
              }}
                overlayClassName="class-table--tooltip" title={
                <div className='workload-table-inner-popover'>
                    {(() => {
                    switch (props.renderTooltopContent) {
                        case "expectedWorkingHours":
                            return (
                                <span className='fs-14 fw-14'>Expected Working hours = <br /> Min Effective Time - Relaxation Time </span>
                            );
                        case "minEffectiveHours":
                            return (
                                <span className='fs-14 fw-14'>Min. Effective Time = <br /> Working hours - Break Time </span>
                            );
                        case "utilizationStatus":
                            return (
                                <div className='utilization-status-styles-wrapper'>
                                    <span className='fs-14 fw-700 line-height-22 margin--b-16'>Utilization status</span><br />
                                    <div className='utilization-status-styles-content-flex'>
                                        <p className='content-flex-max--width fs-10'>If Productive Time {'>'} Min. Effective Time</p>
                                        <div className="content-flex-tag fs-10 white-color bg-Orange-color">Overutilized</div>
                                    </div>
                                    <div className='utilization-status-styles-content-flex'>
                                        <p className='content-flex-max--width fs-10'>If Productive Time {'<'} Min. Effective Time</p>
                                        <div className="content-flex-tag fs-10 white-color bgLow-yellow-color">Underutilized</div>
                                    </div>
                                    <div className='utilization-status-styles-content-flex'>
                                        <p className='content-flex-max--width fs-10'>If Productive time is between Expective <br /> working hours and Min.Effective time</p>
                                        <div className="content-flex-tag fs-10 white-color bgLightGreenProgress-color">Healthy</div>
                                    </div>
                                </div>
                            );
                        default:
                            return null;
                    }
                })()}
                </div>
            }>
                <img src={InfoIcon} />
            </Tooltip>
        </div>
    )
}

export default TableToolTip