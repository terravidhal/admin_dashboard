import React from "react";
import "./ItemMenuLeft.css";
import { Link } from "react-router-dom";

const ItemMenuLeft = ({name, link, ind, dataLenght, navLink}) => {
  console.log(ind, dataLenght);
  return (
    <div className="ItemMenuLeft">
       <div className="item-dashboard flex">
          <div className="icon">
            <img src={link} alt="" />
          </div>
          <div className="name text-white">
            <Link to={navLink}>{name}</Link>
          </div>
       </div>
       <div className={ind === dataLenght ? 'border-line last': 'border-line'}></div>
    </div>
  );
};

export default ItemMenuLeft;
