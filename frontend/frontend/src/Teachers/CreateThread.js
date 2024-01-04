import React, { useState } from 'react';
import axios from 'axios';
import { Link , useNavigate } from 'react-router-dom'

const CreateThread = () => {
  console.log('in create thread');
  const [UIN, setUIN] = useState('');
  const [CourseId, setCourseId] = useState('');
  const [ThreadId, setThreadId] = useState('');
  const [ThreadStartDate, setThreadStartDate] = useState('');
  const [ThreadHeading, setThreadHeading] = useState('');
  const navigate = useNavigate();


  const handleCreateThread = (e) => {
    console.log('in handlecreatethread');
    e.preventDefault();
    axios
      .post('http://localhost:8080/routes/threads/createthread',
        {
          UIN: UIN,
          CourseId: CourseId,
          ThreadId: ThreadId,
          ThreadStartDate: ThreadStartDate,
          ThreadHeading: ThreadHeading,
          IsDelete: 0
        })
      .then((res) => {
        console.log('Thread is created');
        alert('Thread is Created')
        navigate('/threadlist')
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleLogout = (e) => {
    console.log('in handlelogout');
    e.preventDefault();
    axios
      .post('http://localhost:8080/routes/userauth/logout')
      .then((res) => {
        console.log('Logout successfull');
        alert('You are logged out')
      })
      .catch((err) => {
        console.error(err);
      });
    // Handle logout logic here
    console.log('Logging out');
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded ">
        <h2>List Of Available Threads :</h2>
        <Link to = '/dialogthread' className='btn btn-primary w-100 rounded 0'>
          List of Threads</Link>
        <h2>Create Thread</h2>
        <form action="" onSubmit={handleCreateThread}>

          <label htmlFor='uin'><strong>UIN :</strong></label>
          <input
            type='text'
            placeholder="Enter UIN"
            className="form-control rounded-0"
            onChange={(e) => setUIN(e.target.value)}
            name="uin"
          />

          <label htmlFor="courseid"><strong>Course Id :</strong></label>
          <input
            type="text"
            placeholder="Enter Thread Id"
            className="form-control rounded-0"
            onChange={(e) => setCourseId(e.target.value)}
            name="courseid"
          />

          {/* <label htmlFor="courseid"><strong>Thread Id :</strong></label>
          <input
            type="text"
            placeholder="Enter Course name"
            className="form-control rounded-0"
            onChange={(e) => setThreadId(e.target.value)}
            name="threadid"
          /> */}

          <label htmlFor="threadstartdate"><strong>Thread Start Date :</strong></label>
          <input
            type="date"
            placeholder="Enter Thread Start Date"
            className='form-control rounded-0'
            onChange={(e) => setThreadStartDate(e.target.value)}
            name="threadstartdate"
          />

          <label htmlFor="threadheading"><strong>Thread Heading :</strong></label>
          <input
            type="text"
            placeholder="Enter Thread Heading"
            className='form-control rounded-0'
            onChange={(e) => setThreadHeading(e.target.value)}
            name="threadheading"
          />

          <button type="submit" className="btn btn-success w-100 rounded 0">
            Create Thread
          </button>
        </form>
        <Link to='/teacherdashboard' className='btn btn-primary w-100 rounded 0'>
          Teacher Dashboard
        </Link>
        <Link to='/' className='btn btn-secondary w-100 rounded 0'>
          Log Out
        </Link>
      </div>
    </div>
  );
};

export default CreateThread;