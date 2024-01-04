import React from 'react'

const Booking = () => {
  return (
    <>
    <div id="background">
  
  <div className="container">
   
    <h1 className="heading">BOOK YOUR TICKET</h1>
    <form>
      <label className="style" for="tour">Tour:</label>
      <select id="tour" name="tour">
        <option value="botanicalgarden">Botanical Garden Tour</option>
        <option value="conservatory">Conservatory Tour</option>
        <option value="botanicalart">Botanical Art Tour</option>
      </select>
      <br/><br/>
      <label className="style" for="date">Date:</label>
      <input type="date" id="date" name="date"/>
      <br/><br/>
      <label className="style" for="time">Time:</label>
      <input type="time" id="time" name="time"/>
      <br/><br/>
      <label className="style" for="number">Number of Tickets:</label>
      <input type="number" id="number" name="number" min="1"/>
      <br/><br/>
      <input type="submit" value="Book Now"/>
    </form>
  </div>
 </div>
  
  </>
  )
}

export default Booking
