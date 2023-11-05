import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

class AddSong extends React.Component {
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
    render() {
    return (
      <form onSubmit={this.mySubmitHandler}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h1><span>Logged in as {localStorage.getItem('logged in')}</span></h1>
          <p>Enter the information about your song and submit! :D:</p>
          <p style={{ fontWeight: 'bold', marginBottom: '5px' }}>Song:</p>
          <input type="text" id="song" onChange={this.myChangeHandler1} />
          <p style={{ fontWeight: 'bold', marginBottom: '5px' }}>Artist:</p>
          <input type="text" id="artist" onChange={this.myChangeHandler2} />
          <p style={{ fontWeight: 'bold', marginBottom: '5px' }}>Rating:</p>
          <input type="text" id="rating" onChange={this.myChangeHandler3} />
          <p></p>
          <input type="submit" onClick={this.myClickHandler} 
            disabled={!(this.state.song) || !(this.state.artist) || !(this.state.rating) || !(this.state.rating.match(/[1-5]/))}
          />
          <p>If the submit button is grayed out, it means you didn't completely fill out the options 
            or you did not submit a number for your rating.</p>
          
          {/* Add a link or button for signup redirection */}
          <Link to="/SignUpSPA">If you don't have an account, sign up!</Link>
        </div>
      </form>
    );
  }
}

export default AddSong;