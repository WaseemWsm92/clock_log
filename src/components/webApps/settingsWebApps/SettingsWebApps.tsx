

import { Tabs, TabsProps } from "antd";
import Categories from "./Categories/Categories";
import Exceptions from "./Exceptions/Exceptions";
import categories from "../../../assets/images/WebApp/Categories.svg";
import ExceptionsImg from "../../../assets/images/WebApp/Exceptions.svg";
import './SettingsWebApps.scss';
// filter: brightness(3) invert(1);

const SettingsWebApps = (props: any) => {

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: <div className="SettingTab d-flex align-items-center"><img src={categories} alt="categories" className="white-img-theme-class" />Categories</div>,
      children: <Categories />,
    },
    {
      key: '2',
      label: <div className="SettingTab d-flex align-items-center"><img src={ExceptionsImg} alt="ExceptionsImg" className="white-img-theme-class" />Exceptions</div>,
      children: <Exceptions />,
    },
  ];
  return (
    <div className="SettingsWebApps">

      <Tabs defaultActiveKey="1" items={items} type="card" tabPosition='left' />
    </div>
  )
}

export default SettingsWebApps
