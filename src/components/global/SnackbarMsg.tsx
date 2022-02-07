import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Snackbar } from "@mui/material";

import MuiAlert, { AlertProps } from "@mui/material/Alert";
import snackBarSlice from "../../store/reducers/snackBarSlice";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} variant="filled" {...props} ref={ref} />;
});

const SnackbarMsg = () => {
  const dispatch = useDispatch();
  const snackbarState = useSelector((state: any) => state.snackbar);

  const { snackbarOpen, snackbarMessage, snackbarType } = snackbarState;

  // console.log('Snackbar', snackbarOpen, snackbarMessage, snackbarType)

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(snackBarSlice.actions.closeSnackbar(false));
  };

  return (
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      open={snackbarOpen}
      autoHideDuration={4000}
      onClose={handleClose}
    >
      <Alert
        onClose={handleClose}
        severity={snackbarType}
        // sx={{
        //   '& .MuiAlert-standardSuccess': {
        //     backgroundColor: '#2196f3',
        //   },
        // }}
      >
        {snackbarMessage}
      </Alert>
    </Snackbar>
  );
};

export default SnackbarMsg;
