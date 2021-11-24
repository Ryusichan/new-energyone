import {
  Button,
  List,
  ListItem,
  ListItemText,
  Switch,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { hightMainSetList } from "../../../_mocks_/highsetlist";

const MainSetting = () => {
  const [checked, setChecked] = useState(["TANKLEVEL"]);

  const handleToggle = (value: string) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <>
      <Typography variant="h6">메인설정</Typography>
      <List>
        {hightMainSetList.map((mainset) => (
          <ListItem>
            <ListItemText primary={mainset.name} />
            <Switch
              edge="end"
              onChange={handleToggle("TANKLEVEL")}
              checked={checked.indexOf("TANKLEVEL") !== -1}
              inputProps={{
                "aria-labelledby": "switch-list-label-TANKLEVEL",
              }}
            />
          </ListItem>
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

export default MainSetting;
