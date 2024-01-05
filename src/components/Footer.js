import React from 'react'
import {Link} from "react-router-dom";

const footer = () => {
  

  return (
   <>
  <footer className="footback">
  <div className="content ">
    <div className="top2">
      <div className="logo-details">
        <i className="fab fa-slack"></i>
        <span className="logo_name">Dandelions</span>
      </div>
      <div className="media-icons">
        <a href="https://www.facebook.com/profile.php?id=61555134004476"><i className="fab fa-facebook-f"></i></a>
        <a href="https://twitter.com/DANDELIONS77124"><i className="fab fa-twitter"></i></a>
        <a href="https://www.instagram.com/dandelions_botanicalgarden/"><i className="fab fa-instagram"></i></a>
        <a href="https://www.linkedin.com/in/dandelions-garden-b85b372a7/"><i className="fab fa-linkedin-in"></i></a>

      </div>
    </div>
    <div className="link-boxes">
      <div className="box">
        <h1 className="f0" > <b>Let's build something amazing together</b></h1>
        <br/>
        <li>Address</li>
        
        

        <li >Dandelions on Santosa Island, Southern Coast of the main Island,
          <br/> 098267, Singapore.</li>
          <br/>
        
          <li>Contact Us On:</li>
          <div className="icon4">  <i className="fa fa-phone" aria-hidden="true"></i>
            <p className="icon4">+65 41627673</p>
          </div> <br/>
          <div className="icon2"><i className="fa fa-envelope-o" aria-hidden="true"></i>
            <p className="icon4">dandelions.botanicalgarden@gmail.com</p>
          </div>
      </div>
      
      
      <ul className="box">
        <li className="link_name">Dandelions</li>
        <li className="link_name">
        <Link to="/aboutus">About us</Link>      
          </li>
        <li className="link_name">
        <Link  to="/courses">Courses</Link>      
        </li>
        <li className="link_name">
        <Link  to="/tour">Tour</Link>  
          </li>
        <li className="link_name">
        <Link  to="/activities">Activities</Link>  
          </li>
      </ul>
      <ul className="box input-box">
        <div className="form-group">
          <h3>Subscribe to our Newsletter</h3>
          <br/>
          <label for="name">Name</label>
          <input type="text"className="form-control" placeholder="Enter Name" id="name" name="name" required/>
      </div>
      <div className="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" name="email"className="form-control" placeholder="Enter Email" required/>  
      </div>
      <button className="btn-btn-primary f8" onclick="sendMail()">Subscribe</button>

      </ul>
    </div>
  </div>
  <div className="bottom-details">
    <div className="bottom_text">
      <span className="copyright_text">Copyright © 2023 <a href="/">Dandelion.</a>All rights reserved</span>
      <span className="policy_terms">
        <a href="policy.html">Privacy policy</a>
        
      </span>
    </div>
  </div>
</footer>
   </>
  )
};

export default footer