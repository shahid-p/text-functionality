import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newTextUp = text.toUpperCase();
        setText(newTextUp);
    }
    const handleLoClick = () =>{
        let newTextLo = text.toLowerCase();
        setText(newTextLo);
    }
    const handleClearClick = () =>{
      let newTextLo = '';
      setText(newTextLo);
  }
  const handleCopyText = () =>{
    var text = document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
}
const handleExtraSpaces = () => {
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "))
  }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const [text, setText] = useState("");
  return (
    <>
    <div className='container'>
        <h2>{props.heading}</h2>
        <div className="mb-3">
         <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" rows="12"></textarea>
         </div>
         <div className='col-md-12'>

         <button type="button" onClick={handleUpClick} className="btn btn-primary mx-1 my-2">Convert to Uppercase</button>
         <button  type="button" onClick={handleLoClick}  className="btn btn-primary mx-1 my-2">Convert to Lowercase</button> 
         <button  type="button" onClick={handleClearClick}  className="btn btn-primary mx-1 my-2">Clear Text</button>
         <button  type="button" onClick={handleCopyText}  className="btn btn-primary mx-1 my-2">Copy Text</button>
         <button  type="button" onClick={handleExtraSpaces}  className="btn btn-primary mx-1 my-2">Remove Extra Spaces</button>
         </div>
    </div>
    <div className='container my-4'>
      <h3>Your text summary</h3>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <h4>{text.split(" ").length * 0.004} Minutes time to read</h4>
      <h3>Preview</h3>
      <p>{text}</p>
    </div>
    </>
  )
}
