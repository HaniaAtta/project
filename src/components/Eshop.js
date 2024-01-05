import React from 'react'
import Shop from "../../src/images/shop2.png";
import Shop1 from "../../src/images/image1.jpg";
import Shop2 from "../../src/images/image2.jpg";
import Shop3 from "../../src/images/image4.jpg";
import Shop4 from "../../src/images/image3.jpg";
import Shop5 from "../../src/images/image7.jpg";
import Shop6 from "../../src/images/image6.jpg";
import Shop7 from "../../src/images/garden1.jpeg";
import Shop8 from "../../src/images/image13.jpg";
import Shop9 from "../../src/images/image11.jpg";
import Sho from "../../src/images/image9.jpg";
import Sho1 from "../../src/images/image10.jpg";
import Sho2 from "../../src/images/garden2.jpeg";
import Sho3 from "../../src/images/image8.jpg";
import Sho4 from "../../src/images/image12.jpg";
import {Link} from "react-router-dom";
import Shi from "../../src/images/shop.jpg";

const eshop = () => {
  return (
    <>
<div className="container-fluid">
    <img src={Shi} alt="./" className="image-fluid w-100"/>
   </div>
   <div className="container-fluid ">

<br/>
  <div className="space3">
    <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="index.html">Home</a></li>
          <li className="breadcrumb-item active" aria-current="page">E Shop</li>
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
<br/>
<br/>
<br/>

<h2 className="text3">FEATURED COLLECTION</h2>
<br/>
<br/>
<br/>
<div className="container-fluid img_fluid"><img src={Shop} alt=""/></div>
<br/>
<br/>
<br/>


<button type="button" className="btn btn-primary fixleft"> 
<Link className="poterr" to="/policy">Privacy Policy</Link>   
</button>

<div className="container">
    <div className="row">
        <div className="col-md-4">
            <div className="card micas">
                <img src={Shop1} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title1">Wildflowers Bouquet</h5>
                    <p className="card-text1">$19.99</p>
                    <Link className="btn btn-primary" to="/register">Buy Now</Link>  
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="card micas">
                <img src={Shop2} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Flower Jar</h5>
                    <p className="card-text">$29.99</p>
                    <Link className="btn btn-primary" to="/register">Buy Now</Link>  
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="card micas">
                <img src={Shop3} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Special Bouquet</h5>
                    <p className="card-text">$39.99</p>
                    <Link className="btn btn-primary" to="/register">Buy Now</Link>  
                </div>
            </div>
        </div>
        
    </div>
</div>
<br/>
<br/>
<br/>
<br/>
<div className="container">
    <div className="row">
        <div className="col-md-4">
            <div className="card micas">
                <img src={Shop4} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">White Bouquet</h5>
                    <p className="card-text">$29.99</p>
                    <Link className="btn btn-primary" to="/register">Buy Now</Link>  
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="card micas">
                <img src={Shop5} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Herbal Tea Leaves</h5>
                    <p className="card-text">$12.99</p>
                    <Link className="btn btn-primary" to="/register">Buy Now</Link>  
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="card micas">
                <img src={Shop6} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Hibiscus Tea </h5>
                    <p className="card-text">$29.99</p>
                    <Link className="btn btn-primary" to="/register">Buy Now</Link>  
                </div>
            </div>
        </div>
        
        
    </div>
    </div>
<br/>
<br/>
<br/>
<br/>



<div className="container">
    <div className="row">
        <div className="col-md-4">
            <div className="card micas">
                <img src={Shop7} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Gardening Kit </h5>
                    <p className="card-text">$69.99</p>
                    <Link className="btn btn-primary" to="/register">Buy Now</Link>  
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="card micas">
                <img src={Shop8} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Gardening Gloves</h5>
                    <p className="card-text">$9.99</p>
                    <Link className="btn btn-primary" to="/register">Buy Now</Link>  
                </div>
            </div>
        </div>
       
        <div className="col-md-4">
            <div className="card micas">
                <img src={Shop9} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Planter</h5>
                    <p className="card-text">$9.99</p>
                    <Link className="btn btn-primary" to="/register">Buy Now</Link>  
                </div>
            </div>
        </div>
        
    </div>
</div>
<br/>
<br/>
<br/>
<br/>

    <div className="container">
        <div className="row">
            <div className="col-md-4">
                <div className="card micas">
                    <img src={Sho} className="card-img-top" alt="..."
                    />
                    <div className="card-body">
                        <h5 className="card-title">Rake</h5>
                        <p className="card-text">$12.99</p>
                        <Link className="btn btn-primary" to="/register">Buy Now</Link>  
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card micas">
                    <img src={Sho1} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Gardening Fork </h5>
                        <p className="card-text">$29.99</p>
                        <Link className="btn btn-primary" to="/register">Buy Now</Link>  
                    </div>
                </div></div>
                <div className="col-md-4">
                    <div className="card micas">
                        <img src={Sho2} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Beginner's Kit</h5>
                            <p className="card-text">$49.99</p>
                            <Link className="btn btn-primary" to="/register">Buy Now</Link>  
                        </div>
                    </div>
                </div>
        
    </div>
</div>
<br/>
<br/>


<div className="container">
    <div className="row"> 
        <div className="col-md-4">
           <div className="card micas">
        <img src={Sho3} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Biodegradable Seeds</h5>
            <p className="card-text">$39.99</p>
            <Link className="btn btn-primary" to="/register">Buy Now</Link>  
        </div>
    </div>
</div>
<div className="col-md-4">
    <div className="card micas">
        <img src={Sho4} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Flower Pot</h5>
            <p className="card-text">$19.99</p>
            <Link className="btn btn-primary" to="/register">Buy Now</Link>  
        </div>
    </div>
</div>
</div>
<br/>
<br/>

<div className="row">
    <div className="col">
        <h2 className="faqs2">FAQS</h2>
    </div>
    <br/>
    <br/>
    <br/></div>
    <div className="row">
    <div className="col">
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header music3" id="headingOne">
                <button className="accordion-button collapsed music3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Can you give me horticultural advice?
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    There is a limited advice provided for enquiries made in person or by telephone. Our specialist staff have accumulated considerable knowledge and expertise over the years, but they are not always available to give specific advice ‘on the spot’. Please be patient when contacting us for advice, and remember that there are many other sources of horticultural information available.
                </div>
              </div>
            </div>
            
            <div className="accordion-item">
              <h2 className="accordion-header music3" id="headingTwo">
                <button className="accordion-button collapsed music3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Can I take photographs of the plants in the Gardens? Can I film in the Gardens?
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    You are welcome to take photographs for your own use. All filming and photography at the Gardens for commercial purposes, however, is by permit only. Details of any requests for filming or photography should be addressed to the Director in advance.
                </div>
              </div>
              
            </div>


            <div className="accordion-item">
                <h2 className="accordion-header music3" id="headingThree">
                  <button className="accordion-button collapsed music3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Does the Botanical Garden accept plant donations?                  </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    Plant donations are considered on a case-by-case basis. If you are interested in donating a plant, please email a picture of it to dandelions.botanicalgarden@gmail.com and a horticulturist will review the photo and respond.                  </div>
                </div>
                
              </div>
          </div>
    </div>
</div>
</div>
<br/>
<br/> </div>
    
    </>
  )
}

export default eshop
