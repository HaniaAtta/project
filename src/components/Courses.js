import React from 'react'
import Courses from "../../src/images/learn8.jpg";
import Courses1 from "../../src/images/learn1.jpg";
import Courses2 from "../../src/images/learn9.jpg";
import Courses3 from "../../src/images/learn4.jpg";
import Courses4 from "../../src/images/learn3.jpg";
import Courses5 from "../../src/images/learn6.jpg";
import Courses6 from "../../src/images/learn10.jpg";
import Courses7 from "../../src/images/learn5.jpg";

const courses = () => {
  return (
    <>
    <div className="paret"></div>
    <br/>
    <div className="space3">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="index.html">Home</a></li>
      
          <li className="breadcrumb-item active" aria-current="page">Courses</li>
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
    <button type="button" className="btn btn-primary fixleft"> <a href="policy.html" className="poterr">Privacy Policy</a></button>

    <div className="container ">
        <h1 className="h1">Go beyond the classNameroom with <b>Nature</b></h1>
    
    <br/>
    <br/>
    <p className="p1">A trove of knowledge awaits your students’ discovery at the Gardens. Here’s where they can mingle with Nature, understand more about biodiversity, be fascinated by how plants shape our lives, and so much more.
        We believe in actively engaging not just students, but educators, to make the appreciation of nature and outdoor learning a vital part of school education. Join us in our engagement programmes to be a part of this journey.
    </p>
</div><br/><br/><br/><br/>
<div className="container ">
    <div className="row">
        <div className="col col">
          <h2 className="p1">Pre-School Programmes</h2>
          <br/>
          <p  className="p1">What better way to learn about Nature than being in Nature? Grow your little ones’ curiosity, interest and knowledge about plants as they explore the Gardens. </p>
          <br/>
          <br/>
          
          <div className="card mb-3 card" >
            <div className="row g-0">
              <div className="col-md-4">
                <img  src={Courses}className="img-fluid rounded-start" alt="..."/>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title"><b>Edible Plants</b></h5>
                  <p className="card-text">Children will have the opportunity to explore Flower Dome to learn about edible plants. They will be introduced to the different parts of the plant that can be eaten and view plants that provide us with food.</p>
                  <p className="p1">They will learn:</p>
                  <ul className="p1">
                    <li>How to differentiate between living and non-living things</li>
                    <li>How to recognise the edible parts of a plant</li>
                    <li>To associate plants with food</li>
                </ul>
                  <p className="card-text"><small className="text-body-secondary">For ages 4 to 6</small></p>
                </div>
              </div>
            </div>
          </div>
          <br/><br/>
          <div className="card mb-3 card" >
            <div className="row g-0">
              <div className="col-md-4">
                <img  src={Courses1} className="img-fluid rounded-start" alt="..."/>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title"><b>Opposites Attract</b></h5>
                  <p className="card-text">Children will have the opportunity to explore the Cloud Forest to learn about opposites in the plant world. They will discover ferns and bromeliads. </p>
                  <p className="p1">They will learn:</p>
                  <ul className="p1">
                    <li>How to differentiate between living and non-living things</li>
                    <li>The meaning of the word “opposite”</li>
                    <li>To recognise two types of plants found in natural cloud forests</li>
                </ul>
                  <p className="card-text"><small className="text-body-secondary">For ages 4 to 6</small></p>
                </div>
              </div>
            </div>
          </div>
          <br/><br/><br/>
          
        </div>
    </div>
</div>
<div className="container ">
    <div className="row">
        <div className="col col">
            <h2 className="p1">Primary Programmes</h2>
            <p className="p1">Introduce your child to the wonderful world of plants through this hands-on programme that shows the relationship between plants and people.    </p>
            <br/><br/>
            <div className="card mb-3 card" >
                <div className="row g-0">
                  <div className="col-md-4">
                    <img  src={Courses2} className="img-fluid rounded-start" alt="..."/>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title"><b>Green Heritage</b></h5>
                      <p className="card-text">Cultivate your students’ love for nature as they discover how plants play a part in shaping our daily lives and cultural identities.</p>
                      <p className="p1">They will learn:</p>
                      <ul className="p1">
                        <li>How plants influenced our history, culture, and traditions</li>
                        <li>The significance, characteristics, and uses of plants
                        </li>
                        
                    </ul>
                      <p className="card-text"><small className="text-body-secondary">For Primary 1 to 3</small></p>
                    </div>
                  </div>
                </div>
              </div>
              <br/><br/>
              <div className="card mb-3 card" >
                <div className="row g-0">
                  <div className="col-md-4">
                    <img  src={Courses3} className="img-fluid rounded-start" alt="..."/>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title"><b>Plant Reproduction</b></h5>
                      <p className="card-text">Students will learn about the processes involved in the sexual reproduction of flowering plants.</p>
                      <p className="p1">They will learn:</p>
                      <ul className="p1">
                        <li>To understand that living things reproduce to ensure the continuity of their kind</li>
                        <li>How to recognise the processes involved in the sexual reproduction of flowering plants
                        </li>
                        
                    </ul>
                      <p className="card-text"><small className="text-body-secondary">For Primary 1 to 3</small></p>
                    </div>
                  </div>
                </div>
              </div>
              <br/><br/>
              <div className="card mb-3 card" >
                <div className="row g-0">
                  <div className="col-md-4">
                    <img  src={Courses4} className="img-fluid rounded-start" alt="..."/>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title"><b>Deforestation</b></h5>
                      <p className="card-text">Students will learn about deforestation and how it contributes to global warming. </p>
                      <p className="p1">They will learn:</p>
                      <ul className="p1">
                        <li>About global warming and what causes it</li>
                        
                        <li>About deforestation and how it causes global warming</li>
                    </ul>
                      <p className="card-text"><small className="text-body-secondary">For Primary 1 to 3</small></p>
                    </div>
                  </div>
                </div>
              </div>
              <br/><br/><br/>
        </div>
    </div>
</div>
<div className="container ">
    <div className="row">
        <div className="col col">
            <h2 className="p1">Secondary Programmes</h2>
            <p className="p1">Enhance your student’s appreciation of plant conservation and sustainability. Let them see for themselves the wonders of green design at the Gardens and keep them inspired for many years to come. </p>
<br/><br/>
<div className="card mb-3 card" >
    <div className="row g-0">
      <div className="col-md-4">
        <img  src={Courses5} className="img-fluid rounded-start" alt="..."/>
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title"><b>Energy Conservation</b></h5>
          <p className="card-text">Students will learn about global warming and climate change and discover the importance of energy sustainability.</p>
          <p className="p1">They will learn:</p>
          <ul className="p1">
            <li>The definition of global warming and its impact on the environment</li>
            <li>About the concept of environmental sustainability</li>
            
        </ul>
          <p className="card-text"><small className="text-body-secondary">For Secondary 1 to 5</small></p>
        </div>
      </div>
    </div>
  </div>
  <br/><br/>
  <div className="card mb-3 card" >
    <div className="row g-0">
      <div className="col-md-4">
        <img  src={Courses6} className="img-fluid rounded-start" alt="..."/>
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title"><b>Pollination</b></h5>
          <p className="card-text">Students will learn about the reproductive processes of plants, from pollination to seed dispersal.</p>
          <p className="p1">They will learn:</p>
          <ul className="p1">
            <li>The concept of pollination</li>
            <li>The role of flowers in pollination and seed production</li>
            <li>Various methods of seed dispersal</li>
        </ul>
          <p className="card-text"><small className="text-body-secondary">For Secondary 1 to 5</small></p>
        </div>
      </div>
    </div>
  </div>
  <br/><br/>
  <div className="card mb-3 card" >
    <div className="row g-0">
      <div className="col-md-4">
        <img  src={Courses7} className="img-fluid rounded-start" alt="..."/>
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title"><b>Adapt & Thrive </b></h5>
          <p className="card-text">Students will learn about how plants adapt themselves to better survive in their various native environments.</p>
          <p className="p1">They will learn:</p>
          <ul className="p1">
            <li>To identify the physical factors that affect the survival of plants</li>
            <li>To recognise how adaptive traits and changes to the environment may affect the survival of organisms</li>
            
            
        </ul>
          <p className="card-text"><small className="text-body-secondary">For Secondary 1 to 5</small></p>
        </div>
      </div>
    </div>
  </div>
  <br/><br/><br/>
        </div>
    </div>
</div>
  
    <br/>
    <br/>
    
    </>
  )
}

export default courses
