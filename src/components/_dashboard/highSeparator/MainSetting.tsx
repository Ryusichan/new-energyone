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

import { RootState } from "../../../store/store";
import { useDispatch, useSelector } from "react-redux";
import snackBarSlice from "../../../store/reducers/snackBarSlice";

const WarpMainSetting = () => {
  const dispatch = useDispatch();

  const highMainArray = useSelector(
    (state: RootState) => state.highSeperatorDetailState.highSeperatorMain
  );

  const handlePush = () => {
    //snackbarTest
    dispatch(
      snackBarSlice.actions.setSnackbarInfo({
        snackbarOpen: true,
        snackbarMessage: "저장탱크 배출이 완료되었습니다.",
        snackbarType: "success",
      })
    );
  };

  return (
    <>
      <Typography variant="h6">메인설정</Typography>
      <List>
        {highMainArray.map((data) => (
          <MainSetting name={data.name} value={data.value} key={data.name} />
        ))}
        <ListItem sx={{ flexDirection: "column", alignItems: "start" }}>
          <ListItemText primary="강제배출" />
          <Button
            color="primary"
            variant="contained"
            fullWidth
            sx={{ mt: 2 }}
            onClick={handlePush}
          >
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
