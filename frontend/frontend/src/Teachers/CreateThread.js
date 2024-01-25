import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const CreateThread = () => {
  console.log('in create thread');

  const [threads, setThreads] = useState([]);
  const [Courses,setCourses] = useState([]);
  const [UIN, setUIN] = useState('');
  const [CourseId, setCourseId] = useState('');
  const [CourseName , setCourseName] = useState([]);
  const [ThreadId, setThreadId] = useState('');
  const [ThreadStartDate, setThreadStartDate] = useState('');
  const [ThreadHeading, setThreadHeading] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the list of threads when the component mounts
    console.log('in useeffect')
    axios.get('http://localhost:8080/routes/threads/readallthreads')
      .then((res) => {
        setThreads(res.data);
      })

      .catch((err) => {
        console.error(err);
      });

      axios.get('http://localhost:8080/routes/courses/readallcourses')
      .then((res)=>{
        setCourses(res.data);
      })
      .catch((err) =>{
        console.error(err);
      })
  }, []);
  
  const handleCreateThread = async (e) => {
    console.log('in handlecreatethread');
    e.preventDefault();
  
    // Fetch user role based on UIN
    try {
      const response = await axios.get(`http://localhost:8080/routes/roles/readrole/uin/${UIN}`);
      const userRole = response.data.Role;
      console.log('userrole',userRole)
  
      // Check if the user role is 'Teacher'
      if (userRole !== 'Teacher') {
        alert('Only users with role "Teacher" can create threads.');
        return;
      }
  
      // Continue with thread creation
      axios.post('http://localhost:8080/routes/threads/createthread',
       {
          UIN: UIN,
          CourseId: CourseId,
          ThreadId: ThreadId,
          ThreadStartDate: ThreadStartDate,
          ThreadHeading: ThreadHeading,
          IsDelete: 0,
        })
        .then((res) => {
          console.log('Thread is created');
          alert('Thread is Created');
          navigate('/threadlist');
        })
        .catch((err) => {
          console.error(err);
        });
    } catch (error) {
      //gbconsole.error(error);
      alert('The entered UIN is not of a Teacher');
    }
  };
  
  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded ">
        <h2>List Of Available Threads :</h2>
        <Link to='/threadlist' className='btn btn-primary w-100 rounded 0'>
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

          <label htmlFor="coursename">
            <strong>Course Name:</strong>
          </label>
          <select
            className="form-control rounded-0"
            onChange={(e) => setCourseName(e.target.value)}
            name="coursename"
          >
            <option value="">Select Course</option>
            {Courses.map((course) => (
              <option key={course.CourseId} value={course.CourseId}>
                {course.CourseName}
              </option>
            ))}
          </select>

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

