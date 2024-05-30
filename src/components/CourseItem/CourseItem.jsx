import React from "react";
import "./CourseItem.css";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";



const CourseItem = ({course}) => {

  return (
    <div className="course-item">
      <div className="part1">
        <div className="design1">
          <img src="../src/assets/images/book.svg" alt="" />
        </div>
        <div className="name-course-item">{course.title}</div>
      </div>
      <div className="view-course-btn">
        <Button
          fontWeight={400}
          height="38px"
          display="flex"
          justifyContent="start"
          color="#05253A"
          fontSize="16px"
          width="180px"
          leftIcon={<img src="../src/assets/images/launch.svg" alt="" />}
          colorScheme="#E2DDBF;"
        >
          <Link to="">{course.btnName}</Link>
        </Button>
      </div>
      <div className="design2">
        <img src="../src/assets/images/design2.svg" alt="" />
      </div>
    </div>
  );
};

export default CourseItem;
