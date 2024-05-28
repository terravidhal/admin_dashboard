import React from 'react';
import './LoginPopup.css';
import { Button, Checkbox, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { Link } from 'react-router-dom';


const LoginPopup = () => {
  return (
    <div className="LoginPopup">
       <div className="title">Login</div>
       <div className="form-content">
       <InputGroup >
         <InputLeftElement height={54} pointerEvents='none'>
           <img src="../src/assets/images/user.svg" alt="" />
         </InputLeftElement>
         <Input focusBorderColor='#4c847b' height={54} type='text' borderColor='#DFDFDF'  placeholder='Username' _placeholder={{ opacity: 1, color: '#252122',fontSize:'16px' }} />
       </InputGroup>
       <InputGroup>
         <InputLeftElement height={54} pointerEvents='none'>
           <img src="../src/assets/images/lock.svg" alt="" />
         </InputLeftElement>
         <Input focusBorderColor='#4c847b' height={54} type='password' borderColor='#DFDFDF'  placeholder='Password' _placeholder={{ opacity: 1, color: '#252122',fontSize:'16px' }} />
       </InputGroup>
        <div className="infos">
           <Checkbox color='#252122'  colorScheme='green'  borderColor='#252122'>Remember Password</Checkbox>
           <p>Forgot password?&nbsp;<a href="#">Click Here</a></p>
        </div>
        <Button width='100%'
        leftIcon={<img src="../src/assets/images/out.svg" alt="" />} 
        height={54} colorScheme='linear-gradient(180deg, #69938F 0%, #4C847B 100%);'  
         >
          <Link to="/home">Login</Link>
         </Button>
       </div>
    </div>
  );
};


export default LoginPopup;
