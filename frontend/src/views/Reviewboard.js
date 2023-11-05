// if (isPassed === "passpass") {
//     return <Passed />;
//   } 
//   return <Failed />;

import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import StarRating from "../StarRating";
import StarRatingNonInteractable from "../StarRatingNonInteractable";

function Reviewboard() {
    const [myData, setData] = useState([]);
  
    useEffect(() => {
      axios
        // .get("https://jsonplaceholder.typicode.com/posts")
  
        .get("http://localhost/333ibghw3/index.php/user/list?limit=20")
  
        .then((response) => {
          // data is an object provided by the axios API that contains the data
          // https://axios-http.com/docs/res_schema
          setData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
  
    return (
      <div>
  <table>
    <thead>
      <tr>
        <th>Username</th>
        <th>Artist</th>
        <th>Song</th>
        <th>Rating</th>
        <th>ID</th>
      </tr>
    </thead>
    <tbody>
      {myData.map(item => {
        return (
          <tr key={item.id}>
            <td>{ item.username }</td>
            <td>{ item.artist }</td>
            <td>{ item.song }</td>
            <td>{ <StarRatingNonInteractable initialRating={item.rating} /> }</td>
            <td>{ item.id }</td> 
          </tr>
        );
      })}
    </tbody>
  </table>
  
  
      </div>
    );
  }
export default Reviewboard;


// function Reviewboard() {
//     const [myData, setData] = useState([]);
  
//     useEffect(() => {
//       axios
//         .get("http://localhost/333ibghw3/index.php/user/list?limit=20")
//         .then((response) => {
//           // data is an object provided by the axios API that contains the data
//           // https://axios-http.com/docs/res_schema
//           setData(response.data);
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     }, []);
  
//     return (
//       <div>
//         {myData.map((item) => (
//         //   <p key={item.id}>{[item.username, item.song, item.rating, item.id]}</p>
//         <p key={item.id}>{item.username}</p>
//         ))}
//       </div>
//     );
//   }
//   ReactDOM.render(<Reviewboard />, document.getElementById("root"));

// }export default Reviewboard;

    // constructor(props) {
    //   super(props);
    //   this.state = { username: "", password: '', loggedin: ''};
    // }
    // mySubmitHandler = (event) => {
    //   event.preventDefault();

    // };
    // myChangeHandler1 = (event) => {
    //   this.setState({ username: event.target.value });
    // };
    // myChangeHandler2 = (event) => {
    //   this.setState({ password: event.target.value });
    //   // alert("swag");
    // };
    // myClickHandler = (event) => {      
    // }
    // render() {
    //   return (
    //     axios.get("http://localhost/333ibghw3/index.php/user/list?limit=20")
    //     <form onSubmit={this.mySubmitHandler}>
    //       <h1>Hello {this.state.username}</h1>
    //       <p>Enter your name, and submit:</p>
    //       <p>Username:</p>
    //       <input type="text" id = "username" onChange={this.myChangeHandler1} />
    //       <p>Password:</p>
    //       <input type="password" id = "password" onChange={this.myChangeHandler2} />
    //       <input type="submit" onClick={this.myClickHandler} 
    //       disabled={this.state.password.length <= 10 || !this.state.password.match(/\d/)}/>
    //     <p> If the submit buton is greyed out, it either means your password isn't safe, above 10 characters in length and contain at least one number, or they don't match.
    //       </p>       
    //     </form>
    //   );
//      }

//   }


//   export default Reviewboard;