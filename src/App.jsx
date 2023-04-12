import React from 'react'
import "./style.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Analytics from "./components/pages/Analytics"
import Message from "./components/pages/Message"
import Notes from "./components/pages/Notes"
import Overview from "./components/pages/Overview"
import Repports from "./components/pages/Repports"
import Settings from "./components/pages/Settings"
import Students from "./components/pages/Students"
import SignUp from "./components/pages/Signin/SignUp"
import Chatbot from './components/pages/Chatbot';
import Reset from './components/pages/Signin/Reset';


function App() {
 
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Overview/>} />
        <Route path='/Overview' element={<Overview/>} />
        <Route path='/Students' element={<Students/>} />
        <Route path='/Notes' element={<Notes/>} />
        <Route path='/Analytics' element={<Analytics/>} />
        <Route path='/Message' element={<Message/>} />
        <Route path='/Chatbot' element={<Chatbot/>} />
        <Route path='/Repports' element={<Repports/>} />
        <Route path='/Settings' element={<Settings/>} />
        <Route path='/Sign up' element={<SignUp/>} />
        <Route path='/Reset' element={<Reset/>} />
        
        
      </Routes>
      
      </BrowserRouter>
    
    </div>
    
  );
}

export default App;
