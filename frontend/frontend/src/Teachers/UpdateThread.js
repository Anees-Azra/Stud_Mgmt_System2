import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams, useLocation } from 'react-router-dom';
import axios from 'axios';

//include comments

const UpdateThread = () => {
  console.log('in updatethread component')
  //const {courseUIN} = useParams();
  // { UIN: courseUIN } = useParams();
  //const {ThreadId : threadId} = useParams();
  const [Courses,setCourses] = useState([]);
  const [CourseName , setCourseName] = useState([]);
  const [CourseId, setCourseId] = useState('');
  //const [ThreadId, setThreadId] = useState('');
  const [ThreadStartDate, setThreadStartDate] = useState('');
  const [ThreadHeading, setThreadHeading] = useState('');
  const navigate = useNavigate();
  const { UIN: courseUIN, ThreadId: paramThreadId } = useParams();
  const [ThreadId, setThreadId] = useState(paramThreadId || '');

  // useEffect(() => {
  //   setCourseId(courseUIN);
  // }, [courseUIN]);
  const location = useLocation();
  const initialState = location.state || {}; // Retrieve the state from the location

  useEffect(() => {
    setCourseId(initialState.CourseId || ''); // Set initial values based on the state
    setThreadId(initialState.ThreadId || '');
    setThreadStartDate(initialState.ThreadStartDate || '');
    setThreadHeading(initialState.ThreadHeading || '');
  }, [paramThreadId]);

  useEffect(() => {
    // Fetch the list of threads when the component mounts
    console.log('in useeffect')
    // axios.get('http://localhost:8080/routes/threads/readallthreads')
    //   .then((res) => {
    //     setThreads(res.data);
    //   })

    //   .catch((err) => {
    //     console.error(err);
    //   });

      axios.get('http://localhost:8080/routes/courses/readallcourses')
      .then((res)=>{
        setCourses(res.data);
      })
      .catch((err) =>{
        console.error(err);
      })
  }, []);

  const handleUpdateThread = (e) => {
    console.log('in handleupdatethread')
    e.preventDefault();

    // Check if CourseId is a valid integer
    const parsedUIN = parseInt(courseUIN, 10);
    //const parsedUIN = courseUIN;
    if (isNaN(parsedUIN)) {
      alert('Invalid UIN. Please enter a valid UIN.');
      return;
    }
    console.log('parsed UIN', parsedUIN)
    // Now parsedCourseId is a valid integer
    axios
      .put(`http://localhost:8080/routes/threads/updatethreads-UIN/${parsedUIN}`,
        {
          Coursename: CourseName,
          ThreadId: ThreadId,
          ThreadStartDate: ThreadStartDate,
          ThreadHeading: ThreadHeading,
          IsDelete : 0
        })

      .then((res) => {
        console.log('Updations are made');
        alert('Updations are done');
        navigate('/updatethreadlist');
      })
      .catch((err) => {
        console.log('here')
        console.error(err);
      });
  };
  console.log('after axios')
  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-40">
        <h2>List Of Available Threads :</h2>
        <Link to='/updatethreadlist' className='btn btn-primary w-100 rounded 0'>
          List of Threads</Link>
        <h2>Updations For a Thread :</h2>
        <form action="" onSubmit={handleUpdateThread}>
          <label htmlFor='uin'><strong>UIN :</strong></label>
          <input
            type='text'
            placeholder="Enter UIN"
            value={courseUIN}
            className="form-control rounded-0"
            //onChange={(e) => setUIN(e.target.value)}
            name="uin"
          />

          {/* <label htmlFor="courseid"><strong>Course Id :</strong></label>
          <input
            type="text"
            placeholder="Enter Thread Id"
            value={CourseId}
            className="form-control rounded-0"
            onChange={(e) => setCourseId(e.target.value)}
            name="courseid"
          /> */}

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

          <label htmlFor="courseid"><strong>Thread Id :</strong></label>
          <input
            type="text"
            placeholder="Enter thread Id"
            className="form-control rounded-0"
            onChange={(e) => setThreadId(e.target.value)}
            name="threadid"
            value = {ThreadId}
            
          />

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

          <button type="submit" className="btn btn-success w-100 rounded-0">
            Update Thread
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
}

export default UpdateThread;

