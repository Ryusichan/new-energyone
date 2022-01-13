import React from "react";
import { styled } from "@mui/system";
import {
  Card,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemSecondaryAction,
  ListItemText,
} from "@mui/material";
import PRODUCTLIST from "../../../_mocks_/productlist";
import { useNavigate } from "react-router-dom";

const ProductionMobileAvatar = styled("div")(({ theme }: any) => ({
  background: "#F6F6F6",
  width: 36,
  height: 36,
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "0.8rem",
  color: theme.palette.grey[600],
}));

const ProductsList = styled(List)(({ theme }: any) => ({
  overflow: "auto",
  maxHeight: "calc(100vh - 200px)",
  "&::-webkit-scrollbar": {
    width: "0.5em",
  },
  "&::-webkit-scrollbar-track": {},
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: theme.palette.grey[300],
    borderRadius: "0.25em",
  },
}));

const TankLevelBox = styled("span")(({ theme }: any) => ({
  display: "flex",
  width: "80px",
  height: "100%",
}));

const TankLevelBg = styled("span")(({ theme }: any) => ({
  background: "#EEF2F9",
  width: "100%",
  height: "4px",
  position: "absolute",
}));

const TankLevelValue = styled("span")<{ tanklevel: number }>(
  ({ theme, tanklevel }: any) => ({
    background: theme.palette.primary.main,
    width: `${(tanklevel * 8) / 10}px`,
    height: "4px",
    zIndex: 1,
  })
);

const TankValueText = styled("span")(({ theme }: any) => ({
  position: "absolute",
  top: "-15px",
  left: "50%",
  transform: "translateX(-50%)",
  fontSize: "11px",
  color: theme.palette.grey[600],
}));

const ProductListMobileView = () => {
  const navigate = useNavigate();
  const moveProduct = (id: string) => {
    navigate("/dashboard/app");
  };

  return (
    <Card>
      <ProductsList dense>
        {PRODUCTLIST.map((product: any) => (
          <ListItemButton
            onClick={() => {
              moveProduct(product.id);
            }}
          >
            <ListItemAvatar>
              <ProductionMobileAvatar>{product.number}</ProductionMobileAvatar>
            </ListItemAvatar>
            <ListItemText
              primary={product.name}
              secondary={product.contractdate}
            />
            <ListItemSecondaryAction>
              <TankLevelBox>
                <TankLevelBg />
                <TankLevelValue tanklevel={product.tankLevel} />
                <TankValueText>{product.tankLevel}%</TankValueText>
              </TankLevelBox>
              {/* <ListItemText primary={product.tankLevel} /> */}
            </ListItemSecondaryAction>
          </ListItemButton>
        ))}
      </ProductsList>
    </Card>
  );
};

export default ProductListMobileView;
