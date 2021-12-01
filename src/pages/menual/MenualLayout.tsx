import React from "react";

import { Container, Box, Typography, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import MenualSaveTank from "../../components/_dashboard/menualLayout/MenualSaveTank";
import MenualSeparator from "../../components/_dashboard/menualLayout/MenualSeparator";
import MenualFermentation from "../../components/_dashboard/menualLayout/MenualFermentation";

const GridBox = styled(Grid)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  padding: theme.spacing(3),
  borderRadius: 12,
}));

const MenualLayout = () => {
  return (
    <div title="AutomaticLayout">
      <Container maxWidth="xl">
        <Box>
          <Typography variant="h4" sx={{ mb: 5 }}>
            수동운전화면
          </Typography>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <GridBox sx={{ height: "100%" }}>
              <MenualSaveTank />
            </GridBox>
          </Grid>
          <Grid item xs={12} md={4}>
            <GridBox sx={{ height: "100%" }}>
              <MenualSeparator />
            </GridBox>
          </Grid>
          <Grid item xs={12} md={4}>
            <GridBox>
              <MenualFermentation />
            </GridBox>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default MenualLayout;
