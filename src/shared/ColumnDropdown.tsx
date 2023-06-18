import React, { useState } from "react";
import { Checkbox, MenuProps } from "antd";
import { Dropdown } from "antd";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import './ColumnDropdown.scss';

interface IColumnDropDown {
    menuValue: string[],
    setMenuValue: any,
    options: string[],
    children: React.ReactNode
}
const ColumnDropdownWrapper = (props: IColumnDropDown) => {
    const { menuValue, setMenuValue, options, children } = props;
    const [visible, setVisible] = useState(false);
    const HandleCheckBoxValue = (list: CheckboxValueType[]) => {
        setMenuValue(list);
    };
    const items: MenuProps["items"] = [
        {
            label: (
                <div className="column-checkbox">
                    <Checkbox.Group options={options} value={menuValue} onChange={HandleCheckBoxValue} />
                </div>
            ),
            key: "0",
        },
    ];
    return (
        <>
            <Dropdown open={visible} menu={{ items }} placement="bottomRight" trigger={["click"]} onOpenChange={setVisible} >
                {
                    children
                }
            </Dropdown>
        </>
    );
};
export default ColumnDropdownWrapper;
