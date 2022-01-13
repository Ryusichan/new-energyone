import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const navigate = useNavigate();

  const LogoutHandler = () => {
    navigate("/");
  };

  return (
    <Button
      variant="outlined"
      color="inherit"
      onClick={() => {
        LogoutHandler();
      }}
      sx={{
        mb: "8px",
      }}
    >
      Logout
    </Button>
  );
};

export default LogoutButton;
