import {
  Typography,
  Box,
  Grid,
  Fab,
  ListItem,
  ListItemText,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { isMobile } from "react-device-detect";

const GridBox = styled(Grid)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  padding: theme.spacing(3),
  borderRadius: 12,
}));

const Bseperator = () => {
  const bSeperator = useSelector(
    (state: RootState) => state.bSeperatorState.bSeperatorArray
  );

  return (
    <GridBox item xs={12} sx={{ mt: 4 }}>
      <Typography variant="h6">B 고액분리기</Typography>
      {isMobile ? (
        bSeperator.map((data) => (
          <ListItem key={data.id}>
            <ListItemText primary={data.name} />

            <ToggleButtonGroup
              // onChange={handleToggle}
              exclusive
              value={data.value}
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
        ))
      ) : (
        <Box sx={{ display: "flex", mt: 4, pb: 2, overflowX: "auto" }}>
          {bSeperator.map((data) => (
            <Box
              key={data.id}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                minWidth: 70,
                margin: "0 8px",
              }}
            >
              {data.value === true ? (
                <Fab
                  color="primary"
                  sx={{
                    width: 40,
                    height: 40,
                    fontSize: "13px",
                    fontWeight: "700",
                  }}
                >
                  ON
                </Fab>
              ) : (
                <Fab
                  sx={{
                    width: 40,
                    height: 40,
                    backgroundColor: "#EBEBEB",
                    color: "#969696",
                    fontSize: "13px",
                    fontWeight: "700",
                  }}
                >
                  OFF
                </Fab>
              )}
              <Typography sx={{ mt: 2 }} variant="caption">
                {data.name}
              </Typography>
            </Box>
          ))}
        </Box>
      )}
    </GridBox>
  );
};

export default Bseperator;
