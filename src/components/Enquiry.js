import React from 'react'

const enquiry = () => {
  return (
    <>
    <div className="parallax56"></div>
<div className="space3">
  <br/>
<nav aria-label="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><a href="index.html">Home</a></li>

    <li className="breadcrumb-item active" aria-current="page">Enquiry</li>
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

<br/>
<br/>

<div className="container">
   <div className="row">
      <div className="col"><h1 className="header">
   <b>Plant Doctor</b>: Ask Us Anything!</h1><br/><br/>
<p>Whether you're looking to make your DIY urban garden thrive or simply want to learn more about plants, our team of plant specialists is available to answer all your horticulture-related questions.<br/><br/>
 Fill out the form below and we’ll get in touch with you as soon as we can!</p><br/><br/>


 <h2>Some tips when writing to Plant Doctor:</h2><br/>

 

<ul><li>To help us provide accurate advice, please provide us with relevant information regarding your plant's care. This may include details such as the frequency of watering, the amount of sunlight the plant is receiving, and a description of where the plant is placed.</li>
<li>A photo tells a thousand words! Sharing photos of your plant and its surroundings can help us better understand the site conditions and provide tailored recommendations.</li></ul><br/><br/>




<h3>PARTICULARS</h3><br/><br/>
</div></div>
<form className="row g-3 needs-validation" novalidate>
  <div className="col-md-4">
    <div className="form-outline" data-mdb-input-init>
      <label for="validationCustom01" className="form-label"><b>First/Given Name</b></label>
      <input type="text" className="form-control" id="validationCustom01" placeholder=" First Name" required />
      
      <div className="valid-feedback">Looks good!</div>
    </div>
  </div>
  <div className="col-md-4">
    <div className="form-outline" data-mdb-input-init>
      <label for="validationCustom02" className="form-label"><b>Last Name/Surname</b></label>
      <input type="text" className="form-control" id="validationCustom02" placeholder= "Last Name" required />
      
      <div className="valid-feedback">Looks good!</div>
    </div>
  </div>

<br/>
<br/>
<br/>
  <div className="col-md-4">
    <div className="form-outline" data-mdb-input-init>
      <label for="validationCustom02" className="form-label"><b>Email Address</b></label>
      <input type="Email" className="form-control" id="validationCustom02" placeholder="Email" required />
      
      <div className="valid-feedback">Looks good!</div>
  </div></div>
  <div className="col-md-4">
    <div className="form-outline" data-mdb-input-init>
      <label for="validationCustom02" className="form-label"><b>Contact Number</b></label>
      <input type="text" className="form-control" id="validationCustom02" placeholder="Contact Number" required />
      
      <div className="valid-feedback">Looks good!</div>
  </div></div>



<h2>
  <br/>
<label className="labels">Type of Enquiry</label></h2>
<div className="form-check">
  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"/>
  <label className="form-check-label" for="exampleRadios1">
    Plant Care
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
  <label className="form-check-label" for="exampleRadios2">
    Plant Health
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" />
  <label className="form-check-label" for="exampleRadios3">
    Plant Identification
  </label>
</div>



<h2>
  <br/><label className="labels">Deatils of Inquiry</label></h2>
<input type="text-box" name="" className="text-box"/>



<h3 className="labels">Please upload relevant photos pertaining to your enquiry.</h3>

<p>
 <ul><li>Overview of the area where the plant is placed</li>
 <li>Overview of the plant</li>
 <li>Close-up photo of the affected area of the plant</li></ul>
File format: jpeg, jpg, png only<br/>
Max individual image size 5 MB (15  MB for three images)</p>


<div className="col-md-4">
<div className="input-group mb-3">
  <input type="file" className="form-control" id="inputGroupFile02"/>
  <label className="input-group-text" for="inputGroupFile02">Upload</label>
</div></div>


  <div className="col-12">
    <button className="btn btn-primary doct43" type="submit" data-mdb-ripple-init>Submit form</button>
  </div>
</form>












</div>
<br/>
<br/>
    
    </>
  )
}

export default enquiry
