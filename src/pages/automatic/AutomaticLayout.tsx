import React from "react";
// material
import {
  Box,
  Grid,
  Container,
  Typography,
  Button,
  TextField,
  IconButton,
} from "@mui/material";

import { styled } from "@mui/material/styles";

// components
import AutomaticDrive from "../../components/_dashboard/automatic/AutomaticDrive";
import DischargeReservation from "../../components/_dashboard/automatic/DischargeReservation";
import Aseperator from "../../components/_dashboard/automatic/Aseperator";
import Bseperator from "../../components/_dashboard/automatic/Bseperator";
import AutomaticSaveTank from "../../components/_dashboard/automatic/AutomaticSaveTank";
import AutoFermenTation from "../../components/_dashboard/automatic/AutoFermenTation";
import AutoTankLevel from "../../components/_dashboard/automatic/AutoTankLevel";

const GridBox = styled(Grid)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  padding: theme.spacing(3),
  borderRadius: 12,
}));

const AutomaticLayout = () => {
  return (
    <div title="AutomaticLayout">
      <Container maxWidth="xl">
        <Box>
          <Typography variant="h4" sx={{ mb: 5 }}>
            자동운전화면
          </Typography>
        </Box>
        <Grid container spacing={4}>
          <Grid item container xs={12} sm={6} md={4}>
            <Grid item xs={12}>
              <AutomaticDrive />
              <DischargeReservation />
            </Grid>
          </Grid>

          <Grid item container xs={12} sm={6} md={5}>
            <Aseperator />
            <Bseperator />
          </Grid>

          <Grid item xs={12} sm={12} md={3}>
            <AutoTankLevel />
          </Grid>

          <Grid item xs={12} sm={6}>
            <AutomaticSaveTank />
          </Grid>
          <Grid item xs={12} sm={6}>
            <AutoFermenTation />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default AutomaticLayout;
