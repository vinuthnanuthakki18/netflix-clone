import React from 'react'
import './Base.css';
import { useNavigate } from "react-router-dom";

function Base() {
    const navigate = useNavigate();
  return (
    <div className='base-page'>
      <div className="page">
        <div className="page-header">
            <img src="/images/netflix-logo.png" alt="" className='base-img'/>
            <a href="/signup" className="signup-link">Sign up</a>
        </div>
        <div className="page-body">
            <div className="main-heading">
                <h1>Unlimited movies, TV shows and more</h1>
                <h5>Starts at ₹149. Cancel at any time.</h5>
                <p>Ready to watch? Enter your email to create or restart your membership.</p>
            </div>
            <div className="input-base">
            <input type="email" placeholder="Email address" required className='base-input-form'/>
            <button className="sigup-btn" onClick={navigate("/signup")}>Get Started</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Base
