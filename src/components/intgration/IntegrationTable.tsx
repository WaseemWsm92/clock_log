import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";

import DropBox from "../../assets/images/png/integrations/dropbox.png";
import Slack from "../../assets/images/png/integrations/slack.png";
import VsCode from "../../assets/images/png/integrations/visualstudio.png";
import GitHub from "../../assets/images/png/integrations/gitHub.png";

interface DataType {
  key: string;
  name: string;
  icon: any;
  last_sync: string;
  status: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
    width:700,
    render: (_: DataType, data) => (
      <div style={{display:'flex', alignItems:'center'}}>
        <img style={{width:'26px',height:'26px'}} src={data.icon} />
        <p style={{marginLeft:'12px'}}>{data.name}</p>
      </div>
    ),
  },
  {
    title: "Last Sync",
    dataIndex: "last_sync",
  },
  {
    title: "Status",
    dataIndex: "Status",
    render: (_,{status}) => (
      <p
        style={{
          background: "#37B4A4",
          color: "#fff",
          borderRadius: "16px",
          display: "inline",
          padding: "4px 12px",
        }}
      >
        {status}
      </p>
    ),
  },
];

const data: DataType[] = [
  {
    key: "1",
    name: "DropBox Tasks(linked)",
    icon: DropBox,
    last_sync: "Tue, Oct 11, 2022 7:52 am (UTC+05:00)",
    status: "Enabled",
  },
  {
    key: "2",
    name: "Slack Tasks(linked)",
    icon: Slack,
    last_sync: "Tue, Oct 11, 2022 7:52 am (UTC+05:00)",
    status: "Enabled",
  },
  {
    key: "3",
    name: "AzureDevops Tasks(linked)",
    icon: VsCode,
    last_sync: "Tue, Oct 11, 2022 7:52 am (UTC+05:00)",
    status: "Enabled",
  },
  {
    key: "4",
    name: "Github Tasks(linked)",
    icon: GitHub,
    last_sync: "Tue, Oct 11, 2022 7:52 am (UTC+05:00)",
    status: "Enabled",
  },
];

const IntegrationTable = () => {
  return (
    <>
      <Table className="wrapper-table" columns={columns} dataSource={data} scroll={{ x:'max-content'}} />
    </>
  );
};

export default IntegrationTable;
