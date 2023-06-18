import React from 'react'
import { Button, Modal, Row, Col } from 'antd';
import SaveForm from '../../../../../assets/images/MyAccounts/saveForm.png'


const SaveFormModal = (props: any) => {
    const { saveForm, setSaveForm } = props;
    return (
        <div>
            <Modal
                centered
                open={saveForm}
                className="delete_modal modal-theme"
                width={620}
                footer={null}
                onOk={() => {
                    setSaveForm(false);
                }}
                onCancel={() => {
                    setSaveForm(false);
                }}
                okText="Delete"
                cancelText="Cancel"
            >
                <Row style={{ textAlign: "center" }}>
                    <Col xs={24}>
                        <div className="action-modal">
                            <div
                                style={{
                                    position: "relative",
                                    width: "100%",
                                    maxWidth: "66px",
                                    height: "66px",
                                    background: "#F4F9FF",
                                    boxShadow: "6px 10px 35px rgba(0, 0, 0, 0.01)",
                                    borderRadius: '50px',
                                    margin: "0 auto"
                                }}
                            >                <img src={SaveForm} alt="save" style={{ position: 'absolute', top: "13px", right: '13px' }} />              </div>
                            <h2 className="fs-24 fw-600 heading-color">Are you sure?</h2>
                            <p className="fs-12 fw-400 account-modal-responsive title-color">
                                Your request for profile update has been sent to Admin. Once approved by admin,
                                your profile will be updated accordingly.
                            </p>
                            <div>
                            </div>
                            <Button
                                className="btn-cancel"
                                style={{ margin: "20px 20px" }}
                                onClick={() => {
                                    setSaveForm(false);
                                }}
                            >
                                Cancel
                            </Button>
                            <Button
                                className="btn-primary"
                                onClick={() => setSaveForm(false)}
                            >
                                Confirm
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Modal>
        </div>
    )
}
export default SaveFormModal