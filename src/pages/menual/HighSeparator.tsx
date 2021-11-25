import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

import { styled } from "@mui/material/styles";

import DetailSetting from "../../components/_dashboard/highSeparator/DetailSetting";
import HzSetting from "../../components/_dashboard/highSeparator/HzSetting";
import MainSetting from "../../components/_dashboard/highSeparator/MainSetting";

const GridBox = styled(Grid)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  padding: theme.spacing(3),
  borderRadius: 12,
}));

const HighSeparator = () => {
  return (
    <div title="HighSeparator">
      <Container maxWidth="xl">
        <Box>
          <Typography variant="h4" sx={{ mb: 5 }}>
            고액분리기 설정화면
          </Typography>
        </Box>
        {/* @ts-ignore */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <GridBox sx={{ height: "100%" }}>
              <MainSetting />
            </GridBox>
          </Grid>
          <Grid item xs={12} md={4}>
            <GridBox sx={{ height: "100%" }}>
              <DetailSetting />
            </GridBox>
          </Grid>
          <Grid item xs={12} md={4}>
            <GridBox>
              <HzSetting />
            </GridBox>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default HighSeparator;
