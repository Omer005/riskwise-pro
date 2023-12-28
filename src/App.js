import React, { useEffect } from "react";
import SimpleBarReact from "simplebar-react";

import "./App.css";
import Routers from "./routes/Router.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
function App() {
  const { token } = useSelector((state) => state.auth);
const navigate =useNavigate()
  useEffect(()=>{
if(token){
  navigate("/")
}else{
  navigate("/login")

}
  },[])
  return (
    <SimpleBarReact className="h-screen simplebar-scrollbar">
      <Routers />
      <ToastContainer />
    </SimpleBarReact>
  );
}

export default App;
