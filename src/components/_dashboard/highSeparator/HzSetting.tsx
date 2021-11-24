import {
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { highHZSetList } from "../../../_mocks_/highsetlist";

const HzSetting = () => {
  return (
    <>
      <Typography variant="h6">고액분리기 HZ설정</Typography>
      <List>
        {highHZSetList.map((hzset) => (
          <ListItem>
            <ListItemText primary={hzset.name} />
            <TextField
              sx={{ maxWidth: 64, marginRight: 1 }}
              value={hzset.value}
            />
            %
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default HzSetting;
