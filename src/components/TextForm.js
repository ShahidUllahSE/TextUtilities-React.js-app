import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("button is clicked");
    let upperText = text.toUpperCase();
    setText(upperText);
  };

  const handlelowClick = () => {
    let lowerText = text.toLowerCase();
    setText(lowerText);
  };

  const handleclearClick = () => {
    let clearText = " ";
    setText(clearText);
  };

  // const copyText=()=>{
  //    let text=document.getElementById("mybox");
  //    text.select();
  //    navigator.clipboard.writeText.value(text);
  // }

  //this function converts the first letter of every word to uppercase the rest of letters are lower case
  const handleCapitalizeWordClick = () => {
    let lowercase = text.toLowerCase();
    let words = lowercase.split(" ");
    let newWords = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    let newText = newWords.join(" ");
    setText(newText);
  };

  const handleOnChange = (event) => {
    console.log("onchange");
    setText(event.target.value);
  };

  const [text, setText] = useState(" ");

  return (
    <div className="container" style={{ color: props.mode === "dark" ? "white" : "#042743"   }}  >
      <h4>{props.heading}</h4>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          style={{
            backgroundColor: props.mode === "dark" ? "#272c3e" : "white",
            color: props.mode === "dark" ? "white" : "#042743",

        
          }}
         
          id="exampleFormControlTextarea1"
          rows="7"
        ></textarea>
      </div>

      <div>
        <button type="button" disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>convert to UpperCase</button>
        <button type="button" disabled={text.length===0}className="btn btn-primary mx-2 my-2" onClick={handlelowClick}>
          convert to lowercase
        </button>
        <button type="button" disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleclearClick}>
          clear textBox
        </button>
        <button type="button" disabled={text.length===0}className="btn btn-primary mx-2 my-2" onClick={handleCapitalizeWordClick}>
          sentenceCase
        </button>
        {/* <button type="button" class="btn btn-primary mr-2" onClick={copyText}>
            copyText
            </button> */}
      </div>

      <div className="container my-3">
        <h1>Summary of Your text</h1>
        <p>The number of words {text.split(/\s+/).filter((element)=>{ return element.length!==0}).length} and {text.length}</p>
        <p>Estimated reading time{0.08 * text.split(" ").filter((element)=>{ return element.length!==0}).length}</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to be Previewed"}</p>
      </div>
    </div>
  );
}
