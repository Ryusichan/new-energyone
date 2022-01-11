import PropTypes from "prop-types";
// material
import { visuallyHidden } from "@mui/utils";
import {
  Box,
  TableRow,
  TableCell,
  TableHead,
  TableSortLabel,
} from "@mui/material";

// ----------------------------------------------------------------------

interface Props {
  order: any;
  orderBy: string;
  rowCount: number;
  headLabel: Array<any>;
  onRequestSort: (event: any, property: any) => void;
}

export default function UserListHead({
  order,
  orderBy,
  headLabel,
  onRequestSort,
}: Props) {
  const createSortHandler = (property: any) => (event: any) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headLabel.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.alignRight ? "right" : "left"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              hideSortIcon
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box sx={{ ...visuallyHidden }}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
