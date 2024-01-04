import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Nav.css'
import './css/Main.css'
import './css/Footer.css'
import '@fortawesome/react-fontawesome'
import './css/Cookies.css'
import './css/Darklight.css'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Footer from './components/Footer'
function App() {
  
  return (
   <>

   <Navbar/>
   <Main/>
   <Footer/>

   
   
   </>
  );
}

export default App;
