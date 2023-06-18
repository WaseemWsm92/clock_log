import { Button, Checkbox, Input, Modal, Pagination, Space } from 'antd'
import { useEffect, useState } from 'react';
import { CheckboxValueType } from "antd/es/checkbox/Group";
import { ArrowLeftOutlined } from '@ant-design/icons';
import searchIcon from "../../../../assets/icons/search-icon.svg"
import './manageModal.scss';


const AddTeamMate = (props: any) => {
    const { teamMate, setTeamMate } = props;
    const [open, setOpen] = useState(false);
    const [mateValues, setMateValues] = useState<any>([]);
    const showModal = () => setOpen(true);
    const handleOk = () => {
        setOpen(false);
        setTeamMate(mateValues)
    }
    const handleCancel = () => setOpen(false);

    const onChange = (checkedValues: CheckboxValueType[]) => {
        setMateValues(checkedValues);
    };
    useEffect(() => {
        setMateValues(teamMate)
    }, [teamMate])

    const projects = [
        "Atif",
        "Ali Hassan",
        "Abdullah",
        "Zahir",
        "Azeem",
        "Waqas",
        "Waseem",
        "Shehroz",
        "Mubashir",
    ];

    return (
        <div>
            <button
                type="button"
                onClick={showModal}
                className="add-more-btn fw-400 fs-12 cursor-pointer btn-theme-color"
            >
                + Add More Team Mate
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
                        <span className="fs-16 title-color fw-400">Add Team Mates</span>
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
                ]}>
                <Input className="activitySearch custom-input-field"
                    prefix={<img src={searchIcon} alt="search" />} placeholder="Search Team Mates" style={{ height: "40px" }} />
                <div className="checkboxes-wrapper">
                    <Checkbox.Group options={projects} value={mateValues} onChange={onChange} />
                </div>
                <Pagination
                    total={projects.length}
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




export default AddTeamMate;