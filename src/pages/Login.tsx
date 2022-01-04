import { Link as RouterLink } from "react-router-dom";
// material
import { styled } from "@mui/material/styles";
import { Stack, Link, Container, Typography, Card } from "@mui/material";
// layouts
import AuthLayout from "../layouts/AuthLayout";
// components
// import Page from "../components/Page";
import { MHidden } from "../components/@material-extend";
import { LoginForm } from "../components/authentication/login";
import LoginBgContainer from "../components/authentication/login/LoginBgContainer";

const RootStyle = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
}));

const ContentStyle = styled(Card)(({ theme }) => ({
  maxWidth: 460,
  margin: "auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: theme.spacing(8, 6),
  width: "calc(100% - 24px )",
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(8, 4),
  },
  boxSizing: "border-box",
}));

const ContainerStyle = styled(Container)(({ theme }) => ({
  display: "flex",
  minHeight: "100vh",
  [theme.breakpoints.down("sm")]: {
    padding: 0,
  },
}));

const Login = () => {
  return (
    <RootStyle title="Login">
      <AuthLayout>
        Don’t have an account? &nbsp;
        <Link
          underline="none"
          variant="subtitle2"
          component={RouterLink}
          to="/register"
        >
          Get started
        </Link>
      </AuthLayout>

      <LoginBgContainer />

      <ContainerStyle maxWidth="sm">
        <ContentStyle>
          <Stack sx={{ mb: 5, textAlign: "center" }}>
            <Typography gutterBottom sx={{ color: "text.secondary", mb: 4 }}>
              안녕하세요. 에너지원 입니다.
            </Typography>
            <Typography variant="h4">Log in</Typography>
          </Stack>

          <LoginForm />

          <MHidden width="smUp">
            <Typography variant="body2" align="center" sx={{ mt: 3 }}>
              Don’t have an account?&nbsp;
              <Link variant="subtitle2" component={RouterLink} to="register">
                Get started
              </Link>
            </Typography>
          </MHidden>
        </ContentStyle>
      </ContainerStyle>
    </RootStyle>
  );
};

export default Login;
