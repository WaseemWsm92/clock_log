
import { Button, Checkbox, Input, Modal, Pagination, Space } from 'antd'
import { useEffect, useState } from 'react';
import { CheckboxValueType } from "antd/es/checkbox/Group";
import { ArrowLeftOutlined } from '@ant-design/icons';
import searchIcon from "../../../../assets/icons/search-icon.svg"
import './manageModal.scss';

const AddManager = (props: any) => {
  const { managers, setManager } = props;
  const [managersValues, setManagesValues] = useState<any>([]);
  const [open, setOpen] = useState(false);
  const showModal = () => setOpen(true);
  const handleCancel = () => setOpen(false);
  const onChange = (checkedValues: CheckboxValueType[]) => { setManagesValues(checkedValues); }
  const handleOk = () => {
    setOpen(false);
    setManager(managersValues)
  }
  useEffect(() => {
    setManagesValues(managers)
  }, [managers])



  const options = [
    "Raja Nabeel",
    "Adil Shahid",
    "Adil Khan",
    "Abdullah",
    "Ali",
    "Ahmed",
    "Shahid",

  ];

  return (
    <div>
      <button
        type="button"
        onClick={showModal}
        className="add-more-btn fw-400 fs-12 cursor-pointer btn-theme-color"
      >
        + Add More Manager
      </button>
      <Modal
        title={
          <span>
            <ArrowLeftOutlined
              onClick={() => {
                setOpen(false);
              }}
              style={{ fontSize: "15px", paddingRight: "10px" }}
            />
            <span className="fs-16 title-color fw-400">Add Manager</span>
          </span>
        }
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        centered
        wrapClassName="addMoreProject  modal-theme"
        footer={[
          <Space style={{ paddingTop: "18px" }}>
            <Button key="back" onClick={handleCancel}>
              Cancel
            </Button>
            <Button key="submit" type="primary" onClick={handleOk}>
              Add
            </Button>
          </Space>
        ]}
      >
        <Input className="activitySearch"
          prefix={<img src={searchIcon} alt="search" />} placeholder="Search Managers" style={{ height: "40px" }} />
        <div className="checkboxes-wrapper">
          <Checkbox.Group options={options} value={managersValues} onChange={onChange} />
        </div>
        <Pagination
          total={options.length}
          showTotal={(total, range) => (
            <p className="fs-12 m-0" style={{ color: "#8D8D8D" }}>
              {range[0]}-{range[1]} of {total}
            </p>
          )}
          defaultCurrent={1}
          size="small"
        />
      </Modal>
    </div>
  );
};

export default AddManager