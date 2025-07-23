import React, { useState } from 'react';
import { loginUser } from '../apis/authApis';
import { useDispatch } from 'react-redux';
import { useNavigate } from '@tanstack/react-router';
import { login } from '../store/slice/authSlice.js';

const LoginForm = ({ state }) => {
  const [email, setEmail] = useState('abcd@gmail.com');
  const [password, setPassword] = useState('abc123');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogin = async () => {

    try {
        const data = await loginUser(email, password);
        dispatch(login(data.data.user));
        navigate({ to: '/dashboard' });
    } catch (error) {
        console.error('Error in login: ',error);
    }
  };

  return (
    <div
      className="flex flex-col gap-5 p-8 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl shadow-lg max-w-md mx-auto mt-10"
    >
      <h2 className="text-indigo-600 font-bold text-2xl mb-2">Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="px-4 py-2 rounded-lg border border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-base"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        className="px-4 py-2 rounded-lg border border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-base"
        required
      />
      <button
        onClick={handleLogin}
        className="cursor-pointer bg-indigo-500 text-white py-2 rounded-lg font-semibold hover:bg-indigo-600 transition"
      >
        Login
      </button>
      <div className="text-center mt-2 text-sm text-indigo-700">
        Don&apos;t have an account?{'  '}
        <span
          onClick={() => {state(false);}}
          className="cursor-pointer pl-1 text-indigo-600 hover:text-indigo-800 font-semibold"
        >
          Register
        </span>
      </div>
    </div>
  );
};

export default LoginForm;