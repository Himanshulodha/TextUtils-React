// import logo from './logo.svg'; 
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState } from 'react';



function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>
    {/* <Navbar title="TextUtils" aboutText="About TextUtils"/>   */}
    {/* <Navbar/> */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <div className="container my-3">           {/*container bootstrap ki class ho thi hai*/}
    <TextForm heading="Enter the text to analyse below"/>
    {/* <About/> */}
    </div>                                           
    </>
  );
}
export default App;
