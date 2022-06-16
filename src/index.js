import { StyledEngineProvider } from "@mui/material/styles";
import * as React from "react";
import ReactDOM from "react-dom/client";
import DashboardContent from "./Dashboard";
ReactDOM.createRoot(document.querySelector("#root")).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <DashboardContent />
    </StyledEngineProvider>
  </React.StrictMode>
);
