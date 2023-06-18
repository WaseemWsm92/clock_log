import { useState } from "react";
import { Checkbox, Col, Input, Modal, Pagination, Row } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import crossIcon from "../../../../../assets/icons/settings/projectandtasks/cross.svg";
import searchIconLow from "../../../../../assets/icons/search.svg"
import { addMoreManagers, addMoreTeammates, teamsCheckBoxesData, } from "../../../../../mock/settings/ProjectAndTaskCheckBoxes";
import "./AddMember.scss";


export const AddMember = () => {
  const [teammates, setIsteammates] = useState(false);
  const [manager, setIsmanager] = useState(false);
  const [teammatesValue, setTeammatesValue] = useState([]);
  const [managerValue, setManagerValue] = useState([]);

  const HandleCheckBoxValue = (list: any) => {
    setTeammatesValue(list);
  };
  const HandleManagerValue = (list: any) => {
    setManagerValue(list);
  };

  // teamates  start here
  const teamatesValueHandler = (item: any) => {
    const filtered = teammatesValue.filter((name) => {
      return name !== item;
    });
    setTeammatesValue(filtered);
  };
  // teamates  start here
  const managerValueHandler = (item: any) => {
    const filtered = managerValue.filter((name) => {
      return name !== item;
    });
    setManagerValue(filtered);
  };

  const showTeammatesModal = () => {
    setIsteammates(true);
  };
  const showManagerModal = () => {
    setIsmanager(true);
  };

  const handleOk = () => {
    setIsteammates(false);
    setIsmanager(false);
  };

  const handleCancel = () => {
    setIsteammates(false);
    setIsmanager(false);
  };
  return (
    <div className="wrap-add-member">
      <div className="create-project-members">
        <label className="label-color">Teammates</label>
        <div
          className="w-100 wrapper-inner-modal-teams"
          style={{ border: "1px solid #E8ECEE", height: "155px", position: "relative" }}
        >
          <div className="wrapper-inner-modal-teams">
            <div className="selected-teams">
              {teammatesValue.map((item: any, i: any) => (
                <div key={i} className="selected-members">
                  {item}
                  <img
                    src={crossIcon}
                    alt=""
                    style={{ marginLeft: "10px", cursor: "pointer" }}
                    onClick={() => {
                      teamatesValueHandler(item);
                    }}
                  />
                </div>
              ))}
            </div>

            <Modal
              title={<><ArrowLeftOutlined className="white-img-theme-class" onClick={handleCancel} /> Add Member</>}
              open={teammates}
              centered
              onOk={handleOk}
              okText='Add'
              onCancel={handleCancel}
              className="modal-theme"
            >
              <Input
                placeholder="Search User"
                style={{
                  marginBottom: "24px",
                  marginTop: "24px",
                  height: "40px",
                }}
                prefix={<img src={searchIconLow} />}
              />
              <Checkbox.Group
                // options={["dfdf", "dfwerfw"]}
                style={{ marginBottom: "40px" }}
                value={teammatesValue}
                onChange={HandleCheckBoxValue}
              >
                <Row gutter={[5, 10]}>
                  {addMoreTeammates.map((item: any) => <Col span={8}>
                    <Checkbox value={item.value}>{item.label}</Checkbox>
                  </Col>)}

                </Row>
              </Checkbox.Group>
            </Modal>
          </div>
          <button onClick={showTeammatesModal}>+ Add More Teammates</button>
        </div>
      </div>

      <div className="create-project-members">
        <label className="label-color">Managers</label>
        <div
          className="w-100 wrapper-inner-modal-teams"
          style={{ border: "1px solid #E8ECEE", height: "155px", position: "relative", marginBottom: "20px" }}
        >
          <div className="wrapper-inner-modal-teams">
            <div className="selected-teams">
              {managerValue.map((item: any, i: any) => (
                <div key={i} className="selected-members">
                  {item}
                  <img
                    src={crossIcon}
                    alt=""
                    style={{ marginLeft: "10px", cursor: "pointer" }}
                    onClick={() => {
                      managerValueHandler(item);
                    }}
                  />
                </div>
              ))}
            </div>

            <Modal
              title={<><ArrowLeftOutlined onClick={handleCancel} /> Add Manager</>}
              centered
              open={manager}
              okText='Add'
              onOk={handleOk}
              onCancel={handleCancel}
              className="modal-theme"
            >
              <Input
                placeholder="Search User"
                style={{
                  marginBottom: "24px",
                  marginTop: "24px",
                  height: "40px",
                }}
                prefix={<img src={searchIconLow} />}
              />
              <Checkbox.Group
                // options={["dfdf", "dfwerfw"]}
                style={{ marginBottom: "40px" }}
                value={managerValue}
                onChange={HandleManagerValue}
              >
                <Row gutter={[5, 10]}>
                  {addMoreManagers.map((item: any) => <Col span={8}>
                    <Checkbox value={item.value}>{item.label}</Checkbox>
                  </Col>)}

                </Row>
              </Checkbox.Group>
              <Pagination
                total={addMoreManagers.length}
                style={{ display: "flex", justifyContent: "end" }}
                showTotal={(total, range) => (
                  <p className="fs-12 m-0" style={{ color: "#8D8D8D", position: "absolute", left: "27px" }}>
                    {range[0]}-{range[1]} of {total}
                  </p>)}
                defaultCurrent={3}
                size="small"
              />
            </Modal>
          </div>
          <button className="fs-14 fw-400" onClick={showManagerModal}>+ Add More Manager</button>
        </div>
      </div>
    </div>
  );
};
