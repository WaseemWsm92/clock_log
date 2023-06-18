import { useState } from "react";
import { Checkbox, Col, Input, Modal, Pagination, Row } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import crossIcon from "../../../../../assets/icons/settings/projectandtasks/cross.svg";
import searchIconLow from "../../../../../assets/icons/search.svg"

import { teamsCheckBoxesData } from "../../../../../mock/settings/ProjectAndTaskCheckBoxes";
import "./AddTeams.scss";
export const AddTeams = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [teamValue, setTeamValue] = useState([]);

  const HandleCheckBoxValue = (list: any) => {
    setTeamValue(list);
  };

  // cross functionality start here
  const crossHandler = (item: any) => {
    const filtered = teamValue.filter((name) => {
      return name !== item;
    });
    setTeamValue(filtered);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="wrap-add-member">
      <div className="wrap-teammates">
        <label className="label-color">Teammates</label>
        <div className="w-100 team-mates">
          {teamValue.map((item: any, i: any) => (
            <div key={i} className="selected-members">
              {item}
              <img
                src={crossIcon}
                alt=""
                style={{ marginLeft: "10px", cursor: "pointer" }}
                onClick={() => {
                  crossHandler(item);
                }}
              />
            </div>
          ))}

          <button onClick={showModal}>+ Add More Teams</button>
          <Modal
            title={<><ArrowLeftOutlined onClick={handleCancel} /> Add Team</>}
            // title="Add Team"
            open={isModalOpen}
            onOk={handleOk}
            okText="Add"
            centered
            onCancel={handleCancel}
            className="modal-theme"
          >
            <Input
              placeholder="Search"
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
              value={teamValue}
              onChange={HandleCheckBoxValue}
            >
              <Row>
                {teamsCheckBoxesData.map((item: any) => <Col span={8}>
                  <Checkbox value={item.value}>{item.label}</Checkbox>
                </Col>)}

              </Row>
            </Checkbox.Group>
            <Pagination
              total={teamsCheckBoxesData.length}
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
      </div>
    </div>
  );
};
