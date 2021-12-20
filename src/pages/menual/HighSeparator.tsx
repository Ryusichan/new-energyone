import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

import { styled } from "@mui/material/styles";

import DetailSetting from "../../components/_dashboard/highSeparator/DetailSetting";
import HzSetting from "../../components/_dashboard/highSeparator/HzSetting";
import MainSetting from "../../components/_dashboard/highSeparator/MainSetting";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import countSlice from "../../store/reducers/counterSlice";

const GridBox = styled(Grid)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  padding: theme.spacing(3),
  borderRadius: 12,
}));

const HighSeparator = () => {

  // test useSelector, useDispatch
  const dispatch = useDispatch();
  const state = useSelector((
    state: RootState) => state.countSlice.count);

    console.log('state', state);

  const handlePlus = () => {
    dispatch(countSlice.actions.increase(1))
  };

  const handleMinus = () => {
    dispatch(countSlice.actions.decrease(1))
  };

  return (
    <div title="HighSeparator">
      <Container maxWidth="xl">
        <Box>
          <Typography variant="h4" sx={{ mb: 5 }}>
            고액분리기 설정화면
            {state}
            <button onClick={() => handlePlus()}>+</button>
            <button onClick={() => handleMinus()}>-</button>
          </Typography>
        </Box>

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
