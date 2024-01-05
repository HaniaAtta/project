import React from 'react'
import {Link} from "react-router-dom";
const navbar = () => {

  return (
   <>

<nav className=" fixed-top d3">
      <div className="container-fluid">
    <div className="row"> <div className="col top" ><p className="tex"> Shop Our Festive Collection
    <Link className="xyz" to="/eshop"><b>Here</b></Link>      
      </p> </div></div></div> </nav>

    
    
    
    <div className="row"><div className="col "><nav className="navbar fixed-top  navbar-expand-lg  bar">
    <div className="container-fluid">
    
        <a className="navbar-brand " href="/" >DANDELIONS</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse items1 " id="navbarNavDropdown">
          <ul className="navbar-nav ">
            <li className="nav-item">
            <Link className="nav-link" to="/home">Home</Link>            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/remedies">Remedies</Link>            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/activities">Activities</Link>  
                      </li>
            <li>
            <Link className="nav-link" to="/gardening">Gardening</Link>      
                  </li>
           
            <li>
            <Link className="nav-link" to="/gallery">Gallery</Link>      
            </li>
    
              <li className="nav-item  ">
              <Link className="nav-link" to="/courses">Courses</Link>      
            
            </li>
           
          </ul>
          

        </div></div>
    </nav></div></div>

    

   </>
  )
}

export default navbar
