import React from "react";
// material
import {
  Box,
  Grid,
  Container,
  Typography,
} from "@mui/material";

// import { styled } from "@mui/material/styles";

// components
import InterPower from "../../components/_dashboard/integratedPower/InterPower";
import IntermiddleVoltage from "../../components/_dashboard/integratedPower/IntermiddleVoltage";
import InterVoltage from "../../components/_dashboard/integratedPower/InterVoltage";
import InterValue from "../../components/_dashboard/integratedPower/InterValue";

// const GridBox = styled(Grid)(({ theme }) => ({
//   border: `1px solid ${theme.palette.divider}`,
//   padding: theme.spacing(3),
//   borderRadius: 12,
// }));

const IntegratedPower = () => {
  return (
    <div title="IntegratedPower">
      <Container>
        <Box>
          <Typography variant="h4" sx={{ mb: 5 }}>
            적산전력 기록화면
          </Typography>
        </Box>
        <Grid container spacing={4}>
          <Grid item container xs={12} sm={6} md={6}>
            <InterPower />
          </Grid>
          <Grid item container xs={12} sm={6} md={6}>
            <IntermiddleVoltage />
          </Grid>

          <Grid item container xs={12} sm={6} md={6}>
            <InterVoltage />
          </Grid>
          <Grid item container xs={12} sm={6} md={6}>
            <InterValue />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default IntegratedPower;
