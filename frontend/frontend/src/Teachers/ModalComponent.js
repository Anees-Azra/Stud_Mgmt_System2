// import React from 'react';
// import Modal from 'react-modal';

// Modal.setAppElement('#root'); // Set the root element for accessibility

// const ModalComponent = ({ isOpen, onRequestClose, courses }) => {
//   return (
//     <Modal
//       isOpen={isOpen}
//       onRequestClose={onRequestClose}
//       contentLabel="Course List Modal"
//     >
//       <h2>Course List</h2>
//       <ul>
//         {courses.map((course) => (
//           <li key={course.CourseId}>{course.CourseName}</li>
//         ))}
//       </ul>
//       <button onClick={onRequestClose}>Close Modal</button>
//     </Modal>
//   );
// };

// export default ModalComponent;


import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';

Modal.setAppElement('#root');

const ModalComponent = ({ isOpen, onRequestClose, courses, onCourseCreated }) => {
  const [newCourseName, setNewCourseName] = useState('');

  const handleCreateCourse = () => {
    // Make a request to create a new course
    axios
      .post('http://localhost:8080/routes/courses/createcourse', {
        CourseName: newCourseName,
      })
      .then((res) => {
        console.log('Course is created');
        alert('Course is Created');
        // Call the parent component callback to update the list of courses
        onCourseCreated(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="Course Modal">
      <h2>Course List</h2>
      <ul>
        {courses.map((course) => (
          <li key={course.CourseId}>{course.CourseName}</li>
        ))}
      </ul>

      <h2>Create New Course</h2>
      <label htmlFor="newCourseName">Course Name:</label>
      <input
        type="text"
        id="newCourseName"
        value={newCourseName}
        onChange={(e) => setNewCourseName(e.target.value)}
      />
      <button onClick={handleCreateCourse}>Create Course</button>

      <button onClick={onRequestClose}>Close Modal</button>
    </Modal>
  );
};

export default ModalComponent;
