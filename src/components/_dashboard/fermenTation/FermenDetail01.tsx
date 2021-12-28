import {
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Grid,
} from "@mui/material";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";

import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

const innerValueStyle = {
  fontSize: 20,
  backgroundColor: "#2196f3",
  padding: "2px 6px",
  borderRadius: "4px",
  color: "#fff",
};

const GridBox = styled(Grid)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  padding: theme.spacing(3),
  borderRadius: 12,
}));

const FermenDetail01 = () => {
  const fermentDetail01Array = useSelector(
    (state: RootState) => state.fermentDryState.fermentDetail01
  );

  return (
    <GridBox item xs={12}>
      <Typography variant="h6">발효건조기 세부설정01</Typography>
      <List>
        {fermentDetail01Array.map((data) => (
          <DetailSetting
            name={data.name}
            value={data.value}
            key={data.name}
            unit={data.unit}
          />
        ))}
      </List>
    </GridBox>
  );
};

interface Props {
  name: string;
  value: number;
  unit: string;
}

const DetailSetting = ({ name, value, unit }: Props) => {
  const [detailValue, setValue] = useState<number>(value);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: any) => {
    setOpenModal(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleOpenModal();
    }
  };
  return (
    <>
      <ListItem>
        <ListItemText primary={name} />
        <TextField
          size="small"
          sx={{ maxWidth: 54, marginRight: 1 }}
          value={detailValue}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          type="number"
        />
        {unit}
      </ListItem>
      <Dialog open={openModal} onClose={handleCloseModal}>
        <DialogTitle id="modal-modal-title">{name}</DialogTitle>
        <DialogContent id="modal-modal-description" sx={{ mt: 2 }}>
          {name}을 <span style={innerValueStyle}>{detailValue}%</span>로 설정
          하시겠습니까?
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

export default FermenDetail01;
