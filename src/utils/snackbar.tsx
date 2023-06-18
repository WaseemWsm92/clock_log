import { WarningFilled } from '@ant-design/icons';
import { notification } from 'antd';
import React from 'react'
import successGreenIcon from "../assets/icons/checked-green.svg";
import greenCloseIcon from "../assets/icons/green-cross-icon.svg";


export default function AppSnackbar({ ...args }) {
    // const { type, message, ...remainingArgs } = args;
    const { type, message } = args;



    notification.config({
        placement: 'topRight',
        top: 80,
        duration: 3,
    });

    notification.open({
        type,
        message,
        className: `custom-notification-class ${type === "error" && "error-snackbar"}`,
        style: {
            background: `${type === "error" ? "#ff4d4f" : "linear-gradient(80deg, #fff 40%, #bbe7a6 100%)"}`,
            borderBottom: `2px solid ${type === "error" ? "#fff" : "#29620d"}`,
        },
        icon: type === "error" ? <WarningFilled style={{ color: "#fff", width: "16px", height: "16px" }} /> : <img src={successGreenIcon} alt="iconn" style={{ filter: "brightness(0.5)" }} />,
        closeIcon: <img src={greenCloseIcon} alt="close" style={{ filter: `${type === "error" ? "brightness(0) invert(1)" : "brightness(0.5)"}` }} />,
    });
}
