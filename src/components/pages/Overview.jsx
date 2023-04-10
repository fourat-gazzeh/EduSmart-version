import '../sidebar.css'
import { Link } from 'react-router-dom'
import React from 'react'
import Task from "../Todolist/Task"

function Overview() {
  return (
<div className="container">
  <aside>
    <div className="top">
      <div className="logo">
        <img src="./images/logo.png" />
        <h2>
          Edu
          <span className="danger" />
          smart
        </h2>
      </div>
      <div className="close" id="close-btn">
        <span className="material-icons-sharp">close</span>
      </div>
    </div>
    <div className="sidebar">
      <Link to="/Overview" className="active" >
        <span className="material-icons-sharp">grid_view</span>
        <h3>Overview</h3>
      </Link>
      <Link to="/Students" >
        <span className="material-icons-sharp">person_outline</span>
        <h3>Students</h3>
      </Link>
      <Link to="/Notes" >
        <span className="material-icons-sharp">receipt_long</span>
        <h3>Notes</h3>
      </Link>
      <Link to="/Analytics" >
        <span className="material-icons-sharp">insights</span>
        <h3>Analytics</h3>
      </Link>
      <Link to="/Message" >
        <span className="material-icons-sharp">message</span>
        <h3>Message</h3>
        <span className="message-count">26</span>
      </Link>
      <Link to="/Message" >
        <span className="material-icons-sharp">smart_toy</span>
        <h3>ChatBot</h3>
        
      </Link>
      <Link to="/Repports" >
        <span className="material-icons-sharp">grid_view</span>
        <h3>Repports</h3>
      </Link>
      <Link to="/Settings" >
        <span className="material-icons-sharp">settings</span>
        <h3>Settings</h3>
      </Link>
      <Link to="/Sign up" >
        <span className="material-icons-sharp">logout</span>
        <h3>Logout</h3>
      </Link>
    </div>
  </aside>
  <main>
    <h1>Overview</h1>
    <div className="date">
      <input type="date" />
    </div>
    {/*----------BEGIN OF INSIGHTS------------*/}
    <div className="insights">
      <div className="sales">
        <span className="material-icons-sharp">analytics</span>
        <div className="middle">
          <div className="left">
            <h3>Total sales</h3>
            <h1>$25,33</h1>
          </div>
          <div className="progress">
            <svg>
              <circle cx={38} cy={38} r={36} />
            </svg>
            <div className="number">
              <p>81%</p>
            </div>
          </div>
        </div>
        <small className="text-muted">Last 24 hours</small>
      </div>
      {/*----------END OF SALES ------------*/}
      <div className="expenses">
        <span className="material-icons-sharp">bar_chart</span>
        <div className="middle">
          <div className="left">
            <h3>Total expenses</h3>
            <h1>$25,330</h1>
          </div>
          <div className="progress">
            <svg>
              <circle cx={38} cy={38} r={36} />
            </svg>
            <div className="number">
              <p>62%</p>
            </div>
          </div>
        </div>
        <small className="text-muted">Last 24 hours</small>
      </div>
      {/*----------END OF EXPENSES ------------*/}
      <div className="income">
        <span className="material-icons-sharp">stacked_line_chart</span>
        <div className="middle">
          <div className="left">
            <h3>Total income</h3>
            <h1>$40,330</h1>
          </div>
          <div className="progress">
            <svg>
              <circle cx={38} cy={38} r={36} />
            </svg>
            <div className="number">
              <p>44%</p>
            </div>
          </div>
        </div>
        <small className="text-muted">Last 24 hours</small>
      </div>
    </div>
  </main>
  <div className="right">
  <div className="top">
    <button id="menu-btn">
      <span className="material-icons-sharp">menu</span>
    </button>
    <div className="theme-toggler">
      <span className="material-icons-sharp active">light_mode</span>
      <span className="material-icons-sharp">dark_mode</span>
    </div>
    <div className="profile">
      <div className="info">
        <p>
          {" "}
          Hey, <b>Daniel</b>
        </p>
        <small className="text-muted">Admin</small>
      </div>
      <div className="profile-photo">
        <img src="./images/profile-1.jpg" />
      </div>
    </div>
  </div>
  <Task/>
  {/*----------END OF TOP ------------*/}
  <h2>Recent Updates</h2>
  <div className="recent-updates">
    
    <div className="updates">
      <div className="update">
        <div className="profile-photo">
          <img src="./images/profile-2.jpg" />
        </div>
        <div className="message">
          <p>
            <b>Mohamed kattoufi</b> a terminer la quizz
          </p>
          <small className="text-muted">2 minutes ago</small>
        </div>
      </div>
      <div className="update">
        <div className="profile-photo">
          <img src="./images/profile-3.jpg" />
        </div>
        <div className="message">
          <p>
          <b>Fidaa Ltaif</b> a terminer la quizz
          </p>
          <small className="text-muted">2 minutes ago</small>
        </div>
      </div>
      <div className="update">
        <div className="profile-photo">
          <img src="./images/profile-4.jpg" />
        </div>
        <div className="message">
          <p>
          <b>Islem belhsan</b> a terminer la quizz
          </p>
          <small className="text-muted">2 minutes ago</small>
        </div>
      </div>
      
    </div>
    
  </div>
  
  {/*----------END OF RECENTS UPDATES ------------*/}
</div>

        
</div>

  )
}

export default Overview;