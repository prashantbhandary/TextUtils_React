

import { useState } from 'react';
import './App.css';
import About from './components/about';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Footer from './components/Footer';
import Review from './components/Review';


function App() {
  const [alert,setalert]=useState(null)
  const showalert =(message,  type)=>{
  setalert(
      {
        msg: message,
        type: type
      })
      setTimeout(() => {
        setalert(null)
      }, 1500);
  }
  return (
   <>
  <Navbar title="Textutils" homeText='Home' aboutText='About'/>
  <Alert alert={alert}/>
  <TextForm showalert={showalert} heading="Enter any text to analysis"/><hr/> 
  {/* <About/>
  <Review/> */}
  <Footer/>
  </>
  );
}

export default App;


