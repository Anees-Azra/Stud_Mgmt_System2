import React ,{useState} from 'react';
import axios from 'axios';

const CreateCourse = () => {
  const[CourseId , setCourseId] = useState('');
  const[CourseName, setCourseName] = useState('');

  const handleCreateCourse = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/routes/courses/createcourse',{
      CourseId: CourseId,
      CourseName: CourseName
    })
    .then(res => {
      console.log("Course is created");
    })
    .catch(err =>{
      console.error(err)
    })
  }
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
      <div className='bg-white p-3 rounded w-25'>
      <h2>Create Course</h2>
        <form action ='' onSubmit={handleCreateCourse}>
        <label htmlFor='courseid'>Course Id :</label>
        <input type = 'text'
               placeholder='Enter Course Id'
               className = 'form-control rounded-0'
               onChange={(e) => setCourseId(e.target.value)}
               name= 'courseid'/>
        
        <input type = 'text'
               placeholder='Enter Course name'
               className = 'form-control rounded-0'
               onChange={(e) => setCourseName(e.target.value)}
               name= 'coursename'/>
        <button type = 'submit' className='btn btn-success w-100 rounded-0'>Create Course</button>
        </form>
      </div>
    </div>
  )
  
}

export default CreateCourse 