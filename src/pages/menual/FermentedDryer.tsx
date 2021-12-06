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
import FermenMainset from "../../components/_dashboard/fermenTation/FermenMainset";
import FermenDetail01 from "../../components/_dashboard/fermenTation/FermenDetail01";
import FermenDetail02 from "../../components/_dashboard/fermenTation/FermenDetail02";

const GridBox = styled(Grid)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  padding: theme.spacing(3),
  borderRadius: 12,
}));

const FermentedDryer = () => {
  return (
    <div title="FermentedDryer">
      <Container>
        <Box>
          <Typography variant="h4" sx={{ mb: 5 }}>
            발효건조기 설정화면
          </Typography>
        </Box>
        <Grid container spacing={4}>
          <Grid item container xs={12}>
            <FermenMainset />
          </Grid>

          <Grid item container xs={12} sm={12} md={6}>
            <FermenDetail01 />
          </Grid>
          <Grid item container xs={12} sm={12} md={6}>
            <FermenDetail02 />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default FermentedDryer;
