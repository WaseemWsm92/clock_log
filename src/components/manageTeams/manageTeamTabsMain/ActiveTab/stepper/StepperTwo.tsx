import { useState } from "react";
import {Row,Col,Divider,Button,Space} from "antd";
import { v4 as uuidv4 } from "uuid";
import './stepper.scss';

import '../../editModal/EditModal.scss';
import AddTeamMate from "../../members/addTeamMate";
import AddManager from "../../members/addManager";
const StepperTwo = (props: any) => {

  const { handleNextStep, handlePrevStep } = props;
  const onCrossHandler = (item: any) => {
    const filtered = managers.filter((name: any) => {
      return name !== item;
    });
    setManager(filtered);
  };

  const [managers, setManager] = useState<any>([]);
  const [mateModal, setMateModal] = useState<any>([]);
  const [isShowMessage, setIsShowMessage] = useState(false);

  const onCrossProjectHandler = (item: any) => {
    const filtered = mateModal.filter((name: any) => {
      return name !== item;
    });
    setMateModal(filtered);
  };




  console.log(mateModal, "mateModal");
  const onSubmit = () => {
    setIsShowMessage(true)
    managers.length > 0 && mateModal.length > 0 && handleNextStep()
  }
  

  const matesError = isShowMessage && mateModal.length === 0;
  const managerError = isShowMessage && managers.length === 0;

  return (
    <div className='stepper-two' style={{ height: "100%" }}>
      <Row gutter={[0, 20]} style={{ maxHeight: "340px" }} >
        <Col span={24}>
          <>

            <span className="fs-12 grey-color fw-500 ">Teammates</span>
            <div style={{
              height: "120px", border: matesError ? " 1px solid #ff4d4f" : "1px solid #E8ECEE"
              ,
              borderRadius: "5px",
              padding: "10px 10px 0px 10px"
            }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: '10px', height: '56px', overflowY: 'auto' }}>
                {mateModal.length === 0 && (
                  <span className="fs-14 placeholder-color">Add Teammates here</span>
                )}
                {mateModal.map((item: any) => (
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
              <AddTeamMate teamMate={mateModal} setTeamMate={setMateModal} />
            </div>
            <div style={{position:"absolute"}}>

            {isShowMessage && mateModal.length === 0 && <span style={{ color: "#ff4d4f" }}> Required field </span>}
            </div>
          </>

        </Col>
        <Col span={24} >

          <>
            <span className="fs-12 grey-color fw-500 ">Managers</span>
            <div style={{
              height: "120px", border: managerError ? " 1px solid #ff4d4f" : "1px solid #E8ECEE",
              borderRadius: "5px",
              padding: "10px 10px 0px 10px"
            }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: '10px', height: '56px', overflowY: 'auto' }}>
                {managers.length === 0 && (
                  <span className="fs-14 placeholder-color">Add Teammates here</span>
                )}
                {managers.map((item: any) => (
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
                        onClick={() => onCrossHandler(item)}
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
              <AddManager managers={managers} setManager={setManager} />
            </div>
            <div style={{position:"absolute"}}>
            {isShowMessage && managers.length === 0 && <span style={{ color: "#ff4d4f" }}> Required field </span>}
            </div>
          </>





        </Col>

        <Col span={24}>
          <div className="stepper-main2" >
            <Space   >
              <div className='button-main'> <Button className="btn-cancel" onClick={handlePrevStep}>Back</Button></div>
              <div className='button-main'><Button className='btn-secondary' onClick={onSubmit}  >Next</Button></div>
            </Space>
          </div>
        </Col>




      </Row>


    </div>

  );
};

export default StepperTwo;
