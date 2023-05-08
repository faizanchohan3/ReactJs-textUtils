
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/navbar";
import Textform from "./components/Textform";
import React, { useState } from 'react'

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
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <div className="container">
    <Textform />
   
   </div>
    </>
  );
}

export default App;


