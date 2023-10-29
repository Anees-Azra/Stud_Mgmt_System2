import React from 'react'
 import './App.css'; 
import Login from './Login'
 import Register from'./Register';
 import Home from './Home' 
import {BrowserRouter,Routes,Route} from 'react-router-dom';

 const App = () => { 
return ( 
<BrowserRouter>
 <Routes> 
  {/* <Route path='/' element={<Home />}/>  */}
<Route path='/' element={<Home />}/>
 <Route path='/register' element={<Register />}/>
 <Route path='/login' element={<Login />}/> 
</Routes> 
</BrowserRouter> 
//<Home />
 )
 } 
export default App; 
