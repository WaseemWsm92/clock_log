import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import { Button, Checkbox, Col, Dropdown, MenuProps, Progress, Row, Space } from "antd";
import { DownOutlined } from '@ant-design/icons';
import { ProjectsDetails } from '../../layout/ReportData';
import Success from "../../assets/images/reportsproject-tasks/success.png";
import Danger from "../../assets/images/reportsproject-tasks/danger.png";
import Warning from "../../assets/images/reportsproject-tasks/warning.png";
import Dark from "../../assets/images/reportsproject-tasks/dark.png";
import Primary from "../../assets/images/reportsproject-tasks/primary.png";
import ExportIcon from "../../assets/icons/reports/sidebar/Export.png";
import CommonCard from "../card";
import "./projectAndTasks.scss";


const projectCardsData = [
  {
    logo: Success,
    title: "Completed Task",
    time: "71h 23m",
    progress: 40,
    color: "lightGreenProgress-color",
    hoverColor: "lightGreenGradient-color",
    backgroundColor: 'bgLightBlue-color',
    strokeColor: "#37B4A4",
  },
  {
    logo: Danger,
    title: "To-Do Task",
    time: "71h 23m",
    progress: 60,
    color: "error-color",
    hoverColor: "errorGradient-color",
    backgroundColor: '',
    strokeColor: "#FF4D4F",
  },
  {
    logo: Warning,
    title: "Review Task",
    time: "71h 23m",
    progress: 40,
    color: "lightYellow-color",
    hoverColor: "lightYellowGradient-color",
    backgroundColor: '',
    strokeColor: "#FDCA64",
  },
  {
    logo: Dark,
    title: "In-Progress",
    time: "71h 23m",
    progress: 20,
    color: "darkGreen-color",
    hoverColor: "darkGreenGradient-color",
    backgroundColor: '',
    strokeColor: "#045162",
  },
  {
    logo: Primary,
    title: "All Task",
    time: "71h 23m",
    progress: 60,
    color: "blue-color",
    hoverColor: "blueGradient-color",
    backgroundColor: '',
    strokeColor: "#1890FF",
  },
];
interface Props {
  project: any;
  setIsShowTableColumns: any
  IsShowTableColumns: any
}
const ProjectAndTasksCards = (props: Props) => {
  const navigate = useNavigate()
  const [selected, setSelected] = useState<any[]>([]);
  const [visibleDropdown, setVisibleDropdown] = useState<boolean>(false);

  const percentFormatter = (percent: any) => {
    return <span className="progressText fs-20 fw-400">{`${percent}%`}</span>;
  };

  const handleClickCard = (title: string) => {
    props.setIsShowTableColumns((prevState: any) => {
      const newState = [...prevState]
      newState.shift();
      newState.unshift(title)
      return newState
    })
  }
  const handleCheckboxChange = (e: any, label: string) => {
    if (e.target.checked) {
      setSelected([...selected, label]);
    } else {
      setSelected(selected.filter((select: any) => select !== label));
    }
  };
  console.log(selected);

  const items: MenuProps['items'] = [
    {
      label: <>{ProjectsDetails.map((item: any) => <div style={{ alignItems: "center", paddingBlock: '10px' }} onClick={() => navigate(`/reports/project-task/${item.key}`)}>
        <Checkbox key={item.label} checked={selected.includes(item.label)} onChange={(e) => handleCheckboxChange(e, item.label)} />
        <span className="title-color" style={{ paddingLeft: '10px' }}>
          {item.label}
        </span>
      </div>)}</>,
      key: '0',
    },
  ];
  return (
    <div className="project_tasks">
      <Row gutter={[5, 10]}>
        <Col xs={24}>
          <div className='reportsProjectsSmall'>
            <Dropdown open={visibleDropdown} onOpenChange={setVisibleDropdown} menu={{ items }} trigger={['click']}>
              <Button className="d-flex align-center justify-between dropBtn">
                <span style={{ marginLeft: "5px" }}>Projects</span>
                <DownOutlined />
              </Button>
            </Dropdown>
            {selected.length >= 1 && <img src={ExportIcon} alt="" className="cursor-pointer" width={24} height={24} />}
          </div>
          <Space className="main_heading">
            <span className="fs-20 fw-700 title-color" style={{ textTransform: "capitalize" }}>{props?.project}</span>
            <span className="fs-12 fw-500 date ">{dayjs().format('MMMM DD, YYYY')}</span>
          </Space>
        </Col>
      </Row>
      <div className="project_tasks_cards">
        {projectCardsData.map((data, index: number) => {
          return (
            <div key={index} className="card">
              <CommonCard color={data?.color} hoverColor={data.hoverColor} borderRadius boxShadow>
                <div style={{ padding: "1rem" }} onClick={() => handleClickCard(data.title)}>
                  <Space size={16}>
                    <img
                      src={data?.logo}
                      height={30} width={24} alt="icon"
                      className="hover-white-image"
                    />
                    <p className="fs-14 fw-500 title-color" style={{ marginLeft: "10px", display: "flex", flexDirection: "column" }}>
                      {data.title} <span className="card_time">{data.time}</span>
                    </p>
                  </Space>
                  <Space
                    className="fs-12  d-block  text-center"
                    style={{
                      marginTop: "0.875rem",
                    }}
                  >
                    <div className="circular_progress">
                      <Progress type="circle" className="fs-12 fw-600 m-auto text-center" width={104} format={percentFormatter} strokeWidth={10} trailColor="#D9DBE9" percent={data.progress} strokeColor={data.strokeColor} />
                    </div>
                  </Space>
                </div>
              </CommonCard>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectAndTasksCards;
