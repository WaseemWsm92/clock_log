import { Button, Modal, Tabs, TabsProps } from "antd";
import EditInfo from "./editInfo";
import EditSetting from "./editSetting";
import "./edit-info.scss";
interface Props {
  setIsShowInfoModal: any;
  isShowInfoModal: any;
}
const EditInfoSettingModal = (props: Props) => {
  const { isShowInfoModal, setIsShowInfoModal } = props;

  const handleOk = () => {
    setIsShowInfoModal({ isToggled: false,id:'1' });
  };

  const handleCancel = () => {
    setIsShowInfoModal({ isToggled: false,id:'1' });
  };
  const onChange = (key: string) => {
    console.log(typeof key);
    setIsShowInfoModal({ isToggled: true, id:key });
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: `Info`,
      children: <EditInfo />,
    },
    {
      key: "2",
      label: `Setting`,
      children: <EditSetting />,
    },
  ];
  return (
    <>
      <Modal
        className="edit-info"
        title={<span className="fs-24 title-color fw-600">Bulk Actions</span>}
        centered
        open={isShowInfoModal.isToggled}
        onOk={handleOk}
        onCancel={handleCancel}
        width={720}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="submit" className="btn-primary" onClick={handleOk}>
            Update
          </Button>,
        ]}
      >
        <p className="m-0 title-color fs-14 fs-400">8 Users are selected</p>
        <div style={{marginTop:'20px'}}>
          <Tabs
            activeKey={isShowInfoModal.id}
            items={items}
            onChange={onChange}
          />
        </div>
      </Modal>
    </>
  );
};

export default EditInfoSettingModal;
