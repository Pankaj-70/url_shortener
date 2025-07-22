import React, { useState } from 'react';
import { registerUser } from '../apis/authApis';

const RegisterForm = ({ state }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
     try {
         const data = await registerUser(name, email, password);
         console.log(data);
     } catch (error) {
         console.error('Error in register: ',error);
     }
   };

  return (
    <div
      className="flex flex-col gap-5 p-8 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl shadow-lg max-w-md mx-auto mt-10"
    >
      <h2 className="text-indigo-600 font-bold text-2xl mb-2">Create Account</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
        className="px-4 py-2 rounded-lg border border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-base"
        required
      />
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
        onClick={handleRegister}
        className="bg-indigo-500 cursor-pointer  text-white py-2 rounded-lg font-semibold hover:bg-indigo-600 transition"
      >
        Register
      </button>
      <div className="text-center mt-2 text-sm text-indigo-700">
        Already have an account?{' '}
        <span
          type="button"
          onClick={() => state(true)}
          className="cursor-pointer pl-1 text-indigo-600 hover:text-indigo-800 font-semibold"
        >
          Login
        </span>
      </div>
    </div>
  );
};

export default RegisterForm;