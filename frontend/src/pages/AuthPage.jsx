import React, { useState } from 'react'
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
export const AuthPage = () => {
  const [login, setLogin] = useState(true);

  return (
    <div>
        {login ? <LoginForm state={setLogin}/>: <RegisterForm state={setLogin}/>}
    </div>
  )
}
