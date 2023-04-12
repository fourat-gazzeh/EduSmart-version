import React from 'react'
import './assets/css/Signup.css'
import { Link } from 'react-router-dom'

function Reset() {
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
            <i className="feather icon-mail auth-icon" />
          </div>
          <h3 className="t">Reset Password</h3>
          <div className="input-group mb-3">
            <input type="email" className="form-control" placeholder="Email" />
          </div>
          <button className="btn btn-primary mb-4 shadow-2">
            Reset Password
          </button>
          <p className="mb-0 text-muted">
            Don’t have an account? <Link to="/Sign up">Signup</Link>
          </p>
        </div>
      </div>
    </div>
  </div>
    </body>
  )
}

export default Reset