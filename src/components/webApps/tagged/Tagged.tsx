import React, { useState } from "react";
import { Col, Input, Row, Table, Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { data } from "../../../mock/WebAppSetting";
import { DataType } from "../../../types/WebAppSetting";
import searchIcon from "../../../assets/icons/search-icon.svg";
import type { ColumnsType } from "antd/es/table";
import AddCustomScreen from "./AddCustomScreen";
import "./Tagged.scss";

const Tagged = (props: any) => {
    const [showIModal, setShowIModal] = useState(false);
    const [sendDropdownValue, setSendDropdownValue] = useState(false);
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
    const [addDistraction, setAddDistraction] = useState<boolean>(false);
    const [selectedOption, setSelectedOption] = useState('Productive');
    const [tableData, setTableData] = useState(data);


    const handleShowmodal = (e: any) => {

        if (e === 'Custom') {
            setShowIModal(true)
            setAddDistraction(true)
            setSendDropdownValue(e)
        }
    };
    const handleSelectChange = (value: any, selectedRecord: any) => {
        let temp = [...tableData]
        temp = temp.map((ele) => {
            if (ele.key == selectedRecord.key) {
                ele.ProductivityStatus = value
            }
            return ele
        })
        setTableData(temp)
    }

    const options = [
        {
            value: 'Neutral',
            label: 'Neutral',
        },
        {
            value: 'Productive',
            label: 'Productive',
        },
        {
            value: 'Unproductive',
            label: 'Unproductive',
        },
    ]
    const columns: ColumnsType<DataType> = [
        {
            title: " Sr.no",
            dataIndex: "srno",
        },
        {
            title: " Name",
            dataIndex: "Name",
        },
        {
            title: "Category",
            dataIndex: "Category",
            render: () => (
                <Select
                    className="select-input-theme"
                    popupClassName="select-theme"
                    defaultValue="Select Category"
                    options={[
                        { value: 'Design', label: 'Design' },
                        { value: 'Email', label: 'Email' },
                        { value: 'Social Media', label: 'Social Media' },
                        { value: 'Music', label: 'Music' },
                    ]}
                />
            ),
        },
        {
            title: "Productivity Status",
            dataIndex: "ProductivityStatus",
            render: (_, record) => (
                <>
                    <div className={`ProductivityStatusTagged ${record.ProductivityStatus === 'Neutral' ? 'NeutralStatus' : record.ProductivityStatus === 'Productive' ? 'ProductiveStatus' : record.ProductivityStatus === 'Unproductive' ? 'UnproductivelStatus' : "ProductivityStatusTagged"}`}>
                        <Select value={record.ProductivityStatus || 'Select Status'} onChange={(value) => handleSelectChange(value, record)} placeholder="Select Status" >
                            {options.map(option => (<Select.Option key={option.value} value={option.value} style={{ backgroundColor: option.value === 'Neutral' ? '#EBEAEA' : option.value === 'Productive' ? '#D9FFDA' : option.value === 'Unproductive' ? '#FFCBCB' : "", borderRadius: '25px', width: 'fit-content', marginTop: "10px", color: option.value === 'Neutral' ? '#4E4B66' : option.value === 'Productive' ? '#0FBE16' : option.value === 'Unproductive' ? '#FF3737' : "" }}>
                                {option.label}
                            </Select.Option>))}
                        </Select>
                    </div>
                </>
            ),
        },
        {
            title: " No of Screencasts",
            dataIndex: "NoOfScreencasts",
            render: () => (
                <Select
                    className="select-input-theme"
                    popupClassName="select-theme"
                    defaultValue="3 Min - 1 Screenshot"
                    onChange={(value) => {
                        handleShowmodal(value)
                    }}
                    options={[
                        { value: '3 Min - 1 Screenshot', label: '3 Min - 1 Screenshot' },
                        { value: '5 Min - 2 Screenshot', label: '5 Min - 2 Screenshot' },
                        { value: '10 Min - 3 Screenshot', label: '10 Min - 3 Screenshot' },
                        { value: '15 Min - 4 Screenshot', label: '15 Min - 4 Screenshot' },
                        { value: '20 Min - 5 Screenshot', label: '20 Min - 5 Screenshot' },
                        { value: 'Custom', label: 'Custom' },
                    ]}
                />
            ),
        },
        {
            title: "Date",
            dataIndex: "Date",
        },
        {
            title: "Duration Used",
            dataIndex: "DurationUsed",
        },

    ];

    const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
        console.log("selectedRowKeys changed: ", newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };
    return (
        <div>
            <div style={{ marginBottom: 16 }} className="webAppTagged">
                <div>
                    <Row className="table_header d-flex justify-between">
                        <Col xs={24} md={16} lg={10}>
                            <Row gutter={14}>
                                <Col xs={24} md={16} lg={24} className="btn-wrapper d-flex">
                                    <Col xs={12} md={12} lg={12}>
                                        <Select className="select-label-color select-input-theme"
                                            popupClassName="select-theme"
                                            defaultValue="Select Category"
                                            options={[
                                                { value: 'Design', label: 'Design' },
                                                { value: 'Email', label: 'Email' },
                                                { value: 'Social Media', label: 'Social Media' },
                                                { value: 'Music', label: 'Music' },
                                            ]}
                                        />
                                    </Col>

                                    <Col xs={12} md={12} lg={12}>
                                        <Select className="select-label-color select-input-theme"
                                            popupClassName="select-theme"
                                            defaultValue="Select Productivity Status"
                                            options={[
                                                { value: 'Neutral', label: 'Neutral' },
                                                { value: 'Productive', label: 'Productive' },
                                                { value: 'Unproductive', label: 'Unproductive' },
                                            ]}
                                        />
                                    </Col>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={24} md={8} lg={4} className="search_wrapper">
                            <Input prefix={<img src={searchIcon} />} className="custom-input-field" placeholder="Serach" />
                        </Col>
                    </Row>
                </div>
            </div>
            <div className="TaggedTable">
                <Table scroll={{ x: 768 }} rowSelection={rowSelection} columns={columns} dataSource={data} className="wrapper-table" />

            </div>
            {addDistraction && <AddCustomScreen addDistraction={addDistraction} setAddDistraction={setAddDistraction} sendDropdownValue={sendDropdownValue} setSendDropdownValue="" />}
        </div>
    )
}

export default Tagged
