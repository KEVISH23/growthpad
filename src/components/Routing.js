import React , {useState} from 'react'
import { Route, BrowserRouter, Routes } from "react-router-dom";
import BeforeLoginHomePage from './BeforeLoginHomePage';
import Login from './Login'
import Signup from './Signup'
import Home from './Teacher/Home';
import StudentHome from './Student/StudentHome';
import Error404 from './Error404';
import StudentLogin from './Student/StudentLogin';


const Routing = () => {
  const [teacherDetails, setTeacherDetails] = useState([])
  const [studentDetails, setStudentDetails] = useState([])

  const getTeacherData = (tData) => {
        setTeacherDetails(tData)
  }
  const getStudentData = (sData) => {
    setStudentDetails(sData)
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<BeforeLoginHomePage />}></Route>
        <Route exact path="/teacher" element={<Home />}></Route>
        <Route exact path="/student" element={<StudentHome />}></Route>
        <Route
          exact
          path="/studentLogin"
          element={
            <StudentLogin details={studentDetails} getStudentData={getStudentData} />
          }
        ></Route>
        <Route
          exact
          path="/login"
          element={<Login details={teacherDetails} getTeacherData={getTeacherData} />}
        ></Route>
        <Route
          exact
          path="/signup"
          element={<Signup getTeacherData={getTeacherData} />}
        ></Route>
        <Route exact path="/*" element={<Error404 />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Routing