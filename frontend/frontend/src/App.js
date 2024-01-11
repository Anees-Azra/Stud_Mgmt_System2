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
import DialogUpdatecourse from './Teachers/DialogUpdatecourse';
import DialogUpdatethread from './Teachers/DialogUpdatethread';
import Dialogthread from './Teachers/Dialogthread';
import CourseList from './Teachers/CourseList';
import ThreadList from './Teachers/ThreadList';
import UpdateCourseList from './Teachers/UpdateCourseList';
import UpdateThreadList from './Teachers/UpdateThreadList';

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
                <Route path='/threadlist' element={<ThreadList />} />
                <Route path='/dialogupdatecourse' element={<DialogUpdatecourse />} />
                <Route path='/dialogupdatethread' element={<DialogUpdatethread />} />
                <Route path='/teacherdashboard' element={<TeacherDashboard />} />
                <Route path='/courselist' element={<CourseList />} />
                <Route path='/updatecourselist' element={<UpdateCourseList />} />
                <Route path='/updatethreadlist' element={<UpdateThreadList />} />
                <Route path='/createcourse' element={<ProtectedRoute><CreateCourse /></ProtectedRoute>} />
                <Route path='/updatecourse' element={<ProtectedRoute><UpdateCourse /></ProtectedRoute>} />
                <Route path="/updatecourse/:courseId" element={<UpdateCourse />} />
                <Route path="/updatethread/:UIN" element={<UpdateThread />} />
                <Route path='/createthread' element={<ProtectedRoute><CreateThread /></ProtectedRoute>} />
                <Route path='/updatethread' element={<ProtectedRoute><UpdateThread /></ProtectedRoute>} />
            </Routes>
        </BrowserRouter>
        //<Home />
    )
}
export default App;