import { Container, Stack, Typography } from "@mui/material";
import React from "react";

import HighSeparatorList from "../../components/_dashboard/highSeparator/HighSeparatorList";

const HighSeparator = () => {
  return (
    <div title="HighSeparator">
      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          고액분리기 설정화면
        </Typography>
        {/* @ts-ignore */}
        <HighSeparatorList />
      </Container>
    </div>
  );
};

export default HighSeparator;
