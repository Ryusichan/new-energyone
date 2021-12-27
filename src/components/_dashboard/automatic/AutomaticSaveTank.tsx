import React from "react";
import { Typography, Box, Grid, Fab } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { styled } from "@mui/material/styles";

const GridBox = styled(Grid)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  padding: theme.spacing(3),
  borderRadius: 12,
}));

const AutomaticSaveTank = () => {
  const autoSaveTank = useSelector(
    (state: RootState) => state.saveTankState.saveTankArray
  );

  return (
    <GridBox item xs={12}>
      <Typography variant="h6">저장탱크</Typography>
      <Box sx={{ display: "flex", mt: 4, pb: 2, overflowX: "auto" }}>
        {autoSaveTank.map((data) => (
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
    </GridBox>
  );
};

export default AutomaticSaveTank;
