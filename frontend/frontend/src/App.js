import React from 'react'
import './App.css'; 
import Login from './auth/Login'
import Register from'./auth/Register';
import Home from './Home' 
import Create from './user/Create' 
import Read from './user/Read' 
import Update from './user/Update' 
import {BrowserRouter,Routes,Route} from 'react-router-dom';

 const App = () => { 
return ( 
<BrowserRouter>
 <Routes> 
  {/* <Route path='/' element={<Home />}/>  */}
<Route path='/' element={<Home />}/>
 <Route path='/register' element={<Register />}/>
 <Route path='/login' element={<Login />}/> 
 <Route path='/create' element={<Create />}/> 
 <Route path='/read/:id' element={<Read />}/> 
 <Route path='/update/:id' element={<Update />}/> 
</Routes> 
</BrowserRouter> 
//<Home />
 )
 } 
export default App; 
