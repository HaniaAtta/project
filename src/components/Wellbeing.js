import React from 'react'
import Well from "../../src/images/connect.jpg";
import Well1 from "../../src/images/active.jpg";
import Well2 from "../../src/images/notice.jpg";
import Well3 from "../../src/images/learn.jpg";
import Well4 from "../../src/images/give.jpg";

const Wellbeing = () => {
  return (
    <>
   <div className="parallex2"></div>
<br/>
<div className="space3">
  <nav aria-label="breadcrumb">
    <ol className="breadcrumb">
      <li className="breadcrumb-item"><a href="index.html">Home</a></li>
      <li className="breadcrumb-item"><a href="gardentherapy.html">Garden Therapy</a></li>
  
      <li className="breadcrumb-item active" aria-current="page">Wellbeing</li>
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
          <br/>  <h1 className="well1">Five Ways to Wellbeing Using Gardens & Nature</h1>
        </div></div>
</div>
<br/>
<div className="container">
    <div className="row">
        <div className="col-md-2"></div>
       
        <div className="col-md-8">
            <h5 className="intro">Introducing the five ways to wellbeing</h5>
           <p className="intro2"> <i className="fa-solid fa-circle itali" ></i> Connect</p>
           <p  className="intro2"><i className="fa-solid fa-circle itali" ></i> Be active</p>
           <p  className="intro2"><i className="fa-solid fa-circle itali" ></i> Take Notice</p>
           <p  className="intro2"><i className="fa-solid fa-circle itali" ></i> Learn</p>
           <p  className="intro2"><i className="fa-solid fa-circle itali" ></i> Give</p>
           <p  className="intro2">The amazing, restorative power of gardens and nature can help meet all five of these.</p>

        </div>
        <div className="col-md-2"></div>
</div>
<div className="row">
    <div className="col-md-4">

    </div>
    <div className="col-md-4 leaf mb-3">
        <i className="fa-solid fa-leaf fa-2xl lila" ></i>

        <i className="fa-solid fa-leaf fa-2xl lila" ></i>
        <i className="fa-solid fa-leaf fa-2xl lila" ></i>
        <i className="fa-solid fa-leaf fa-2xl lila" ></i>
    </div>
    <br/>
    <div className="col-md-4"></div>
</div>
<div className="row">
    <div className="col-md-6">
        <img src={Well} alt="" className="image-fluid w-100 mt-3"/>
    </div>
    <div className="col-md-6">
        <p className="
        intro"> Connect</p>
        <p>

Feeling close to and valued by other people are fundamental human needs.
Group work in gardening is a very effective way to bond. 
People with communication difficulties and social anxiety. Working together allows them to gain confidence in interacting with others.
Gardening helped people to rehabilitate physically and mentally.
<br/>
<br/>
<i className="fa-brands fa-envira fa-rotate-90" style="color: #103315;"></i><span className="quotes3">The great outdoors, or at least a garden, can bring you closer to people than being shut away, as it were, in your own room. It's got a wonderfully beneficial social effect.</span>
<i className="fa-brands fa-envira fa-rotate-90" style="color: #103315;"></i>

        </p>
    

    </div>
</div>
<div className="row">
    <div className="col-md-6">
        <p className="intro">Be Active</p>
        <p>Pushing a lawn mower is moderate aerobic exercise. Digging is a strength building activity.
            Studies show exercising in nature can have better results than in a gym. It can lead to greater revitalisation, stress reduction, and motivation to exercise longer.Gardening can be used as part of rehabilitation programmes.</p>
        </div>
    <div className="col-md-6 ">
        <img src={Well1} alt="" className="image-fluid w-100 mt-3"/>
    </div>
</div>

<div className="row">
    <div className="col-md-6">
        <img src={Well2} alt="" className="image-fluid w-100  mt-3 mb-3"/>

    </div>
    <div className="col-md-6">
        <p className="intro">Take Notice</p>
        <p>Interacting with nature is a multi-sensory experience. In your garden or on a walk, you can take time to notice what is around you. Feel the soil in your fingers. Listen to the birds tweeting. Look at the different flowers and trees around you.
            Working in a garden, you become more mindful of the natural environment. You are aware of nature’s processes and cycles. In contrast to the ups and downs of human life, these remain largely constant and reliable.
            <i className="fa-brands fa-envira fa-rotate-90" style="color: #103315;"></i><span className="quotes3">When we’re outside surrounded by nature and we hear the birds tweeting or the grass rustling in the breeze, these sights and sounds have a tangible effect on us and uplift our spirits.</span>
            <i className="fa-brands fa-envira fa-rotate-90" style="color: #103315;"></i>
</p>
    </div>
</div>
<div className="row">
    <div className="col-md-6">
        <p className="intro">Learn</p>
        <p>Gardens and nature offer endless learning opportunities. No matter how much time you spend in nature or how many gardening books you read, there is always more to learn.

            Learning about gardens and nature can be a wonderful personal journey for someone to go on.
            <br/>
            <br/>
            <i className="fa-brands fa-envira fa-rotate-90" style="color: #103315;"></i><span className="quotes3">When you grow something from seed to the plate, there’s a real sense of achievement.</span>
            <i className="fa-brands fa-envira fa-rotate-90" style="color: #103315;"></i>
            
        
        </p>
   
   
   
   
        </div>
    <div className="col-md-6">
        <img src={Well3} alt="" className="image-fluid w-100  mt-3 mb-3"/>

    </div>
</div>
<div className="row">
    <div className="col-md-6 ">
        <img src={Well4} alt="" className="image-fluid w-100 mt-3 mb-3"/>

    </div>
    <div className="col-md-6 ">
        <p className="intro">Give</p>
        <p>Vegetables or flowers grown and given to a loved one can be a well-received gift. To know someone has nurtured something and given it to you is a very feel-good moment. 
            You could also use nature to craft a gift. You'd be amazed what you can put together with some sticks, bark and leaves. You could create a replica of a loved one's favourite animal. 
        </p>
    </div>
</div>

</div>

<br/>
<br/>
<br/>

    </>
  )
}

export default Wellbeing
