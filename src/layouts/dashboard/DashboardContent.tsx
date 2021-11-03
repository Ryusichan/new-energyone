import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import DashboardNavbar from "./DashboardNavbar";
import DashboardSidebar from "./DashboardSidebar";

const RootStyle = styled("div")({
  display: "flex",
  minHeight: "100%",
  overflow: "hidden",
});

const DashboardContent = () => {
  const [open, setOpen] = useState<Boolean>(false);
  return (
    <RootStyle>
      <DashboardNavbar onOpenSidebar={() => setOpen(true)} />
      <DashboardSidebar
        isOpensidebar={open}
        onCloseSidebar={() => setOpen(false)}
      />
      {/* <MainStyle>
        <Outlet />
      </MainStyle> */}
    </RootStyle>
  );
};

export default DashboardContent;
