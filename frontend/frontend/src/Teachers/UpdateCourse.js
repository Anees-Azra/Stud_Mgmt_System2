import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const UpdateCourse = () => {
  const [CourseId, setCourseId] = useState(''); // Assuming you get this from user input
  const [CourseName, setCourseName] = useState('');

  const handleUpdateCourse = (e) => {
    e.preventDefault();

    // Check if CourseId is a valid integer
    const parsedCourseId = parseInt(CourseId, 10);
    if (isNaN(parsedCourseId)) {
      alert('Invalid CourseId. Please enter a valid number.');
      return;
    }

    // Now parsedCourseId is a valid integer
    axios
      .put(`http://localhost:8080/routes/courses/updatecourse/${parsedCourseId}`, {
        CourseName: CourseName,
      })
      .then((res) => {
        console.log('Course is updated');
        alert('Course is Updated');
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Update Course</h2>
        <form action="" onSubmit={handleUpdateCourse}>
          <label htmlFor="courseid"><strong>Course Id :</strong></label>
          <input
            type="text"
            placeholder="Enter Course Id"
            className="form-control rounded-0"
            onChange={(e) => setCourseId(e.target.value)}
            name="courseid"
          />

          <label htmlFor="courseid"><strong>Course Name :</strong></label>
          <input
            type="text"
            placeholder="Enter Course name"
            className="form-control rounded-0"
            onChange={(e) => setCourseName(e.target.value)}
            name="coursename"
          />
          <button type="submit" className="btn btn-success w-100 rounded-0">
            Update Course
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

export default UpdateCourse;




// import React, { useState } from 'react';
// import axios from 'axios';
// import {Link} from 'react-router-dom'

// const UpdateCourse = () => {
//   console.log('in update course');
//   //const [CourseId, setCourseId] = useState('');
//   const [CourseName, setCourseName] = useState('');
  
//   const handleUpdateCourse = (e) => {
//     console.log('in handleupdatecourse');
//     e.preventDefault();
//     axios
//       .put('http://localhost:8080/routes/courses/updatecourse/:CourseId',
//       {
//        //CourseId: CourseId,
//         CourseName: CourseName,
//       })
//       .then((res) => {
//        console.log('Course is updated');
//        alert('Course is Updated')
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
//        console.log('Logout successfull');
//        alert('You are logged out')
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
//         <h2>Update Course</h2>
//         <form action="" onSubmit={handleUpdateCourse}>
//           <label htmlFor="courseid">Course Id :</label>
//           <input
//             type="text"
//             placeholder="Enter Course Id"
//             className="form-control rounded-0"
//             //onChange={(e) => setCourseId(e.target.value)}
//             name="courseid"
//           />

//           <input
//             type="text"
//             placeholder="Enter Course name"
//             className="form-control rounded-0"
//             onChange={(e) => setCourseName(e.target.value)}
//             name="coursename"
//           />
//           <button type="submit" className="btn btn-success w-100 rounded 0">
//             Update Course
//           </button>
//         </form>
//         <Link to='/teacherdashboard' className='btn btn-primary w-100 rounded 0'>
//             Teacher Dashboard
//         </Link>
//         <Link to='/' className='btn btn-secondary w-100 rounded 0'>
//             Log Out
//         </Link>
//         {/* <button
//           type="button"
//           className="btn btn-primary w-100 rounded-0"
//           onClick={handleLogout}
//         >
//           Log Out
//         </button> */}
//       </div>
//     </div>
//   );
// };

//export default UpdateCourse;






// import React ,{useState} from 'react';
// import axios from 'axios';

// const CreateCourse = () => {
//   console.log('in create course');
//   const[CourseId , setCourseId] = useState('');
//   const[CourseName, setCourseName] = useState('');

//   const handleCreateCourse = (e) => {
//     console.log('in handlecreatecourse')
//     e.preventDefault();
//     axios.post('http://localhost:8080/routes/courses/createcourse',{
//       CourseId: CourseId,
//       CourseName: CourseName
//     })
//     .then(res => {
//       console.log("Course is created");
//     })
//     .catch(err =>{
//       console.error(err)
//     })
//   }
//   return (
//     <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
//       <div className='bg-white p-3 rounded w-25'>
//       <h2>Create Course</h2>
//         <form action ='' onSubmit={handleCreateCourse}>
//         <label htmlFor='courseid'>Course Id :</label>
//         <input type = 'text'
//                placeholder='Enter Course Id'
//                className = 'form-control rounded-0'
//                onChange={(e) => setCourseId(e.target.value)}
//                name= 'courseid'/>
        
//         <input type = 'text'
//                placeholder='Enter Course name'
//                className = 'form-control rounded-0'
//                onChange={(e) => setCourseName(e.target.value)}
//                name= 'coursename'/>
//         <button type = 'submit' className='btn btn-success w-100 rounded-0' onClick={handleCreateCourse}>Create Course</button>
//         <button type = 'submit' className='btn btn-primary w-100 rounded-0'>Log Out</button>
//         </form>
//       </div>
//     </div>
//   )
  
// }

// export default CreateCourse 

// import React ,{useState} from 'react';
// import axios from 'axios';

// const CreateCourse = () => {
//   const[CourseId , setCourseId] = useState('');
//   const[CourseName, setCourseName] = useState('');

//   const handleCreateCourse = (e) => {
//     e.preventDefault();
//     axios.post('http://localhost:8080/routes/courses/createcourse',{
//       CourseId: CourseId,
//       CourseName: CourseName
//     })
//     .then(res => {
//       console.log("Course is created");
//     })
//     .catch(err =>{
//       console.error(err)
//     })
//   }
//   return (
//     <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
//       <div className='bg-white p-3 rounded w-25'>
//       <h2>Create Course</h2>
//         <form action ='' onSubmit={handleCreateCourse}>
//         <label htmlFor='courseid'>Course Id :</label>
//         <input type = 'text'
//                placeholder='Enter Course Id'
//                className = 'form-control rounded-0'
//                onChange={(e) => setCourseId(e.target.value)}
//                name= 'courseid'/>
        
//         <input type = 'text'
//                placeholder='Enter Course name'
//                className = 'form-control rounded-0'
//                onChange={(e) => setCourseName(e.target.value)}
//                name= 'coursename'/>
//         <button type = 'submit' className='btn btn-success w-100 rounded-0'>Create Course</button>
//         </form>
//       </div>
//     </div>
//   )
  
// }

// export default CreateCourse 

// 

// export default CreateCourse 

// import React from 'react'

// const createcourse = () => {
//   return (
//     <div>createcourse</div>
//   )
// }

// export default createcourse