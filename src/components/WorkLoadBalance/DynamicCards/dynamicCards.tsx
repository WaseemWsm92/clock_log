import React from 'react'
import CommonCard from '../../card';
import { Card, Col, Collapse, Image, Row } from 'antd';

interface IDynamicCardsProps {
    dataArray: any;
}


const DynamicCards = ({ dataArray }: IDynamicCardsProps) => {
    return (
        <div style={{ marginBottom: "20px", gap: '20px' }} className="main-cards-flex custom-scroll-hor">
            {
                dataArray.map((ele: any, i: any) => (
                    // <Col xs={24} sm={12} md={8} lg={6} xl={5} style={{marginBottom:'10px'}} key={i}>
                    <div style={{ marginBottom: '10px' }} key={i} >
                        <CommonCard color={ele.color} hoverColor={ele.hoverColor}>
                            <Card
                                className='wrapper-card-times'
                                style={{
                                    borderBottom: "1px solid #37B4A4",
                                    textAlign: "left",
                                    height: 100,
                                    backgroundColor: "unset",
                                    color: "inherit"
                                }}
                            >
                                <div
                                    style={{ display: "flex", justifyContent: 'space-between', gap: "10px" }}
                                >
                                    <h4 className="fs-18 fw-600" style={{ margin: "0px" }}>
                                        {ele.cardTitle}
                                    </h4>
                                    <div className='card-image-wrapper'>
                                        <Image className="main-card-image offHover" src={ele.cardIcon} />
                                        <Image className="main-card-image onHover" src={ele.cardIconHov} />
                                    </div>
                                </div>
                                <p className="fs-14 fw-500" style={{ margin: "0px", textAlign: 'left' }}>
                                    {ele.content}
                                </p>
                            </Card>
                        </CommonCard>
                    </div>
                ))
            }
        </div>
    )
}

export default DynamicCards