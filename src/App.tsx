import React from "react";

// routes
import Router from "./routers/Routes";
// theme
import ThemeConfig from "./theme";
import GlobalStyles from "./theme/globalStyles";
// components
// import ScrollToTop from "./components/ScrollToTop";
import { BaseOptionChartStyle } from "./components/charts/BaseOptionChart";
// import DashboardLayout from "./layouts/dashboard";

// import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <ThemeConfig>
      {/* <ScrollToTop /> */}
      <GlobalStyles />
      <BaseOptionChartStyle />
      {/* <DashboardLayout /> */}
      <Router />
    </ThemeConfig>
  );
}

export default App;
