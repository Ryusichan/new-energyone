import React from "react";
// material
import { Box, Grid, Container, Typography } from "@mui/material";
// components
import {
  AppNewUsers,
  AppBugReports,
  AppItemOrders,
  AppWeeklySales,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppCurrentSubject,
  AppConversionRates,
} from "../../components/_dashboard/app";

const AutomaticLayout = () => {
  return (
    <div title="Dashboard">
      <Container maxWidth="xl">
        <Box>
          <Typography variant="h4" sx={{ mb: 5 }}>
            Hi, Welcome back
          </Typography>
        </Box>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Grid item>
              <AppWeeklySales />
            </Grid>
            <Grid item sx={{ mt: 4 }}>
              <AppWeeklySales />
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Grid item>
              <AppNewUsers />
            </Grid>
            <Grid item sx={{ mt: 4 }}>
              <AppNewUsers />
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <AppItemOrders />
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <AppBugReports />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <AppBugReports />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppConversionRates />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentSubject />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default AutomaticLayout;
