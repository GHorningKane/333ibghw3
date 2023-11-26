import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

class LoginPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = { username: "", password: '', loggedin: ''};
    }
    mySubmitHandler = (event) => {
      event.preventDefault();
    };
    myChangeHandler1 = (event) => {
      this.setState({ username: event.target.value });
    };
    myChangeHandler2 = (event) => {
      this.setState({ password: event.target.value });
    };
    myClickHandler = (event) => {
      var woof = "http://localhost/333ibghw3/index.php/user/login?username="+this.state.username+"&password="+this.state.password;
      axios.get(woof)
      .then(
        localStorage.setItem('logged in', this.state.username),
        alert("so shrigma?"),
        alert("logged in as: "+localStorage.getItem('logged in'))
      )
      .catch(alert ("damn"));
      alert("yo " + this.state.username + ", fr you wilding for having " + this.state.password + " as your password!");
      alert("crazy to think that you're logged in as: "+this.state.loggedin);
      
    }
    render() {
      return (
        <form onSubmit={this.myClickHandler}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1><span>Login</span></h1>
            <p>Enter your username and password to log in:</p>
            <p style={{ fontWeight: 'bold', marginBottom: '5px' }}>Username:</p>
            <input type="text" id="username" onChange={this.myChangeHandler1} />
            <p style={{ fontWeight: 'bold', marginBottom: '5px' }}>Password:</p>
            <input type="password" id="password" onChange={this.myChangeHandler2} />
            <p></p>
            <input type="submit" disabled={!(this.state.username) || !(this.state.password)} />
            <p>If the submit button is grayed out, it means you didn't enter both username and password.</p>
            <Link to="/SignUpSPA">If you don't have an account, sign up!</Link>
          </div>
        </form>
      );
  }
}

export default LoginPage;



