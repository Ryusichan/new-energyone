import { Typography, Box, Grid, Fab } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import { autoBseperator } from "../../../_mocks_/autoLayout";

const GridBox = styled(Grid)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  padding: theme.spacing(3),
  borderRadius: 12,
}));

const Bseperator = () => {
  return (
    <GridBox item xs={12} sx={{ mt: 4 }}>
      <Typography variant="h6">B 고액분리기</Typography>
      <Box sx={{ display: "flex", mt: 4, pb: 2, overflowX: "auto" }}>
        {autoBseperator.map((data) => (
          <Box
            key={data.name}
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

export default Bseperator;
