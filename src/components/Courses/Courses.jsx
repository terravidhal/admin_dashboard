import React from 'react';
import './Courses.css';
import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Space, Table, Tag } from 'antd';
import { useState } from 'react';


const columns = [
  {
    title: 'Course Id',
    dataIndex: 'courseId',
    key: 'courseId',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Course Name',
    dataIndex: 'CourseName',
    key: 'CourseName',
    //responsive: ['md'],
  },
  {
    title: 'Enrollment Date',
    dataIndex: 'EnrollmentDate',
    key: 'EnrollmentDate',
    //responsive: ['md'],
  },
  {
    title: 'Duration',
    dataIndex: 'duration',
    key: 'duration',
    //responsive: ['md'],
  },
  {
    title: 'Status',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a><img src="../src/assets/images/yesGreen.svg" alt="" /></a>
        <a><img src="../src/assets/images/croixRed.svg" alt="" /></a>
      </Space>
    ),
  },
];

const data = [
  {
    key: '1',
    courseId: 'John Brown',
    CourseName: 'John Brown',
    EnrollmentDate: 'New York No. 1 Lake Park',
    duration: 32,
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    courseId: 'Jim Green',
    CourseName: 'John Brown',
    EnrollmentDate: 'New York No. 1 Lake Park',
    duration: 32,
    tags: ['loser'],
  },
  {
    key: '3',
    courseId: 'Joe Black',
    CourseName: 'John Brown',
    EnrollmentDate: 'New York No. 1 Lake Park',
    duration: 32,
    tags: ['cool', 'teacher'],
  },
  {
    key: '4',
    courseId: 'Joe Black2',
    CourseName: 'John Brown',
    EnrollmentDate: 'New York No. 1 Lake Park',
    duration: 32,
    tags: ['cool', 'teacher'],
  },
  {
    key: '5',
    courseId: 'Joe Black2',
    CourseName: 'John Brown',
    EnrollmentDate: 'New York No. 1 Lake Park',
    duration: 32,
    tags: ['cool', 'teacher'],
  },
  {
    key: '6',
    courseId: 'Joe Black2',
    CourseName: 'John Brown',
    EnrollmentDate: 'New York No. 1 Lake Park',
    duration: 32,
    tags: ['cool', 'teacher'],
  },
  {
    key: '7',
    courseId: 'Joe Black2',
    CourseName: 'John Brown',
    EnrollmentDate: 'New York No. 1 Lake Park',
    duration: 32,
    tags: ['cool', 'teacher'],
  },
  {
    key: '8',
    courseId: 'Joe Black2',
    CourseName: 'John Brown',
    EnrollmentDate: 'New York No. 1 Lake Park',
    duration: 32,
    tags: ['cool', 'teacher'],
  },
  {
    key: '9',
    courseId: 'Joe Black2',
    CourseName: 'John Brown',
    EnrollmentDate: 'New York No. 1 Lake Park',
    duration: 32,
    tags: ['cool', 'teacher'],
  },
  {
    key: '10',
    courseId: 'Joe Black2',
    CourseName: 'John Brown',
    EnrollmentDate: 'New York No. 1 Lake Park',
    duration: 32,
    tags: ['cool', 'teacher'],
  },
  {
    key: '11',
    courseId: 'Joe Black2',
    CourseName: 'John Brown',
    EnrollmentDate: 'New York No. 1 Lake Park',
    duration: 32,
    tags: ['cool', 'teacher'],
  },
];



const Courses = () => {
  const [bottom, setBottom] = useState('bottomCenter');

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
              <Link to="">Request new course</Link>
            </Button>
          </div>
        </div>
        <div className="data-tables">
          <Table columns={columns} dataSource={data} 
                 pagination={{
                  pageSize: 9,
                  position: [bottom],
                }}
                 size="small"
          />
        </div>
      </div>
    </div>
  )
}

export default Courses;
