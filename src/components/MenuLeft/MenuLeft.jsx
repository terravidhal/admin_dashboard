import React, { useState } from "react";
import "./MenuLeft.css";
import { Link } from "react-router-dom";
import dataItemMenu from "../../utils/dataItemMenu";
import ItemMenuLeft from "../ItemMenuLeft/ItemMenuLeft";
import { Button } from "@chakra-ui/react";





const MenuLeft = () => {
 

  return (
    <div className="menu-left">
      <div className="title">
        <img src="../src/assets/images/Group7.svg" alt="" />
      </div>
      <div className="menu-left-content">
         <div className="dashboard-btn">
        <Button
          fontSize="0.8rem" // 16px
          fontWeight={400}
          height="40px" // 44px
          mb={2}
          display="flex"
         // justifyContent="start"
          justifyContent={{ base: 'center', md: 'center', lg: 'start' }}
          width="100%"
          leftIcon={<img width={20} height={20} src="../src/assets/images/dashboard.svg" alt="" />}
          colorScheme="#4C847B;"
        >
          <Link to="/home">Dashboard</Link>
        </Button>
        <div className="border-line"></div>
         </div>
         <div className="items-dashboard">
       {
          dataItemMenu.map((item,ind)=>{
            return (
              <ItemMenuLeft key={item.name} name={item.name} 
                            link={item.link} ind={ind} navLink={item.navLink}
                            dataLenght={dataItemMenu.length - 1}
                            />
            );
          })
        }
         </div>
         <div className="logout-btn">
        <Button
          fontWeight={400}
          height="40px" // 44px
          mt={3}
         // mb={5}
          color="black"
          fontSize="0.8rem" // 16px
          width="100%"
          leftIcon={<img width={20} height={20} src="../src/assets/images/logout.svg" alt="" />}
          colorScheme="#E2DDBF;"
        >
          <Link to="/login">Logout</Link>
        </Button>
         </div>
      </div>
    </div>
  );
};

export default MenuLeft;
