import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CourseListStyles from '../styles/CourseListStyles.css'

const UpdateCourseList = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:8080/routes/courses/readallcourses');
        setCourses(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCourses();
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className='bg-white p-3 rounded w-70'>
        <h2>LIST OF AVAILABLE COURSES :</h2>
        <div className="table-container">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Course Id</th>
                <th>Course Course</th>
                <th>Button</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course) => (
                <tr>
                {/* </tr><tr key={course.CourseId}> */}
                  <td>{course.CourseId}</td>
                  <td>{course.CourseName}</td>
                  <td>
                    <Link to={`/updatecourse/${course.CourseId}`} className="btn btn-outline-danger w-10 h-10">
                      Update
                    </Link>
                    
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <br />
        <Link to='/teacherdashboard' className='btn btn-primary w-30 rounded 0 float-start'>
          Teacher Dashboard
        </Link>
        <Link to='/updatecourse' className='btn btn-primary w-25 rounded-0 float-end'>
          Back
        </Link>
      </div>
    </div>
  );
};

export default UpdateCourseList;


