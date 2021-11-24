import PropTypes from "prop-types";
import React, { useState } from "react";
// material
import {
  Button,
  ButtonBase,
  Container,
  FormGroup,
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { Type } from "typescript";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import MainSetting from "./MainSetting";
import DetailSetting from "./DetailSetting";

// ----------------------------------------------------------------------

const InnerGrid = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(3),
}));

const GridBox = styled(Grid)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  padding: theme.spacing(3),
  borderRadius: 12,
}));

const SetList = styled(List)(({ theme }) => ({
  backgroundColor: "orange",
}));

interface Props {}

export default function HighSeparatorList({ ...other }: Props) {
  return (
    <Container sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <InnerGrid xs={12} sm={6} md={4}>
          <GridBox>
            <MainSetting />
          </GridBox>
        </InnerGrid>
        <InnerGrid xs={12} sm={6} md={4}>
          <GridBox>
            <DetailSetting />
          </GridBox>
        </InnerGrid>
        <InnerGrid xs={12} sm={6} md={4}>
          <GridBox>
            <Typography variant="h6">고액분리기 HZ설정</Typography>
          </GridBox>
        </InnerGrid>
      </Grid>
    </Container>
  );
}
