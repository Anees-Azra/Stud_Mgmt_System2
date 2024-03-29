import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const UpdateThreadList = () => {
  console.log(' in updatethreadlist')
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    console.log('in updatethreadlist , useEffect');

    const fetchThreads = async () => {
      try {
        console.log('in try block');
        const response = await axios.get('http://localhost:8080/routes/threads/readallthreads-coursename');
        console.log(response.data);
        setThreads(response.data);
      } catch (error) {
        console.log('in catch block');
        console.log(error);
      }
    };

    fetchThreads();
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className='bg-white p-3 rounded w-80'>
        <h2>LIST OF AVAILABLE THREADS :</h2>
         <div className='container'>
          <table className='table table-stiped'>
            <thead>
              <tr>
                <th>UIN :</th>
                <th>Course Name:</th>
                <th>ThreadId:</th>
                <th>ThreadStartDate :</th>
                <th>ThreadHeading :</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {threads.map((thread) =>
               <tr>
                  <td>{thread.UIN}</td>
                  <td>{thread.CourseName}</td>
                  <td>{thread.ThreadId}</td>
                  <td>{thread.ThreadStartDate}</td>
                  <td>{thread.ThreadHeading}</td>
                  <td><Link to={{
                      pathname: `/updatethread/${thread.UIN}`,
                      state: {
                          //CourseId: thread.CourseId,
                          CourseName: thread.CourseName,
                          ThreadId: thread.ThreadId,
                          ThreadStartDate: thread.ThreadStartDate,
                          ThreadHeading: thread.ThreadHeading
                        }
                        
                  }}
                   
                  className='btn btn-outline-danger w-20 rounded-0'>
                       Update</Link></td>
                </tr>
              )}
            </tbody>
          </table>
       </div>
        <Link to='/updatethread' className=' btn btn-primary w-25 rounded-0 float-end' >Back</Link>
        <Link to ='/teacherdashboard' className='btn btn-primary w-25 rounded-0 float-start'>Teacher Dashboard</Link>
      </div>
    </div>
  );
};
export default UpdateThreadList




