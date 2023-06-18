import "./tabs.scss";
import { Col, Row } from "antd";
import CheckboxSelector from "../checkbox-selector";
import TabContainer from "./TabContainer";
import { teamsList, usersSelectList } from "../../../mock/comparison";
import { FC, useState } from "react";

const DynamicTab: FC<{ tabLabel: string, bgImage: string, selectedTab: string }> = (props) => {
  const { tabLabel, bgImage, selectedTab } = props;
  const [isBgImagePosition, setIsBgImagePosition] = useState("center");
  const [selectedTeam, setSelectedTeam] = useState({ leftTeam: "", rightTeam: "" });
  const handleSelect = (value: any, name?: string) => {
    switch (name) {
      case "leftTeam": {
        setSelectedTeam({ ...selectedTeam, leftTeam: value?.label ?? "" });
        return setIsBgImagePosition(value ? "right" : selectedTeam?.rightTeam ? "left" : "center");
      }
      case "rightTime": {
        setSelectedTeam({ ...selectedTeam, rightTeam: value?.label ?? "" });
        return setIsBgImagePosition(value ? "left" : selectedTeam?.leftTeam ? "right" : "center");
      }
      default:
        setSelectedTeam({ leftTeam: "", rightTeam: "" });
        return setIsBgImagePosition("center");
    }
  };
  return (
    <div style={{ backgroundImage: `url(${(selectedTeam?.leftTeam && selectedTeam?.rightTeam) ? "" : bgImage})`, backgroundPosition: isBgImagePosition }} className="tabs">
      <p className="fs-12 border-color line-height-16 top-date label-color ">March 13, 2022 - March 19, 2022</p>
      <Row className="tab_row" style={{ width: "100%", padding: `8px 6px 18px` }}>
        <Col style={{ flex: 1 }}>
          <CheckboxSelector name="leftTeam" handleSelect={handleSelect} placeHolder={`select ${tabLabel}`} list={tabLabel === "team" ? teamsList : usersSelectList} />
          {selectedTeam?.leftTeam && <TabContainer selectedTab={selectedTab} />}
        </Col>
        <Col style={{ flex: 1 }}>
          <CheckboxSelector name="rightTime" handleSelect={handleSelect} placeHolder={`select ${tabLabel}`} list={tabLabel === "team" ? teamsList : usersSelectList} />
          {selectedTeam?.rightTeam && <TabContainer selectedTab={selectedTab} />}
        </Col>
      </Row>
    </div>
  );
};

export default DynamicTab;
