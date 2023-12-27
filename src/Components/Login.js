import React from 'react'

const Login = () => {
    const handleLogin = () => {
        localStorage.setItem('isLoggedIn', 'true');

    }
  return (
    <div>
    <h1>Login Page</h1>
    <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login