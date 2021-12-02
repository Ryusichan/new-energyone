import { Typography, Box, Grid, TextField } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";

const GridBox = styled(Grid)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  padding: theme.spacing(3),
  borderRadius: 12,
}));

const WaterBox = styled("div")(({ theme }) => ({
  width: "calc(100% + 48px)",
  marginLeft: "-24px",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alighItem: "center",
  position: "relative",
}));

const WaterWrapper = styled("div")(({ theme }) => ({
  width: "100%",
  height: "100%",
  position: "relative",
  overflow: "hidden",
  transform: "translate3d(0, 0, 0)",
  backgroundColor: "rgba(34,79,242,0.8)",
  borderBottomRightRadius: "12px",
  borderBottomLeftRadius: "12px",
}));

const LevelText = styled(Typography)(({ theme }) => ({
  color: "#fff",
  position: "absolute",
  bottom: "10px",
  left: "10px",
}));

const Water01 = styled("div")(({ theme }) => ({
  width: "1000px",
  height: "1000px",
  position: "absolute",
  top: "-205%",
  left: "-100%",
  borderRadius: "45%",
  background: "rgba(3,169,244,0.8)",
  animation: "move 5s infinite linear",

  "@keyframes move": {
    "100%": { transform: "rotate(360deg)" },
  },
}));

const Water02 = styled("div")(({ theme }) => ({
  width: "1100px",
  height: "1100px",
  position: "absolute",
  top: "-237%",
  left: "-110%",
  borderRadius: "45%",
  background: " #fff",
  animation: "move 7s infinite linear",

  "@keyframes move": {
    "100%": { transform: "rotate(360deg)" },
  },
}));

const AutoTankLevel = () => {
  return (
    <GridBox sx={{ height: "100%" }}>
      <Typography variant="h6">저장탱크수위</Typography>
      <WaterBox>
        <WaterWrapper>
          <Water01 />
          <Water02 />
        </WaterWrapper>
        <LevelText variant="h3">53%</LevelText>
      </WaterBox>
    </GridBox>
  );
};

export default AutoTankLevel;
