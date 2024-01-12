import React, { useState } from 'react';
import { Link , useNavigate ,useParams} from 'react-router-dom';
import axios from 'axios';

const UpdateThread = () => {
  console.log('in updatethread component')
  const {courseUIN} = useParams();
  const [CourseId, setCourseId] = useState('');
  const [ThreadId, setThreadId] = useState('');
  const [ThreadStartDate, setThreadStartDate] = useState('');
  const [ThreadHeading, setThreadHeading] = useState('');
  const navigate = useNavigate();

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
          CourseId: CourseId,
          ThreadId: ThreadId,
          ThreadStartDate: ThreadStartDate,
          ThreadHeading: ThreadHeading
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
        <Link to = '/updatethreadlist' className='btn btn-primary w-100 rounded 0'>
          List of Threads</Link>
        <h2>Updations For a Thread :</h2>
        <form action="" onSubmit={handleUpdateThread}>
          <label htmlFor='uin'><strong>UIN :</strong></label>
          <input
            type='text'
            placeholder="Enter UIN"
            value = {courseUIN}
            //readOnly
            className="form-control rounded-0"
            //onChange={(e) => setUIN(e.target.value)}
            name="uin"
          />

          <label htmlFor="courseid"><strong>Course Id :</strong></label>
          <input
            type="text"
            placeholder="Enter Thread Id"
            value = {CourseId}
            className="form-control rounded-0"
            onChange={(e) => setCourseId(e.target.value)}
            name="courseid"
          />

          <label htmlFor="courseid"><strong>Thread Id :</strong></label>
          <input
            type="text"
            placeholder="Enter Course name"
            className="form-control rounded-0"
            onChange={(e) => setThreadId(e.target.value)}
            name="threadid"
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

// import React, { useState } from 'react';
// import { Link, useNavigate, useParams } from 'react-router-dom';
// import axios from 'axios';

// const UpdateCourse = () => {
//   console.log('in update course')
//   const {courseId} = useParams();
//   //const [CourseId, setCourseId] = useState(''); // Assuming you get this from user input
//   const [CourseName, setCourseName] = useState('');
//   const navigate = useNavigate();

//   const handleUpdateCourse = (e) => {
//     console.log('in handleupdatecourse')
//     e.preventDefault();

//     //Check if CourseId is a valid integer
//     const parsedCourseId = parseInt(courseId, 10);
//     if (isNaN(parsedCourseId)) {
//       alert('Invalid CourseId. Please enter a valid number.');
//       return;
//     }

//     // Now parsedCourseId is a valid integer
//     axios
//       .put(`http://localhost:8080/routes/courses/updatecourse/${parsedCourseId}`, {
//         //.put(`http://localhost:8080/routes/courses/updatecourse/CourseId`, {
//           CourseId: parsedCourseId,
//         CourseName: CourseName,
//       })
     
//       .then((res) => {
//         console.log('Course is updated');
//         alert('Course is Updated');
//         navigate('/updatecourselist')
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   };

//   return (
//     <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
//       <div className="bg-white p-3 rounded w-25">
//         <h2>List Of Available Courses</h2>
//         <Link to='/updatecourselist' className='btn btn-primary w-100 rounded 0'>
//           List of Courses
//         </Link>
//         <h2>Update Course</h2>
//         <form action="" onSubmit={handleUpdateCourse}>
//           <label htmlFor="courseid"><strong>Course Id :</strong></label>
//           <input
//             type="text"
//             placeholder="Enter Course Id"
//             value = {courseId}
//             readOnly
//             className="form-control rounded-0"
//             //onChange={(e) => setCourseId(e.target.value)}
//             name="courseid"
//           />

//           <label htmlFor="courseid"><strong>Course Name :</strong></label>
//           <input
//             type="text"
//             placeholder="Enter Course name"
//             className="form-control rounded-0"
//             onChange={(e) => setCourseName(e.target.value)}
//             name="coursename"
//           />
//           <button type="submit" className="btn btn-success w-100 rounded-0">
//             Update Course
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
// }

// export default UpdateCourse;






