import React from 'react';
import ReactDOM from 'react-dom';


const App = () => {
 return(
 <div className="ui container components ">
 <div className="component">
 <a href="#" className="avatar">
 <img src="" alt="reddy" />
 </a>
 <div className="metadata"><span className="date">Today at 6:00pm</span></div>
 <a href="" className="author">
 <div claasName="Name"> Nagi </div>
 </a>
 <div className="text">Nice blog spot!
 </div>
 </div>

 <div className="component">
 <a href="#" className="avatar">
 <img src="" alt="reddy" />
 </a>
 <div className="metadata"><span className="date">Today at 6:00pm</span></div>
 <a href="" className="author">
 <div claasName="Name"> Nagi </div>
 </a>
 <div className="text">Nice blog spot!
 </div>
 </div>
 <div className="component">
 <a href="#" className="avatar">
 <img src="" alt="reddy" />
 </a>
 <div className="metadata"><span className="date">Today at 6:00pm</span></div>
 <a href="" className="author">
 <div claasName="Name"> Nagi </div>
 </a>
 <div className="text">Nice blog spot!
 </div>
 </div>
 
 
  </div>
  
 );
}

ReactDOM.render(<App/>,document.getElementById("root"));
export default App;