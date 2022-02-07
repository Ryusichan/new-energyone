import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  dialogOpen: boolean;
  dialogTitle: string;
  dialogMessage: string;
  dialogType: string;
};

const initialState: InitialState = {
  dialogOpen: false,
  dialogTitle: "",
  dialogMessage: "",
  dialogType: "",
};

const dialogSlice = createSlice({
  name: "dialog",
  initialState,
  reducers: {
    setDialogInfo(
      state,
      action: {
        payload: {
          dialogOpen: boolean;
          dialogTitle: string;
          dialogMessage: string;
          dialogType: string;
        };
      }
    ) {
      state.dialogOpen = action.payload.dialogOpen;
      state.dialogTitle = action.payload.dialogTitle;
      state.dialogMessage = action.payload.dialogMessage;
      state.dialogType = action.payload.dialogType;
    },
    showDialog(state, action) {
      state.dialogOpen = action.payload;
    },
    closeDialog(state, action) {
      state.dialogOpen = action.payload;
      state.dialogTitle = "";
      state.dialogMessage = "";
      state.dialogType = "";
    },
  },
});

export default dialogSlice;
