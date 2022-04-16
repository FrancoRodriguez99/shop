import React from "react";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import * as ReactDOMClient from "react-dom/client";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
