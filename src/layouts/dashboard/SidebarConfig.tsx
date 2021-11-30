import { Icon } from "@iconify/react";
import applicationSettings from "@iconify/icons-mdi/application-settings-outline";
import clockOutline from "@iconify/icons-mdi/clock-outline";
import accountSettingsSutline from "@iconify/icons-mdi/account-settings-outline";
import weatherWindy from "@iconify/icons-mdi/weather-windy";
import clipboardClock from "@iconify/icons-mdi/clipboard-text-clock-outline";
import textSearch from "@iconify/icons-mdi/text-search";
import bellOutline from "@iconify/icons-mdi/bell-outline";
import noteText from "@iconify/icons-mdi/note-text-outline";
import layers from "@iconify/icons-mdi/layers";
import dishwasher from "@iconify/icons-mdi/dishwasher";
import shoppingBagFill from "@iconify/icons-eva/shopping-bag-fill";
import fileTextFill from "@iconify/icons-eva/file-text-fill";
import lockFill from "@iconify/icons-eva/lock-fill";

// ----------------------------------------------------------------------

const getIcon = (name: any) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  //automatic
  {
    title: "자동운전화면",
    path: "/dashboard/app",
    icon: getIcon(applicationSettings),
  },
  {
    title: "누적시간화면",
    path: "/dashboard/accumulatedtime",
    icon: getIcon(clockOutline),
  },
  //menual
  {
    title: "수동운전화면",
    path: "/dashboard/MenualLayout",
    icon: getIcon(accountSettingsSutline),
  },
  {
    title: "고액분리기 설정화면",
    path: "/dashboard/HighSeparator",
    icon: getIcon(layers),
  },
  {
    title: "시간세척 설정화면",
    path: "/dashboard/TimeWashing",
    icon: getIcon(dishwasher),
  },
  {
    title: "발효건조기 설정화면",
    path: "/dashboard/FermentedDryer",
    icon: getIcon(weatherWindy),
  },
  {
    title: "작동/알람 기록화면",
    path: "/dashboard/NotificationRecord",
    icon: getIcon(clipboardClock),
  },
  {
    title: "적산전력 기록화면",
    path: "/dashboard/IntegratedPower",
    icon: getIcon(textSearch),
  },
  //manager
  // {
  //   title: "관리자화면",
  //   path: "/dashboard/MemberManagement",
  //   icon: getIcon(lockFill),
  // },
  {
    title: "알림",
    path: "/dashboard/ManagerNoti",
    icon: getIcon(bellOutline),
  },
  {
    title: "기록",
    path: "/dashboard/ManagerHistory",
    icon: getIcon(noteText),
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
