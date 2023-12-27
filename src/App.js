import React from "react";
import SimpleBarReact from "simplebar-react";

import "./App.css";
import Routers from "./routes/Router.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <SimpleBarReact className="h-screen simplebar-scrollbar">
      <Routers />
      <ToastContainer />
    </SimpleBarReact>
  );
}

export default App;
