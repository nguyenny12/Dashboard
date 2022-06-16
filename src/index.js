import { StyledEngineProvider } from "@mui/material/styles";
import * as React from "react";
import ReactDOM from "react-dom/client";
// import "./Dashboard";
import HeaderDashBoard from "./Dashboard";
ReactDOM.createRoot(document.querySelector("#root")).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <HeaderDashBoard />
    </StyledEngineProvider>
  </React.StrictMode>
);
