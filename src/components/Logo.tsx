// material
import { Box } from "@mui/material";

// ----------------------------------------------------------------------

interface Props {
  sx?: object;
}

export default function Logo({ sx }: Props) {
  return (
    <Box
      component="img"
      src="/static/logo.svg"
      sx={{ width: "auto", height: 40, ...sx }}
    />
  );
}
