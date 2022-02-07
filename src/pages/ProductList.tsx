// import React, { useEffect, useState } from "react";

// material
import { Stack, Container, Typography } from "@mui/material";
// components
import Page from "../components/Page";
import { styled } from "@mui/system";
import { isMobile } from "react-device-detect";
import PRODUCTLIST from "../_mocks_/productlist";
import ProductListWebView from "../components/_dashboard/productList/ProductListWebView";
import ProductListMobileView from "../components/_dashboard/productList/ProductListMobileView";
import DateCount from "../components/_dashboard/productList/DateCount";
import LogoutButton from "../components/authentication/login/LogoutButton";

const ProductionLayout = styled("div")(({ theme }: any) => ({
  background: "#F6F6F6",
}));

export default function ProductList() {
  return (
    <ProductionLayout>
      <Page title="ProductList | Minimal-UI">
        <Container sx={{ pt: 8, pb: 8 }}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            mb={5}
          >
            <Stack>
              <Typography variant="h4" gutterBottom>
                관리중 아파트 목록
              </Typography>
              <Typography variant="subtitle2" gutterBottom>
                {PRODUCTLIST.length} List
              </Typography>
            </Stack>
            <Stack>
              <LogoutButton />
              <DateCount />
            </Stack>
          </Stack>

          {isMobile ? <ProductListMobileView /> : <ProductListWebView />}
        </Container>
      </Page>
    </ProductionLayout>
  );
}
