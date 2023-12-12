import React from 'react'
import './App.css'; 
import Login from './auth/Login'
import Register from'./auth/Register';
import Home from './Home' 
import CreateCourse from './CreateCourse';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

 const App = () => { 
return ( 
<BrowserRouter>
 <Routes> 
 <Route path='/' element={<Home />}/>
 <Route path='/register' element={<Register />}/>
 <Route path='/login' element={<Login />}/> 
 <Route path= '/createcourse' element={<CreateCourse />}/>
</Routes> 
</BrowserRouter> 
//<Home />
 )
 } 
export default App; 
