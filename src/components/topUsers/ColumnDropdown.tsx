import { useState } from "react";
import { Checkbox, MenuProps } from "antd";
import { CheckboxValueType } from "antd/es/checkbox/Group";

const plainOptions = [
  "Name",
  "Overall Score",
  "Productivity Score",
  "Productivity %",
  "Idle Time Score",
  "Idle Time %",
  "Time Tracked Score",
  "Time Tracked %",
  "Total Time",
  "Productive Time",
  "Idle Time",
];
const ColumnDropDownWrapper = () => {
  const [checkedList, setCheckedList] = useState<CheckboxValueType[]>();

  const onChange = (list: CheckboxValueType[]) => {
    setCheckedList(list);
  };

  const items: MenuProps["items"] = [
    {
      label: (
        <>
          <Checkbox.Group
            options={plainOptions}
            value={checkedList}
            onChange={onChange}
          />
        </>
      ),
      key: "0",
    },
  ];

  return (
    <>
      {/* <Dropdown visible={visible} menu={{ items }} trigger={["click"]}>
                <Space>
                    <Button className="column-dropdwon-btn"
                        onClick={(e) => {
                            setVisible(!visible);
                            e.preventDefault();
                        }}
                    >
                        <img src={DropdownIcon} alt="" style={{ marginRight: "10px" }} />
                        <span>Column</span>
                    </Button>
                </Space>
            </Dropdown> */}
    </>
  );
};

export default ColumnDropDownWrapper;
