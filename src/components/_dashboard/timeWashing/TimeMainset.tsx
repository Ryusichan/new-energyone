import {
  List,
  ListItem,
  ListItemText,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  Grid,
} from "@mui/material";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";

import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

const GridBox = styled(Grid)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  padding: theme.spacing(3),
  borderRadius: 12,
}));

const TimeMainset = () => {
  const timeMainsetArray = useSelector(
    (state: RootState) => state.timeWashState.timeWashMain
  );

  return (
    <GridBox item xs={12}>
      <Typography variant="h6">메인설정</Typography>
      <List>
        {timeMainsetArray.map((data) => (
          <MainSetting name={data.name} value={data.value} key={data.name} />
        ))}
      </List>
    </GridBox>
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

export default TimeMainset;
