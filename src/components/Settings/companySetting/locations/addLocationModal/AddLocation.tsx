import { Col, Modal, Row } from "antd";
import addLocationIcon from '../../../../../assets/icons/settings/addLocationIcon.svg';
import AddLocationForm from "./addLocationForm/AddLocationForm";
import './AddLocation.scss'

export const AddLocation = (props: any) => {
    const { isOpen, setIsOpen, form, view, setView } = props

    const showModal = () => {
        setIsOpen(true);
    };


    return (
        <Row className="showTime">
            <Col md={12} sm={24} className="addTimeButton">
                <button onClick={() => { showModal(); props.setSelectedRecord({}); form.resetFields(); setView(false) }} className="d-flex border-radius-4 btn-theme-color">
                    <img src={addLocationIcon} width="19px" height="21.7px" alt="icon"  />
                    <p className="fs-16 fw-500 m-0  button-textt">Add Location</p>
                </button>
            </Col>
            <Modal
                open={isOpen}
                onCancel={() => setIsOpen(false)}
                width={800}
                footer={null}
                centered
                className="modal-theme"
            >
                <AddLocationForm setIsModalOpen={setIsOpen} selectedRecord={props.selectedRecord} form={form} view={view} />
            </Modal>
        </Row>
    );
};
