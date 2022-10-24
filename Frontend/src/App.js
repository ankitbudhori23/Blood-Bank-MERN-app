import { Route, Routes } from "react-router-dom";
import Main from "./components/User/Main";
import Signup from "./components/User/Singup";
import Login from "./components/User/Login";
import LoginA from "./components/Admin/LoginA";
import MainA from "./components/Admin/MainA";
import Contact from "./components/contact";
import Home from "./components/landingsite/home";
import Header from "./components/Header/header";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  const user = localStorage.getItem("token");
  const admin = localStorage.getItem("tokens");

  return (
    <>
      <Routes>
        <Route path="/home" exact element={<Main />} />
        <Route path="/admin" exact element={<MainA />} />
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/logina" exact element={<LoginA />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
