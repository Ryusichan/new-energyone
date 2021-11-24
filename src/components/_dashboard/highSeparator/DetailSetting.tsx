import {
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { highDetailSetList } from "../../../_mocks_/highsetlist";

const DetailSetting = () => {
  return (
    <>
      <Typography variant="h6">고액분리기 세부설정</Typography>
      <List>
        {highDetailSetList.map((detailSet) => {
          <ListItem>
            <ListItemText primary={detailSet.name} />
            <TextField sx={{ maxWidth: 64, marginRight: 1 }} />%
          </ListItem>;
        })}
      </List>
    </>
  );
};

export default DetailSetting;
