import React , { useState } from 'react';
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
         // let color = oneStatus.length > 5 ? 'geekblue' : 'green';volcano
          let color = "gray";
          if (oneStatus === 'completed') {
            color = 'green';
          }
          return (
            <Tag color={color} key={oneStatus}>
              {oneStatus}
            </Tag>
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
            <Space size="small">
              &nbsp;<a><img src={srcCurrent} alt="" /></a>
            </Space>
          );
        })}
      </>
    ),
  },
];

const datas = [
  {
    key: '1',
    courseId: 'John Brown',
    CourseName: 'John Brown',
    EnrollmentDate: 'New York No. 1 Lake Park',
    EnrollmentTime: "5pm",
    duration: 32,
    status: ["in progress"],
    actions: ['yes', 'no'],
  },
  {
    key: '2',
    courseId: 'Jim Green',
    CourseName: 'John Brown',
    EnrollmentDate: 'New York No. 1 Lake Park',
    EnrollmentTime: "5pm",
    duration: 32,
    status: ["completed"],
    actions: ['message'],
  },
  {
    key: '3',
    courseId: 'Joe Black',
    CourseName: 'John Brown',
    EnrollmentDate: 'New York No. 1 Lake Park',
    EnrollmentTime: "5pm",
    duration: 32,
    status: ["in progress"],
    actions: ['yes', 'no'],
  },
  {
    key: '4',
    courseId: 'Joe Black2',
    CourseName: 'John Brown',
    EnrollmentDate: 'New York No. 1 Lake Park',
    EnrollmentTime: "5pm",
    duration: 32,
    status: ["completed"],
    actions: ['message'],
  },
  {
    key: '5',
    courseId: 'Joe Black2',
    CourseName: 'John Brown',
    EnrollmentDate: 'New York No. 1 Lake Park',
    EnrollmentTime: "5pm",
    duration: 32,
    status: ["in progress"],
    actions: ['yes', 'no'],
  },
  {
    key: '6',
    courseId: 'Joe Black2',
    CourseName: 'John Brown',
    EnrollmentDate: 'New York No. 1 Lake Park',
    EnrollmentTime: "5pm",
    duration: 32,
    status: ["completed"],
    actions: ['message'],
  },
  {
    key: '7',
    courseId: 'Joe Black2',
    CourseName: 'John Brown',
    EnrollmentDate: 'New York No. 1 Lake Park',
    EnrollmentTime: "5pm",
    duration: 32,
    status: ["in progress"],
    actions: ['yes', 'no'],
  },
  {
    key: '8',
    courseId: 'Joe Black2',
    CourseName: 'John Brown',
    EnrollmentDate: 'New York No. 1 Lake Park',
    EnrollmentTime: "5pm",
    duration: 32,
    status: ["completed"],
    actions: ['message'],
  },
  {
    key: '9',
    courseId: 'Joe Black2',
    CourseName: 'John Brown',
    EnrollmentDate: 'New York No. 1 Lake Park',
    EnrollmentTime: "5pm",
    duration: 32,
    status: ["in progress"],
    actions: ['yes', 'no'],
  },
  {
    key: '10',
    courseId: 'Joe Black2',
    CourseName: 'John Brown',
    EnrollmentDate: 'New York No. 1 Lake Park',
    EnrollmentTime: "5pm",
    duration: 32,
    status: ["completed"],
    actions: ['message'],
  },
  {
    key: '11',
    courseId: 'Joe Black2',
    CourseName: 'John Brown',
    EnrollmentDate: 'New York No. 1 Lake Park',
    EnrollmentTime: "5pm",
    duration: 32,
    status: ["in progress"],
    actions: ['yes', 'no'],
  },
];



const Courses = () => {
  //pagination dataTable
  const [bottom, setBottom] = useState('bottomCenter');
  // loading datatable
  const [loading, setLoading] = useState(false);

 // request
  const REQUEST = "/src/utils/dataTable.json";

 
  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ['dataInfos'],
   /* queryFn: () =>
      axios
        .get(REQUEST)
        .then((res) =>{
          console.log(res.data);
          return res.data;
        }),*/
       queryFn: async () => {
          // initialise loading
          setLoading(true);
          const { data } = await axios.get(
            REQUEST,
          )
          setLoading(false);
          return data
        },
  })

  //if (isPending) return 'Loading...'

//  if (error) return 'An error has occurred: ' + error.message

 // console.log('data', data);


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
                loading={loading}
          />
        </div>
      </div>
    </div>
  )
}

export default Courses;
