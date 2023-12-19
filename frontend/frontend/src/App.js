import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './auth/Login'
import Register from './auth/Register';
import Home from './Home';
import TeacherDashboard from './Teachers/TeacherDashboard';
import CreateCourse from './Teachers/CreateCourse';
import CreateThread from './Teachers/CreateThread';
import UpdateCourse from './Teachers/UpdateCourse';
import UpdateThread from './Teachers/UpdateThread';


//import CourseForm from './TeacherDashboard/CourseForm';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                {/* <Route path= '/courseform' element={<CourseForm />}/> */}
                <Route path='/teacherdashboard' element={<TeacherDashboard />} />
                <Route path='/createcourse' element={<CreateCourse />} />
                <Route path='/updatecourse' element={<UpdateCourse />} />
                <Route path='/createthread' element={<CreateThread />} />
                <Route path='/updatethread' element={<UpdateThread />} />
            </Routes>
        </BrowserRouter>
        //<Home />
    )
}
export default App;


