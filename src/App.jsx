import React from "react";
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./views/Login/Login";
import Home from "./views/Home/Home";
import Courses from "./components/Courses/Courses";
import HomeHome from "./components/HomeHome/HomeHome";


const App = () => {
  return (
        <Routes>
        <Route path="/" element={<Navigate replace to="/home"  />} />  
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} >
          <Route index element={<HomeHome />} />
          <Route path="/home/courses" element={<Courses />} />
        </Route>
      </Routes>
  );
};

export default App;
