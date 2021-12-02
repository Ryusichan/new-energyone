import {
  Button,
  List,
  ListItem,
  ListItemText,
  Switch,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { menualSaveTank } from "../../../_mocks_/menualLayout";

const MenualSaveTank = () => {
  return (
    <>
      <Typography variant="h6">저장탱크</Typography>
      <List>
        {menualSaveTank.map((data) => (
          <MainSetting name={data.name} value={data.value} />
        ))}
      </List>
    </>
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

export default MenualSaveTank;
