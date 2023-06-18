import { Button, Modal } from "antd";
import { InputNumber } from "antd";

interface Props {
  isShowTimeOutModal: any;
  setIsShowTimeOutModal: any;
}
const CustomIdleTimeOutModal = (props: Props) => {
  const { isShowTimeOutModal, setIsShowTimeOutModal } = props;

  const onChange: any = (value: number) => {
    console.log("changed", value);
  };
  return (
    <>
      <Modal
       className="modal-theme"
        title={
          <span className="fs-16 heading-color fw-500">
            Custom Idle Timeout
          </span>
        }
        open={isShowTimeOutModal}
        onOk={() => setIsShowTimeOutModal(false)}
        onCancel={() => setIsShowTimeOutModal(false)}
        centered
        footer={[
          <Button key="back" onClick={() => setIsShowTimeOutModal(false)}>
            Cancel
          </Button>,
          <Button
            key="submit"
            className="btn-secondary"
            onClick={() => setIsShowTimeOutModal(false)}
          >
            Save
          </Button>,
        ]}
      >
        <div
          className="customScrteenShots"
          style={{
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
        </div>
      </Modal>
    </>
  );
};

export default CustomIdleTimeOutModal;
