import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import axios from "axios";

class LoginSPA extends React.Component {
    constructor(props) {
      super(props);
      this.state = { username: "", password: '', loggedin: ''};
    }
    mySubmitHandler = (event) => {
      event.preventDefault();
    //   alert("You are submitting " + this.state.username);
    //   alert(this.state.password);
    };
    myChangeHandler1 = (event) => {
      this.setState({ username: event.target.value });
    };
    myChangeHandler2 = (event) => {
      this.setState({ password: event.target.value });
      // alert("swag");
    };
    myClickHandler = (event) => {
      var woof = "http://localhost/333ibghw3/index.php/user/login?username="+this.state.username+"&password="+this.state.password;
      // alert (woof);
      axios.get(woof)
      .then(
        localStorage.setItem('logged in', this.state.username),
        // alert("BROOOOOOOOOOOOO: "+this.state.username),
        // this.setState({loggedin: this.state.username}),
        alert("so shrigma?"),
        alert("logged in as: "+localStorage.getItem('logged in'))
      )
    //   .catch((error) => alert ("damn"));
      .catch(alert ("damn"));
      alert("yo " + this.state.username + ", fr you wilding for having " + this.state.password + " as your password!");
      alert("crazy to think that you're logged in as: "+this.state.loggedin);

    //   alert($_SESSION['username']);
      
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
          disabled={this.state.password.length <= 10 || !this.state.password.match(/\d/)}/>
        <p> If the submit buton is greyed out, it either means your password isn't safe, above 10 characters in length and contain at least one number, or they don't match.
          </p>       
        </form>
      );
    }
  }

  ReactDOM.render(<LoginSPA />, document.getElementById("root"));

  export default LoginSPA;