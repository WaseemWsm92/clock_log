import { Fragment, ReactNode } from "react";
import { Navigate } from "react-router-dom";
// component props interface
interface GuestGuardProps {
  children: ReactNode;
}
const GuestGuard = ({ children }: GuestGuardProps) => {
  //// HIDE AUTH PAGES TO AUTHENTICATED USERS
  if (JSON.parse(localStorage.getItem("UserData") || "null"))
    return <Navigate to="/dashboard" />;

  return <Fragment>{children}</Fragment>;
};

export default GuestGuard;
