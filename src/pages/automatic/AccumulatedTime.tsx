import { filter } from "lodash";

import { useState } from "react";

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
import SearchNotFound from "../../components/SearchNotFound";
import {
  AccumulatedTimeHead,
  AccumulatedTimeToolbar,
  AccumulatedTimeMenu,
} from "../../components/_dashboard/accumulatedtime";
//
import accumulTime from "../../_mocks_/accumulTime";

import { isMobile } from "react-device-detect";

const TABLE_HEAD = [
  { id: "number", label: "번호", alignRight: false },
  { id: "caption", label: "분류", alignRight: false },
  { id: "name", label: "이름", alignRight: false },
  { id: "accumulateTime", label: "가동누적시간", alignRight: false },
];

const TABLE_MOBILE_HEAD = [
  { id: "name", label: "이름", alignRight: false },
  { id: "accumulateTime", label: "가동누적시간", alignRight: false },
];

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
      (_user: any) =>
        _user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
  }
  return stabilizedThis.map((el: any) => el[0]);
};

export default function AccumulatedTime() {
  const [page, setPage] = useState<number>(0);
  const [order, setOrder] = useState<string>("asc");
  const [selected, setSelected] = useState<any>([]);
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
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - accumulTime.length) : 0;

  const filteredUsers = applySortFilter(
    accumulTime,
    getComparator(order, orderBy),
    filterName
  );

  const isUserNotFound = filteredUsers.length === 0;

  return (
    <div title="accumulatedTime | Minimal-UI">
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <Typography variant="h4" gutterBottom>
            누적시간화면
          </Typography>
        </Stack>

        <Card>
          <AccumulatedTimeToolbar
            filterName={filterName}
            onFilterName={handleFilterByName}
          />
          <TableContainer sx={{ maxHeight: "54vh" }}>
            <Table stickyHeader>
              <AccumulatedTimeHead
                order={order}
                orderBy={orderBy}
                headLabel={isMobile ? TABLE_MOBILE_HEAD : TABLE_HEAD}
                onRequestSort={handleRequestSort}
              />
              <TableBody>
                {filteredUsers
                  // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row: any) => {
                    const { id, name, number, accumulatedTime, caption } = row;
                    const isItemSelected = selected.indexOf(name) !== -1;

                    return (
                      <TableRow
                        hover
                        key={id}
                        tabIndex={-1}
                        role="checkbox"
                        selected={isItemSelected}
                        aria-checked={isItemSelected}
                      >
                        {isMobile ? undefined : (
                          <TableCell align="left">{number}</TableCell>
                        )}

                        {isMobile ? undefined : (
                          <TableCell align="left">{caption}</TableCell>
                        )}

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
                        <TableCell align="left">{accumulatedTime}</TableCell>

                        {/* <TableCell align="right">
                          <AccumulatedTimeMenu />
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
              {isUserNotFound && (
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

          {/* <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={accumulTime.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          /> */}
        </Card>
      </Container>
    </div>
  );
}
