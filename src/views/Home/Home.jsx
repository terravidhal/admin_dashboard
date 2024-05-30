import React from 'react';
import './Home.css';
import { Outlet } from 'react-router-dom';
import ProfilMenu from '../../components/ProfilMenu/ProfilMenu';
import MenuLeft from '../../components/MenuLeft/MenuLeft';


const Home = () => {

  return(
      <div className="Home">
        <MenuLeft />
        <div className="home-content">
          <ProfilMenu />
          <Outlet />
        </div>
      </div>
  );
};

export default Home;
