import { useEffect, useState } from "react";

import IntegrationTable from "../../components/intgration/IntegrationTable";
import IntegrationTabs from "../../components/intgration/Tabs";
import { useAppDispatch, useAppSelector } from "../../hooks/useStoreHooks";
import { cardsData } from "../../mock/integrationData";
import { handleAddIntegration } from "../../store/slices/integration";
import "./style.scss";
function Integrations() {
  const { showTable: tableValue } = useAppSelector((state) => state.integration);
  const [showTable, setShowTable] = useState(tableValue);
  const dispatch = useAppDispatch();
  useEffect(() => setShowTable(tableValue), [tableValue]);
  useEffect(() => {
    dispatch(handleAddIntegration(false));
  }, [dispatch]);
  return (
    <div className="integration-wrapper">
      {showTable ? (
        <IntegrationTabs cardsData={cardsData} />
      ) : (
        <div>
          <IntegrationTable />
        </div>
      )}
    </div>
  );
}

export default Integrations;
export const AddIntegrationBtn = () => {
  const { showTable: tableValue } = useAppSelector((state) => state.integration);
  const dispatch = useAppDispatch();
  return tableValue ? (
    <></>
  ) : (
    <div className="integration-wrapper">
      <button className="fs-16 fw-500 cursor-pointer addBtn btn-theme-color" onClick={() => dispatch(handleAddIntegration(true))}>
        Add Integration
      </button>
    </div>
  );
};
