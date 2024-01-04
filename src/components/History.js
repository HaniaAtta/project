import React from 'react'
import History from "../../src/images/s1.jpg";
import History1 from "../../src/images/s2.jpg";
import History2 from "../../src/images/s3.jpg";
import History3 from "../../src/images/s4.jpg";
import History4 from "../../src/images/s5.jpg";
import History5 from "../../src/images/s6.jpg";
import History6 from "../../src/images/s8.jpg";
import History7 from "../../src/images/illustrate.jpg";
import History8 from "../../src/images/world botanic.jpg";
import History9 from "../../src/images/HERB.JPG";
import Historyy from "../../src/images/plantnature.jpg";

const History = () => {
  return (
    <>
    <div className="parallex1">   </div>
  <br/>
  <div className="space3">
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
    
        <li className="breadcrumb-item active" aria-current="page">History</li>
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

    <div className="container "><div className="row ">
        <div className="col  mt-3">
          <br/>
          <br/>
            <h1 className="ther4">Botanic Gardens and Plant Conservation</h1>
        </div></div>
        
 
    

    
    
</div>
<br/>
<div className="container mb-3">
    <div className="row">
        <div className="col mt-4">
            <h3>What is a Botanic Garden?</h3>
            <p className="mt-3"> Botanic gardens are institutions holding documented collections of living plants for the purpose of scientific research, conservation, display, and education.
                In 2018, BGCI updated the criteria that define a botanic garden to have a greater emphasis on conserving rare and threatened plants, compliance with international policies, and sustainability and ethical initiatives.

BGCI has developed an Accreditation Scheme to distinguish between gardens and botanic gardens. The scheme uses BGCI’s updated definition of a botanic garden as well as the outcome of BGCI’s technical review on defining a botanic garden.
            </p>
           
        </div>
    </div>
    <br/>

    <div className="row">
        <div className="colmt-3">
           
     <h3>History of Botanic Gardens</h3>
        <p className="mt-3">Gardens and the cultivation of plants have been around for thousands of years with the first examples dating to around 3,000 years ago in ancient Egypt and Mesopotamia. However, the first ‘true’ botanic gardens with an underlying scientific foundation were the physic gardens of Italy created in the 16th and 17th centuries. These gardens were purely for the academic study of medicinal plants. By the 16th Century these medicinal gardens had spread to universities and apothecaries throughout central Europe such as Cologne and Prague.</p>
        
            
    </div>
    </div>
    <br/>
    <div className="row">
        <div className="col">
            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                  <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                  <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={History} className="d-block w-100 ig3" alt="..."/>
                    <div className="carousel-caption d-none d-md-block ca3">
                      <h5>Botanic Garden of Padua, Italy</h5>
                      <p>The Botanic Garden at the University of Padua was among the first botanic gardens ever recorded.</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src={History1} className="d-block w-100 ig3" alt="..."/>
                    <div className="carousel-caption d-none d-md-block ca3">
                      <h5>Royal Botanic Gardens, Kew</h5>
                      <p>The Royal Botanic Gardens, Kew was one of the first scientific based botanic gardens.</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src={History2} className="d-block w-100 ig3" alt="..."/>
                    <div className="carousel-caption d-none d-md-block ca3">
                      <h5>Missouri</h5>
                      <p>Missouri Botanical Garden was among the first botanic gardens to be established in the USA in 1859.</p>
                    </div>
                  </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
        </div>
    </div>
    <br/>

    <div className="row">
        <div className="col mt-3">
            <p className="mt-3">Botanic gardens then experienced a change in usage during the 16th and 17th century. This was the age of exploration and the beginnings of international trade. Gardens such as the Royal Botanic Gardens, Kew and the Real Jardín Botánico de Madrid were set up to try and cultivate new species that were being brought back from expeditions to the tropics. Not only did these gardens promote and encourage botanical exploration in the tropics, they also helped found new gardens in the tropical regions to help cultivate these newly discovered plant species.

                In the last 50 years botanic gardens are increasingly recognised as being extremely important to conservation due to their existing collections and the scientific knowledge they possess in the propagation of plant species. There are now currently 1775 botanic gardens and arboreta in 148 countries around the world with many more under construction or being planned. You can use our Garden Search Database to search for botanic gardens by keyword or country.</p>
        </div>
    </div>
    <div className="row">
        <div className="col mt-3">
            <h3>Role of Botanic Gardens</h3>
            <p className="mt-3">Botanic gardens have had a changing role throughout history and they continue to adapt and serve the needs of society as new challenges arise. Being major tourist destinations, attracting an estimated 500 million visitors each year, they are important contributors to local and national economies. They also provide many benefits to society such having a positive impact on mental and physical health, particularly in urban settings where the majority of botanic gardens are situated. As illustrated above, botanic gardens have in more recent years become key players in both the conservation of plants and in the education of the people who come to see them.

                Several botanic garden activities are important for the conservation of plants around the world, including:</p>
       
       <ul className="mt-3">
        <li><p><b>Horticulture and cultivation skills allow botanic gardens to grow plants that might be lost in the wild.
</b> Living collections and seed banks safeguard species and enable the restoration and rehabilitation of degraded habitats.</p> </li>
        <li><p><b>Research and development</b>into plant taxonomy and genetics, phytochemistry, useful plant properties and informing selection of plants that can withstand degraded and changing environments (especially important with the threat posed by climate change).</p></li>
        <li><p><b>Education is a strength of botanic gardens that allows them to communicate the importance of conserving plants</b>, reaching out to diverse audiences, and also to communicate how this may be achieved.</p></li>
        <li><p><b>Linking plants with the well-being of people,</b>and also helping conserve indigenous and local knowledge, to encourage the sustainable use of plant resources for the benefit of all, as part of sustainable development.</p></li>
       </ul>
            </div>
    </div>
    <br/>
    <br/>
    <div className="row">
        <div className="col-md-5 mt-3">
            <h3>Why Conserve Plants?</h3>
            <p  className="mt-3">Plant diversity underpins the functioning of all ecosystems, which in turn provide the fundamental support systems upon which all life depends. Services provided by ecosystems include carbon sequestration, climate regulation, nutrient cycling, and pollination. Plants provide us with many direct benefits such as food, medicine, clothes, shelter, and the raw materials from which countless other products are made, as well as having important cultural and spiritual values.

                Plants are therefore an essential resource for human existence and we should all be aware that plants across the world are endangered with many facing extinction. Their conservation should be a key component of efforts for biodiversity conservation.</p>
        </div>
    
        <div className="col-md-7">
            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#carouselExampleCaptions" data-slide-to="" className="active"></li>
                  <li data-target="#carouselExampleCaptions" data-slide-to=""></li>
                  <li data-target="#carouselExampleCaptions" data-slide-to=""></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={History3} className="d-block w-100 ig4" alt="..."/>
                    <div >
                      <p className="ca"><b>Primary rainforest area of the Xishuangbanna Tropical Botanic Gardens.</b></p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src={History4} className="d-block w-100 ig4" alt="..."/>
                    <div >
                     <p className="ca"><b>Golden Camellia (Camellia nitidissima) preserve to make tea.</b></p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src={History5} className="d-block w-100 ig4" alt="..."/>
                    <div >
                     <p className="ca"><b>Charcoal Production.</b></p>
                    </div>
                  </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only"></span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only"></span>
                </a>
              </div>

        </div>
    </div>
    <br/>

    <div className="row">
       
        <div className="col-md-6 mt-3">
            <img src={History6}alt="" className=" image-fluid w-100 s8"/>
        </div>
        <div className="col-md-6 mt-3">
          <h1>Plants Conservation in Practise:</h1>
          <p className=" mt-3">Integrated plant conservation combines in situ and ex situ conservation approaches to support species survival. In situ conservation protects species in their native habitat, while ex situ conservation ensures plant material is available for research, horticulture, and education activities that ultimately support reintroduction efforts, to prevent species from going extinct.</p>
      </div>
    </div>
    <br/>

    <div className="row">
        <div className="col mt-3">
            <h2>Books on Botanic Gardens</h2>
            <hr/>
            <p> <b>The art Of Botanical Illustrations</b></p>
            <button onclick="showPopuphis()" className="a2">More Details</button>

          <div id="popuphis" className="popup">
           <div className="popup-content">
              <span className="close" onclick="closePopuphis()">&times;</span>
              <div className="row">
                <div className="col-md-6 mt-3">
                  <img src={History7} alt="Image" className="image-fluid w-50"/>

                </div>
                <div className="col-md-6 mt-3 let">
                <h5><b>The Art Of Botanical Illustrations:</b></h5>
                <p>A delight for flower lovers, art lovers and specialists.
                  This book tells the (almost) complete story of the evolution of botanical illustration over a period of some 3,000 years.
                  It surveys the evolution of botanical illustration from the crude scratchings of paleolithic man down to the highly scientific work of the man.
                </p>
                <a href="https://www.botanicalartandartists.com/book-review-the-art-of-botanical-illustration-by-wilfrid-blunt.html " className="history">Click here to read More.</a>
                </div>
              </div>
             
           </div>
          </div>
          <hr/>
          <p><b>Botanic Gardens of the World</b></p>
          <button onclick="showPopuphis2()" className="a2">More Details</button>
  
        <div id="popuphis2" className="popup">
         <div className="popup-content">
            <span className="close" onclick="closePopuphis2()">&times;</span>
            <div className="row">
              <div className="col-md-6 mt-3">
                <img src={History8} alt="Image" className="image-fluid w-100"/>
  
              </div>
              <div className="col-md-6 mt-3 let">
              <h5><b>Botanic Gardens of the World</b></h5>
              <p>It''s the tale of extraordinary plants, botanical history and scientific discovery.From the Renaissance gardens of Italy to the futuristic botanic gardens of Singapore, this gorgeous book tells the story of these unique institutions. Discover the lavish beauty and fascinating history of the 40 most important and inspiring botanic gardens from across the globe.
                 </p>
                 <a href="https://www.barnesandnoble.com/w/botanic-gardens-of-the-world-deborah-trentham/1142849131" className="history">To know more about it, Click Here.</a>
              
              </div>
            </div>
       </div>
      </div>
        </div>
    </div>

    <div className="row">
        <div className="col">
            <h2>Books on Plant Gardens</h2>
            <hr/>
            <p><b>HERBOLOGY</b></p>
            <button onclick="showPopuphis3()" className="a2">More Details</button>
      
            <div id="popuphis3" className="popup">
             <div className="popup-content">
                <span className="close" onclick="closePopuphis3()">&times;</span>
                <div className="row">
                  <div className="col-md-6 mt-3">
                    <img src={History9} alt="Image" className="image-fluid w-100"/>
      
                  </div>
                  <div className="col-md-6 mt-3 let">
                  <h5><b>HERBOLOGY</b></h5>
                  <p>Herbology is also a history of the Royal Botanic Garden Edinburgh, a place where medicinal plants have been grown for hundreds of years for the benefit of the medical profession and their patients.
                     </p>
                     <a href="https://www.rbge.org.uk/business-centre/botanics-books/herbology/" className="history">To know more about it, Click Here.</a>
                  
                  </div>
                </div>
           </div></div>


           <hr/>
           <p><b>Planting With Nature</b></p>
           <button onclick="showPopuphis4()" className="a2">More Details</button>
           
           <div id="popuphis4" className="popup">
            <div className="popup-content">
               <span className="close" onclick="closePopuphis4()">&times;</span>
               <div className="row">
                 <div className="col-md-6 mt-3">
                   <img src={Historyy} alt="Image" className="image-fluid w-100"/>
           
                 </div>
                 <div className="col-md-6 mt-3 let">
                 <h5><b>Planting With Nature</b></h5>
                 <p>This is a practical, easy-to-use guide for anyone who wants to do their bit to boost nature in their patch and make the world a little greener. Illustrated with specially commissioned drawings, it contains essential information on many topics, from planting nectar-rich borders, native hedgerows, trees and wildflower meadows to creating rain gardens, green roofs and ponds.
                    </p>
                    <a href="https://www.rbge.org.uk/business-centre/botanics-books/planting-with-nature/" className="history">To know more about it, Click Here.</a>
                 
                 </div>
               </div>
           </div>    
           
           </div>



              </div>
    </div>
    




</div>


<br/>
<br/>
    
    </>
  )
}

export default History
