// import React,{useState, useEffect} from 'react';
// import axios from 'axios';


// const CourseList = () => {
//     const [courses , setCourses] = useState([]);

//     useEffect(() => {
//         console.log('in courselist , useEffect')
//         //const fetchCourses = async () => {
            
//             try{
//                 console.log('in try block');
//                 axios.get('https://localhost:8080/routes/courses/readallcourses', (err,data) => {
//                     if(err){
//                         console.log(err);
//                     }else{
//                         console.log(data);
//                     }
//                  }
//                 )}
                
//                 catch(e){
//                     console.log('in catch block')
//                     console.log(e);
//                 }  
//         //}
//         //fetchCourses();
//     },[]);

    
//   return (
//     <div>
//         <h2>COURSE LIST</h2>
//         console.log('to map function')
//         <ul>
           
//            {courses.map((course) => (
//             <li key={course.CourseId}>{course.CourseName}
//             </li>
//            ))}
//         </ul>
//     </div>
//   )
// }

// export default CourseList

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CourseList = () => {
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
    <div>
      <h2>COURSE LIST</h2>
      {/* <ul>
        {courses.map((course) => (
          <li key={course.CourseId}>{course.CourseName}</li>
          
        ))}
      </ul> */}
      
        {courses.map((course) => (
          <li key={course.CourseId}>
            {`CourseId: ${course.CourseId}, CourseName: ${course.CourseName}`}
          </li>
        ))}
     
    </div>
  );
};

export default CourseList;

