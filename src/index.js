import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Modal from "react-modal";

import { Provider } from "react-redux";
import store from "./store/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "./index.css";

Modal.setAppElement("#root");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
