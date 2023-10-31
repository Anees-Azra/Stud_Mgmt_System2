import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {Link,useNavigate} from 'react-router-dom'




//import {Link} from 'react-router-dom'

const Home = () => {

  const[auth,setAuth] = useState(false);
  const[message,setMessage]=useState('');
  const[name,setName]=useState('');
  const navigate=useNavigate();

  //axios.defaults.withCredentials=true;

  
  useEffect(()=>{
    axios.get('http://localhost:8080')
    .then(res => {
      console.log('Response:', res.data); 
      if(res.data.Status === 'Success'){
        setAuth(true)
        setName(res.data.name)
        console.log(res.data)
      
      }else{
        setAuth(false)
        setMessage(res.data.Error)
      }
   })
   .catch(err=>console.log(err));
  },[])

  const handleDelete = ()=>{
    axios.get('http://localhost:8080/logout')
    .then(res =>{
      window.location.reload();
      
    }).catch(err => console.log(err))
  }
  return (
    <div className='container mt-4'>
      {
        auth?
        <div>
          <h3>You are Authorized ....{name}</h3>
          <button className='btn btn-danger' onClick={handleDelete}>Log Out</button>
        </div>
      :
      <div>
        <h3>{message}</h3>
        <h3>Login Now</h3>
        <Link to='/login' className='btn btn-primary'>Log In</Link>
      </div>
      }  
      <div className='d-flex flex-column justify-content-center align-content-center bg-light vh100'>
        <h1>List of Users</h1>

      </div>
    </div>
    
  )
}

export default Home






// import React from 'react';
// import axios from 'axios';
// import {useState,useEffect} from 'react';

// const Home = () => {
//   const[data,setData]=useState([])
//   useEffect(()=>{
//     axios.get('http://localhost:8080/')
//     .then(res => setData(res.data))
//     .catch(err => console.log(err));
//   },[])

//   return (
//     <div className='d-flex justify-content-center align-items-center bg-dark vh100' >
//       <div className='bg-white rounded w-50'>
//         <h3>My CRUD App</h3>
//         <table className='table'>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Date Of Birth</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//           {/* {data.map((d ,i) => (
//             <tr key={i}>
//               <td>{d.fullname}</td>
//               <td>{d.emailid}</td>
//               <td>{d.dob}</td>
//             <td>
//               <button className='btn btn-sm btn-primary'>Update</button>
//               <button className='btn btn-sm btn-danger'>Delete</button>
//             </td>
//             </tr>
//           ))} */}

            
//             {/* {data.map((d,i) =>
//             <tr>
//               <td>{d.name}</td>
//               <td>{d.email}</td>
//               <td>{d.datofbirth}</td>
//               <td>
//                 <button className='btn btn-sm btn-primary'>Update</button>
//                 <button className='btn btn-sm btn-danger'>Delete</button>
//               </td>
//             </tr> */}
//           </tbody>
//         </table>

//       </div>
//     </div>
//   )
// }

// export default Home
