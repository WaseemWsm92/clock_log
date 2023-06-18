import { Outlet } from "react-router-dom";
import './SettingsLayout.scss'


const SettingsLayout = ({ children }: any) => {
  return (
    <>
      <div className="main">
    {children || <Outlet />}
    </div>
    </>
  );
};

export default SettingsLayout;