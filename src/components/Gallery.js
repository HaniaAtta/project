import React from 'react'

import Gallery from "../../src/images/try675.jpeg";
import Gallery1 from "../../src/images/WhatsApp Image 2023-12-21 at 2.33.29 PM.jpeg";
import Gallery2 from "../../src/images/galled.jpeg";
import Gallery3 from "../../src/images/melanie-arouk-NZOIm_NlvPA-unsplash.jpg";
import Gallery4 from "../../src/images/nick-page-K7TOE1L8Q2g-unsplash.jpg";
import Gallery5 from "../../src/images/WhatsApp Image 2023-12-21 at 2.33.31 PM.jpeg";
import Gallery6 from "../../src/images/jonny-gios-sZOproyC8bw-unsplash.jpg";
import Gallery7 from "../../src/images/juliet-furst-MBte5Q8IzCE-unsplash.jpg";
import Gallery8 from "../../src/images/lal.jpeg";
import Gallery9 from "../../src/images/sindy-sussengut-cLwLGgmDuZk-unsplash.jpg";

const gallery = () => {
  return (
    <>
    <div className="parallre4"></div>
<div className="space3">
  <br/>
<nav aria-label="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><a href="index.html">Home</a></li>

    <li className="breadcrumb-item active" aria-current="page">Gallery</li>
  </ol>
</nav>
<br/>


</div>
<div className="space5"><label className="toggle-switch">
  <input type="checkbox" onchange="toggleDarkLight()" id="darkLightToggle"/>
  <span className="slider round"></span>
</label></div>
<button type="button" className="btn btn-primary fixleft"> <a href="policy.html" className="poterr">Privacy Policy</a></button>

<div className="container">
<div className="row"><div className="col"><h1 className="heading"> <br/>GALLERY</h1></div></div></div>
<br/><br/>




<div className="container">
<div className="row">
  <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
    <img
      src={Gallery}
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Boat on Calm Water"
    />

    
  </div>

  <div className="col-lg-4 mb-4 mb-lg-0">
    <img
      src={Gallery1}
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Mountains in the Clouds"
    />

    <img
      src={Gallery2}
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Boat on Calm Water"
    />
  </div>

  <div className="col-lg-4 mb-4 mb-lg-0">
    <img
      src={Gallery3}
      className="w-100 shadow-1-strong rounded mb-4"
      alt="lalal"
    />

    
  </div>

  <div className="col-lg-4 mb-4 mb-lg-0">
    <img
      src={Gallery4}
            className="w-100 shadow-1-strong rounded mb-4"
      alt="lalla"
    />

    <img
      src= {Gallery5}
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Yosemite National Park"
    />
  </div>
  <div className="col-lg-4 mb-4 mb-lg-0">
    <img
      src={Gallery6}
      className="w-100 shadow-1-strong rounded mb-4"
      alt="label"
    />

    <img
      src={Gallery7}
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Wintry Mountain Landscape"
    />
  </div>
  <div className="col-lg-4 mb-4 mb-lg-0">
    <img
      src= {Gallery8}
      className="w-100 shadow-1-strong rounded mb-4"
      alt="lal"
    />

    <img
      src= {Gallery9}
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Yosemite National Park"
    />
    

  </div>
</div></div>
    
    </>
  )
}

export default gallery
