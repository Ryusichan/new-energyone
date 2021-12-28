import {
  List,
  ListItem,
  ListItemText,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import { RootState } from "../../../store/store";
import { useSelector } from "react-redux";

const MenualSaveTank = () => {
  //배기FAN
  const outputFan = useSelector(
    (state: RootState) => state.fermenterState.autoFermenTationArray[5]
  );

  //배기밸브
  const outputValve = useSelector(
    (state: RootState) => state.fermenterState.autoFermenTationArray[6]
  );

  //A수중PUMP
  const aWaterPump = useSelector(
    (state: RootState) => state.saveTankState.saveTankArray[0]
  );

  //A전자밸브
  const aElectroValve = useSelector(
    (state: RootState) => state.saveTankState.saveTankArray[2]
  );

  //B수중PUMP
  const bWaterPump = useSelector(
    (state: RootState) => state.saveTankState.saveTankArray[1]
  );

  //분진제거밸브
  const ejectValve = useSelector(
    (state: RootState) => state.fermenterState.autoFermenTationArray[4]
  );

  const menualSaveTankArray = [
    outputFan,
    outputValve,
    aWaterPump,
    aElectroValve,
    bWaterPump,
    ejectValve,
  ];

  return (
    <>
      <Typography variant="h6">저장탱크</Typography>
      <List>
        {menualSaveTankArray.map((data) => (
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

export default MenualSaveTank;
