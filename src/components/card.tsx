import React from "react";
import "../sass/_variables.scss";
import "./card.scss";

interface ICOMMONCARD {
  children: React.ReactNode;
  color: string;
  hoverColor: string;
  borderRadius?: any;
  boxShadow?: any;
}

const CommonCard = ({ children, hoverColor, color, borderRadius, boxShadow }: ICOMMONCARD) => {
  return (
    // Make sure to add your new hover/gradient class  in common.scss in gradient section
    <div
      className={`${hoverColor} ${color} common-card h-100 w-100`}
      style={{
        background: hoverColor,
        borderRadius: borderRadius ? "4px" : "9px",
        boxShadow: boxShadow ? "0px 0px 2px rgba(16, 24, 40, 0.25)" : "0px 4px 8px -2px rgba(16, 24, 40, 0.1)",
      }}
    >
      {children}
    </div>
  );
};

export default CommonCard;
