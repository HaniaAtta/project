import React from 'react'
import Register from "../../src/images/footer.jpeg";

const Register = () => {
  return (
    <>
    <div className="container-fluid lmab">
      
      <div className="row ">
          <div className="col-md-5 ">
<img src={Register} alt="" className="image-fluid w-100 h-100 fitr4"/>
<h1 className="title">REGISTER</h1>
          </div>
          <div className="col-md-7 mt-3 ">
              <form className="row g-3">
                  <div className="col-md-4 formed2">
                      <label for="inputEmail4" className="form-label">Name</label>
                      <input type="name" className="form-control" id="inputEmail4" required/>
                    </div>
                    <div className="col-md-2"></div>
                  <div className="col-md-5 formed2">
                    <label for="inputEmail4" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail4" required/>
                  </div>
                  
                  <div className="col-12">
                    <label for="number" className="form-label">Phone Number</label>
                    <input type="text" className="form-control" id="number" placeholder="042-11111111" required/>
                  </div>
                 
                  <div className="col-md-4">
                    <label for="inputCity" className="form-label">City</label>
                    <input type="text" className="form-control" id="inputCity" required/>
                  </div>
                  <div className="col-md-1"></div>
                  <div className="col-md-3">
                    <label for="inputState" className="form-label" >Province</label>
                    <select id="inputState" className="form-select" required>
                      <option selected>Central Region,</option>
                      <option>Western Region</option>
                      <option>Eastern Region</option>
                      <option>North-East Region</option>

                      <option>North Region</option>

                    </select>
                  </div>
                  <div className="col-md-1"></div>
                  <div className="col-md-2">
                    <label for="inputZip" className="form-label">Zip</label>
                    <input type="text" className="form-control" id="inputZip" placeholder="5400" required/>
                  </div>
                  <div className="col-12">
                      <label for="number" className="form-label">Account Number</label>
                      <div className="cardcredit"><span className="input-group-text" required>
                          <i className="fa-solid fa-credit-card"></i>
                      </span>
                          <input type="text" className="form-control" id="number" placeholder="123-1234567890123-" required/>
                      </div>
                    </div>
                    <div className="input-group mb-3">
                      <span className="input-group-text">$</span>
                      <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" required/>
                      <span className="input-group-text">.00</span>
                    </div>
                  <div className="col-12">
                    <button onclick="showPopupform()" className="sub6"> Submit</button>

                    <div id="popupform" className="popup">
                     <div className="popup-content">
                        <span className="close" onclick="closePopupform()">&times;</span>
                        <h5 className="thank"><b>Thankyou!!</b></h5>
                       
                     </div>
                    </div>                          
                  </div>
                </form>
          </div>
      </div>
  </div>



    
    </>

  )
}

export default Register
