import React from 'react'
import { Route, BrowserRouter, Routes } from "react-router-dom";
import BeforeLoginHomePage from './BeforeLoginHomePage';
import Login from './Login'
import Signup from './Signup'
import Home from './Teacher/Home';
import StudentHome from './Student/StudentHome';
import Error404 from './Error404';
import StudentLogin from './Student/StudentLogin';
const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<BeforeLoginHomePage />}></Route>
        <Route exact path="/teacher" element={<Home />}></Route>
        <Route exact path="/student" element={<StudentHome />}></Route>
        <Route exact path="/studentLogin" element={<StudentLogin details={[]}/>}></Route>
        <Route exact path="/login" element={<Login details={[]} />}></Route>
        <Route exact path="/signup" element={<Signup />}></Route>
        <Route exact path="/*" element={<Error404/>} ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Routing