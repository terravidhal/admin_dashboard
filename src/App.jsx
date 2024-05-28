import React from "react";
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./views/Login/Login";


const App = () => {
  return (
        <Routes>
        <Route path="/" element={<Navigate replace to="/login"  />} />  
        <Route path="/login" element={<Login />} />
      </Routes>
  );
};

export default App;
