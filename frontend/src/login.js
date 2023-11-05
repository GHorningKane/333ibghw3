import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";

import axios from "axios";

class Login extends React.Component {
    constructor(props) {
      super(props);
      this.state = { username: "", password: ''};
    }
    mySubmitHandler = (event) => {
      event.preventDefault();
      if (this.state.check_password === this.state.password){
      alert("You are submitting " + this.state.username);
      }
      else {
        alert("Passwords don't match");
      }
      alert(this.state.check_password);
      alert(this.state.password);
    };
    myChangeHandler1 = (event) => {
      this.setState({ username: event.target.value });
    };
    myChangeHandler2 = (event) => {
      this.setState({ password: event.target.value });
      // alert("swag");
    };
    myClickHandler = (event) => {
      var woof = "http://localhost/333ibghw3/index.php/user/list?username="+this.state.username+"&password="+this.state.password;
      // alert (woof);
      axios.get(woof)
      .catch((error) => alert ("damn"));
      alert("yo " + this.state.username + ", fr you wilding for having " + this.state.password + " as your password!")
      
    }
    render() {
      return (
        <form onSubmit={this.mySubmitHandler}>
          <h1>Hello {this.state.username}</h1>
          <p>Enter your name, and submit:</p>
          <p>Username:</p>
          <input type="text" id = "username" onChange={this.myChangeHandler1} />
          <p>Password:</p>
          <input type="password" id = "password" onChange={this.myChangeHandler2} />
          <input type="submit" onClick={this.myClickHandler} 
          disabled={!(this.state.check_password === this.state.password) || this.state.check_password.length <= 10 || !this.state.check_password.match(/\d/)}/>
        <p> If the submit buton is greyed out, it either means your password isn't safe, above 10 characters in length and contain at least one number, or they don't match.
          </p>   
          <p> If you can't login after making an account, make sure that you don't have a common username as there's a chance it has already been taken!
            </p>    
        </form>
      );
    }
  }

  ReactDOM.render(<Login />, document.getElementById("root"));

  export default Login;