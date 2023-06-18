import { useState } from "react";
import dayjs from 'dayjs'
import { Button, Checkbox, Space, Col, Row } from "antd";
import { PhotoSwipe } from "react-photoswipe";
import "react-photoswipe/lib/photoswipe.css";

import { handleSelectInnerCheckboxClick } from "./actionHandler";
import ScreenShotCard from "../../components/ScreenCasts/SSCards";

import S1 from "../../assets/images/screen-casts/s1.png";
import DeleteIcon from "../../assets/images/MyAccounts/deleteIcon.png";
import S2 from "../../assets/images/screen-casts/s2.png";
import S3 from "../../assets/images/screen-casts/s3.png";
import UserImg from "../../assets/images/users/user-1.svg";
import DownloadIcon from "../../assets/icons/download.svg";
import "../../components/ScreenCasts/ScreenCasts.scss";

import ActionModal from "../../shared/actionModal/actionModal";
import AppSnackbar from "../../utils/snackbar";
import deleteIcon from '../../../src/assets/icons/deleteIcon.svg';
import DownloadIocn from "../../assets/icons/download-icon.svg";

const ScreenCasts = (props: any) => {
  const { showCheckBoxes } = props;
  const [imagesPreview, setImagesPreview] = useState<boolean>(false);
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
  const [openDownloadModal, setOpenDownloadModal] = useState<boolean>(false);
  const [selected, setSelected] = useState<string[]>([]);
  const [selectedPar, setSelectedPar] = useState<string[]>([]);
  const [isSelectAll, setIsSelectAll] = useState(false);
  const [IsOpenModal, setIsOpenModal] = useState(false);
  const [isDeleteModal, setIsDeleteModal] = useState(false);

  
  let items = [
    {
      src: S1,
      w: 1000,
      h: 700,
      title: "Image 1",
    },
    {
      src: S2,
      w: 1000,
      h: 700,
      title: "Image 2",
    },
    {
      src: S3,
      w: 1000,
      h: 700,
      title: "Image 2",
    },
  ];

  const data: any[] = [
    { id: "1", time: "2AM - 3PM", child: ["c1", "c2", "c3", "c4"] },
    { id: "2", time: "1AM - 2AM", child: ["c5", "c6", "c7"] },
  ];

  const options: any = {
    zoomEl: false,
    shareEl: false,
    bgOpacity: 0.8,
  };

  const handleClosePreview = () => {
    setImagesPreview(false);
  };
  const handleOpenPreview = () => setImagesPreview(true);

  // select all checkbox function
  const handleSelectAllCheckboxClick = (event: any) => {
    let newArr: string[] = [];
    let newArrPar: string[] = [];
    if (event.target.checked) {
      data?.map((obj) => {
        newArrPar.push(...obj.id);
        obj.child.map((id: string) => newArr.push(id));
      });
      setSelected(newArr);
      setSelectedPar(newArrPar);
      setIsSelectAll(true);
    } else {
      setSelected([]);
      setIsSelectAll(false);
      setSelectedPar([]);
    }
  };

  const handleParentClick = (e: any, objId: string) => {
    console.log(objId);
    let newArr: any = [];
    let newArrPar: string[] = [];
    if (objId) {
      if (e.target.checked) {
        data?.map((item: any) => {
          if (item?.id === objId) {
            newArr.push(...item?.child);
            newArrPar.push(...item.id);
          }
        });
        setSelected(newArr);
        setSelectedPar(newArrPar);
      } else {
        setSelected(newArr);
        setSelectedPar(newArrPar);
      }
    }
  };

  const handleChildClick = (event: any, id: string) => {
    const newSelected = handleSelectInnerCheckboxClick(id, selected);
    setSelected(newSelected);
  };

  const deleteRecord = () => {
    setIsOpenModal(false)
    AppSnackbar({ type: "success", message: isDeleteModal ? "Screencasts Deleted Successfully!" : "Screencast Downloaded Successfully!" })
  };
  
  return (
    <div className="card-bg-color">
      {showCheckBoxes && (
        <Space align="start" style={{ marginTop: "12px" }}>
          <img src={UserImg} alt="userImg" width={30} />
          <div className="setting-user">
            <p className="m-0 fs-16 line-height-18 title-color">Azeem Aslam</p>
            <p className="m-0 fs-12 fw-500 line-height-18" style={{ marginBottom: "10px", color: "#848588" }}>
              azeem.aslam@ceative.co.uk
            </p>
          </div>
        </Space>
      )}
      <div className="d-flex" style={{ marginBottom: "20px" }}>
        {!showCheckBoxes && (
          <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
            <div className="d-flex">
              <Checkbox onChange={handleSelectAllCheckboxClick} checked={isSelectAll}>
                <span className="fs-16 fw-400 label-color">Select All</span>
              </Checkbox>
              {selected.length > 1 && (
                <>
                  <Button
                    shape="circle"
                    className="icon-button delete-all"
                    onClick={() => {setIsDeleteModal(true);setIsOpenModal(true)}}
                    icon={<img width={16} height={18} src={DeleteIcon} alt="icon" />}
                  />
                  <Button shape="circle" className="icon-button download-all" onClick={() => {setIsDeleteModal(false);setIsOpenModal(true)}}>
                    <img width={16} height={14} src={DownloadIcon} alt="icon" style={{marginTop:"5px"}} />
                  </Button>
                </>
              )}
            </div>
            <p style={{ color: "#A0ACBB" }} className="fs-12 fw-500">
              {dayjs().format('MMM DD, YYYY')}
            </p>
          </div>
        )}
      </div>
      {data.map((obj: any, index: number) => (
        <div
          key={index}
          className={`${!showCheckBoxes && "timeline-wrapper"} ${selectedPar.length > 0 ? "time-selected" : ""}`}
          style={{ position: "relative" }}
        >
          <span style={{ display: "inline-block" }}>
            {!showCheckBoxes && (
              <Checkbox onChange={(e) => handleParentClick(e, obj.id)} checked={selectedPar.includes(obj.id)}>
                <span className="fs-20 fw-600 title-color">{obj.time}</span> <br />
                <span className="fs-12 label-color">Feb 13, 2023</span>
              </Checkbox>
            )}
            {showCheckBoxes && (
              <div style={{ marginLeft: "35px" }}>
                <span className="fs-20 fw-600 title-color">{obj.time}</span> <br />
                <span className="fs-12 label-color">Feb 13, 2023</span>
              </div>
            )}
          </span>
          <Row className="cards-wrapper-row" gutter={{ xs: 10, sm: 30 }}>
            {obj.child.map((c: any) => (
              <Col md={24} lg={12} xxl={6} xl={8} sm={24} xs={24} key={c} style={{ marginBottom: "30px" }}>
                <ScreenShotCard
                  id={c}
                  checkboxHandler={(e) => handleChildClick(e, c)}
                  handleOpenPreview={handleOpenPreview}
                  selected={selected}
                  // setOpenDeleteModal={setOpenDeleteModal}
                  // setOpenDownloadModal={setOpenDownloadModal}
                  showCheckBoxes={showCheckBoxes}
                  setIsOpenModal={setIsOpenModal}
                  setIsDeleteModal={setIsDeleteModal}
                />
              </Col>
            ))}
          </Row>
        </div>
      ))}

      {imagesPreview && <PhotoSwipe isOpen={imagesPreview} items={items} onClose={handleClosePreview} options={options} />}
      <ActionModal
        actionClass={`${isDeleteModal ? "delete-btn-bg-color" : "bgSecondary-color"}  `}
        actionText={isDeleteModal ? 'Delete' : 'Download'}
        mainText={isDeleteModal ? 'Are you sure ?' : 'Download ScreenCasts ?'}
        secondaryText={isDeleteModal ? 'Do you want to delete this?' : ''}
        isModalOpen={IsOpenModal}
        setOpenModal={setIsOpenModal}
        // handleCancel={() => setDeleteModal(false)}
        submitHandler={deleteRecord}
        image={isDeleteModal ? deleteIcon : DownloadIocn}
      />
      {/* {openDeleteModal && <DeleteModal isModalOpen={openDeleteModal} setIsModalOpen={setOpenDeleteModal} />}
      {openDownloadModal && <DownloadModal isModalOpen={openDownloadModal} setIsModalOpen={setOpenDownloadModal} />} */}
    </div>
  );
};

export default ScreenCasts;
