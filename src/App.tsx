import { useEffect } from "react";
import { useLocation, useNavigate, useRoutes } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "./components/errorBoundary/errorBoundary";
import { FilterProvider } from "./components/DatePicker/datePicker";
import { getRoutes } from "./routes";
import "./App.css";
import { message } from 'antd';

function App() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const userData: any = JSON.parse(localStorage.getItem("UserData") || "{}");

  const routes = getRoutes(userData.role);
  const pages = useRoutes(routes);

  useEffect(() => {
    if (
      !userData.token &&
      !pathname.includes("sign-up") &&
      !pathname.includes("forget-password") &&
      !pathname.includes("reset-password")
    ) {
      navigate("/login");
    }
  }, [pathname]);
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <FilterProvider>{pages} </FilterProvider>
    </ErrorBoundary>
  );
}

export default App;
