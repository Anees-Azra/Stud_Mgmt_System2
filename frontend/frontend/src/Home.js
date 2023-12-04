import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

//import {Link} from 'react-router-dom'

const Home = () => {

  const [auth, setAuth] = useState(false);
  const [data, setData] = useState([]);
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  //const navigate=useNavigate();

  //axios.defaults.withCredentials=true;


  // useEffect(()=>{
  //   axios.get('http://localhost:8080/')
  //   .then(res => {
  //     console.log('Response:', res.data); 
  //     if(res.data.Status === 'Success'){
  //       setAuth(true)
  //       setName(res.data.Fullname)
  //       console.log(res.data) 

  //     }else{
  //       setAuth(false)
  //       setMessage(res.data.Error)
  //     }
  //  })
  //  .catch(err=>console.log(err));
  // },[])

  useEffect(() => {
    console.log('in navigation process')

    axios.get('http://localhost:8080/routes/userauth')
      .then(res => {
        console.log('Response:', res.data);
        if (res.data.Status === 'Success') {
          //console.log('auth:', auth);
          setAuth(true);
          setData(res.data);
          console.log('Data:', data);

          setName(res.data.fullname);
        } else {
          console.log('Setting auth to false');
          setAuth(false);
          setMessage(res.data.Error);
        }
      })
      .catch(err => console.log('Error:', err));
  }, []);


  const handleDelete = () => {
    axios.get('http://localhost:8080/routes/userauth/logout')
      .then(res => {
        window.location.reload();

      }).catch(err => console.log(err))
  }
  return (
    <div className='container mt-4'>
      {
        auth ?
          <div>
            console.log(' yes auth')

            <h3>You are Authorized ....{name}</h3>
            <button className='btn btn-danger' onClick={handleDelete}>Log Out</button>
            <br />
            <br />
            <h3> ....Or.... </h3>
            <br />
            <div className='d-flex justify-content-center align-items-enter bg-dark vh100'>
              <div className='bg-white rounded'>
                <br />
                <br />
                <h3>Perform CRUD Operations</h3>
                <table className='table'>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>UIN</th>
                      <th>Date Of Birth</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  
                  <tbody>
                    
                    {Array.isArray(data) && data.map((users, index) => {
                      console.log('data' , data)
                      return <tr key={index}>
                        <td>{users.Fullname}</td>
                        <td>{users.UIN}</td>
                        <td>{users.Dob}</td>
                        <td>
                          <button>Edit</button>
                        </td>
                      </tr>
                    })}
                  </tbody>
                  
              {/* <tbody>
              <tr>
                  <td>asdd</td>
                  <td>02/23/1984</td>
                  <td>asdd@gmail.com</td>
              </tr>
              </tbody> */}


                </table>
              </div>
            </div>
          </div>
          :
          <div>
            console.log('no auth')
            <h3>{message}</h3>
            <h3>Login Now</h3>
            <Link to='/login' className='btn btn-primary'>Log In</Link>
          </div>
      }
      {/* <div className='d-flex flex-column justify-content-center align-content-center bg-light vh100'>
        <h1>List of Users</h1>

      </div> */}
    </div>

  )
}

export default Home