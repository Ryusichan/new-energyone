import { filter } from "lodash";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// material
import {
  Card,
  Table,
  Stack,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
  TableContainer,
  TablePagination,
} from "@mui/material";
// components
import SearchNotFound from "../components/SearchNotFound";
import {
  ProductListHead,
  ProductListToolbar,
  // UserMoreMenu,
} from "../components/_dashboard/productList";
//
import PRODUCTLIST from "../_mocks_/productlist";
import Page from "../components/Page";
import { styled } from "@mui/system";

const TABLE_HEAD = [
  { id: "number", label: "번호", alignRight: false },
  { id: "location", label: "지역", alignRight: false },
  { id: "name", label: "이름", alignRight: false },
  { id: "contractdate", label: "계약일시", alignRight: false },
  { id: "accumulateTime", label: "가동누적시간", alignRight: false },
  { id: "tankLavel", label: "저장탱크수위", alignRight: false },
];

const ProductionLayout = styled("div")(({ theme }: any) => ({
  width: "100%",
  height: "100%",
  padding: theme.spacing(4, 0),
}));

const descendingComparator = (a: any, b: any, orderBy: any) => {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
};

const getComparator = (order: string, orderBy: string) => {
  return order === "desc"
    ? (a: any, b: any) => descendingComparator(a, b, orderBy)
    : (a: any, b: any) => -descendingComparator(a, b, orderBy);
};

const applySortFilter = (array: any, comparator: any, query: any) => {
  const stabilizedThis = array.map((el: any, index: any) => [el, index]);
  stabilizedThis.sort((a: any, b: any) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  if (query) {
    return filter(
      array,
      (_product: any) =>
        _product.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
  }
  return stabilizedThis.map((el: any) => el[0]);
};

export default function ProductList() {
  const [page, setPage] = useState<number>(0);
  const [order, setOrder] = useState<string>("asc");
  const [orderBy, setOrderBy] = useState<string>("number");
  const [filterName, setFilterName] = useState<string>("");
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);

  const handleRequestSort = (event: any, property: any) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event: any, newPage: any) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleFilterByName = (event: any) => {
    setFilterName(event.target.value);
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - PRODUCTLIST.length) : 0;

  const filteredProducts = applySortFilter(
    PRODUCTLIST,
    getComparator(order, orderBy),
    filterName
  );

  const isProductNotFound = filteredProducts.length === 0;

  const navigate = useNavigate();

  const handleClickList = (event: any) => {
    navigate("/dashboard/app");
  };

  return (
    <ProductionLayout>
      <Page title="ProductList | Minimal-UI">
        <Container>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            mb={5}
          >
            <Typography variant="h4" gutterBottom>
              관리중 아파트 목록
            </Typography>
          </Stack>

          <Card>
            <ProductListToolbar
              filterName={filterName}
              onFilterName={handleFilterByName}
            />
            <TableContainer>
              <Table sx={{ minWidth: "720px" }}>
                <ProductListHead
                  order={order}
                  orderBy={orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={PRODUCTLIST.length}
                  onRequestSort={handleRequestSort}
                />
                <TableBody onClick={handleClickList}>
                  {filteredProducts
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row: any) => {
                      const {
                        id,
                        location,
                        name,
                        number,
                        contractdate,
                        AccumulatedTime,
                        tankLevel,
                      } = row;

                      return (
                        <TableRow hover key={id} tabIndex={-1}>
                          <TableCell component="th" scope="row">
                            {number}
                          </TableCell>

                          <TableCell align="left">{location}</TableCell>

                          <TableCell component="th" scope="row" padding="none">
                            <Stack
                              direction="row"
                              alignItems="center"
                              spacing={2}
                              sx={{ pl: 2 }}
                            >
                              <Typography variant="subtitle2" noWrap>
                                {name}
                              </Typography>
                            </Stack>
                          </TableCell>

                          <TableCell align="left">{contractdate}</TableCell>

                          <TableCell align="left">{AccumulatedTime}</TableCell>

                          <TableCell align="left">{tankLevel}%</TableCell>

                          {/* <TableCell align="right">
                            <UserMoreMenu />
                          </TableCell> */}
                        </TableRow>
                      );
                    })}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>
                {isProductNotFound && (
                  <TableBody>
                    <TableRow>
                      <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                        <SearchNotFound searchQuery={filterName} />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                )}
              </Table>
            </TableContainer>

            <TablePagination
              rowsPerPageOptions={[10, 20]}
              component="div"
              count={PRODUCTLIST.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Card>
        </Container>
      </Page>
    </ProductionLayout>
  );
}
