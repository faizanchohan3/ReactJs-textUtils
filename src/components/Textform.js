import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Textform(props) {
  const handleemptyclick = () => {
    changetextarea("");
  };
  const handleonchange = (event) => {
    changetextarea(event.target.value);
    console.log(event.target.value);
  };
  const handleUpperClick = () => {
    let upp = text.toUpperCase();
    changetextarea(upp);
  };
  const handlelowerClick=()=>{

  let lcase=text.toLowerCase();
   changetextarea(lcase); 
  }
  const handleClicCoPYk=()=>{
var data=document.getElementById("textbox");
data.select();
navigator.clipboard.writeText(data.value);

    }
      const handleExtraSpace=()=>{
let newtext=text.split(/[ ]+/);
changetextarea(newtext.join(" "))

    }
  const [text, changetextarea] = useState("enter text here");
  return (
    <>
      <div className="mb-3">
        <h1>{props.header}</h1>
        <textarea
          id="textbox"
          value={text}
          onChange={handleonchange}
          cols="150"
          rows="14"
          className="tectt"
        ></textarea>
      </div>
      <div className="col-auto">
        <button
          type="button"
          onClick={handleemptyclick}
          className="btn btn-primary mx-2"
        >
          clear
        </button>

        <button
          type="button"
          onClick={handleUpperClick}
          className="btn btn-danger mx-2"
        >
          cnvert to Upper Case
        </button>

        <button
          type="button"
          onClick={handlelowerClick}
          className="btn btn-dark mx-2" 
        >
          cnvert to Lower Case
        </button>
        <button
          type="button"
          onClick={handleClicCoPYk}
          className="btn btn-info mx-2"
        >
          Click to copy
        </button>
        <button
          type="button"
          onClick={handleExtraSpace}
          className="btn btn-success"
        >
          Remove extra spacing
        </button>
      </div>
      <div className="containaer">
     <h3>Total </h3>
     <p>{text.split(" ").length} words & {text.length} Characters</p>

      </div>
      <div className="containaer">
     <h3>Preview</h3>
     <p>{text}</p>

      </div>
    
    </>
  );
}
Textform.defaultProps = {
  header: "Please Input your Text to Analyze below",
};
Textform.Prototype = {
  header: PropTypes.string.isRequired,
};
