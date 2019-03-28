import React from 'react';
import ReactDOM from 'react-dom';
import faker from "faker";

const Componentdetail = props =>{
return(
  <div className="component">
 <a href="/" className="avatar">
 <img src={faker.image.avatar()} alt="reddy" />
 </a> 
 <div className="content">
 <a href="/" className="author">{props.author} </a> 
 <div className="metadata"><span className="date">{props.date}</span></div>
 <div className="text">{props.text}</div>
  </div>
  </div>
);

}
export default Componentdetail;