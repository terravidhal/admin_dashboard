import React from 'react';
import './Courses.css';
import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Space, Table, Tag } from 'antd';


const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
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
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: '4',
    name: 'Joe Black2',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];



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
              <Link to="">Request new course</Link>
            </Button>
          </div>
        </div>
        <div className="data-tables">
          <Table columns={columns} dataSource={data} pagination={{pageSize: 3,}} />
        </div>
      </div>
    </div>
  )
}

export default Courses;
