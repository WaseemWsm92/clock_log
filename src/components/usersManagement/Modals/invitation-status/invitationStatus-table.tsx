import React from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import Wrong from "../../../../assets/icons/wrong.png";
import Right from "../../../../assets/icons/right.png";
import Resend from "../../../../assets/icons/resend.png";

interface DataType {
  no: any;
  email: string;
  webApp: any;
  desktopApp: any;
  talkingTime: any;
  invitation: any;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Sr. No",
    dataIndex: "no",
  },
  {
    title: "User Email",
    dataIndex: "email",
  },
  {
    title: "Created Account on Web App",
    dataIndex: "webApp",
  },
  {
    title: "Download Desktop App",
    dataIndex: "desktopApp",
  },
  {
    title: "Started Traking Time",
    dataIndex: "talkingTime",
  },
  {
    title: "Resend Invitation",
    dataIndex: "invitation",
  },
];

const data: DataType[] = [];
for (let i = 0; i < 8; i++) {
  data.push({
    no: "0" + (i + 1) + ".",
    email: "azeem.aslam@ceative.co.uk",
    webApp: <img src={Wrong} alt="wrong" width={14} height={14} />,
    desktopApp: <img src={Right} alt="wrong"  width={18.75} height={9.75}  />,
    talkingTime: <img src={Wrong} alt="wrong" width={14} height={14} />,
    invitation: <img src={Resend} alt="wrong"  />,
  });
}

const InvitationStatusTable: React.FC = () =>  <Table size="small" columns={columns} dataSource={data} scroll={{ x: 'max-content' }} />

export default InvitationStatusTable;
