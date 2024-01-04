import React from 'react'
import About from "../../src/images/manahil.jpeg";
import About1 from "../../src/images/haniatta.jpg";
import About2 from "../../src/images/menahil.jpeg";

const Aboutus = () => {
  return (
    <>
    <div className="parall"></div>
<br/>
<div className="space3">
  <nav aria-label="breadcrumb">
    <ol className="breadcrumb">
      <li className="breadcrumb-item"><a href="index.html">Home</a></li>
  
      <li className="breadcrumb-item active" aria-current="page">About us</li>
    </ol>
  </nav>
  <br/>
  
  
</div>
<div className="space5">
  <label className="toggle-switch">
    <input type="checkbox" onchange="toggleDarkLight()" id="darkLightToggle"/>
    <span className="slider round"></span>
  </label>
</div>


<button type="button" className="btn btn-primary fixleft"> <a href="policy.html" className="poterr">Privacy Policy</a></button>


<div className="container manahil">
    <div className="row">
        <div className="col-md-6">



 <img src={About} className="image-fluid w-100"/> </div>
    <div className="col-md-6 hniata">
    
        <h2><b>Manahil Tanweer</b></h2> <br/>
   <p>My heart beats with the rhythm of the earth. I'm a perpetual learner, forever digging into the secrets of nature, from sunrise strolls in dew-kissed meadows to moonlit explorations under the canopy. On stormy evenings, I find solace in the earthy scent of soil and the rustling symphony of leaves, a steaming mug of herbal tea my loyal companion. When not cultivating new blooms or whispering secrets to my leafy friends, I'm concocting delicious plant-based feasts or researching ways to nurture our green haven.</p> 
    
</div>
   
    </div></div>
<div className="container hania">
    <div className="row">
        <div className="col-md-6 hniata">
                
            <h2 ><b>Hania Atta</b></h2> <br/>
       <p>
        With sunlight as my spotlight and soil as my canvas, I'm a weaver of green dreams. Every seed sown, a brushstroke of life; every bud unfurling, a masterpiece blooming. Beneath the emerald canopy, I craft miniature landscapes, my fingers whispering secrets to sprouting leaves and coaxing shy flowers to greet the dawn. When the digital winds die down, you'll find me tracing sunlit trails, my soul replenished by the whispered stories of ancient trees and the melodies of birdsong.
       </p></div> 
        <div className="col-md-6">

        
            
             <img src={About1} className="image-fluid w-100"/> 
            </div>
        
   
        
                
            
    </div></div>
    <div className="container menahil">
    <div className="row">
        <div className="col-md-6">
            
            
             <img src={About2} className="image-fluid w-100"/> </div>
                <div className="col-md-6 hniata">
                
                    <h2><b>Menahil Fatima</b></h2> <br/>
               <p>With sun-dappled pages as my portal, I wander verdant realms of imagination. Nestled amidst fragrant blooms, book in hand and herbal tea warming my palms, I find solace in tales woven from earth and sky. Yet, when the sun dips low and fireflies paint the dusk, my fingers tingle with a different magic. Seedlings become brushstrokes, moonlight my canvas, as I sculpt miniature landscapes, whispering secrets to sprouting leaves and guiding moonflowers towards the stars. For within the pulse of the earth, I find not just beauty, but a symphony of logic, a code blooming anew each spring.</p></div> 
           
                
            </div>
    </div>


<br/>
    
    </>
  )
}

export default Aboutus
