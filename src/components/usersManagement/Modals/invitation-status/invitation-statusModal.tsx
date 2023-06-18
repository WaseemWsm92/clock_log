import { Button, Modal } from "antd";
import InvitationStatusTable from "./invitationStatus-table";
import "./invitation-status.scss";
interface Props {
  isShowStatusModal: any;
  setIsShowStatusModal: any;
}
const InvitationStatusModal = (props: Props) => {
  const { isShowStatusModal, setIsShowStatusModal } = props;

  const handleOk = () => {
    setIsShowStatusModal(false);
  };

  const handleCancel = () => {
    setIsShowStatusModal(false);
  };

  return (
    <>
      <Modal
        title={<span className="fs-24 title-color fw-600">Invitation Status</span>}
        open={isShowStatusModal}
        onOk={handleOk}
        onCancel={handleCancel}
        width={1200}
        centered
        wrapClassName="modal-theme invitation-status-modal"
        footer={[
          <Button key="back" onClick={handleCancel} type='primary'>
            Close
          </Button>,
        ]}
      >
        <InvitationStatusTable />
      </Modal>
    </>
  );
};

export default InvitationStatusModal;
