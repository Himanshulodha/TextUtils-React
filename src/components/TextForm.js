import React, {useState} from 'react'


export default function TextForm(props) {
  const [text, setText] = useState('');
  const [history, setHistory] = useState([]);
  // text="new text"; //wrong way to chnage the state
  // setText("new text"); //correct way to chnage the state

  const handleUpClick = ()=>{                          //yeh humne function banaliya hai
    // console.log("Uppercase was clicked" + text);
    let newText = text.toLocaleUpperCase();
    // const [text, setText] = useState('Enter text here');
    setText(newText)
  }
  
  const handleOnChange = (event)=>{
    // console.log("On Change");
    setText(event.target.value);
  };

  const handleSaveClick = () => {
    // Save the current text to the history
    setHistory([...history, text]);
    // Optionally, you can clear the text after saving
    // setText('Enter text here');
  }

  const ClearClickHistory = () => {
    setHistory([""]);
  }

  const ClearClick = ()=>{
    // console.log("On Change");
    let newText = "";
    // const [text, setText] = useState('Enter text here');
    setText(newText);
  }
  
  return (
    <>
    <div className="container" style={{color: props.mode ==='dark'?'white':
      'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode ==='white'?'red':
      'grey', color: props.mode ==='dark'?'white':
      'white'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button> 
        <button className="btn btn-primary mx-2" onClick={handleSaveClick}>Save</button>
        <button className="btn btn-primary mx-0" onClick={ClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={ClearClickHistory}>Clear History</button>
    </div>
    <div className="container my-3" >
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.0008 * text.split("").length} Minutes read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
      <h3>History</h3>
      
      {history.map((savedText, index) => (
        <p key={index}>{savedText}</p>
      ))}
    
    </div>
    </>
  )
}



// import React, { useState } from 'react';

// export default function TextForm(props) {
//   const [text, setText] = useState('Enter text here');
//   const [history, setHistory] = useState([]);

//   const handleUpClick = () => {
//     let newText = text.toUpperCase();
//     setText(newText);
//   };

//   const handleOnChange = (event) => {
//     setText(event.target.value);
//   };

//   const handleSaveClick = () => {
//     // Save the current text to the history
//     setHistory([...history, text]);
//     // Optionally, you can clear the text after saving
//     // setText('Enter text here');
//   };

//   return (
//     <>
//       <div className="container">
//         <h1>{props.heading}</h1>
//         <div className="mb-3">
//           <textarea
//             className="form-control"
//             value={text}
//             onChange={handleOnChange}
//             id="myBox"
//             rows="8"
//           ></textarea>
//         </div>
//         <button className="btn btn-primary" onClick={handleUpClick}>
//           Convert to Uppercase
//         </button>
//         <button className="btn btn-success mx-2" onClick={handleSaveClick}>
//           Save
//         </button>
//       </div>
//       <div className="container my-3">
//         <h1>Your text summary</h1>
//         <p>
//           {text.split(' ').length} words and {text.length} characters
//         </p>
//         <p>{0.0008 * text.split('').length} Minutes read</p>
//         <h3>Preview</h3>
//         <p>{text}</p>
//         <h3>History</h3>
//         {/* Display the history of saved texts */}
//         {history.map((savedText, index) => (
//           <p key={index}>{savedText}</p>
//         ))}
//       </div>
//     </>
//   );
// }
