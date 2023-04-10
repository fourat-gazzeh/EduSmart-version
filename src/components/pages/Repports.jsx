import '../sidebar.css'
import { Link } from 'react-router-dom'
import React from 'react'

function Repports() {
  return (
    <aside>
        <div className="top">
            <div className="logo">
                <img src="./images/logo.png"/>
                <h2>Edu<span className="danger"></span>smart</h2>
            </div>
            <div className="close" id="close-btn">
                <span className="material-icons-sharp">close</span>
            </div>
        </div>
        <div className="sidebar">
            <Link to="/Overview" >
                <span className="material-icons-sharp">grid_view</span>
                <h3>Overview</h3>
            </Link>
            <Link to="/Students" >
                <span className="material-icons-sharp">person_outline</span>
                <h3>Students</h3>
            </Link>
            <Link to="/Notes">
                <span className="material-icons-sharp">receipt_long</span>
                <h3>Notes</h3>
            </Link>
            <Link to="/Analytics">
                <span className="material-icons-sharp">insights</span>
                <h3>Analytics</h3>
            </Link>
            
            <Link to="/Message">
                <span className="material-icons-sharp">message</span>
                <h3>Message</h3>
                <span className="message-count">26</span>
            </Link>
            <Link to="/Repports" className="active">
                <span className="material-icons-sharp">grid_view</span>
                <h3>Repports</h3>
            </Link>
            <Link to="/Settings">
                <span className="material-icons-sharp">settings</span>
                <h3>Settings</h3>
            </Link>
            <Link to="/Sign up">
                <span className="material-icons-sharp">logout</span>
                <h3>Logout</h3>
            </Link>
            
        </div>
    </aside>
  )
}

export default Repports