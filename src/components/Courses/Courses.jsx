import React from 'react';
import './Courses.css';
import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';


const Courses = () => {
 

  return (
    <div className="Courses">
       <div className="title-course">Courses</div>
       <div className="current-link">
        <div className="current1">
          <div className="current-img">
            <img src="../src/assets/images/dashboard_gray.svg" alt="" />
          </div>
          <div className="current-name">Dashboard /</div>
        </div>
        <div className="current2">Courses</div>
       </div>
      <div className="home-courses">
        <div className="table-top">
          <div className="table-title">List of Courses</div>
          <div className="btn-add">
          <Button fontSize='16px'fontWeight={400} height='44px' mb={2}  display="flex" justifyContent="start" width='216px'
            leftIcon={<img src="../src/assets/images/add.svg" alt="" />} 
             colorScheme='#4C847B;'  
             >
              <Link to="/home">Request new course</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Courses;
