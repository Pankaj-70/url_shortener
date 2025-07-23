import React, { useState } from 'react';
import { useNavigate, useRouterState } from '@tanstack/react-router';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../apis/authApis';
import { logout } from '../store/slice/authSlice.js';
const Navbar = () => {
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(true);
  const location = useRouterState({ select: (state) => state.location });
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  
  const handleBtn = async () => {
    if(location.pathName == '/')
        setShowLogin(true);
    else
        setShowLogin(false);
    setShowLogin(!showLogin);
    if(isAuthenticated) {
        await logoutUser();
        dispatch(logout());
        navigate({to: '/'})
    }else {
        if(showLogin)
            navigate({to: '/auth'});
        else
            navigate({to: '/'});
        }
    }
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      {/* Logo / Title */}
      <span onClick={() => navigate({to: '/'})} className="text-indigo-600 text-xl cursor-pointer font-bold">
        URL Shortener
      </span>

      {/* Login Button */}
      <button
        onClick = {handleBtn}
        className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition cursor-pointer"
      >
        {isAuthenticated? 'Logout': (showLogin? 'Login': 'Home')}
      </button>
    </nav>
  );
};

export default Navbar;
