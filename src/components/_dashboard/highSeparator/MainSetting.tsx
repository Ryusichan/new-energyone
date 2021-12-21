import {
  Button,
  List,
  ListItem,
  ListItemText,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { hightMainSetList } from "../../../_mocks_/highsetlist";

const WarpMainSetting = () => {
  return (
    <>
      <Typography variant="h6">고액분리기 세부설정</Typography>
      <List>
        {hightMainSetList.map((data) => (
          <MainSetting name={data.name} value={data.value} key={data.name}/>
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

export default WarpMainSetting;
