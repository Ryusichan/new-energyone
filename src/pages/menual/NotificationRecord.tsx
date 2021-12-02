import { filter } from "lodash";
import { useState } from "react";
// material
import {
  Card,
  Table,
  Stack,
  Checkbox,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
  TableContainer,
  TablePagination,
} from "@mui/material";
// components
import Page from "../../components/Page";
import Scrollbar from "../../components/Scrollbar";
import SearchNotFound from "../../components/SearchNotFound";
import {
  NotificationHead,
  NotificationToolbar,
  NotificationMenu,
} from "../../components/_dashboard/notification";
//
import notifiRecord from "../../_mocks_/notifiRecord";

const TABLE_HEAD = [
  { id: "number", label: "번호", alignRight: false },
  { id: "name", label: "이름" },
  { id: "onTime", label: "ON시간", alignRight: false },
  { id: "offTime", label: "OFF시간", alignRight: false },
  { id: "count", label: "발생횟수", alignRight: false },
  { id: "" },
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
    // @ts-ignore
    return filter(
      array,
      (_user: any) =>
        _user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
  }
  return stabilizedThis.map((el: any) => el[0]);
};

export default function NotificationRecord() {
  const [page, setPage] = useState<number>(0);
  const [order, setOrder] = useState<string>("asc");
  const [selected, setSelected] = useState<any>([]);
  const [orderBy, setOrderBy] = useState<string>("number");
  const [filterName, setFilterName] = useState<string>("");
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);

  const handleRequestSort = (event: any, property: any) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: any) => {
    if (event.target.checked) {
      const newSelecteds = notifiRecord.map((n: any) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: any, name: any) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: any[] = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
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
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - notifiRecord.length) : 0;

  const filteredUsers = applySortFilter(
    notifiRecord,
    getComparator(order, orderBy),
    filterName
  );

  const isUserNotFound = filteredUsers.length === 0;

  return (
    <Page title="NotificationRecord | Minimal-UI">
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <Typography variant="h4" gutterBottom>
            작동/알람 기록화면
          </Typography>
        </Stack>

        <Card>
          <NotificationToolbar
            numSelected={selected.length}
            filterName={filterName}
            onFilterName={handleFilterByName}
          />
          <TableContainer sx={{ minWidth: 800 }}>
            <Table>
              <NotificationHead
                order={order}
                orderBy={orderBy}
                headLabel={TABLE_HEAD}
                rowCount={notifiRecord.length}
                numSelected={selected.length}
                onRequestSort={handleRequestSort}
                onSelectAllClick={handleSelectAllClick}
              />
              <TableBody>
                {filteredUsers
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row: any) => {
                    const { id, name, onTime, offTime, count, number } = row;
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
                        <TableCell padding="checkbox">
                          <Checkbox
                            checked={isItemSelected}
                            onChange={(event) => handleClick(event, name)}
                          />
                        </TableCell>

                        <TableCell component="th" scope="row" padding="none">
                          <Stack
                            direction="row"
                            alignItems="center"
                            spacing={2}
                            sx={{ pl: 2 }}
                          >
                            <Typography variant="subtitle2" noWrap>
                              {number}
                            </Typography>
                          </Stack>
                        </TableCell>
                        <TableCell>
                          <Typography variant="subtitle2" align="left">
                            {name}
                          </Typography>
                        </TableCell>
                        <TableCell align="left">{onTime}</TableCell>
                        <TableCell align="left">{offTime}</TableCell>
                        <TableCell align="left">{count}</TableCell>

                        <TableCell align="right">
                          <NotificationMenu />
                        </TableCell>
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

          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={notifiRecord.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Card>
      </Container>
    </Page>
  );
}
