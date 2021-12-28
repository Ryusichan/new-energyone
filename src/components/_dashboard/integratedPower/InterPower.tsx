import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
  Grid,
  Box,
} from "@mui/material";
import { styled } from "@mui/material/styles";

import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

const GridBox = styled(Grid)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  padding: theme.spacing(3),
  borderRadius: 12,
}));

const InterPower = () => {
  const interVoltageArray = useSelector(
    (state: RootState) => state.intergratedPowerState.integratedPower
  );

  return (
    <GridBox item xs={12}>
      <Typography variant="h6">시간세척 설정</Typography>
      <List>
        {interVoltageArray.map((data) => (
          <DetailSetting
            name={data.name}
            value={data.value}
            key={data.name}
            unit={data.unit}
          />
        ))}
      </List>
    </GridBox>
  );
};

interface Props {
  name: string;
  value: number;
  unit: string;
}

const DetailSetting = ({ name, value, unit }: Props) => {
  return (
    <>
      <ListItem>
        <ListItemText primary={name} />
        <TextField
          size="small"
          sx={{ maxWidth: 64, marginRight: 1 }}
          type="number"
          value={value}
        />
        <Box sx={{ width: "50px", textAlign: "end" }}>{unit}</Box>
      </ListItem>
    </>
  );
};

export default InterPower;
