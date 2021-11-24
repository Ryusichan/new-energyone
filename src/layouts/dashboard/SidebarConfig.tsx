import { Icon } from "@iconify/react";
import pieChart2Fill from "@iconify/icons-eva/pie-chart-2-fill";
import peopleFill from "@iconify/icons-eva/people-fill";
import shoppingBagFill from "@iconify/icons-eva/shopping-bag-fill";
import fileTextFill from "@iconify/icons-eva/file-text-fill";
import lockFill from "@iconify/icons-eva/lock-fill";
import personAddFill from "@iconify/icons-eva/person-add-fill";
import alertTriangleFill from "@iconify/icons-eva/alert-triangle-fill";

// ----------------------------------------------------------------------

const getIcon = (name: any) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  //automatic
  {
    title: "자동운전화면",
    path: "/dashboard/app",
    icon: getIcon(pieChart2Fill),
  },
  {
    title: "누적시간화면",
    path: "/dashboard/accumulatedtime",
    icon: getIcon(peopleFill),
  },
  //menual
  {
    title: "수동운전화면",
    path: "/dashboard/MenualLayout",
    icon: getIcon(shoppingBagFill),
  },
  {
    title: "고액분리기 설정화면",
    path: "/dashboard/HighSeparator",
    icon: getIcon(fileTextFill),
  },
  {
    title: "시간세척 설정화면",
    path: "/dashboard/TimeWashing",
    icon: getIcon(shoppingBagFill),
  },
  {
    title: "발효건조기 설정화면",
    path: "/dashboard/FermentedDryer",
    icon: getIcon(shoppingBagFill),
  },
  {
    title: "작동/알람 기록화면",
    path: "/dashboard/NotificationRecord",
    icon: getIcon(lockFill),
  },
  {
    title: "적산전력 기록화면",
    path: "/dashboard/IntegratedPower",
    icon: getIcon(lockFill),
  },
  //manager
  {
    title: "관리자화면",
    path: "/dashboard/MemberManagement",
    icon: getIcon(lockFill),
  },
  {
    title: "알림",
    path: "/dashboard/ManagerNoti",
    icon: getIcon(lockFill),
  },
  {
    title: "기록",
    path: "/dashboard/ManagerHistory",
    icon: getIcon(lockFill),
  },
  //global
  // {
  //   title: "productList",
  //   path: "/productList",
  //   icon: getIcon(personAddFill),
  // },
  // {
  //   title: "login",
  //   path: "/",
  //   icon: getIcon(personAddFill),
  // },
];

export default sidebarConfig;
