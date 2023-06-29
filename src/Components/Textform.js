import React, { useState } from "react";

export const Textform = (props) => {
  const handleUpclick = () => {
   
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert(" Converted to Uppercase!" , "success");
  };
  const handleLoclick = () => {  
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert(" Converted to Lowercase!" , "success");
  };

  const handleClearclick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Clear Text!" , "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleExtraSpace = () =>{
   let newText = text.split(/[ ]+/);
   setText(newText.join(" "))
   props.showAlert("Removed Extra spaces!" , "success");
  }
  const copy = async () => {
    await navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard! " , "success");
  }

  const [text, setText] = useState("");
  return (
    <>
      <div className="container"style={{color: props.mode==='dark'?'white':'hsl(192deg 83% 11%)'}}>
        <h1 className="mb-4">{props.heading}</h1>
        <div className="mb-3">
          <textarea 
            style={{backgroundColor: props.mode==='light'?'white':'rgb(35 103 113)', color: props.mode==='dark'?'white':'hsl(192deg 83% 11%)'}}
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpclick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLoclick}> Convert to Lowercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={copy}>Copy To Clipboard</button> 
        <button className="btn btn-primary mx-1 my-1" onClick={handleClearclick}>Clear Text</button>  
        <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>Remove Extrta Spaces</button>  
      <div className="container my-3 mb-2">
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} Characters
        </p>
        <p> {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here" }</p>
      </div>
      
       </div>
    </>
  );
};
