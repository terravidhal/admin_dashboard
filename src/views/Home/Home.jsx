import React from 'react';
import './Home.css';
import { Avatar, Button } from '@chakra-ui/react'
import { Link, Outlet } from 'react-router-dom';


const Home = () => {

  return(
      <div className="Home">
        <div className="menu-left">
          <div className="title">
            <img src="../src/assets/images/Group7.svg" alt="" />
          </div>
          <div className="dashboard-btn">
              <Button fontSize='16px'fontWeight={400} height='44px' mb={2}  display="flex" justifyContent="start" width='100%'
            leftIcon={<img src="../src/assets/images/dashboard.svg" alt="" />} 
             colorScheme='#4C847B;'  
             >
              <Link to="/home">Dashboard</Link>
             </Button>
             <div className="border-line"></div>
          </div>
          <div className="items-dashboard">
            <div className="item-dashboard flex">
              <div className="icon">
              <img src="../src/assets/images/courses.svg" alt="" />
              </div>
              <div className="name text-white">
                 <Link to="/home/courses">Courses</Link>
              </div>
            </div>
            <div className="border-line"></div>
            <div className="item-dashboard flex">
              <div className="icon">
              <img src="../src/assets/images/person.svg" alt="" />
              </div>
              <div className="name text-white">
                 <Link to="">My Profile</Link>
              </div>
            </div>
            <div className="border-line"></div>
            <div className="item-dashboard flex">
              <div className="icon">
              <img src="../src/assets/images/rate_review.svg" alt="" />
              </div>
              <div className="name text-white">
                 <Link to="">Notes</Link>
              </div>
            </div>
            <div className="border-line"></div>
            <div className="item-dashboard flex">
              <div className="icon">
              <img src="../src/assets/images/perm_contact_calendar.svg" alt="" />
              </div>
              <div className="name text-white">
                 <Link to="">Kids</Link>
              </div>
            </div>
            <div className="border-line"></div>
            <div className="item-dashboard flex">
              <div className="icon">
              <img src="../src/assets/images/calendar_today.svg" alt="" />
              </div>
              <div className="name text-white">
                 <Link to="">Calendar</Link>
              </div>
            </div>
          </div>
          <div className="logout-btn">
          <Button fontWeight={400} height='44px' mt={5} mb={5} color='black' fontSize='16px' width='100%'
            leftIcon={<img src="../src/assets/images/logout.svg" alt="" />} 
             colorScheme='#E2DDBF;'  
             >
              <Link to="/login">Logout</Link>
            </Button>
          </div>
        </div>
        <div className="home-content">
          <div className="profile-menu">
            <div className="profile-menu-content">
               <div className="icon-notif">
              <img src="../src/assets/images/notif.svg" alt="" />
               </div>
               <div className="infos-user">
                 <div className="profil-name">Elame Vidhal</div>
                 <div className="profil-img">
                   <Avatar height={50} width={50} name='Elame Vidhal'src="../src/assets/images/terra.jpg" />
                 </div>
                 <div className="profil-chevr">
                     <img src="../src/assets/images/morechevron.svg" alt="" />
                 </div>
               </div>
            </div>
          </div>
          <Outlet />
        </div>
      </div>
  );
};

export default Home;
