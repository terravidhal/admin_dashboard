import React from 'react';
import './LoginPopup.css';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { PhoneIcon } from '@chakra-ui/icons';


const LoginPopup = () => {
  return (
    <div className="LoginPopup">
       <div className="title">Login</div>
       <div className="form-content">
       <InputGroup>
         <InputLeftElement height={54} pointerEvents='none'>
           <img src="../src/assets/images/user.svg" alt="" />
         </InputLeftElement>
         <Input height={54} type='text' borderColor='#DFDFDF'  placeholder='Username' _placeholder={{ opacity: 1, color: '#252122',fontSize:'16px' }} />
       </InputGroup>
       <InputGroup>
         <InputLeftElement height={54} pointerEvents='none'>
           <img src="../src/assets/images/user.svg" alt="" />
         </InputLeftElement>
         <Input height={54} type='password' borderColor='#DFDFDF'  placeholder='Password' _placeholder={{ opacity: 1, color: '#252122',fontSize:'16px' }} />
       </InputGroup>
       </div>
    </div>
  );
};


export default LoginPopup;
