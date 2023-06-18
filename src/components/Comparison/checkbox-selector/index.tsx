import './check-box.scss';
import { FC, useState } from 'react';
import { Button, Checkbox, Dropdown } from 'antd';
import DropdownIcon from '../../../assets/icons/dropdownIcon.svg';

const CheckboxSelector: FC<{ name?: string, placeHolder: string, list: any, handleSelect: (value: any, name?: string) => void }> = (props) => {
    const { placeHolder, list, handleSelect, name } = props;
    const [selectedItem, setSelectedItem] = useState<{ label: string, id: string }>();
    const [visible, setVisible] = useState(false);
    const onChange = (item: any) => {
        if (selectedItem?.id === item?.id) {
            setSelectedItem({ label: "", id: "" });
            handleSelect("", name);
        } else {
            handleSelect(item, name);
            setSelectedItem(item);
        }
    };
    const items = list?.map((item: any) => ({
        label: <Checkbox className='capitalize' checked={selectedItem?.id === item?.id} value={item?.id} onChange={() => onChange(item)}>{item?.label}</Checkbox>,
        key: item?.id,
    }))

    return (
        <Dropdown className='comparison_selector' open={visible} menu={{ items }} placement="bottomRight" trigger={['click']}
            onOpenChange={setVisible}>
            <Button className='checkbox_selector' >
                <span className='fs-14 fw-400 capitalize'>
                    {selectedItem?.label ? selectedItem?.label : placeHolder}
                </span>
                <img src={DropdownIcon} alt="" style={{ marginRight: "7px" }} />
            </Button>
        </Dropdown>
    )
}

export default CheckboxSelector;