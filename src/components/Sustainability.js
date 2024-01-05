import React from 'react'
import Sustain from "../../src/images/sustain1.jpeg";
import Sustain1 from "../../src/images/sustain2.jpeg";
import {Link} from "react-router-dom";
import Sust from "../../src/images/garden12.jpg";

const sustainability = () => {
  return (
   <>
<div className="container-fluid">
    <img src={Sust} alt="./" className="image-fluid w-100"/>
   </div>
<br/>
<div className="space3">
  <nav aria-label="breadcrumb">
    <ol className="breadcrumb">
      <li className="breadcrumb-item"><a href="index.html">Home</a></li>
  
      <li className="breadcrumb-item active" aria-current="page">Sustainability</li>
    </ol>
  </nav>
  <br/> </div>
<div className="space5">
<label className="toggle-switch">
  <input type="checkbox" onchange="toggleDarkLight()" id="darkLightToggle"/>
  <span className="slider round"></span>
</label>
</div>



<button type="button" className="btn btn-primary fixleft">
<Link className="poterr" to="/policy">Privacy Policy</Link>   
   </button>


<br/>
<br/>
<div className="container">
  <div className="row">
    <div className="col">
      <h1 className="gerny">Energetics of the Conservatories</h1>


      <br/>
  
      
          <p className="glaze"> Comprising two glass biomes, the Conservatories replicate the cool-dry climate of the Mediterranean and semi-arid sub-tropical regions and the cool-moist climate of the Tropical Montane region. They house a diverse collection of plants that are not commonly seen in this part of the world, some of which are of high conservation value.
  
              The conservatories are a statement in sustainable engineering and apply a suite of cutting-edge technologies for energy-efficient solutions in cooling. This suite of technologies allows GB to reduce our <b>energy consumption</b> by  approximately 30%, compared to buildings using conventional cooling technologies.</p>
    </div>
  </div>
   
    

<br/>
<br/>
<div className="row">
  <div className="col-md-2"></div>
  <div className="col-md-8">
    <img src={Sustain} alt="" className="image-fluid w-100"/>

  </div>
  <div className="col-md-2"></div>
</div>
<br/>
<br/>

  <div className="row">
    <div className="col-md-6">
      <h2 className="spy"> Conservation of Plant Species</h2><br/>
      <p className="glaze">Our botanical garden plays a crucial role in conserving and preserving plant species, especially those that may be endangered or threatened in their natural habitats. It serves as living gene banks, helping to safeguard plant biodiversity.</p>
    </div>
    <div className="col-md-6">
      <h2 className="spy">Promotion of Sustainable Practices</h2><br/>
      <p className="glaze">We adopt sustainable practices in our management, promoting eco-friendly approaches such as organic gardening, water conservation, and waste reduction. It serves as examples for visitors and the community.</p>
    </div>
  </div>
      <div className="row">
        <div className="col-md-6">
          <h2 className="spy">Providing Opportunities for Wildlife Encounters</h2><br/>
          <p className="glaze">The Wildlife Lookout at Kingfisher Wetlands creates more opportunities for people to experience and encounter local fauna first-hand. Besides spotting some of the birds and animals that frequent the area from the Wildlife Lookout, visitors can also learn more about the biodiversity in Gardens by the Bay from educational signage in the vicinity.</p>
        </div>
        <div className="col-md-6">
          <h2 className="spy">Energy Conservation </h2><br/>
          <p className="glaze">As part of our sustainability effort to conserve energy, we switch off  non-essential decorative and accent illuminations at night. Lighting at walkways and car parks are also reduced during hours of low visitorship.. The roof is fitted with a sensor-operated retractable sails that provide shade to the plants when it gets too hot.</p>
        </div>
        
      </div>
   
    <br/>
<br/>

<br/>
<div className="row">
  <div className="col-md-2"></div>

  <div className="col-md-8">
    <img src={Sustain1} alt=""  className="iamge-fluid w-100"/>

  </div>
  <div className="col-md-2"></div>
</div>
<br/>
<br/>

  <div className="row">
    <div className="col">
      <h1 className="h1">Donate to Our Conservatory and <br/> Save the Planet!</h1>


<br/>


  <p className="p1"> 
    Supporting our plant conservatory through your generous donations is a vital investment in the preservation of Earth's botanical diversity. Your contributions play a pivotal role in safeguarding<b> endangered plant species</b>, promoting conservation research, 
    and fostering environmental education. Our conservatory serves as a living repository, 
    housing rare and threatened plants while actively engaging in scientific endeavors to deepen
     our understanding of plant biology and ecology. By donating, you are directly contributing to the maintenance of green spaces that provide crucial habitats for diverse flora. 
     Your support empowers us to continue advocating for <b>sustainable</b> practices, such as organic gardening and water conservation, and to create a haven for future generations to appreciate and learn about the beauty and importance of our planet's plant life.
      Together, let's cultivate a healthier, greener world.
       Donate today and be a part of the mission to protect and celebrate the wonders of nature.
    
    
    </p>
    </div>
  </div>
 

<br/>
<br/>
<br/>
<br/>
<br/>
<button className="button76">
<Link className="button76" to="/register">Donate Now</Link>  
   </button>

</div>
<br/>
<br/>
<br/>
<br/>
   
   </>
  )
}

export default sustainability
