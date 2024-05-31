import React , { useState, useEffect } from 'react';
import './Courses.css';
import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Space, Table, Tag } from 'antd';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios'





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
    render: (_, object) => (
      <div className="enrollment">
        <p>{object.EnrollmentDate}</p>
        <p className='enrollTime'>{object.EnrollmentTime}</p>
      </div>
    ),
  },
  {
    title: 'Duration',
    dataIndex: 'duration',
    key: 'duration',
    //responsive: ['md'],
  },
  {
    title: 'Status',
    key: 'status',
    dataIndex: 'status',
    render: (_, { status }) => (
      <>
        {status.map((oneStatus) => {
          let color = "btnPending";
          if (oneStatus === 'completed') {
            color = 'btnComplete';
          }
          return (
             <div className={color} key={oneStatus}>
               {oneStatus}
             </div>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, { actions }) => (
      <>
        {actions.map((oneAction) => {
          let srcCurrent =""
          let srcYes = "../src/assets/images/yesGreen.svg";
          let srcNo =  "../src/assets/images/croixRed.svg";
          let srcMessg = "../src/assets/images/messg.svg";
          oneAction === 'yes' ? srcCurrent = srcYes : null
          oneAction === 'no' ? srcCurrent = srcNo : null
          oneAction === 'message' ? srcCurrent = srcMessg : null
          return (
            <Space size="small" key={oneAction}>
              &nbsp;<a><img src={srcCurrent} alt="" /></a>
            </Space>
          );
        })}
      </>
    ),
  },
];

const Courses = () => {
  //pagination dataTable
  const [bottom, setBottom] = useState('bottomCenter');

 // request
  const REQUEST = "/src/utils/dataTable.json";

  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ['dataInfos'],
       queryFn: async () => {
          const { data } = await axios.get(
            REQUEST,
          )
          return data
        },
  })
  //if (isPending) return 'Loading...'
 // if (error) return 'An error has occurred: ' + error.message




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
            <Button fontSize='0.9rem' // 15px
               fontWeight={400} 
               height='40px' //44px
               mb={2}  
               display="flex" 
              //justifyContent="start" 
              justifyContent={{ base: 'center', md: 'center', lg: 'start' }}
              width={{ base: '100%', md: '100%', lg: '100%' }}
             // width='216px'
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
                loading={isPending}
                scroll={{
                  y: 540,
                }}
                //justifyContent={{ base: 'center', md: 'center', lg: 'start' }}
          />
        </div>
      </div> 
    </div>
  )
}

export default Courses;
