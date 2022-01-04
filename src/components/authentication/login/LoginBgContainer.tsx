import { Stack } from "@mui/material";
import { styled } from "@mui/material/styles";

const ObjectContainer = styled(Stack)(({ theme }) => ({
  width: "100%",
  height: "100%",
  position: "absolute",
  overflow: "hidden",
  zIndex: -1,
}));

const SubBgObject01 = styled("object")(({ theme }) => ({
  position: "absolute",
  top: "65vh",
  right: "72%",
  objectFit: "cover",
  objectPosition: "center",
  [theme.breakpoints.up("xl")]: {
    left: 0,
    right: "auto",
  },
}));

const SubBgObject02 = styled("object")(({ theme }) => ({
  position: "absolute",
  top: "65vh",
  right: "70%",
  objectFit: "cover",
  objectPosition: "center",
  [theme.breakpoints.up("xl")]: {
    left: 0,
    right: "auto",
  },
}));

const MainObject01 = styled("object")(({ theme }) => ({
  position: "absolute",
  top: "-10vh",
  left: "25%",
  objectFit: "cover",
  objectPosition: "center",
  [theme.breakpoints.up("xl")]: {
    left: "auto",
    right: "-25vh",
  },
}));

const MainObject02 = styled("object")(({ theme }) => ({
  position: "absolute",
  top: "-11vh",
  left: "25%",
  objectFit: "cover",
  objectPosition: "center",
  [theme.breakpoints.up("xl")]: {
    left: "auto",
    right: "-25vh",
  },
}));

const MainObject03 = styled("object")(({ theme }) => ({
  position: "absolute",
  top: "-8vh",
  left: "25%",
  objectFit: "cover",
  objectPosition: "center",
  [theme.breakpoints.up("xl")]: {
    left: "auto",
    right: "-25vh",
  },
}));

const CircleBg01 = styled("object")(({ theme }) => ({
  position: "absolute",
  top: "30vh",
  right: "89%",
  width: "20px",
  objectFit: "cover",
  objectPosition: "center",
}));

const CircleBg02 = styled("object")(({ theme }) => ({
  position: "absolute",
  top: "85vh",
  left: "72%",
  width: "20px",
  objectFit: "cover",
  objectPosition: "center",
}));

const CircleBg03 = styled("object")(({ theme }) => ({
  position: "absolute",
  top: "88vh",
  right: "64%",
  width: "50px",
  objectFit: "cover",
  objectPosition: "center",
}));

const CircleBg04 = styled("object")(({ theme }) => ({
  position: "absolute",
  top: "37vh",
  right: "93%",
  width: "50px",
  objectFit: "cover",
  objectPosition: "center",
}));

const CircleBg05 = styled("object")(({ theme }) => ({
  position: "absolute",
  top: "-20vh",
  left: "82%",
  objectFit: "cover",
  objectPosition: "center",
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
