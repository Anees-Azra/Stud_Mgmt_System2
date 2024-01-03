import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const UpdateCourseList = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    console.log('in courselist , useEffect');

    const fetchCourses = async () => {
      try {
        console.log('in try block');
        const response = await axios.get('http://localhost:8080/routes/courses/readallcourses');
        console.log(response.data);
        setCourses(response.data);
      } catch (error) {
        console.log('in catch block');
        console.log(error);
      }
    };
    fetchCourses();
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className='bg-white p-3 rounded w-70'>
        <h2>LIST OF AVAILABLE COURSES :</h2>
        <div class="table-container">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Course Id</th>
                <th>Course Course</th>
                <th>Button</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course) =>
                <tr>
                  <td>{course.CourseId}</td>
                  <td>{course.CourseName}</td>
                  {/* <td><button type="button" class="btn btn-outline-danger w-10 h-10">Edit</button></td> */}
                  <td><Link to='/updatecourse' class="btn btn-outline-danger w-10 h-10">Update</Link></td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <br />
        <Link to='/teacherdashboard' className='btn btn-primary w-30 rounded 0 float-end'>
          Teacher Dashboard
        </Link>
      </div>
    </div>
  );
};

export default UpdateCourseList;