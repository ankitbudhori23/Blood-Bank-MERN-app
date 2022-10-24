import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
// import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
// import 'semantic-ui-css/semantic.min.css'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Header /> */}
      <App />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
