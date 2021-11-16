import { Container, Stack, Typography } from "@mui/material";
import React from "react";

const HighSeparator = () => {
  return (
    <div title="HighSeparator">
      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          고액분리기 설정화면
        </Typography>

        <Stack
          direction="row"
          flexWrap="wrap-reverse"
          alignItems="center"
          justifyContent="flex-end"
          sx={{ mb: 5 }}
        >
          <Stack
            direction="row"
            spacing={1}
            flexShrink={0}
            sx={{ my: 1 }}
          ></Stack>
        </Stack>
      </Container>
    </div>
  );
};

export default HighSeparator;
