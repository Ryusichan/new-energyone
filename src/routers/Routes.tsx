import { Navigate, useRoutes, BrowserRouter } from "react-router-dom";
// layouts

import DashboardLayout from "../layouts/dashboard";

// import GlobalLayout from "../layouts/globalLayout";
import MainAppPage from "../pages/MainAppPage";
import AutomaticLayout from "../pages/automatic/AutomaticLayout";
import MenualLayout from "../pages/menual/MenualLayout";

import AccumulatedTime from "../pages/automatic/AccumulatedTime";
import FermentedDryer from "../pages/menual/FermentedDryer";
import TimeWashing from "../pages/menual/TimeWashing";
import HighSeparator from "../pages/menual/HighSeparator";
import NotificationRecord from "../pages/menual/NotificationRecord";
import IntegratedPower from "../pages/menual/IntegratedPower";
// import MemberManagement from "../pages/manager/MemberManagement";
import ManagerNoti from "../pages/manager/ManagerNoti";
import ManagerHistory from "../pages/manager/ManagerHistory";
import Login from "../pages/Login";
import ProductList from "../pages/ProductList";
import NotFound from "../pages/NotFound";

// ----------------------------------------------------------------------

const Router = () => {
  return useRoutes([
    // automatic
    {
      path: "/dashboard",

      element: <DashboardLayout />,
      children: [
        //automatic
        { element: <Navigate to="/dashboard/app" replace={true} /> },
        { path: "app", element: <MainAppPage /> },
        { path: "AutomaticLayout", element: <AutomaticLayout /> },
        { path: "accumulatedtime", element: <AccumulatedTime /> },
        // menual
        { path: "MenualLayout", element: <MenualLayout /> },
        { path: "HighSeparator", element: <HighSeparator /> },
        { path: "TimeWashing", element: <TimeWashing /> },
        { path: "FermentedDryer", element: <FermentedDryer /> },
        {
          path: "NotificationRecord",
          element: <NotificationRecord />,
        },
        { path: "IntegratedPower", element: <IntegratedPower /> },
        // manager
        // { path: "MemberManagement", element: <MemberManagement /> },
        { path: "ManagerNoti", element: <ManagerNoti /> },
        { path: "ManagerHistory", element: <ManagerHistory /> },
      ],
    },
    // global
    { path: "/", element: <Login /> },
    { path: "/productList", element: <ProductList /> },
    { path: "/404", element: <NotFound /> },
    // {
    //   path: "/",
    //   element: <Header />,
    //   children: [
    //     { path: "login", element: <Login /> },
    //     { path: "productList", element: <ProductList /> },
    //     { path: "404", element: <NotFound /> },
    //     { path: "/", element: <Navigate to="/dashboard" /> },
    //     { path: "*", element: <Navigate to="/404" /> },
    //   ],
    // },
    // { path: "*", element: <Navigate to="/404" replace={true} /> },
  ]);
};

const AppWrapper = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};

export default AppWrapper;
