import React, { useState , useEffect } from 'react';
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';

const CreateCourse = () => {
  console.log('in create course');
  const[courses,setCourses] = useState([]);
  //const [CourseId, setCourseId] = useState('');
  const [CourseName, setCourseName] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  //const { courseIdFromURL } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the list of courses when the component mounts
    axios.get('http://localhost:8080/routes/courses/readallcourses')
      .then((res) => {
        setCourses(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);


  const handleCreateCourse = (e) => {
    console.log('in handlecreatecourse');
    e.preventDefault();
    axios.post('http://localhost:8080/routes/courses/createcourse', {
      CourseName: CourseName,
    })
      .then((res) => {
        console.log('Course is created');
        alert('Course is Created');
        navigate('/courselist')
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>List Of Available Courses</h2>
        <Link to='/courselist' className='btn btn-primary w-100 rounded 0'>
          List of Courses
        </Link>
        <h2>Create Course</h2>
        <form action="" onSubmit={handleCreateCourse}>
          <label htmlFor="coursename"><strong>Course Name :</strong></label>
          <input
            type="text"
            placeholder="Enter Course name"
            className="form-control rounded-0"
            onChange={(e) => setCourseName(e.target.value)}
            name="coursename"
          />
          

      {/* <label htmlFor="coursename"><strong>Course Name :</strong></label>
      <select
        value={CourseName}
        onChange={(e) => setCourseName(e.target.value)}
        className="form-control rounded-0"
        name="coursename"
      >
        <option value="" disabled>Select Course</option>
        {courses.map((course) => (
          <option key={course.CourseId} value={course.CourseName}>
            {course.CourseName}
          </option>
        ))}
      </select> */}
          <button type="submit" className="btn btn-success w-100 rounded 0">
            Create Course
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

export default CreateCourse;

