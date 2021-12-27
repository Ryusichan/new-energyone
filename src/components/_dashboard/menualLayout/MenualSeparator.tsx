import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";

import { RootState } from "../../../store/store";
import { useSelector } from "react-redux";

const MenualSeparator = () => {
  //A고액분리기
  const aHighPressureSeparator = useSelector(
    (state: RootState) => state.aSeperatorState.aSeperatorArray[1]
  );

  //A흡입PUMP
  const aIntakePump = useSelector(
    (state: RootState) => state.aSeperatorState.aSeperatorArray[0]
  );

  //A수중PUMP
  const aWaterPump = useSelector(
    (state: RootState) => state.saveTankState.saveTankArray[0]
  );

  //A배수PUMP
  const aDrainPump = useSelector(
    (state: RootState) => state.aSeperatorState.aSeperatorArray[4]
  );

  //B고액분리기
  const bHighPressureSeparator = useSelector(
    (state: RootState) => state.bSeperatorState.bSeperatorArray[1]
  );

  //B흡입PUMP
  const bIntakePump = useSelector(
    (state: RootState) => state.bSeperatorState.bSeperatorArray[0]
  );

  //B수중PUMP
  const bWaterPump = useSelector(
    (state: RootState) => state.saveTankState.saveTankArray[1]
  );

  const menualSeparatorArray = [
    aHighPressureSeparator,
    aIntakePump,
    aWaterPump,
    aDrainPump,
    bHighPressureSeparator,
    bIntakePump,
    bWaterPump,
  ];

  return (
    <>
      <Typography variant="h6">고액분리기</Typography>
      <List>
        {menualSeparatorArray.map((data) => (
          <MainSetting name={data.name} value={data.value} key={data.name} />
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

export default MenualSeparator;
