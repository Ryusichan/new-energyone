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

const GridBox = styled(Grid)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  padding: theme.spacing(3),
  borderRadius: 12,
}));

const AutomaticDrive = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleSubmit = () => {
    setOpenModal(false);
  };

  return (
    <>
      <GridBox item xs={12}>
        <Typography variant="h6">자동운전</Typography>
        <Box style={{ display: "flex" }} sx={{ mt: 6 }}>
          <Button variant="contained" fullWidth onClick={handleOpenModal}>
            고액분리기
            <br />
            가동중
          </Button>
          <Button variant="contained" color="inherit" fullWidth sx={{ ml: 2 }}>
            발효건조기
            <br />
            정지상태
          </Button>
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
