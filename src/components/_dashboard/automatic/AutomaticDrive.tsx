import { Button, Typography, Box, Grid } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";

const GridBox = styled(Grid)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  padding: theme.spacing(3),
  borderRadius: 12,
}));

const AutomaticDrive = () => {
  return (
    <GridBox item xs={12}>
      <Typography variant="h6">자동운전</Typography>
      <Box style={{ display: "flex" }} sx={{ mt: 6 }}>
        <Button variant="contained" fullWidth>
          고액분리기
          <br />
          가동중
        </Button>
        <Button variant="contained" color="inherit" fullWidth sx={{ ml: 2 }}>
          발효건조기
          <br />
          정지상태
        </Button>
      </Box>
    </GridBox>
  );
};

export default AutomaticDrive;
