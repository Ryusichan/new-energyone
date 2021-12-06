import {
  Button,
  List,
  ListItem,
  ListItemText,
  Switch,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  Grid,
} from "@mui/material";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { fermenMainset } from "../../../_mocks_/fermenTation";

const GridBox = styled(Grid)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  padding: theme.spacing(3),
  borderRadius: 12,
}));

const ListSet = styled(List)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
}));

const FermenMainset = () => {
  return (
    <GridBox item xs={12}>
      <Typography variant="h6">메인설정</Typography>
      <ListSet>
        {fermenMainset.map((data) => (
          <MainSetting name={data.name} value={data.value} />
        ))}
      </ListSet>
    </GridBox>
  );
};

interface Props {
  name: string;
  value: boolean;
}

const MainSetting = ({ name, value }: Props) => {
  const [toggleValue, setToggleValue] = useState(value);

  const handleToggle = (
    e: React.MouseEvent<HTMLElement>,
    newToggle: boolean | null
  ) => {
    if (newToggle !== null) {
      setToggleValue(newToggle);
    }
  };

  return (
    <>
      <ListItem>
        <ListItemText primary={name} />

        <ToggleButtonGroup
          onChange={handleToggle}
          exclusive
          value={toggleValue}
          color={"primary"}
          sx={{
            "& .Mui-selected": {
              backgroundColor: "#2196f3",
              color: "#fff",
            },
          }}
        >
          <ToggleButton value={true}>ON</ToggleButton>
          <ToggleButton value={false}>OFF</ToggleButton>
        </ToggleButtonGroup>
      </ListItem>
    </>
  );
};

export default FermenMainset;
