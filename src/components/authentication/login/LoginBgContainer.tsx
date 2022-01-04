import { Stack } from "@mui/material";
import { styled } from "@mui/material/styles";

const ObjectContainer = styled(Stack)(({ theme }) => ({
  width: "100%",
  height: "100%",
  position: "absolute",
  overflow: "hidden",
  zIndex: -1,

  "& > *": {
    position: "absolute",
    objectFit: "cover",
    objectPosition: "center",
  },
}));

const SubBgObject01 = styled("object")(({ theme }) => ({
  top: "65vh",
  right: "72%",
  animation: "mainObject01 7.5s infinite ease-in-out",
  [theme.breakpoints.up("xl")]: {
    left: 0,
    right: "auto",
  },
}));

const SubBgObject02 = styled("object")(({ theme }) => ({
  top: "65vh",
  right: "70%",

  animation: "mainObject02 5.5s infinite ease-in-out",

  [theme.breakpoints.up("xl")]: {
    left: 0,
    right: "auto",
  },
}));

const MainObject01 = styled("object")(({ theme }) => ({
  animation: "mainObject01 10.5s infinite ease-in-out",
  top: "-10vh",
  left: "25%",
  [theme.breakpoints.up("xl")]: {
    left: "auto",
    right: "-25vh",
  },
  "@keyframes mainObject01": {
    "0%": { transform: "skewY(0rad)" },
    "50%": { transform: "skewY(0.02rad)" },
    "100%": { transform: "skewY(0rad)" },
  },
}));

const MainObject02 = styled("object")(({ theme }) => ({
  animation: "mainObject02 7.5s infinite ease-in-out",
  top: "-11vh",
  left: "25%",
  [theme.breakpoints.up("xl")]: {
    left: "auto",
    right: "-25vh",
  },
  "@keyframes mainObject02": {
    "0%": { transform: "skewY(0rad)" },
    "50%": { transform: "skewY(0.04rad)" },
    "100%": { transform: "skewY(0rad)" },
  },
}));

const MainObject03 = styled("object")(({ theme }) => ({
  top: "-8vh",
  left: "25%",

  animation: "mainObject02 9.5s infinite ease-in-out",

  [theme.breakpoints.up("xl")]: {
    left: "auto",
    right: "-25vh",
  },
}));

const CircleBg01 = styled("object")(({ theme }) => ({
  top: "30vh",
  right: "89%",
  width: "20px",
  opacity: 0.7,
}));

const CircleBg02 = styled("object")(({ theme }) => ({
  top: "85vh",
  left: "72%",
  width: "20px",
  opacity: 0.7,
}));

const CircleBg03 = styled("object")(({ theme }) => ({
  top: "88vh",
  right: "64%",
  width: "50px",
}));

const CircleBg04 = styled("object")(({ theme }) => ({
  top: "37vh",
  right: "93%",
  width: "50px",
}));

const CircleBg05 = styled("object")(({ theme }) => ({
  top: "-20vh",
  left: "82%",
}));

const LoginBgContainer = () => {
  return (
    <ObjectContainer>
      <MainObject03
        type="image/svg+xml"
        data={require("./svg-images/mainbg-sub01.svg").default}
      />
      <MainObject02
        type="image/svg+xml"
        data={require("./svg-images/mainbg-sub.svg").default}
      />
      <MainObject01
        type="image/svg+xml"
        data={require("./svg-images/mainbg-main.svg").default}
      />
      <SubBgObject02
        type="image/svg+xml"
        data={require("./svg-images/subbg02.svg").default}
      />
      <SubBgObject01
        type="image/svg+xml"
        data={require("./svg-images/subbg01.svg").default}
      />
      <CircleBg01
        type="image/svg+xml"
        data={require("./svg-images/sub-bluecircle.svg").default}
      />
      <CircleBg02
        type="image/svg+xml"
        data={require("./svg-images/sub-bluecircle.svg").default}
      />
      <CircleBg03
        type="image/svg+xml"
        data={require("./svg-images/sub-skycircle.svg").default}
      />
      <CircleBg04
        type="image/svg+xml"
        data={require("./svg-images/sub-skycircle.svg").default}
      />
      <CircleBg05
        type="image/svg+xml"
        data={require("./svg-images/sub-whitecircle.svg").default}
      />
    </ObjectContainer>
  );
};

export default LoginBgContainer;
