import { useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Button, Checkbox, MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import { CheckboxValueType } from 'antd/es/checkbox/Group';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import './usersFilter.scss'

const plainOptions = ['Admin', 'Manager', 'Employee'];

const UserRoleFilter = () => {

  const [checkedList, setCheckedList] = useState<CheckboxValueType[]>();
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);
  const [visible, setVisible] = useState(false);

  const onChange = (list: CheckboxValueType[]) => {
    setCheckedList(list);
    setVisible(true)
    setIndeterminate(!!list.length && list.length < plainOptions.length);
    setCheckAll(list.length === plainOptions.length);
  };

  const onCheckAllChange = (e: CheckboxChangeEvent) => {
    setCheckedList(e.target.checked ? plainOptions : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };

  const items: MenuProps['items'] = [
    {
      label: (
        <div className='users-management-filter-checkbox-style'>
          <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} >
            All
          </Checkbox>
          <Checkbox.Group options={plainOptions} value={checkedList} onChange={onChange} className='checkbox-label' />
        </div>
      ),
      key: '0',
    }
  ];

  return (
    <div>
      <Dropdown open={visible} onOpenChange={(value)=>setVisible(value)} menu={{ items }} placement="bottomLeft" trigger={['click']} >
        <Space>
          <Button onClick={(e) => { setVisible(!visible); e.preventDefault() }} style={{ width: '272px', height: "39px" ,borderRadius:"4px"}} className="select-theme">
            <Space style={{ display: 'flex', justifyContent: 'space-between' }} className="extra-dull">
              User Role
              <DownOutlined />
            </Space>
          </Button>
        </Space>
      </Dropdown>
    </div>
  )
}

export default UserRoleFilter;