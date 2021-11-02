import React from "react";
import { Route } from "react-router-dom";
import AccumulatedTime from "../../pages/automatic/AccumulatedTime";
import AutomaticLayout from "../../pages/automatic/AutomaticLayout";
import ManagerHistory from "../../pages/manager/ManagerHistory";
import ManagerNoti from "../../pages/manager/ManagerNoti";
import MemberManagement from "../../pages/manager/MemberManagement";
import FermentedDryer from "../../pages/menual/FermentedDryer";
import HighSeparator from "../../pages/menual/HighSeparator";
import IntegratedPower from "../../pages/menual/IntegratedPower";
import MenualLayout from "../../pages/menual/MenualLayout";
import NotificationRecord from "../../pages/menual/NotificationRecord";
import TimeWashing from "../../pages/menual/TimeWashing";

const DashboardSidebar = () => {
  return (
    <div
      style={{
        position: "absolute",
        width: "280px",
        height: "100%",
        background: "#f0f0f0",
        zIndex: -1,
      }}
    ></div>
  );
};

interface Props {
  match: any;
}

const DashboardLayout = ({ match }: Props) => {
  return (
    <>
      {/* automatic */}
      <Route path={match.path} component={DashboardSidebar} />
      <Route
        path={`${match.path}/app`}
        component={AutomaticLayout}
        exact={true}
      />
      <Route
        path={`${match.path}/accumulatedtime`}
        component={AccumulatedTime}
        exact={true}
      />
      {/* menual */}
      <Route
        path={`${match.path}/menual/app`}
        exact={true}
        component={MenualLayout}
      />
      <Route
        path={`${match.path}/menual/high-separator`}
        exact={true}
        component={HighSeparator}
      />
      <Route
        path={`${match.path}/menual/time-washing`}
        exact={true}
        component={TimeWashing}
      />
      <Route
        path={`${match.path}/menual/fermenteddryer`}
        exact={true}
        component={FermentedDryer}
      />
      <Route
        path={`${match.path}/menual/notification-record`}
        exact={true}
        component={NotificationRecord}
      />
      <Route
        path={`${match.path}/menual/Integratedpower`}
        exact={true}
        component={IntegratedPower}
      />
      {/* manager */}
      <Route
        path={`${match.path}/manager/member-management`}
        exact={true}
        component={MemberManagement}
      />
      <Route
        path={`${match.path}/manager/noti`}
        exact={true}
        component={ManagerNoti}
      />
      <Route
        path={`${match.path}/manager/history`}
        exact={true}
        component={ManagerHistory}
      />
    </>
  );
};

export default DashboardLayout;
