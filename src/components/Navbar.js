import React from 'react'

const navbar = () => {

  return (
   <>

<nav className=" fixed-top d3">
      <div className="container-fluid">
    <div className="row"> <div className="col top" ><p className="tex"> Shop Our Festive Collection  <a href="eshop.html" className="xyz"><b> Here</b></a></p> </div></div></div> </nav>

    
    
    
    <div className="row"><div className="col "><nav className="navbar fixed-top  navbar-expand-lg  bar">
    <div className="container-fluid">
    
        <a className="navbar-brand " href="/" >DANDELIONS</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse items1 " id="navbarNavDropdown">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="index.html" >Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="remedies.html" >Remedies </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="activities.html">Activities</a>
            </li>
            <li>
            <a className="nav-link " href="gardentherapy.html" >Gardening</a>
            </li>
            <li>
            <a className="nav-link " href="gardentherapy.html" >Gallery</a>
            </li>
    
              <li className="nav-item  ">
              <a className="nav-link " href="gardentherapy.html" >Gallery</a>
            
            </li>
            <li>
            <a className="nav-link " href="gardentherapy.html" >Sign-up</a>
               </li>
          </ul>
          

        </div></div>
    </nav></div></div>

    

   </>
  )
}

export default navbar
