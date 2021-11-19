import { Container, Stack, Typography } from "@mui/material";
import React from "react";

import {
  HighsettingList,
  HighsettingWidget,
} from "../../components/_dashboard/highsettingList";
import HighSetting from "../../_mocks_/highsettinglist";

const HighSeparator = () => {
  return (
    <div title="HighSeparator">
      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          고액분리기 설정화면
        </Typography>

        <HighsettingList highsetting={HighSetting} />
      </Container>
    </div>
  );
};

export default HighSeparator;
