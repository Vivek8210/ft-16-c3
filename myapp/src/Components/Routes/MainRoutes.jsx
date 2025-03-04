import React from "react";

import { Routes, Route } from "react-router-dom";
import { About } from "../pages/About";
import Books from "../pages/Books";
import { EditBookData } from "../pages/EditBookData";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Logout } from "../pages/Logout";
import { Navbar } from "../pages/Navbar";
import { SingleBook } from "../pages/SingleBook";
import { RequiredAuth } from "./RequiredAuth";

const MainRoutes = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
       {/* keep all the routes here  */}
       {/* /books/* route need to be protected */}
       <Route path="home" element={<Home/>}></Route>
       <Route path="about" element={<About/>} ></Route>
       
       <Route path="books" element={<Books/>} ></Route>
       <Route path="login" element={<Login/>} ></Route>
       <Route path="/books/*" element = {<RequiredAuth><Books/></RequiredAuth>}/>
      </Routes>
    </React.Fragment>
  );
};
export default MainRoutes;
