import { Navigate, useRoutes } from "react-router-dom";
// layouts
import Login from "../pages/Login";

import AutomaticLayout from "../pages/automatic/AutomaticLayout";
import NotFound from "../pages/NotFound";
import ProductList from "../pages/ProductList";
import MenualLayout from "../pages/menual/MenualLayout";

import AccumulatedTime from "../pages/automatic/AccumulatedTime";
import { RouterPath } from "./RouterPath";
import FermentedDryer from "../pages/menual/FermentedDryer";
import TimeWashing from "../pages/menual/TimeWashing";
import HighSeparator from "../pages/menual/HighSeparator";
import NotificationRecord from "../pages/menual/NotificationRecord";
import IntegratedPower from "../pages/menual/IntegratedPower";
import MemberManagement from "../pages/manager/MemberManagement";
import ManagerNoti from "../pages/manager/ManagerNoti";
import ManagerHistory from "../pages/manager/ManagerHistory";
import DashboardLayout from "../layouts/dashboard";

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    // automatic
    {
      path: RouterPath.DashboardLayout,
      element: <DashboardLayout />,
      children: [
        //automatic
        { element: <Navigate to={RouterPath.AutomaticLayout} replace /> },
        { path: RouterPath.AutomaticLayout, element: <AutomaticLayout /> },
        { path: RouterPath.AccumulatedTime, element: <AccumulatedTime /> },
        // menual
        { path: RouterPath.MenualLayout, element: <MenualLayout /> },
        { path: RouterPath.HighSeparator, element: <HighSeparator /> },
        { path: RouterPath.TimeWashing, element: <TimeWashing /> },
        { path: RouterPath.FermentedDryer, element: <FermentedDryer /> },
        {
          path: RouterPath.NotificationRecord,
          element: <NotificationRecord />,
        },
        { path: RouterPath.IntegratedPower, element: <IntegratedPower /> },
        // menual
        { path: RouterPath.MemberManagement, element: <MemberManagement /> },
        { path: RouterPath.ManagerNoti, element: <ManagerNoti /> },
        { path: RouterPath.ManagerHistory, element: <ManagerHistory /> },
      ],
    },
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        { path: RouterPath.Login, element: <Login /> },
        { path: RouterPath.ProductList, element: <ProductList /> },
        { path: RouterPath.NotFound, element: <NotFound /> },
      ],
    },
  ]);
}
// <>
//   <BrowserRouter>
//     <Switch>
//       {/* automatic */}
//       <Route
//         path={RouterPath.DashboardLayout}
//         exact={true}
//         component={DashboardLayout}
//       />
//       <Route
//         path={RouterPath.AutomaticLayout}
//         exact={true}
//         component={AutomaticLayout}
//       />
//       <Route
//         path={RouterPath.AccumulatedTime}
//         exact={true}
//         component={AccumulatedTime}
//       />

//       {/* menual */}
//       <Route
//         path={RouterPath.MenualLayout}
//         exact={true}
//         component={MenualLayout}
//       />
//       <Route
//         path={RouterPath.HighSeparator}
//         exact={true}
//         component={HighSeparator}
//       />
//       <Route
//         path={RouterPath.TimeWashing}
//         exact={true}
//         component={TimeWashing}
//       />
//       <Route
//         path={RouterPath.FermentedDryer}
//         exact={true}
//         component={FermentedDryer}
//       />
//       <Route
//         path={RouterPath.NotificationRecord}
//         exact={true}
//         component={NotificationRecord}
//       />
//       <Route
//         path={RouterPath.IntegratedPower}
//         exact={true}
//         component={IntegratedPower}
//       />

//       {/* manager */}
//       <Route
//         path={RouterPath.MemberManagement}
//         exact={true}
//         component={MemberManagement}
//       />
//       <Route
//         path={RouterPath.ManagerNoti}
//         exact={true}
//         component={ManagerNoti}
//       />
//       <Route
//         path={RouterPath.ManagerHistory}
//         exact={true}
//         component={ManagerHistory}
//       />

//       {/* global */}
//       <Route
//         path={RouterPath.ProductList}
//         exact={true}
//         component={ProductList}
//       />
//       <Route path={RouterPath.Login} exact={true} component={Login} />
//       <Route path={RouterPath.NotFount} exact={true} component={NotFound} />
//     </Switch>
//   </BrowserRouter>
// </>
//   );
// };

// export default Router;
