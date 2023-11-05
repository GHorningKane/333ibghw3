import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";


class AddSong extends React.Component {
    constructor(props) {
      super(props);
      this.state = {song: '', artist: "", rating: ''};
    }
    mySubmitHandler = (event) => {
      event.preventDefault();
    //   if (this.state.check_password === this.state.password){
    //   alert("You are submitting " + this.state.username);
    //   }
    //   else {
    //     alert("Passwords don't match");
    //   }
    };
    myChangeHandler1 = (event) => {
      this.setState({ song: event.target.value});
    };
    myChangeHandler2 = (event) => {
      this.setState({ artist: event.target.value });
      // alert("swag");
    };
    myChangeHandler3 = (event) => {
      this.setState({ rating: event.target.value });

    };
    myClickHandler = (event) => {
      var woof = "http://localhost/333ibghw3/index.php/user/add?username="+localStorage.getItem('logged in')+"&song="+this.state.song+"&artist="+this.state.artist+"&rating="+this.state.rating;
      // alert (woof);
      axios.post(woof)
      .catch((error) => alert ("damn"));
      alert("yo " + localStorage.getItem('logged in') + ", fr you wilding for saying " + this.state.song + " by " + this.state.artist + " is a " + this.state.rating + " as your review!")
      
    }
    render() {
      return (
        <form onSubmit={this.mySubmitHandler}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h1><span>Logged in as {localStorage.getItem('logged in')}</span></h1>
          <p>Enter the information about your song and submit! :D:</p>
          <p style={{ fontWeight: 'bold', marginBottom: '5px' }}>Song:</p>
          <input type="text" id = "song" onChange={this.myChangeHandler1} />
          <p style={{ fontWeight: 'bold', marginBottom: '5px' }}>Artist:</p>
          <input type="text" id = "artist" onChange={this.myChangeHandler2} />
          <p style={{ fontWeight: 'bold', marginBottom: '5px' }}>Rating:</p>
          <input type="text" id = "rating" onChange={this.myChangeHandler3} />
          <p>

         </p>
          <input type="submit" onClick={this.myClickHandler} 
          disabled={!(this.state.song) || !(this.state.artist) || !(this.state.rating) || !(this.state.rating.match(/[1-5]/))}/>
        {/* //   this.state.check_password.length <= 10 || !this.state.check_password.match(/\d/)}/> */}
        <p> If the submit button is greyed out, it means you did not submit a number for your rating.
          </p>       
          </div>
        </form>
      );
    }
  }

  ReactDOM.render(<AddSong />, document.getElementById("root"));

  export default AddSong;