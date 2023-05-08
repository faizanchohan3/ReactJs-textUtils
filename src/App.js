
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/navbar";
import Textform from "./components/Textform";
import React, { useState } from 'react'
import Aboutus from "./components/Aboutus";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
function App() {
  const [mode,setmode]=useState('light');
const toggleMode=()=>{
  
  if(mode==='dark'){
setmode('light')

  }
  else
  setmode('dark')
  

}
  return (
    <>
      <Router>
            
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
<div className="container">
      <Routes>
          <Route path="/about" element={<Aboutus />}></Route>
             
          
       
          <Route path="/" element={<Textform/>}>
          
          </Route>
        </Routes>
 



</div>
</Router>


    </>
  );
}

export default App;


