import React from 'react'
import Tour from "../../src/images/clock.jpg";
import Tour1 from "../../src/images/ticket.jpg";
import Tour2 from "../../src/images/calender.jpeg";
import Tour3 from "../../src/images/garden3.jpg";
import Tour4 from "../../src/images/garden4.jpg";
import Tour5 from "../../src/images/garden6.jpg";
import Tour6 from "../../src/images/garden8.jpg";
import Tour7 from "../../src/images/map2.jpeg";

const tour = () => {
  return (
    <>
      <div className="rounder1"></div>
    <br/>
    <div className="space3">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="index.html">Home</a></li>
      
          <li className="breadcrumb-item active" aria-current="page">Tour</li>
        </ol>
      </nav>
      <br/>
    </div>
    <div className="space5">
      <label className="toggle-switch">
        <input type="checkbox" onchange="toggleDarkLight()" id="darkLightToggle"/>
        <span className="slider round"/>
      </label>
    </div>
    <br/>
    <br/>
    <br/>
    <button type="button" className="btn btn-primary fixleft"> <a href="policy.html" className="poterr">Privacy Policy</a></button>


    <div className="container">
    <div className="row">
      <div className="col">
        <h1 className="p1"> Dive deep into nature 
          and  <br/>explore the wonders of our botanical garden </h1>
      <br/>
      <br/>
      <p className="p2">Welcome to the enchanting world of botanical wonders, <br/>where nature unfolds its vibrant tapestry in a harmonious blend <br/>of colors, scents, and textures. A botanical garden is <br/>a living sanctuary that celebrates the diversity <br/>and beauty of plant life, inviting visitors to embark <br/>on a captivating journey through meticulously curated landscapes.<br/> These cultivated oases serve as repositories <br/>of botanical knowledge, preserving rare and endangered <br/>species while offering a tranquil escape from the hustle<br/> and bustle of everyday life. Join us as we explore the captivating realms of biodiversity <br/>and ecological harmony, where each step unveils a new chapter <br/>in the captivating story of our planet's flora.</p>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      
      </div>
    </div>
    

<div className="icon-text component">
	<div className="row">
    	
    <div className="col-md-4">
        <div className="inner">
			<img src={Tour}/>
			<div className="icon-text-content">
            	<h6><b>Opening Hours</b></h6>
<p>Daily: 5.00am – 2.00am</p>

            </div>
        </div>
    </div>

	
    	
    <div className="col-md-4">
        <div className="inner">
			<img src={Tour1}/>
			<div className="icon-text-content">
            	<h6><b>Admission Rates<br />
</b></h6>
<p>Free admission</p>

            </div>
        </div>
    </div>
    <div className="col-md-4">
        <div className="inner">
			<img src={Tour2}/>
			<div className="icon-text-content">
            	<h6><b>Tour</b></h6>
<p>Provided by faculty</p>

            </div>
        </div>
    </div>

	</div>
</div>
</div>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
     <div className="container">
         <div className="items">
            <div className="image">
              <img src={Tour3} alt="...loading"/>
            </div>
             <div className="image">
              <img src={Tour4} alt="...loading"/>
            </div>
           <div className="image"> 
              <img src={Tour5} alt="...loading"/>
            </div>
            <div className="image"> 
              <img src={Tour6} alt="...loading"/>
            </div>
           
        </div>

    </div>  
<br/>
    <br/>
    <br/>
<br/>
<br/>
<br/>
<div id="background">
<div className="container">
    <br/>
    <br/>
    <br/>
  <div className="row">
   <div className="col-md-6 "><iframe width="460" height="275" src="https://www.youtube.com/embed/3Lw6q_nIaJU?si=lwLVlBY78HyTOY4T&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
   </div>
   <div className="col-md-6 "><h4 className="p3">Take a Virtual Tour</h4><br/><p className="p3">More than a scenic treat, lakes are a rich source of aquatic life, from amphibians to fish and migratory birds. Plants play a vital role in maintaining the right amount of nutrients in the lake by absorbing excess nitrogen and phosphorus. Water purification features such as 'Filter Beds', bioswales, and floating islands help to ensure healthy water quality. </p>
  </div>
  </div><br/>
    <br/>
    <br/>
    <div className="row">
    <div className="col-md-6 " ><iframe width="460" height="275" src="https://www.youtube.com/embed/Qbh5nCS76dc?si=Dho18x8rqVvh4n3S&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div className="col-md-6 "><h4 className="p3">Explore more!</h4><br/><p className="p3">Refresh your day with a sparkling river walk. As you admire the aquatic life in and around the lake, dive deeper to discover the marvellous ecosystem thriving right within.</p></div>
   </div>
   </div> 
</div>
<br/>
   <br/>
    <br/>
    <br/>
<div className="container">
  <div className="row">
    <div className="col">
      <h1 className="p4">Book Your Tour Now </h1><br/>
  <p className="p5">Experience the enchanting beauty of nature by booking your tickets for a captivating journey through our botanical garden. Immerse yourself in the vibrant colors and diverse flora that make up our meticulously curated landscapes. Whether you are a nature enthusiast, a photography buff, or simply seeking a tranquil escape, our botanical garden promises an unforgettable experience. Purchase your tickets now to stroll through lush gardens, discover rare plant species, and indulge in the soothing ambiance of our carefully designed natural haven. Don't miss the chance to connect with the wonders of the plant kingdom – book your tickets today and embark on a delightful adventure that will leave you with lasting memories.</p>
    </div>
  </div>
  

<br/>
<br/>
<div className="row">
  <div className="col">
    <button className="button"><a href="booking.html" className="panama" target="_blank"><span>Book Your Ticket</span></a>  </button>

  </div>
</div>
 
   <br/>
   <br/>
    <br/>
  <div className="row">
    <div className="col-md-2"></div>
    <div className="col-md-8">      <img src={Tour7} alt="" className="image-fluid w-100"/>
  </div>
  <div className="col-md-2"></div>
</div>
    </div>
    <br/>
<br/><br/>
    <br/>
    
    </>
  )
}

export default tour
