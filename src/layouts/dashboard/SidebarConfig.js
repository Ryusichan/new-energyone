import { Icon } from "@iconify/react";
import pieChart2Fill from "@iconify/icons-eva/pie-chart-2-fill";
import peopleFill from "@iconify/icons-eva/people-fill";
import shoppingBagFill from "@iconify/icons-eva/shopping-bag-fill";
import fileTextFill from "@iconify/icons-eva/file-text-fill";
import lockFill from "@iconify/icons-eva/lock-fill";
import personAddFill from "@iconify/icons-eva/person-add-fill";
import alertTriangleFill from "@iconify/icons-eva/alert-triangle-fill";

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  //automatic
  {
    title: "AutomaticLayout",
    path: "/dashboard/app",
    icon: getIcon(pieChart2Fill),
  },
  {
    title: "AccumulatedTime",
    path: "/dashboard/accumulatedtime",
    icon: getIcon(peopleFill),
  },
  //menual
  {
    title: "MenualLayout",
    path: "/dashboard/MenualLayout",
    icon: getIcon(shoppingBagFill),
  },
  {
    title: "HighSeparator",
    path: "/dashboard/HighSeparator",
    icon: getIcon(fileTextFill),
  },
  {
    title: "TimeWashing",
    path: "/dashboard/TimeWashing",
    icon: getIcon(shoppingBagFill),
  },
  {
    title: "FermentedDryer",
    path: "/dashboard/FermentedDryer",
    icon: getIcon(shoppingBagFill),
  },
  {
    title: "NotificationRecord",
    path: "/dashboard/NotificationRecord",
    icon: getIcon(lockFill),
  },
  {
    title: "IntegratedPower",
    path: "/dashboard/IntegratedPower",
    icon: getIcon(lockFill),
  },
  //manager
  {
    title: "MemberManagement",
    path: "/dashboard/MemberManagement",
    icon: getIcon(lockFill),
  },
  {
    title: "ManagerNoti",
    path: "/dashboard/ManagerNoti",
    icon: getIcon(lockFill),
  },
  {
    title: "ManagerHistory",
    path: "/dashboard/ManagerHistory",
    icon: getIcon(lockFill),
  },
  //global
  {
    title: "productList",
    path: "/productList",
    icon: getIcon(personAddFill),
  },
  {
    title: "login",
    path: "/login",
    icon: getIcon(personAddFill),
  },
];

export default sidebarConfig;
