import React from 'react';
import './HomeHome.css';
import { Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom';




const HomeHome = () => {
 
  return (
    <div className="HomeHome">
      <div className="title-home">Home</div>
      <div className="home-courses">
        <div className="courses-items">
          <div className="course-item">
            <div className="design1">
              <img src="../src/assets/images/book.svg" alt="" />
            </div>
            <div className="name-course-item">Courses</div>
            <div className="view-course-btn">
              <Button fontWeight={400} height='44px'  color='#05253A' fontSize='16px' width='100%'
              leftIcon={<img src="../src/assets/images/launch.svg" alt="" />} 
               colorScheme='#E2DDBF;'  
               >
                <Link to="/login">View Courses</Link>
              </Button>
            </div>
            <div className="design2">
              <img src="../src/assets/images/design2.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeHome;
