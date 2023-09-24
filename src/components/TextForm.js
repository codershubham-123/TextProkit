import React, { useState } from 'react'


export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked : " + text);
    let newText = text.toUpperCase()
    setText(newText)
    props.showAlert("Converted to upperCase!", "Success")
  }
  const handleClear = () => {
    // console.log("Uppercase was clicked : " + text);
    let newText = '';
    setText(newText)
    props.showAlert("Textbox is clear!", "Success")
  }
  const handleLoClick = () => {
    // console.log("Uppercase was clicked : " + text);
    let newText = text.toLowerCase()
    setText(newText)
    props.showAlert("Converted to lowerCase!", "Success")
  }
  const handleOnChange = (event) => {
    // console.log("On Chnage");
    setText(event.target.value)
  }
  const [text, setText] = useState('');
  return (
    <div>
      <div className="container" style={{color : props.mode === "dark" ? "white" : 'black'}}>
        <h1>{props.heading} </h1>
        <div className="mb-3">

          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode === "dark" ? "rgb(67 108 141)" : 'white', color : props.mode === "dark" ? "white" : 'black'}} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-success mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-danger mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClear}>Clear Text</button>
      </div>
      <div className="container my-3" style={{color : props.mode === "dark" ? "white" : 'black'}}>
        <h2>Brief overview of your text</h2>
        <p><b>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} </b> words and <b>{text.length}</b> characters</p>
        <p> <b>{0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} </b> Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something in textbox to preview here"}</p>

      </div>
    </div>
  )
}
