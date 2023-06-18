import React, { useState } from "react";
import { Button, Col, Modal, Row, Form, Input } from "antd";
import { Checkbox } from "antd";
import DeleteIcon from "../../../../../assets/icons/deleteicon.png";

export const DeleteAccountModal = (props: any) => {
  const { setDeleteModalCount, delteModalCount } = props;
  const [isChecked, setIsChecked] = useState(false);
  const [isPassword, setIsPassword] = useState("");

  const [form] = Form.useForm();

  const handleCheckboxChange = (event: any) => {
    setIsChecked(event.target.checked);
  };



  return (
    <div className=" card-bg-color">
      <Modal
        centered
        open={delteModalCount}
        className="delete_modal modal-theme"
        width={620}
        onOk={() => {
          if (isPassword) {
            setDeleteModalCount(0);
            setIsChecked(false);
          }
        }}
        onCancel={() => {
          setDeleteModalCount(0);
          setIsChecked(false);
        }}
        okText="Delete"
        cancelText="Cancel"
        footer={[
          <div style={{ textAlign: "center" }}>
            <Button
              className="btn-cancel"
              style={{ margin: "20px 20px" }}
              onClick={() => {
                setDeleteModalCount(0);
                setIsChecked(false);
              }}
            >
              Cancel
            </Button>
            {delteModalCount === 1 ? (
              <Button
                className="btn-primary"
                disabled={!isChecked}
                onClick={() => {
                  setDeleteModalCount(2);
                  setIsChecked(false);
                }}
              >
                Next
              </Button>
            ) : (
              <Button
                className="btn-danger"
                htmlType="submit"
                type="primary"
                onClick={() => {
                  if (isPassword) {
                    setIsChecked(false);
                    setDeleteModalCount(0);
                  } else {
                    form.submit();
                  }
                }}
              >
                Delete Account
              </Button>
            )}
          </div>,
        ]}
      >
        <Row style={{ textAlign: "center" }}>
          <Col xs={24}>
            <div className="action-modal">
              {delteModalCount === 1 && (
                <>
                  <img src={DeleteIcon} alt="delete" />
                  <h2 className="fs-24 fw-600 heading-color">Are you sure?</h2>
                  <p className="fs-12 fw-400 account-modal-responsive title-color">
                    Deleting your account will delete your data from all
                    products . It will also remove your personal information
                    from any organizations you are in. If you are the only owner
                    of an organization, that organization will also be deleted
                    and any subscriptions will be cancelled.
                  </p>
                  <div>
                    <Checkbox
                      name="isBtn"
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                    >
                      <span className="fs-12 fw-400">
                        I understand that this will immediately delete my data
                        and it cannot be undone.
                      </span>
                    </Checkbox>
                  </div>
                </>
              )}
              {delteModalCount === 2 && (
                <>
                  <img src={DeleteIcon} alt="delete" />
                  <h2 className="fs-16 fw-400 heading-color m-0">
                    Please enter your password
                  </h2>
                  <span className="fs-16 fw-400 heading-color">
                    to confirm deletion:
                  </span>
                  <Row
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "10px",
                    }}
                  >
                    <Col md={16} sm={16} xs={22}>
                      <Form
                        form={form}
                        name="basic"
                        layout="vertical"
                        initialValues={{ remember: true }}
                        autoComplete="off"
                        rootClassName="form-content"
                        style={{ textAlign: "start" }}
                      >
                        <Form.Item
                          label="Password"
                          name="password"
                          rules={[
                            {
                              required: true,
                              message: "Input Required",
                            },
                          ]}
                        >
                          <Input.Password placeholder="Password" />
                        </Form.Item>
                      </Form>
                    </Col>
                  </Row>
                </>
              )}
            </div>
          </Col>
        </Row>
      </Modal>
    </div>
  );
};