import { Button, Col, Dropdown, Form, Input, MenuProps, Modal, Row, Space, TimePicker } from "antd";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import WeeksDays from "../weeksDays/weeksDays";
import duration from "dayjs/plugin/duration";
import "./addModal.scss";

dayjs.extend(duration);
interface IProps {
  isAddModal: any;
  setIsAddModal: any;
}

const AddModal = (props: IProps) => {
  const { isAddModal, setIsAddModal } = props;
  const [isCustomRelaxationTimeModal, setisCustomRelaxationTimeModal] = useState(false);
  const [shiftStartTime, setShiftStartTime] = useState<Dayjs | null>(null);
  const [shiftEndTime, setShiftEndTime] = useState<Dayjs | null>(null);
  const [breakStartTime, setBreakStartTime] = useState<Dayjs | null>(null);
  const [breakEndTime, setBreakEndTime] = useState<Dayjs | null>(null);
  const [weeksArray, setWeeksArray] = useState<any>([]);
  const [customRelaxationTime, setCustomRelaxationTime] = useState("");
  const [relaxationTime, setRelaxationTime] = useState<string>("");
  const [selectedLabel, setSelectedLabel] = useState<any>("");
  const [form] = Form.useForm();

  const items: MenuProps["items"] = [
    {
      label: <span>10 min</span>,
      key: "1",
    },
    {
      label: <span>20 min</span>,
      key: "2",
    },
    {
      label: <span>30 min</span>,
      key: "3",
    },
    {
      label: (
        <div
          onClick={() => {
            setisCustomRelaxationTimeModal(true);
            setIsAddModal({ ...isAddModal, isOpen: false });
          }}
        >
          Custom
        </div>
      ),
      key: "4",
    },
  ];
  function handleStartTimeChange(value: Dayjs | null) {
    setShiftStartTime(value);
  }
  function handleEndTimeChange(value: Dayjs | null) {
    setShiftEndTime(value);
  }
  function calculateTotalShiftHours(): number | null {
    if (shiftStartTime && shiftEndTime) {
      const duration = dayjs.duration(shiftEndTime.diff(shiftStartTime));
      const totalHours = duration.asHours();
      return totalHours;
    }
    return null;
  }

  function handleBreakStartTimeChange(value: Dayjs | null) {
    setBreakStartTime(value);
  }
  function handleBreakEndTimeChange(value: Dayjs | null) {
    setBreakEndTime(value);
  }
  function calculateTotalBreakHours(): number | null {
    if (breakStartTime && breakEndTime) {
      const duration = dayjs.duration(breakEndTime.diff(breakStartTime));
      const totalHours = duration.asHours();
      return totalHours;
    }
    return null;
  }

  const onFinish = (values: any) => {
    console.log("Success:", values);
    setIsAddModal({ isOpen: false, id: "" });
    form.resetFields();
  };
  const handleChange = (value: string) => {
    if (value === "Custom") {
      setisCustomRelaxationTimeModal(true);
      setRelaxationTime(customRelaxationTime);
    } else {
      setRelaxationTime(value);
      setCustomRelaxationTime("");
      console.log(`selected ${value}`);
    }
  };
  console.log(customRelaxationTime, "sdfsdf", relaxationTime, "asdfsdf");
  const onClick = (event: any) => {
    const { domEvent } = event;
    const label = domEvent.target.textContent;
    setSelectedLabel(label);
  };
  const handelSetCustomRelaxationTime = () => {
    setisCustomRelaxationTimeModal(false);
    setIsAddModal({ ...isAddModal, isOpen: true });
  };
  const handleInputChange = (event: any) => {
    setSelectedLabel(event.target.value);
  };
  return (
    <>
      <Modal centered title={`${isAddModal.id} Work Schedule`} open={isAddModal.isOpen} footer={false} onCancel={() => { setIsAddModal(false); form.resetFields() }} className="add-work-modal-wrapper modal-theme ">
        <div className="add-work-wrapper">
          <Form layout="vertical" onFinish={onFinish} form={form}>
            <Row gutter={[22, 16]}>
              <Col span={24} className="apply-work-field-wrap">
                <Form.Item label="Shift Name" name="shiftName" rules={[{ required: true, message: "Required field" }]}>
                  <Input placeholder="Basic usage" style={{ height: "37px" }} className="container-400  custom-input-modal-field2" />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={24} lg={8} className="apply-work-field-wrap">
                <Form.Item label="Shift Start Time" name="shftStartTime" rules={[{ required: true, message: "Required field" }]}>
                  <TimePicker format="h:mm A" value={shiftStartTime} popupClassName="custom-date-picker-popup" className="custom-date-picker" onChange={handleStartTimeChange} style={{ width: "100%", maxWidth: "auto", height: "37px" }} />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={24} lg={8} className="apply-work-field-wrap">
                <Form.Item label="Shift End Time" name="shftEndTime" rules={[{ required: true, message: "Required field" }]}>
                  <TimePicker format="h:mm A" value={shiftEndTime} popupClassName="custom-date-picker-popup" className="custom-date-picker" onChange={handleEndTimeChange} style={{ width: "100%", maxWidth: "auto", height: "37px" }} />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={24} lg={8} className="apply-work-field-wrap">
                <p className="fs-14 fw-600 tag-overall-time grey-color">
                  Total Hours: <span className="fs-20 fw-500 grey-color">{calculateTotalShiftHours() ? calculateTotalShiftHours()?.toFixed(1) : "0"}h</span>
                </p>
              </Col>
              <Col xs={24} sm={24} md={24} lg={8} className="apply-work-field-wrap">
                <Form.Item label="Break Start Time" name="brkStarttime" rules={[{ required: true, message: "Required field" }]}>
                  <TimePicker format="h:mm A" value={breakStartTime} popupClassName="custom-date-picker-popup" className="custom-date-picker" onChange={handleBreakStartTimeChange} style={{ width: "100%", maxWidth: "auto", height: "37px" }} />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={24} lg={8} className="apply-work-field-wrap">
                <Form.Item label="Break End Time" name="breakEndTime" rules={[{ required: true, message: "Required field" }]}>
                  <TimePicker format="h:mm A" value={breakEndTime} popupClassName="custom-date-picker-popup" className="custom-date-picker" onChange={handleBreakEndTimeChange} style={{ width: "100%", maxWidth: "auto", height: "37px" }} />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={24} lg={8} className="apply-work-field-wrap">
                <p className="fs-14 fw-600 tag-overall-time grey-color">
                  Min.Effective Hours: <span className="fs-20 fw-500 grey-color">{calculateTotalBreakHours() ? calculateTotalBreakHours()?.toFixed(1) : "0"}h</span>
                </p>
              </Col>
              <Col xs={24} sm={24} md={24} lg={8} className="apply-work-field-wrap">
                <Form.Item label="Relaxation Time" >
                  <Dropdown menu={{ items, onClick }} trigger={["click"]}>
                    <div onClick={(e) => e.preventDefault()} className="field-relaxation-time fs-14 fw-400 border-radius-4">
                      <Space> {selectedLabel || "00 min"}</Space>
                    </div>
                  </Dropdown>
                </Form.Item>

              </Col>
              <Col span={24} className="apply-work-field-wrap">
                <WeeksDays label={"Applied On"} weeksArray={weeksArray} setWeeksArray={setWeeksArray} />
              </Col>
              <Col md={24} style={{ display: "flex", justifyContent: "end", gap: "8px" }}>
                <Button className="btn-cancel" onClick={() => { setIsAddModal({ isOpen: false, id: "" }); form.resetFields() }}>
                  Cancel
                </Button>
                <Button className="btn-primary" htmlType="submit">
                  Save
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </Modal>
      <Modal
        title="Relaxation Time"
        centered={true}
        okText="Save"
        open={isCustomRelaxationTimeModal}
        onOk={handelSetCustomRelaxationTime}
        onCancel={() => {
          setisCustomRelaxationTimeModal(false);
          setIsAddModal({ ...isAddModal, isOpen: true });
        }}
        className="relaxation-time-modal-wrapper modal-theme"
      >
        <Input className="cus--input-number-rextime" placeholder="Mins" type="number" onChange={handleInputChange} />
      </Modal>
    </>
  );
};

export default AddModal;
