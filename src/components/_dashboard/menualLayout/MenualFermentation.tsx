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

const MenualFermentation = () => {
  //교반기정회전
  const rotation = useSelector(
    (state: RootState) => state.fermenterState.autoFermenTationArray[0]
  );

  //교반기역회전
  const reverseRotation = useSelector(
    (state: RootState) => state.fermenterState.autoFermenTationArray[1]
  );

  //배출정회전
  const rotation2 = useSelector(
    (state: RootState) => state.fermenterState.autoFermenTationArray[2]
  );

  //배출역회전
  const reverseRotation2 = useSelector(
    (state: RootState) => state.fermenterState.autoFermenTationArray[3]
  );

  //발효건조가열
  const heating = useSelector(
    (state: RootState) => state.autoDetailState.activationHeater
  );

  // A LINE 세척 SOL
  const aLineSol = useSelector(
    (state: RootState) => state.autoDetailState.aLineCleanSol
  );

  // B LINE 세척 SOL
  const bLineSol = useSelector(
    (state: RootState) => state.autoDetailState.bLineCleanSol
  );

  const fermentationArray = [
    rotation,
    reverseRotation,
    rotation2,
    reverseRotation2,
    heating,
    aLineSol,
    bLineSol,
  ];

  return (
    <>
      <Typography variant="h6">발효건조기</Typography>
      <List>
        {fermentationArray.map((data) => (
          <MainSetting name={data.name} value={data.value} key={data.id} />
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

export default MenualFermentation;
