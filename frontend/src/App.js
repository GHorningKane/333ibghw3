// import React, { useState, useEffect } from "react";
import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";

import axios from "axios";

function App() {
  class MyForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = { username: "", password: '' };
    }
    mySubmitHandler = (event) => {
      event.preventDefault();
      alert("You are submitting " + this.state.username);
    };
    myChangeHandler1 = (event) => {
      this.setState({ username: event.target.value });
    };
    myChangeHandler2 = (event) => {
      this.setState({ password: event.target.value });
    };
    myClickHandler = (event) => {
      
      var woof = "http://localhost/333ibghw3/index.php/user/list?username="+this.state.username+"&password="+this.state.password;
      // alert (woof);
      axios.post(woof)
      .catch((error) => alert ("damn"));
      alert("yo " + this.state.username + ", fr you wilding for having " + this.state.password + " as your password!")
      
    }
    render() {
      return (
        <form onSubmit={this.mySubmitHandler}>
          <h1>Hello {this.state.username}</h1>
          <p>Enter your name, and submit:</p>
          <input type="text" id = "username" onChange={this.myChangeHandler1} />
          <input type="password" id = "password" onChange={this.myChangeHandler2} />
          <input type="submit" onClick={this.myClickHandler} />
        </form>
      );
    }
  }

  
  
  ReactDOM.render(<MyForm />, document.getElementById("root"));
  // const [myData, setData] = useState([]);
    
  // useEffect(() => {
  //   axios
  //     // .get("https://jsonplaceholder.typicode.com/posts")
  //     .get("http://localhost/333ibghw3/index.php/user/list?limit=20")
  //     .then((response) => {
  //       // data is an object provided by the axios API that contains the data
  //       // https://axios-http.com/docs/res_schema
  //       setData(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);
  // return (
  //   <div>
  //     {myData.map((item) => (
  //       <p key={item.id}>{[item.username, " ", item.song, ' ', item.id]}</p>
  //     ))}
  //     this.state.password
  //   </div>
  // ); 
  }

  export default App;

  // render() 
  // return (
  //   // <div>
  //   {myData.map((item) => ( 
  //     <div>  
  //     <p key={item.id}>{item.song}</p>
  //     {/* <p>swag</p> */}
  //     </div>
  //   ))}
    
  //   // <p>swag</p>
  //   // </div>

  //   )


    {/* <pre>{JSON.stringify(myData)}</pre> */}
    {/* <p>
      hi
      </p>  */}

    // <div>
    //   {myData.map((item) => (
    //     <p key={item.id}>{item.title}</p>
    //   ))}
    //   <pre>{JSON.stringify(myData, null, 2)}</pre>
    //   <p>
    //     hi
    //     </p> 
    // </div>


// ReactDOM.render(myelement, document.getElementById("root"));

// class Car extends React.Component {
//   const [myData, setData] = useState([]);

//   useEffect(() => {
//     axios
//       // .get("https://jsonplaceholder.typicode.com/posts")
//       .get("http://localhost/333ibghw3/index.php/user/list?limit=20")
//       .then((response) => {
//         // data is an object provided by the axios API that contains the data
//         // https://axios-http.com/docs/res_schema
//         setData(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);
//   render() {
//     return     <div>
//     {myData.map((item) => (
//       <p key={item.id}>{item.title}</p>
//     ))}
//     <pre>{JSON.stringify(myData, null, 2)}</pre>
//     <p>
//       hi
//       </p> 
//   </div>
//   }
//       }



// import React from "react";
// import UserAction from "./UserAction";
// import MyForm from "./MyForm";

// import logo from './logo.svg';
// import './App.css';


// // import React, { useState, useEffect } from "react";
// import axios from "axios";


// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;


// // function App() {
// //   var userData = {
// //     // name: "<replace with your name>",
// //     // likes: "<replace with what you like>",
// //     name: "Gavin",
// //     likes: "pizza",
// //   };
// //   return <UserAction userdata={userData} />;
// // }



// function App2(){
//   var userData2 = {
//     username: "Gavin12"
//   }
//   return <MyForm userdata2 = {userData2} />;
// }
// export default App2;

// // import logo from "./logo.svg";
// // import "./App.css";
// // import React from "react";



// // class App extends React.Component {

// //   render() {
// //         // const { name, job } = this.state;
      
// //         return (
// //           // <form ref="form" onSubmit={this.handleSubmit}>
// //           //   <label htmlFor="name">Name</label>
// //           //   <input
// //           //     type="text"
// //           //     name="name"
// //           //     id="name"
// //           //     // <input type="submit" class="btn btn-primary" value="Submit">
// //           //     //  <button type="submit">Do the thing</button>
// //           //     />
// //           //     </form>
// //               <form ref="form" onSubmit={this.handleSubmit}>
// //               <button type="submit">Do the thing</button>
// //           </form>
// //               // value={name}
// //               // onChange={this.handleChange} 
// //               // />

              
// //             //   <label htmlFor="job">Job</label>
// //             //   <input
// //             //     type="text"
// //             //     name="job"
// //             //     id="job"
// //             //     value={job}
// //             //     onChange={this.handleChange} />
// //             // </form>
            
// //         );
// //       }

// //   // constructor(props) {
// //   //   super(props);
// //   //   this.state = {
// //   //     brand: "Ford",
// //   //     model: "Mustang",
// //   //     color: "red",
// //   //     year: 1964,
// //   //   };
// //   // }
// //   // changeColor = () => {
// //   //   this.setState({ color: "blue" });
// //   // };
// //   // render() {
// //   //   return (
// //   //     <div>
// //   //       <h1>My {this.state.brand}</h1>
// //   //       <p>
// //   //         It is a {this.state.color} {this.state.model} from {this.state.year}.
// //   //       </p>
// //   //       <button type="button" onClick={this.changeColor}>
// //   //         Change color
// //   //       </button>
// //   //     </div>
// //   //   );
// //   // }
// // }

// // export default App;
// // // import Form from './Form'

// // // function App() {

// // //   class App extends React.Component {
// // //     state = {
// // //       characters: [],
// // //     }
// // //   }

// // // return (
// // //   <div className="container">
// // //     <Table characterData={characters} removeCharacter={this.removeCharacter} />
// // //     <Form />
// // //   </div>
// // // )

// // // }
// // // export default App;
