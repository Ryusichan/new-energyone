import React from "react";
import { Typography, Box, Grid, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

const GridBox = styled(Grid)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  padding: theme.spacing(3),
  borderRadius: 12,
}));

const DischargeReservation = () => {
  const dischargeReservationSV = useSelector(
    (state: RootState) => state.autoDetailState.dischargeReserveSV
  );

  const dischargeReservationPV = useSelector(
    (state: RootState) => state.autoDetailState.dischargeReservePV
  );

  return (
    <GridBox item xs={12} sx={{ mt: 4 }}>
      <Box
        sx={{
          flexDirection: "row",
          display: "flex",
          alignItems: "center",
          mt: 2,
          mb: 4,
        }}
      >
        <Typography variant="h6">배출예약 SV</Typography>
        <TextField
          value={dischargeReservationSV.value}
          disabled
          sx={{ ml: "auto", maxWidth: 64 }}
        />
        <Typography variant="h6" sx={{ ml: 2 }}>
          {dischargeReservationSV.unit}
        </Typography>
      </Box>
      <Box
        sx={{
          mt: 6,
          flexDirection: "row",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography variant="h6">배출예약 PV</Typography>
        <TextField
          value={dischargeReservationPV.value}
          disabled
          sx={{ ml: "auto", maxWidth: 64 }}
        />
        <Typography variant="h6" sx={{ ml: 2 }}>
          {dischargeReservationPV.unit}
        </Typography>
      </Box>
    </GridBox>
  );
};

export default DischargeReservation;
