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
import TimeAseperator from "../../components/_dashboard/timeWashing/TimeAseperator";
import TimeMainset from "../../components/_dashboard/timeWashing/TimeMainset";
import TimeWashSet from "../../components/_dashboard/timeWashing/TimeWashSet";
import TimeBseperator from "../../components/_dashboard/timeWashing/TimeBseperator";

// const GridBox = styled(Grid)(({ theme }) => ({
//   border: `1px solid ${theme.palette.divider}`,
//   padding: theme.spacing(3),
//   borderRadius: 12,
// }));

const TimeWasing = () => {
  return (
    <div title="TimeWasing">
      <Container>
        <Box>
          <Typography variant="h4" sx={{ mb: 5 }}>
            시간세척 설정화면
          </Typography>
        </Box>
        <Grid container spacing={4}>
          <Grid item container xs={12} sm={6} md={6}>
            <TimeAseperator />
          </Grid>
          <Grid item container xs={12} sm={6} md={6}>
            <TimeBseperator />
          </Grid>

          <Grid item container xs={12} sm={6} md={6}>
            <TimeMainset />
          </Grid>
          <Grid item container xs={12} sm={6} md={6}>
            <TimeWashSet />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default TimeWasing;
