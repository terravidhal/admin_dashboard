import React from 'react';
import './Login.css';
import LoginPopup from '../../components/LoginPopup/LoginPopup';



const Login = () => {
  return (
    <div className="Login">
      <div className="login-top">
        <img src="../src/assets/images/Kids.png" alt="" />
      </div>
      <div className="login-bottom">
         <p>Privacy policy disclaimer.</p>
      </div>
      <LoginPopup/>
     </div>
  );
};

export default Login;
