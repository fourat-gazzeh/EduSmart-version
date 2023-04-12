import React from 'react'
import './assets/css/Signup.css'
import { Link } from 'react-router-dom'


function SignUp() {
  return (
    <body>
    <div className="auth-wrapper">
    <div className="auth-content">
      <div className="auth-bg">
        <span className="r" />
        <span className="r s" />
        <span className="r s" />
        <span className="r" />
      </div>
      <div className="card">
        <div className="card-body text-center">
          <div className="mb-4">
            <i className="feather icon-unlock auth-icon" />
          </div>
          <h3 className='title'>Edu<span>Smart</span></h3>
          <h3 className="t">Login</h3>
          <div className="input-group mb-3">
            <input type="email" className="form-control" placeholder="Email" />
          </div>
          <div className="input-group mb-4">
            <input
              type="password"
              id='password-input'
              className="form-control"
              placeholder="password"
            />
            
          </div>
          
          <Link to="/Overview" color='white'><button className="btn btn-primary shadow-2 mb-4">Login</button></Link>
          <p className="mb-2 text-muted">
            Forgot password? <Link to="/Reset">Reset</Link>
          </p>
          
        </div>
      </div>
    </div>
  </div>
  </body>

 
  )
}

export default SignUp