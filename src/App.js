import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Nav.css'
import './css/Register.css'
import './css/Booking.css'
import './css/Activities.css'
import './css/Quiz.css'
import './css/Aboutus.css'
import './css/Btoggle.css'
import './css/Courses.css'
import './css/Gardening.css'
import './css/History.css'
import './css/Policy.css'
import './css/Quiz.css'
import './css/Sustainability.css'
import './css/Tour.css'
import './css/Wellbeing.css'
import './css/Eshop.css'
import './css/Main.css'
import './css/Footer.css'
import '@fortawesome/react-fontawesome'
import './css/Cookies.css'
import './css/Darklight.css'
import './css/Activities.css'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Footer from './components/Footer'
import {BrowserRouter as Router, Route, Routes,} from "react-router-dom";
import Remedies from "./components/Remedies";
import Activities from './components/Activities'
import Gallery from './components/Gallery'
import Gardening from './components/Gardening'
import Courses from './components/Courses'
import Eshop from './components/Eshop'
import History from './components/History'
import Policy from './components/Policy'
import Sustainability from './components/Sustainability'
import Enquiry from './components/Enquiry'
import Tour from './components/Tour'
import Register from './components/Register'
import Wellbeing from './components/Wellbeing'
import Aboutus from './components/Aboutus'
import Quiz from './components/Quiz'
import Booking from './components/Booking'
function App() {

  return (
    <Router>
    <Navbar/>
    <Routes>
        <Route index="home" element={<Main/>}/>
        <Route path="remedies" element={<Remedies/>}/>
        <Route path="*" element={<Main/>}></Route>
        <Route path="activities" element={<Activities/>}></Route>
        <Route path="gallery" element={<Gallery/>}></Route>
        <Route path="gardening" element={<Gardening/>}></Route>
        <Route path="courses" element={<Courses/>}></Route>
        <Route path="eshop" element={<Eshop/>}></Route>
        <Route path="history" element={<History/>}></Route>
        <Route path="policy" element={<Policy/>}></Route>
        <Route path="sustainability" element={<Sustainability/>}></Route>
        <Route path="tour" element={<Tour/>}></Route>
        <Route path="enquiry" element={<Enquiry/>}></Route>
        <Route path="wellbeing" element={<Wellbeing/>}></Route>
        <Route path="aboutus" element={<Aboutus/>}></Route>
        <Route path="quiz" element={<Quiz/>}></Route>
        <Route path="register" element={<Register/>}></Route>
        <Route path="booking" element={<Booking/>}></Route>

    </Routes>
    <Footer/>
</Router>

   
   
  
  );
}

export default App;
