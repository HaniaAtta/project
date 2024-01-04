import React from 'react'

import Plant from "../../src/images/home4.jpg";
import Plant1 from "../../src/images/home7.jpg";
import Plant2 from "../../src/images/home1.jpg";
import Plant3 from "../../src/images/home11.jpg";
import Plant4 from "../../src/images/home2.jpg";
import Plant5 from "../../src/images/home3.jpg";
import Plant6 from "../../src/images/logo-dand.jpeg";
import Plant7 from "../../src/images/garden4.jpg";
import Plant8 from "../../src/images/home9.jpg";
import Plant9 from "../../src/images/image15.jpg";
import Plant10 from "../../src/images/home10.jpg";

const index = () => {
  const parallaxStyle = {
    backgroundImage: 'url("https://images.unsplash.com/photo-1446071103084-c257b5f70672?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Ym90YW5pY2FsJTIwZ2FyZGVuJTIwbGVhdmVzfGVufDB8fDB8fHww")',
    height: '500px',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
};


  return (
    <>
      <button type="button" className="btn btn-primary fixleft"> <a href="policy.html" className="poterr">Privacy Policy</a></button>

  <div className="container-fluid">
    <div id="carouselExampleFade" className="carousel slide carousel-fade">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Plant} className="d-block image-fluid w-100 " alt="..."/>
         <div className="row">   <div className="col-md-6 htex3"><p className="text1">Dandelions </p>
              <p className="text2">Where Wonders Bloom</p></div>
          </div><div className="col-md-6"></div>
        </div>
          <div className="carousel-item">
            <img src={Plant1} className="d-block w-100" alt="..."/>
            <div className="row">   <div className="col-md-6 htex3"><p className="text1">Dandelions </p>
              <p className="text2">Where Wonders Bloom</p></div>
          </div><div className="col-md-6"></div>
        </div>
          <div className="carousel-item">
            <img src={Plant2} className="d-block w-100" alt="..."/>
            <div className="row">   <div className="col-md-6 htex3"><p className="text1">Dandelions </p>
              <p className="text2">Where Wonders Bloom</p></div>
          </div><div className="col-md-6"></div>
        </div>
          <div className="carousel-item ">
            <img src={Plant3} className="d-block  w-100" alt="..."/>
            <div className="row">   <div className="col-md-6 htex3"><p className="text1">Dandelions </p>
              <p className="text2">Where Wonders Bloom</p></div>
          </div><div className="col-md-6"></div>
        </div>
          <div className="carousel-item">
           <img src={Plant4} className="d-block image-fluid w-100" alt="..."/>
           <div className="row">   <div className="col-md-6 htex3"><p className="text1">Dandelions </p>
            <p className="text2">Where Wonders Bloom</p></div>
        </div><div className="col-md-6"></div>
      </div>
          <div className="carousel-item">
            <img src={Plant5} className="d-block image-fluid w-100" alt="..." />
            <div className="row">   <div className="col-md-6 htex3"><p className="text1">Dandelions </p>
              <p className="text2">Where Wonders Bloom</p></div>
          </div><div className="col-md-6"></div>
        </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden"></span>
        </button>
        
      </div>

    <div className="toast" data-autohide="false">
      <div className="toast-header">
      <img src={Plant6} className="rounded me-2" alt="..."/>
        <strong className="mr-auto text-primary ">Dandelions</strong>
        <small className="text-muted">just now</small>
        <button type="button" className="ml-2 mb-1 close" data-dismiss="toast">&times;</button>
      </div>
      <div className="toast-body">
        Welcome to Dandelions: Where Wonders Bloom!
      </div>
    </div>
  </div>
    <br/>
    <br/>
   
   
    <div className="space5">
      <label className="toggle-switch">
        <input type="checkbox" onchange="toggleDarkLight()" id="darkLightToggle"/>
        <span className="slider round"></span>
      </label>
    </div>
    <div className="container main_p">
      <br/>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
      
          <li className="breadcrumb-item active" aria-current="page">Home</li>
        </ol>
      </nav>
   
     


<br/>
<br/>
<br/>
      <div className="row"><div className="col"><h1 className="p1"> Garden of <b>Wonder</b></h1>
        <br/>
    
        <p className="p2">Welcome to a sanctuary of natural wonders, where lush landscapes and diverse ecosystems come together to create a haven for botanical enthusiasts and nature lovers alike. Our botanical garden is a living tapestry of colors, textures, and fragrances, inviting you to embark on a journey through the beauty of the plant kingdom. Immerse yourself in the tranquility of carefully cultivated gardens, each telling a unique story of <b>botanical diversity</b> and conservation. From rare and exotic species to familiar favorites, our garden is a living encyclopedia of the world's plant life. Whether you seek a peaceful retreat, a place for education and exploration, or simply a breath of fresh air, our botanical garden promises a captivating experience for all who venture within its gates. Come, discover the extraordinary tapestry of life that awaits you in our botanical oasis. <a href="history.html" className="xyz">Click here to know about the History.</a> </p>
      </div></div>
</div>
<br/>
    
    <br/>
    <br/>
    
      <div className="row cont">
        <div className="col-md-4">
          <div className=" boder">
            <h3 className="eshop">EShop</h3><br/>
            <p className="eshop"> Trusted for over 30 years, we are committed to making sure your experience is perfect every time.</p>
          <a href="eshop.html">  <button className="button"><span>FIND OUT MORE </span></button></a>
          </div>
        </div>
        <div className="col-md-4">
          <div className=" boder">
            <h3 className="eshop">Sustainability</h3><br/>
            <p className="eshop">Uncover the innovative thought behind our iconic architecture that continues to keep the Gardens sustainable!</p>
        <a href="sustainability.html">    <button className="button"><span>FIND OUT MORE </span></button></a>
    
        </div> </div>
        <div className="col-md-4">
          <div className=" boder">
            <h3 className="eshop" >Tour</h3>
            <br/>
            <p className="eshop">Experience the enchanting beauty of nature by booking your tickets for a captivating journey through our botanical garden.</p>
          <a href="tour.html">  <button className="button"><span>FIND OUT MORE </span></button></a>
    
          </div>
        </div>
     
      
      
      </div>
      
    
  
    <br/>
    <br/>
    <br/>
    <br/>
    
    <div style={parallaxStyle}>
    <div className="banner"><h2><b>Plant Doctor:</b> Ask us anything!</h2>
    <br/>
      <p>
        Whether you're looking to make your urban garden thrive or<br/> simply want to learn more about plants, our team of plant specialists is <br/>available to answer all your horticulture-related questions.</p>
        <br/> <a  className="doc" href="Enquiry.js"><b>Learn More</b></a>
    </div>
  </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <div className="container">
      <div className="items">
         <div className="image">
           <img src={Plant7} alt="...loading"/>
         </div>
          <div className="image">
           <img src={Plant8} alt="...loading"/>
         </div>
        <div className="image"> 
           <img src={Plant9} alt="...loading"/>
         </div>
         <div className="image"> 
           <img src={Plant10} alt="...loading"/>
         </div>
        
     </div>
    </div>
    <div className="wrapper">
      <header>
        <i className="bx bx-cookie"></i>
        <h2>Cookies Consent</h2>
      </header>
  
      <div className="data">
        <p>This website use cookies to help you have a superior and more relevant browsing experience on the website.</p>
      </div>
  
      <div className="buttons">
        <button className="button" id="acceptBtn">Accept</button>
        <button className="button" id="declineBtn">Decline</button>
      </div>
    </div>
  
 <br/>
 <br/>







    </>
  )
}

export default index
