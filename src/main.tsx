import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClientProvider } from "@tanstack/react-query";
import { DEFAULT_THEME, MantineProvider } from "@mantine/core";
import { queryClient } from "./lib/react-query.ts";
import App from "./App.tsx";
import "./index.css";
import "normalize.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <MantineProvider theme={DEFAULT_THEME}>
        <App />
      </MantineProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
