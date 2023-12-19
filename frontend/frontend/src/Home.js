import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [auth, setAuth] = useState(false);
  const [data, setData] = useState([]);
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    console.log('in navigation process');

    axios.get('http://localhost:8080/routes/userauth')
      .then(res => {
        console.log('Response:', res.data);

        if (res.data.Status === 'Success') {
          setAuth(true);
          setData(res.data);
          console.log('Data:', res.data);
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
      })
      .catch(err => console.log(err));
  };

  console.log('Auth:', auth);
  console.log('Data:', data);


  return (
    <div className='container mt-4'>
      {auth ? (
        <div>
          console.log(' yes auth')

          <h3>You are Authorized ....{name}</h3>
          <button className='btn btn-danger' onClick={handleDelete}>
            Log Out
          </button>

          <br />
          <br />
          <h3>....Or....</h3>
          <br />
          <div className='d-flex justify-content-center align-items-enter bg-dark vh100'>
            <div className='bg-white rounded'>
              <br />
              <br />
              <h3>Perform CRUD Operations</h3>
              {/* Render your CRUD operations UI here */}
              {data.role === 'Teacher' && (
                <Link to='/courseform' className='btn btn-primary w-100 rounded 0'>
                  Create Course
                </Link>
              )}
              {/* Add other CRUD components/buttons as needed */}
            </div>
          </div>
        </div>
      ) : (
        <div>
          console.log('no auth')
          <h3>{message}</h3>
          <h3>Login Now</h3>
          <Link to='/login' className='btn btn-primary'>
            Log In
          </Link>
        </div>
      )}
    </div>
  );
};

export default Home;
