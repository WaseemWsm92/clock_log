import { Button, Modal } from "antd";
import { InputNumber } from "antd";

interface Props {
  setIsShowCustomModal: any;
  isShowCustomModal: any;
}
const CustomScreenShotModal = (props: Props) => {
  const { setIsShowCustomModal, isShowCustomModal } = props;

  const onChange: any = (value: number) => {
    console.log("changed", value);
  };
  return (
    <>
      <Modal
      className="modal-theme"
        title={
          <span className="fs-16 heading-color fw-500">Custom ScreenShots</span>
        }
        open={isShowCustomModal}
        onOk={() => setIsShowCustomModal(false)}
        onCancel={() => setIsShowCustomModal(false)}
        centered
        footer={[
          <Button key="back" onClick={() => setIsShowCustomModal(false)}>
            Cancel
          </Button>,
          <Button
            key="submit"
            className="btn-secondary"
            onClick={() => setIsShowCustomModal(false)}
          >
            Save
          </Button>,
        ]}
      >
        <div
          className="customScrteenShots"
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "20px",
            marginBlock: "25px",
          }}
        >
          <InputNumber
            onChange={onChange}
            placeholder="Mins"
            style={{ width: "100%" }}
            size="large"
            type="number"
          />
          <InputNumber
            onChange={onChange}
            placeholder="ScreenShots"
            style={{ width: "100%" }}
            size="large"
            type="number"
          />
        </div>
      </Modal>
    </>
  );
};

export default CustomScreenShotModal;
