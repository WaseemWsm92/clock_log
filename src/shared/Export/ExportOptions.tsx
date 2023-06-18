import { Button, MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import CSV from "../../assets/icons/csv.png";
import XLS from "../../assets/icons/xls.png";
import PDF from "../../assets/icons/Pdf.png";
import ExportIcon from "../../assets/icons/Export.png"
// import { DownloadOutlined } from "@ant-design/icons";
import "./Export.scss";

interface exportProps {
  tableHeader?: any;
  tableBody?: any;
  fileName?: string;
  feedback?: any;
}
export default function ExportOption(props: exportProps) {

  const items: MenuProps["items"] = [
    {
      label: (
        <Space>
          <img src={XLS} alt="XLS" className="white-img-theme-class cursor-pointer" /> XLS
        </Space>
      ),
      key: "0",
    },
    {
      label: (
        <Space>
          <img src={CSV} alt="CSV" className="white-img-theme-class cursor-pointer" /> CSV
        </Space>
      ),
      key: "1",
    },
    {
      label: (
        <Space>
          <img src={PDF} alt="PDF" className="white-img-theme-class cursor-pointer" /> PDF
        </Space>
      ),
      key: "3",
    },
  ];

  return (
    <div className="export">
      <Dropdown menu={{ items }} trigger={["click"]}>
        <Button className="fs-16 fw-500">
          <span onClick={(e) => e.preventDefault()}>
            <Space>
              <img src={ExportIcon} alt="export_icon" className="white-img-theme-class cursor-pointer" />Export
            </Space>
          </span>
        </Button>
      </Dropdown>
    </div>
  );
}
