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
import { hightMainSetList } from "../../../_mocks_/highsetlist";

const WarpToggleButton = styled(ToggleButton)(({ theme }) => ({
  "& .Mui-selected": {
    backgroundColor: "#2196f3",
    color: "red",
  },
}));

const WarpMainSetting = () => {
  return (
    <>
      <Typography variant="h6">고액분리기 세부설정</Typography>
      <List>
        {hightMainSetList.map((data) => (
          <MainSetting name={data.name} value={data.value} />
        ))}
        <ListItem sx={{ flexDirection: "column", alignItems: "start" }}>
          <ListItemText primary="강제배출" />
          <Button color="primary" variant="contained" fullWidth sx={{ mt: 2 }}>
            배출하기
          </Button>
        </ListItem>
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
    newToggle: boolean
  ) => {
    setToggleValue(newToggle);
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
        >
          <WarpToggleButton value={true}>ON</WarpToggleButton>
          <WarpToggleButton value={false}>OFF</WarpToggleButton>
        </ToggleButtonGroup>
      </ListItem>
    </>
  );
};

export default WarpMainSetting;
