import ReactDom from "react-dom/client";
import * as React from "react";
import App from "./App";
import { BrowserRouter } from 'react-router-dom'


import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ClientProvider } from "./query/ClientProvider";

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ClientProvider>
        <App />
        <ReactQueryDevtools />
      </ClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
