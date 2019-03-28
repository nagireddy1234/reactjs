import React from 'react';
import ReactDOM from 'react-dom';
import faker from "faker";
import Componentdetail from "./componentdetail";


const App = () => {
  return (
    <div className = "ui container components " >

    <Componentdetail 
    author = "sam"
    date = "on 28.03"
    text = "hi" / >
    <Componentdetail 
    author = "sob"
    date = "on 27.03"
    text = "hiee" / >
    <Componentdetail 
    author = "nag"
    date = "on 25.03"
    text = "hieeee" / >
    <Componentdetail 
    author = "red"
    date = "on 24.03"
    text = "hieeeeee" / >
    
    </div>

  );
}
export default App;
ReactDOM.render( < App / > , document.getElementById("root"));