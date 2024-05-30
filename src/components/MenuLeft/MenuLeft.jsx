import React from "react";
import "./MenuLeft.css";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import dataItemMenu from "../../utils/dataItemMenu";
import ItemMenuLeft from "../ItemMenuLeft/ItemMenuLeft";

const MenuLeft = () => {
  return (
    <div className="menu-left">
      <div className="title">
        <img src="../src/assets/images/Group7.svg" alt="" />
      </div>
      <div className="dashboard-btn">
        <Button
          fontSize="16px"
          fontWeight={400}
          height="44px"
          mb={2}
          display="flex"
          justifyContent="start"
          width="100%"
          leftIcon={<img src="../src/assets/images/dashboard.svg" alt="" />}
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
          height="44px"
          mt={5}
          mb={5}
          color="black"
          fontSize="16px"
          width="100%"
          leftIcon={<img src="../src/assets/images/logout.svg" alt="" />}
          colorScheme="#E2DDBF;"
        >
          <Link to="/login">Logout</Link>
        </Button>
      </div>
    </div>
  );
};

export default MenuLeft;
