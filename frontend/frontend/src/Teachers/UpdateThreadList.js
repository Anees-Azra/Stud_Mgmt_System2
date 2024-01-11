import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
//import Button from '@mui/material/Button'

const ThreadList = () => {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    console.log('in courselist , useEffect');

    const fetchThreads = async () => {
      try {
        console.log('in try block');
        const response = await axios.get('http://localhost:8080/routes/threads/readallthreads');
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
        {/* {threads.map((thread) => (
          <ol key={thread.ThreadId}>
            {`ThreadId: ${thread.ThreadId}, ThreadHeading: ${thread.ThreadHeading}`}
          </ol>
        ))} */}
        <div className='d-flex justify-content-center align-items-center vh100'>
          <table className='table table-striped'>
            <thead>
              <tr>
                <th>UIN :</th>
                <th>CourseId:</th>
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
                  <td>{thread.CourseId}</td>
                  <td>{thread.ThreadId}</td>
                  <td>{thread.ThreadStartDate}</td>
                  <td>{thread.ThreadHeading}</td>
                  <td><Link to ={`/updatethread/${thread.UIN}`} className='btn btn-outlined-danger w-20 rounded-0'>
                  Update</Link></td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <Link to='/updatethread' className=' btn btn-primary w-20 rounded-0 float-end' >Update Thread</Link>
        <Link to = '/teacherdashboard' className='btn btn-primary w-30 rounded-0 float-start'>Teacher Dashboard</Link>
      </div>
    </div>
  );
};

export default ThreadList;

