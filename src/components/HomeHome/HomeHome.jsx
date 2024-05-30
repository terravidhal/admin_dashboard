import React from 'react';
import './HomeHome.css';
import coursesData from '../../utils/coursesData';
import CourseItem from '../CourseItem/CourseItem';




const HomeHome = () => {

  return (
    <div className="HomeHome">
      <div className="title-home">Home</div>
      <div className="home-courses">
        <div className="courses-items">
          {
            coursesData.map((course)=>{
              return (
                <CourseItem key={course.title} course={course} />
              );
            })
          }
        </div>
      </div>
    </div>
  )
}

export default HomeHome;
