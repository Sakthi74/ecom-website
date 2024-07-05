import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Form from "./components/Form";
import Home from "./pages/Home";
import Footer from "./components/Footer";

import Register from "./pages/Register";
import Table from "./components/Table";
import Card from "./components/Ecommerce";
import Check from "./components/check";
import { Admin } from "./pages/Admin";
import Productcard from "./components/Productcard";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form />}></Route>
          <Route path="/go" element={<Home />}></Route>
          <Route path="/went" element={<Form />}></Route>
          <Route path="/home" element={<Register />}></Route>
          <Route path="/enter" element={<Card />}></Route>
          <Route path="/table" element={<Table />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/inpro" element={<Productcard />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
