import { Typography, Grid } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

const GridBox = styled(Grid)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  padding: theme.spacing(3),
  borderRadius: 12,
  [theme.breakpoints.down("md")]: {
    display: "flex",
    justifyContent: "space-between",
    alighItems: "center",
  },
}));

const WaterBox = styled("div")(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alighItem: "center",
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: -1,
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
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
  [theme.breakpoints.down("md")]: {
    position: "relative",
    color: "#646464",
    bottom: "auto",
    left: "auto",
  },
}));

const Water01 = styled("div", {
  shouldForwardProp: (prop) => prop !== "color" && prop !== "myProp",
})<{ tankLevel: number }>(({ theme, tankLevel }) => ({
  width: "1000px",
  height: "1000px",
  position: "absolute",
  top: `-${tankLevel + 110}%`,
  left: `-100%`,
  borderRadius: "45%",
  background: "rgba(3,169,244,0.8)",
  animation: "move 5s infinite linear",

  "@keyframes move": {
    "100%": { transform: "rotate(360deg)" },
  },
}));

const Water02 = styled("div", {
  shouldForwardProp: (prop) => prop !== "color" && prop !== "myProp",
})<{ tankLevel: number }>(({ theme, tankLevel }) => ({
  width: "1100px",
  height: "1100px",
  position: "absolute",
  top: `-${tankLevel + 140}%`,
  left: "-110%",
  borderRadius: "45%",
  background: " #fff",
  animation: "move 7s infinite linear",

  "@keyframes move": {
    "100%": { transform: "rotate(360deg)" },
  },
}));

const AutoTankLevel = () => {
  const storageTankLevel = useSelector(
    (state: RootState) => state.autoDetailState.storageTankLevel
  );

  const tankLevel = storageTankLevel.value;
  const tankUnit = storageTankLevel.unit;

  return (
    <GridBox sx={{ height: "100%", position: "relative" }}>
      <Typography variant="h6">저장탱크수위</Typography>
      <WaterBox>
        <WaterWrapper>
          <Water01 tankLevel={tankLevel} />
          <Water02 tankLevel={tankLevel} />
        </WaterWrapper>
      </WaterBox>
      <LevelText variant="h3">
        {tankLevel}
        {tankUnit}
      </LevelText>
    </GridBox>
  );
};

export default AutoTankLevel;
