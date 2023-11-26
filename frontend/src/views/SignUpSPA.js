import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "./SignUp.css";
import { Outlet, Link } from "react-router-dom";


class SignUpSPA extends React.Component {
    constructor(props) {
      super(props);
      this.state = { username: "", password: '', check_password: "" };
    }
    mySubmitHandler = (event) => {
      event.preventDefault();
      if (this.state.check_password === this.state.password){
      alert("You are submitting " + this.state.username);
      }
      else {
        alert("Passwords don't match");
      }
    };
    myChangeHandler1 = (event) => {
      this.setState({ username: event.target.value });
    };
    myChangeHandler2 = (event) => {
      this.setState({ password: event.target.value });
    };
    myChangeHandler3 = (event) => {
      this.setState({ check_password: event.target.value });

    };
    myClickHandler = (event) => {
      
      var woof = "http://localhost/333ibghw3/index.php/user/list?username="+this.state.username+"&password="+this.state.password;
      axios.post(woof)
      .catch((error) => alert ("damn"));
      // alert("yo " + this.state.username + ", fr you wilding for having " + this.state.password + " as your password!")
      
    }
    render() {
      return (
        <form onSubmit={this.mySubmitHandler}>
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h1><span>Join the Community {this.state.username}!</span></h1>
          <p style={{ fontWeight: 'bold' }}>Username:</p>
          <input type="text" id = "username" onChange={this.myChangeHandler1} />
          <p style={{ fontWeight: 'bold' }}>Password:</p>
          <input type="password" id = "password" onChange={this.myChangeHandler2} />
          <p style={{ fontWeight: 'bold' }}>Confirm Password:</p>
          <input type="password" id = "check_password" onChange={this.myChangeHandler3} />
          <input type="submit" onClick={this.myClickHandler} 
          disabled={!(this.state.check_password === this.state.password) || this.state.check_password.length <= 10 || !this.state.check_password.match(/\d/)}/>
        <p> If the submit button is greyed out, it either means your password isn't safe, above 10 characters in length and contain at least one number, or they don't match.
          </p> 
          </div>        
        </form>
      );
    }
  }

  ReactDOM.render(<SignUpSPA />, document.getElementById("root"));

  export default SignUpSPA;