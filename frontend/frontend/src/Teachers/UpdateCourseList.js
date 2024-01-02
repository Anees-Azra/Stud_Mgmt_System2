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
      <div className='bg-white p-3 rounded w-50'>
        <h2>LIST OF AVAILABLE COURSES :</h2>
        {courses.map((course) => (
          <ol key={course.CourseId}>
            {`CourseId: ${course.CourseId}, CourseName: ${course.CourseName}`}
          </ol>
        ))}
        <Link to='/updatecourse' className=' btn btn-primary w-25 rounded-0 float-end' >Back</Link>
      </div>
    </div>
  );
};

export default UpdateCourseList;

