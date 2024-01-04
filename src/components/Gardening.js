import React from 'react'
import Garden from "../../src/images/therapy.jpg";
import Garden1 from "../../src/images/physical.jpg";
import Garden2 from "../../src/images/happy.jpg";
import Garden3 from "../../src/images/enjoyi.jpg";
import Garden4 from "../../src/images/ment.jpg";
import Garden5 from "../../src/images/soil.jpg";

const gardening = () => {
  return (
    <>
    <div className="parallex1"> </div>
<br/>
<div className="space3">
  <nav aria-label="breadcrumb">
    <ol className="breadcrumb">
      <li className="breadcrumb-item"><a href="index.html">Home</a></li>
  
      <li className="breadcrumb-item active" aria-current="page">Gardenning</li>
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
            <h1 className="ther4">"Discover the Theraupatic power of nature at Gardens."</h1>
        </div></div>
        
   
</div>
<div className="container " >
    <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
         <br/>
         <br/>
            <p className="ctr mt-3">Gardens are special spaces. They can improve our wellbeing in many ways, helping us feel calm or giving a sense of purpose.</p>
       
       
        </div>
        <div className="col-md-3"></div>
    </div>

    <hr className=" border-3 opacity-75"/>
    <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8  mt-3">
            <h3 className="headers3"><i className="fa-solid fa-circle fa-xs icon " ></i>Why time in nature is good for you?</h3>
        </div>
        <div className="col-md-2"></div>
    </div>
    <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8 let  mt-3">
           <img src={Garden} alt="" className="image-fluid w-75"/>
           <p className="bhr">A person relaxes on the grass reading a book
           </p>
          <br/>
          <br/>
           <h6>Gardens can work wonders when we are stressed and under pressure.
           <br/>
            Gardening can help us achieve the  <a href="wellbeing.html" className="linked">'five ways to wellbeing using gardens and nature'</a>. Through them we can connect, be active, take notice, learn and give.
           </h6>
          <h4 className="decision">
            <i className="fa-brands fa-envira fa-rotate-90" style="color: #103315;"></i><span>A decision to go outside in my wheelchair one day saved my life. Sitting in the Sun, my shoulders are dropped, my breathing slowed....something had changed and it felt very positive.</span>
            <i className="fa-brands fa-envira fa-rotate-90" style="color: #103315;"></i>

          </h4>
         
         <h5>-Mark Lane, Gardener.
         <br/>
         <br/>
         <br/>
          More is explained in this video:</h5>
         <br/>
         <iframe width="760" height="515" src="https://www.youtube.com/embed/cZ5rUAvlj5Q?si=E1rLsyGwJ8gsJva9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        </div>
        <div className="col-md-2"></div>
    </div>
   
    <hr className=" border-3 opacity-75"/>
   <br/>

    <div className="row">
        <div className="col-md-2">
        </div>
        <div className="col-md-8  mt-3 let">
            <h3 className="headers3"><i className="fa-solid fa-circle fa-xs icon " ></i>Gardening Support your Physical helath.</h3>
           <br/>
            <img src={Garden1} alt="" className="image-fluid w-75"/>
           <br/>
            <p className="bhr">A person concentrates on some vigorous work in the garden.</p>
<h6>Gardening offers ways to use and move your body. This could be through physical tasks that burn calories. Or, it could be through gentle activities that develop fine motor skills.</h6>
      <br/>
</div>
        <div className="col-md-2"></div>
    </div>
    <hr className=" border-3 opacity-75"/>

    <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8  mt-3 let">
            <h3 className="headers3"> <i className="fa-solid fa-circle fa-xs icon " ></i>Gardening can make you feel part of a community</h3>
           <br/>
            <img src={Garden2} alt="" className="image-fluid w-75"/>
            <p className="bhr">A group of people laugh as they garden together</p>
<h6>Looking after your own garden can sometimes be a solo activity. But, there are plenty of ways to connect with others. Swapping plants and advice with friends and neighbours can help build bonds. You could even team up on bigger tasks. Or, you could join a local gardening club or community garden.</h6>
        </div>
        <div className="col-md-2"></div>
    </div>
    <hr className=" border-3 opacity-75"/>

    <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8  mt-3 let">
            <h3 className="headers3"><i className="fa-solid fa-circle fa-xs icon " ></i>Gardens let you enjoy time in nature</h3>
           <br/>
            <img src={Garden3} alt="" className="image-fluid w-75"/>
            <p className="bhr">A person walking their dog down a flower-lined lane</p>
<h6>Gardening and time in nature offer enormous potential to improve our health. Evidence from environmental psychology suggests time in nature can tackle mental fatigue. It can also have a positive impact on our brain chemistry, influencing the release of serotonin and cortisol, which help us feel good.
<br/>
    For many gardeners, a daily stroll around the garden is one of the most enjoyable things to do. It allows you a peaceful moment to see what has grown or changed.</h6>
        </div>
       <br/>
        <div className="col-md-2"></div>
    </div>
    <hr className=" border-3 opacity-75"/>
    <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8  mt-3 let">
            <h3 className="headers3"> <i className="fa-solid fa-circle fa-xs icon " ></i>Gardening and Mental Health</h3>
           <br/>
            
            <img src={Garden4} alt="" className="image-fluid w-75"/>
            <p className="bhr">A group of people gardening together around a raised bed
            </p>
            <h6>Gardening has huge potential to help people with defined mental health needs. There are so many activities and options - more than any other type of therapeutic activity.</h6>
           <br/>
            <hr className=" border-3 opacity-75"/>
            <iframe width="760" height="515" src="https://www.youtube.com/embed/SyoFu3I7J2k?si=8fHPISC13IG3n15L" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <p className="bhr">Mark Lane shares how gardening changed his life
            </p>
           <br/>
           <br/>
            <hr className=" border-3 opacity-75"/>
            <iframe width="760" height="515" src="https://www.youtube.com/embed/iSsiJ3ewiTI?si=M9asE7w3RekpM4-k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <p className="bhr">Video of Abi's Story.
</p>
        <h6>In this short film, Abi talks about how gardening and nurturing plants helps her to feel free from her PTSD.</h6>
        
        
       
<br/>
<br/>
        </div>
        <div className="col-md-2"></div>
    </div>
    <hr className=" border-3 opacity-75"/>

    <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8 mt-3 let">
            <h3 className="headers3"> <i className="fa-solid fa-circle fa-xs icon " ></i>Gardens allow you to keep learning</h3>
           <br/>
            <img src={Garden5} alt="" className="image-fluid w-75"/>
            <p className="bhr">A person carefully repots young tomato seedlings</p>
<h5>Continued learning could mean trying something new or rediscovering old interests. It provides an opportunity to build confidence and have fun.</h5>
        </div>
        <div className="col-md-2">
            
        </div>
    </div>
   <br/>
   <br/>
    <div className="row">
      <div className="col-md-3"></div>
      <div className="col-md-9">
        <h4>Listen to these Theraupatic and relaxing Sounds:</h4>
       <br/>
        <audio controls>
          <source src="images/nature.ogg" type="audio/ogg"/>
          <source src="images/nature.mp3" type="audio/mpeg"/>
        Your browser does not support the audio element.
        </audio>
        <audio controls>
          <source src="images/splash.ogg" type="audio/ogg"/>
          <source src="images/splash.mp3" type="audio/mpeg"/>
        Your browser does not support the audio element.
        </audio>
        <audio controls>
          <source src="images/foot.ogg" type="audio/ogg"/>
          <source src="images/foot.mp3" type="audio/mpeg"/>
        Your browser does not support the audio element.
        </audio>
        <audio controls>
          <source src="images/rain.ogg" type="audio/ogg"/>
          <source src="images/rain.mp3" type="audio/mpeg"/>
        Your browser does not support the audio element.
        </audio>
        <audio controls>
          <source src="images/E birds.ogg" type="audio/ogg"/>
          <source src="images/E birds.mp3" type="audio/mpeg"/>
        Your browser does not support the audio element.
        </audio>
        <audio controls>
          <source src="images/jungle.ogg" type="audio/ogg"/>
          <source src="images/jungle.wav" type="audio/mpeg"/>
        Your browser does not support the audio element.
        </audio>
      </div>
    </div>
   <br/>
   <br/>
    <div className="row">
      <div className="col-md-4 let3">        <img src="images/dandelion.png" alt="" className="image-fluid w-25"/>
      </div>
      <div className="col-md-4 let3">
        <img src="images/dandelion.png" alt="" className="image-fluid w-25"/>
      </div>
      <div className="col-md-4 let3">        <img src="images/dandelion.png" alt="" className="image-fluid w-25"/>
      </div>

    </div>
</div>

<br/>
<br/>
    
    </>
  )
}

export default gardening
