import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";
import { forwardRef } from "react";
// material
import { Box } from "@mui/material";

// ----------------------------------------------------------------------

interface Props {
  title: string;
  children: any;
}

const Page = forwardRef(({ children, title = "", ...other }: Props, ref) => (
  <Box ref={ref} {...other}>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    {children}
  </Box>
));

export default Page;
