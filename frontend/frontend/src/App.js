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
import ProtectedRoute from './ProtectedRoute';
import Dialogcourse from './Teachers/Dialogcourse';
import Dialogthread from './Teachers/Dialogthread';


//import CourseForm from './TeacherDashboard/CourseForm';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
            {/* <ProtectedRoute exact path="/"><Home /></ProtectedRoute> */}
                {/* <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute> }/> */}
                <Route path='/' element={<Home />} /> 
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                <Route path='/dialogcourse' element={<Dialogcourse />} />
                <Route path='/dialogthread' element={<Dialogthread />} />
                {/* <Route path= '/courseform' element={<CourseForm />}/> */}
                <Route path='/teacherdashboard' element={<TeacherDashboard />} />
                <Route path='/createcourse' element={<ProtectedRoute><CreateCourse /></ProtectedRoute>} />
                <Route path='/updatecourse' element={<ProtectedRoute><UpdateCourse /></ProtectedRoute>} />
                <Route path='/createthread' element={<ProtectedRoute><CreateThread /></ProtectedRoute>} />
                <Route path='/updatethread' element={<ProtectedRoute><UpdateThread /></ProtectedRoute>} />
            </Routes>
        </BrowserRouter>
        //<Home />
    )
}
export default App;


