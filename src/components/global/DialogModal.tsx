import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import dialogSlice from "../../store/reducers/dialogSlice";
import snackBarSlice from "../../store/reducers/snackBarSlice";

const DialogModal = () => {
  const dispatch = useDispatch();
  const dialogState = useSelector((state: any) => state.dialog);

  const { dialogOpen, dialogTitle, dialogMessage, dialogType } = dialogState;

  const snackbarMessage = (message: string) => {
    dispatch(
      snackBarSlice.actions.setSnackbarInfo({
        snackbarOpen: true,
        snackbarMessage: `${message}의 상태가 변경 되었습니다.`,
        snackbarType: "success",
      })
    );
  };

  const handleClose = () => {
    dispatch(dialogSlice.actions.closeDialog(false));
  };

  const handleSubmit = () => {
    handleClose();
    snackbarMessage(dialogTitle);
  };

  let innerLayout = <div />;

  const renderConfirmDialog = () => {
    return (
      <>
        <DialogTitle>{dialogTitle}</DialogTitle>
        <DialogContent>
          <DialogContentText>{dialogMessage}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="inherit">
            취소
          </Button>
          <Button onClick={handleSubmit} variant="contained">
            변경
          </Button>
        </DialogActions>
      </>
    );
  };

  const renderpasswordConfirmDialog = () => {
    return (
      <>
        <DialogTitle>{dialogTitle}</DialogTitle>
        <DialogContent>
          <DialogContentText>{dialogMessage}</DialogContentText>
          <TextField
            id="passwordConfirm"
            // label="Password"
            placeholder="Password를 입력해주세요."
            type="password"
            autoComplete="current-password"
            margin="normal"
            variant="outlined"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="inherit">
            취소
          </Button>
          <Button onClick={handleSubmit} variant="contained">
            변경
          </Button>
        </DialogActions>
      </>
    );
  };

  switch (dialogType) {
    case "basicConfirm":
      innerLayout = renderConfirmDialog();
      break;
    case "passwordConfirm":
      innerLayout = renderpasswordConfirmDialog();
      break;
    default:
      innerLayout = <div />;
      break;
  }

  return (
    <Dialog open={dialogOpen} onClose={handleClose}>
      {innerLayout}
    </Dialog>
  );
};

export default DialogModal;
