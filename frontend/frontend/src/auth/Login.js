import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Validation from './LoginValidation';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    console.log('in loginjs');
    const [values, setValues] = useState({
        'emailid': '',
        'password': ''
    });
    const [errors, setErrors] = useState({});
    const [backendError, setBackendError] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // You can use this to fetch additional user data after login, like the role
        // This is just an example, update it based on your server-side implementation
        const fetchUserData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/routes/user/readrole', {
                    params: { emailid: values.emailid }
                });
                const userRole = response.data.Role;
                // Here, you can store the user role in your state or context
                console.log('User Role:', userRole);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, [values.emailid]);

    axios.defaults.withCredentials = true;

    const handleSubmit = (event) => {
        console.log('in handleSubmit')
        event.preventDefault();
        setErrors(Validation(values));

        axios.post('http://localhost:8080/routes/userauth/login', values)
            .then(res => {
                console.log('in .then');
                if (res.data.errors) {
                    setBackendError(res.data.errors);
                } else {
                    console.log(res.data);
                    if (res.data.Message === 'Login successful') {
                        console.log('before navigation');
                        console.log(res.data)
                        const userRole = res.data.Role;
                        console.log('userRole:',userRole);
                        if (userRole === 'Teacher') {
                            navigate('/createcourse'); // Replace with the teacher route
                        } 
                        if (userRole === 'Student') 
                        {
                            navigate('/'); // Replace with the student route
                        }
                        //navigate('/');
                        console.log('after navigation');
                    } else {
                        alert('No record existed');
                    }

                    // Assuming the role information is available in the response
                    // const userRole = res.data.role;
                    // if (userRole === 'Teacher') {
                    //     // Redirect or perform actions specific to teachers
                    //     navigate('/');
                    // }
                }
            })
            .catch(err => console.log(err));
    };

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    };

    return (
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h3>Login</h3>
                {
                    backendError && backendError.map(e => (
                        <p className='text-danger' key={e.msg}>{e.msg}</p>
                    ))
                }
                <form action='' onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='email'><strong>Email</strong></label>
                        <input type='email' placeholder='Enter Email'
                            className='form-control rounded-0'
                            onChange={handleInput}
                            name='emailid' />
                        {errors.emailid && <span className='text-danger'>{errors.emailid}</span>}
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='password'><strong>Password</strong></label>
                        <input type='password' placeholder='Enter password'
                            className='form-control rounded-0'
                            onChange={handleInput}
                            name='password' />
                        {errors.password && <span className='text-danger'>{errors.password}</span>}
                    </div>
                    <button type='submit' className='btn btn-success w-100 rounded-0'>Log In</button>
                    <p>Not Registered?</p>
                    <Link to='/register' className='btn btn-default border w-100 bg-light rounded-0'>
                        Register</Link>
                </form>
            </div>
        </div>
    );
};

export default Login;
