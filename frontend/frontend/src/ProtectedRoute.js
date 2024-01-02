import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from "universal-cookie";
const cookies = new Cookies();

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkUserToken = () => {
    const userToken = cookies.get("token");
    console.log('usertoken',userToken);
    //const userToken = JSON.parse(localStorage.getItem('token'));
    if (!userToken || userToken === undefined) {
      setIsLoggedIn(false);
      return navigate('/');
    }
    setIsLoggedIn(true);
    console.log('is logged in')
  };

  useEffect(() => {
    checkUserToken();
  }, [isLoggedIn]);

  return <>{isLoggedIn ? children : null}</>;
};

export default ProtectedRoute;

