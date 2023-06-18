import { useState } from "react";
import {Row,Col,Divider,Space,Button} from "antd";
import './stepper.scss';
import AddProjects from "../addProjects";
import { v4 as uuidv4 } from "uuid";
const StepperThree = (props: any) => {
  const { handlePrevStep } = props;
  const [projects, setProjects] = useState([]);
  const [isShowMessage, setIsShowMessage] = useState(false);

  const onCrossProjectHandler = (item: any) => {
    const filtered = projects.filter((name) => {
      return name !== item;
    });
    setProjects(filtered);
  };
  const projectError = isShowMessage && projects.length === 0;

  const submit = () => {
    setIsShowMessage(true)
  }
  return (
    <div className="stepper-two">
      <Row>
        <Col span={24}>
          <>
            <span className="fs-12 grey-color fw-500 "> Projects</span>
            <div style={{
              height: "120px", border: projectError ? " 1px solid #ff4d4f" : "1px solid #E8ECEE",
              borderRadius: "5px",
              padding: "10px 10px 0px 10px"
            }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: '10px', height: '56px', overflowY: 'auto' }}>
                {projects.length === 0 && (
                  <span className="fs-14 placeholder-color">Add Projects here</span>
                )}
                {projects.map((item: any) => (
                  <p className="m-0" key={uuidv4()}>
                    <span
                      style={{
                        backgroundColor: "#F5F5F5",
                        color: '#4E6073',
                        borderLeft: "1px solid #E76F51",
                        borderRadius: "16px",
                        padding: "2px 20px 2px 8px",
                        position: "relative",
                        marginRight: "8px",
                      }}
                    >
                      {item}
                      <span
                        onClick={() => onCrossProjectHandler(item)}
                        className="cursor-pointer"
                        style={{ position: "absolute", right: "5px", top: "0" }}
                      >
                        x
                      </span>
                    </span>
                  </p>
                ))}
              </div>
              <Divider className="divider" />
              < AddProjects project={projects} setProjects={setProjects} />
            </div>
            <div style={{ position: "absolute" }}>

              {isShowMessage && projects.length === 0 && <span style={{ color: "#ff4d4f" }}> Required  field</span>}
            </div>
          </>

        </Col>
      </Row>
      <div className="stepper-main3" >
        <Space   >
          <div className='button-main'> <Button className="btn-cancel" onClick={handlePrevStep}>Back</Button></div>
          <div className='button-main'><Button className='btn-secondary' onClick={submit}>Save</Button></div>
        </Space>
      </div>
    </div>
  );
};

export default StepperThree;
