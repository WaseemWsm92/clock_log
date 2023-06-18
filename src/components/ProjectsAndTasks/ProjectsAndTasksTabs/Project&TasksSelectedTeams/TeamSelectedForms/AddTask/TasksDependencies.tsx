import { Checkbox, Col, Row, Select } from "antd";
import { useState } from "react";
import Add from "../../../../../../assets/icons/settings/projectandtasks/addDependencies.svg";
import Remove from "../../../../../../assets/icons/settings/projectandtasks/remove.svg";

import "./TaskDependencies.scss";

interface ISelectDependendices {
  relation: string;
  task: string;
}
const TasksDependencies = () => {
  const [isShowSelect, setIsShowSelect] = useState(false);
  const [selectedOption, setSelectedOption] = useState<ISelectDependendices>({
    relation: "",
    task: "",
  });

  const handleSelectChange = (value: string) => {
    setSelectedOption((prevState: any) => ({ ...prevState, relation: value }));
  };
  const handleSelectChange2 = (value: string) => {
    setSelectedOption((prevState: any) => ({ ...prevState, task: value }));
  };

  const options = [
    {
      value: "This task is waiting on",
      label: "This task is waiting on",
    },
    {
      value: "This Task is waiting on",
      label: "This Task is waiting on",
    },
    {
      value: "This Task is related to",
      label: "This Task is related to",
    },
  ];
  const emptyTasks = (value: string) => {
    value === "relation"
      ? setSelectedOption((prevState) => ({ ...prevState, relation: "" }))
      : setSelectedOption((prevState) => ({ ...prevState, task: "" }));
  };
  return (
    <div className="taskDependencies-wrapper">
      <div
        style={{
          minHeight: "40px",
          border: " 1px solid #E6E6E6",
          padding: "4PX",
        }}
        className=" d-flex align-center dependencies"
      >
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {!(selectedOption.relation || selectedOption.task) && (
            <div className="d-flex align-center ">
              <img
                src={Add}
                alt=""
                onClick={() => setIsShowSelect(!isShowSelect)}
                className="add-icon"
              />{" "}
              <span>Add Dependencies</span>
            </div>
          )}

          {selectedOption.relation && (
            <span
              className="relation-dependencies"
              onClick={() => emptyTasks("relation")}
            >
              {selectedOption.relation} <img src={Remove} alt="relation" />
            </span>
          )}
          {selectedOption.task && (
            <span
              onClick={() => emptyTasks("task")}
              className="tasks-dependencies"
            >
              {selectedOption.task} <img src={Remove} alt="tasks" />
            </span>
          )}
        </div>
      </div>

      {isShowSelect && (
        <Row gutter={[20, 20]}>
          <Col xs={24} md={12}>
            <div style={{ marginTop: "20px" }}>
              <Select
                value={selectedOption.relation}
                onChange={handleSelectChange}
                placeholder="Web & Apps "
                // className='select-webapp'
              >
                {options.map((option) => (
                  <Select.Option key={option.value} value={option.value}>
                    <Checkbox
                      value={option.value}
                      checked={selectedOption.relation === option.value}
                      onChange={() => handleSelectChange(option.value)}
                    />
                    &nbsp; {option.label}
                  </Select.Option>
                ))}
              </Select>
            </div>
          </Col>
          <Col xs={24} md={12}>
            <div style={{ marginTop: "20px" }}>
              <Select
                value={selectedOption.task}
                onChange={handleSelectChange2}
                placeholder="Web & Apps"
                className="select-webapp"
              >
                {options.map((option) => (
                  <Select.Option key={option.value} value={option.value}>
                    <Checkbox
                      value={option.value}
                      checked={selectedOption.task === option.value}
                      onChange={() => handleSelectChange2(option.value)}
                    />
                    &nbsp; {option.label}
                  </Select.Option>
                ))}
              </Select>
            </div>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default TasksDependencies;
