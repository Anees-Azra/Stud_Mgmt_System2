// import React, { useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom'

// const CreateCourse = () => {
//   console.log('in create course');
//   const [CourseId, setCourseId] = useState('');
//   const [CourseName, setCourseName] = useState('');

//   const handleCreateCourse = (e) => {
//     console.log('in handlecreatecourse');
//     e.preventDefault();
//     axios
//       .post('http://localhost:8080/routes/courses/createcourse', {
//         CourseId: CourseId,
//         CourseName: CourseName,
//       })
//       .then((res) => {
//         console.log('Course is created');
//         alert('Course is Created')
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   };

//   const handleLogout = (e) => {
//     console.log('in handlelogout');
//     e.preventDefault();
//     axios
//       .post('http://localhost:8080/routes/userauth/logout')
//       .then((res) => {
//         console.log('Logout successfull');
//         alert('You are logged out')
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//     // Handle logout logic here
//     console.log('Logging out');
//   };

//   return (
//     <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
//       <div className="bg-white p-3 rounded w-25">
//         <h2>Create Course</h2>
//         <form action="" onSubmit={handleCreateCourse}>
//           {/* <label htmlFor="courseid"><strong>Course Id :</strong></label>
//           <input
//             type="text"
//             placeholder="Enter Course Id"
//             className="form-control rounded-0"
//             onChange={(e) => setCourseId(e.target.value)}
//             name="courseid"
//           /> */}
//           <label htmlFor="coursename"><strong>Course Name :</strong></label>
//           <input
//             type="text"
//             placeholder="Enter Course name"
//             className="form-control rounded-0"
//             onChange={(e) => setCourseName(e.target.value)}
//             name="coursename"
//           />
//           <button type="submit" className="btn btn-success w-100 rounded 0">
//             Create Course
//           </button>
//         </form>
//         <Link to='/teacherdashboard' className='btn btn-primary w-100 rounded 0'>
//           Teacher Dashboard
//         </Link>
//         <Link to='/' className='btn btn-secondary w-100 rounded 0'>
//           Log Out
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default CreateCourse;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CreateCourse = () => {
  const [CourseId, setCourseId] = useState('');
  const [CourseName, setCourseName] = useState('');
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Fetch the list of courses when the component mounts
    axios
      .get('http://localhost:8080/routes/readallcourses')
      .then((res) => {
        // Update the state with the received courses
        setCourses(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []); // The empty dependency array ensures that this effect runs only once on mount

  const handleCreateCourse = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8080/routes/courses/createcourse', {
        CourseId: CourseId,
        CourseName: CourseName,
      })
      .then((res) => {
        console.log('Course is created');
        alert('Course is Created');

        // After creating a course, fetch the updated list of courses
        axios
          .get('http://localhost:8080/routes/courses')
          .then((res) => {
            setCourses(res.data);
          })
          .catch((err) => {
            console.error(err);
          });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // ... (rest of the component remains the same)

  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Create Course</h2>
        {/* ... (rest of the form) */}
        <button type="submit" className="btn btn-success w-100 rounded 0">
          Create Course
        </button>

        {/* Display the list of courses */}
        <h3>List of Courses:</h3>
        <ul>
          {courses.map((course) => (
            <li key={course.CourseId}>{course.CourseName}</li>
          ))}
        </ul>

        <Link to="/teacherdashboard" className="btn btn-primary w-100 rounded 0">
          Teacher Dashboard
        </Link>
        <Link to="/" className="btn btn-secondary w-100 rounded 0">
          Log Out
        </Link>
      </div>
    </div>
  );
};

export default CreateCourse;





