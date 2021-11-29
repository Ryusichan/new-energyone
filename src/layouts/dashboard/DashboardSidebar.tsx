import React from "react";
import { useEffect } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
//material
import { Drawer, Box, Link, Avatar, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
//components
import Logo from "../../components/Logo";
import Scrollbar from "../../components/Scrollbar";
import NavSection from "../../components/NavSection";
import { MHidden } from "../../components/@material-extend";

import sidebarConfig from "./SidebarConfig";
import productlist from "../../_mocks_/productlist";

const DRAWER_WIDTH = 280;

const RootStyle = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("lg")]: {
    flexShrink: 0,
    width: DRAWER_WIDTH,
  },
}));

const AccountStyle = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(2, 2.5),
  //check
  borderRadius: 12,
  backgroundColor: theme.palette.grey[200],
}));

interface Props {
  isOpensidebar: any;
  onCloseSidebar: any;
}

const DashboardSidebar = ({ isOpensidebar, onCloseSidebar }: Props) => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (isOpensidebar) {
      onCloseSidebar();
    }
  }, [pathname]);

  const renderContent = (
    <Scrollbar
      sx={{
        height: "100%",
        "& .simplebar-content": {
          height: "100%",
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      <Box sx={{ px: 2.5, py: 3 }}>
        <Box component={RouterLink} to="/" sx={{ display: "inline-flex" }}>
          <Logo />
        </Box>
      </Box>

      {/* 사이드바 아파트 component 선택한 아파트명 보여짐*/}
      <Box sx={{ mb: 5, mx: 2.5 }}>
        <Link underline="none" component={RouterLink} to="#">
          <AccountStyle>
            {/* <Avatar src={account.photoURL} alt="photoURL" /> */}
            <Box sx={{ ml: 2 }}>
              <Typography variant="subtitle2" sx={{ color: "text.secondary" }}>
                {productlist[0].location}
              </Typography>
              <Typography variant="h6" sx={{ color: "text.primary" }}>
                {productlist[0].name}
              </Typography>
            </Box>
          </AccountStyle>
        </Link>
      </Box>

      <NavSection navConfig={sidebarConfig} />
    </Scrollbar>
  );

  return (
    <RootStyle>
      <MHidden width="lgUp">
        <Drawer
          open={isOpensidebar}
          onClose={onCloseSidebar}
          PaperProps={{
            sx: { width: DRAWER_WIDTH },
          }}
        >
          {renderContent}
        </Drawer>
      </MHidden>
      {/* 1200px 미만시 드로우 숨겨지게 처리 */}
      <MHidden width="lgDown">
        <Drawer
          open={true}
          variant="persistent"
          PaperProps={{
            sx: {
              width: DRAWER_WIDTH,
              bgcolor: "background.default",
            },
          }}
        >
          {renderContent}
        </Drawer>
      </MHidden>
    </RootStyle>
  );
};

export default DashboardSidebar;
