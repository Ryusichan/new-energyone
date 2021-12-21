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
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import autoSlice from "../../../store/reducers/autoSlice";

const GridBox = styled(Grid)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  padding: theme.spacing(3),
  borderRadius: 12,
}));

const AutomaticDrive = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleOpenModal = (name: string, value: boolean) => {
    setOpenModal(true);
    console.log(name, value);
  };
  
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  
  const handleSubmit = () => {
    setOpenModal(false);
    // setStateAutoSlice(name, !value);
  };
  
  const dispatch = useDispatch();
  const highSeparatorState = useSelector((
    state: RootState) => state.autoSlice.highSeparator);

  const fermentDry = useSelector((
    state: RootState) => state.autoSlice.fermentDry);

  const setStateAutoSlice = (name: any, value: any) => {
    dispatch(autoSlice.actions.setToggleSelect((value: any) => ({
      name,
      value,
      })));
  };

  const sysTem = [
    { name: "고액분리기", systemValue: highSeparatorState},
    { name: "발효건조기", systemValue: fermentDry },
  ];

  return (
    <>
      <GridBox item xs={12}>
        <Typography variant="h6">자동운전</Typography>
        <Box style={{ display: "flex" }} sx={{ mt: 6 }}>
          {sysTem.map(({ name, systemValue }) => (
            <Button
              key={name}
              variant="contained"
              color={systemValue ? "primary" : "inherit"}
              fullWidth
              // onClick={() => handleOpenModal("highSeparatorState", systemValue)}
              // onClick={() => setStateAutoSlice(name, {highSeparator, systemValue})}
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
