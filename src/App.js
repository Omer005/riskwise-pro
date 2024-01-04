import React, { useEffect } from "react";
import SimpleBarReact from "simplebar-react";

import "./App.css";
import Routers from "./routes/Router.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
var Cryptoapis = require('cryptoapis');


function App() {

  const { token } = useSelector((state) => state.auth);
const navigate =useNavigate()
  useEffect(()=>{
    const defaultClient = Cryptoapis.ApiClient.instance;
    const ApiKey = defaultClient.authentications['ApiKey'];
    // const ApiKey = defaultClient.authentications['3665d6ca6ba2e40ffc4783caf977e2bd60e24da5'];
    ApiKey.apiKey = '3665d6ca6ba2e40ffc4783caf977e2bd60e24da5';
    var api = new Cryptoapis.AssetsApi()
var assetId = "5b1ea92e584bf50020130612"; // {String} Defines the unique ID of the specific asset.
var opts = {
  'context': "yourExampleString" // {String} In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
};
api.getAssetDetailsByAssetID(assetId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

// if(token){
//   navigate("/")
// }else{
//   navigate("/login")

// }
  },[])
  return (
    <SimpleBarReact className="h-screen simplebar-scrollbar">
      <Routers />
      <ToastContainer />
    </SimpleBarReact>
  );
}

export default App;
