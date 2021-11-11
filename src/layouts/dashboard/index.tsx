import React,{ useState } from "react";
import { Outlet } from 'react-router-dom';

// material
import { styled } from '@mui/material/styles';
import DashboardNavbar from "./DashboardNavbar";
import DashboardSidebar from "./DashboardSidebar";

// import AccumulatedTime from "../../pages/automatic/AccumulatedTime";
// import AutomaticLayout from "../../pages/automatic/AutomaticLayout";
// import ManagerHistory from "../../pages/manager/ManagerHistory";
// import ManagerNoti from "../../pages/manager/ManagerNoti";
// import MemberManagement from "../../pages/manager/MemberManagement";
// import FermentedDryer from "../../pages/menual/FermentedDryer";
// import HighSeparator from "../../pages/menual/HighSeparator";
// import IntegratedPower from "../../pages/menual/IntegratedPower";
// import MenualLayout from "../../pages/menual/MenualLayout";
// import NotificationRecord from "../../pages/menual/NotificationRecord";
// import TimeWashing from "../../pages/menual/TimeWashing";
// import DashboardContent from "./DashboardContent";

interface Props {
  match: any;
}

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const RootStyle = styled('div')({
  display: 'flex',
  minHeight: '100%',
  overflow: 'hidden'
});

const MainStyle = styled('div')(({ theme }) => ({
  flexGrow: 1,
  overflow: 'auto',
  minHeight: '100%',
  paddingTop: APP_BAR_MOBILE + 24,
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('lg')]: {
    paddingTop: APP_BAR_DESKTOP + 24,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  }
}));

const DashboardLayout = ({ match }: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <RootStyle>
      <DashboardNavbar onOpenSidebar={() => setOpen(true)} />
      <DashboardSidebar isOpensidebar={open} onCloseSidebar={() => setOpen(false)} />
      <MainStyle>
        <Outlet />
      </MainStyle>
    </RootStyle>
  );
};

export default DashboardLayout;
