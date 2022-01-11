import React, { useState } from "react";

import {
  Button,
  Typography,
  Box,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useDispatch } from "react-redux";

import aSeperatorState from "../../../store/reducers/aSeperatorState";

const GridBox = styled(Grid)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  padding: theme.spacing(3),
  borderRadius: 12,
}));

const AutomaticDrive = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  // const handleOpenModal = (name: string, value: boolean) => {
  //   setOpenModal(true);
  //   console.log(name, value);
  // };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleSubmit = () => {
    setOpenModal(false);
    // setStateautoDetailState(name, !value);
  };

  const dispatch = useDispatch();
  // const highSeparatorState = useSelector(
  //   (state: RootState) => state.aSeperatorState.ainletPump
  // );

  // const fermentDryState = useSelector(
  //   (state: RootState) => state.aSeperatorState.ahighSeparator
  // );

  const setStateautoDetailState = (name: string, value: boolean) => {
    let newValue = !value;
    // setTimeout(() => {
    //   console.log(  "보내기전 값", name, newValue);
    // }, 1000);
    dispatch(aSeperatorState.actions.setToggleSelect({ name, newValue }));
  };

  const sysTem = [
    { name: "고액분리기", type: "highSeparator", systemValue: false },
    { name: "발효건조기", type: "fermentDry", systemValue: true },
  ];

  return (
    <>
      <GridBox item xs={12}>
        <Typography variant="h6">자동운전</Typography>
        <Box style={{ display: "flex" }} sx={{ mt: 6 }}>
          {sysTem.map(({ name, type, systemValue }) => (
            <Button
              key={name}
              variant="contained"
              color={systemValue ? "primary" : "inherit"}
              fullWidth
              // onClick={() => handleOpenModal("highSeparatorState", systemValue)}
              onClick={() => setStateautoDetailState(type, systemValue)}
              sx={{ ml: 1, mr: 1 }}
            >
              {name}
              <br />
              {systemValue ? "가동" : "정지"}상태
            </Button>
          ))}
        </Box>
      </GridBox>

      <Dialog open={openModal} onClose={handleCloseModal}>
        <DialogTitle id="modal-modal-title">고액 분리기</DialogTitle>
        <DialogContent
          id="modal-modal-description"
          sx={{ mt: 2, display: "flex", flexDirection: "column" }}
        >
          고액 분리기를 가동 하시겠습니까?
          <br />
          비밀번호를 입력해주세요.
          <TextField
            type="password"
            sx={{ mt: 2 }}
            placeholder="비밀번호를 입력"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color={"inherit"}>
            취소
          </Button>
          <Button onClick={handleSubmit} variant={"contained"}>
            설정
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AutomaticDrive;
