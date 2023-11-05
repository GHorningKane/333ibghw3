import React from "react";

class MyForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = { username: "" };
    }
    mySubmitHandler = (event) => {
      event.preventDefault();
      alert("You are submitting " + this.state.username);
    };
    myChangeHandler = (event) => {
      this.setState({ username: event.target.value });
      
    };
  //  { getFee= (isMember) => {
  //     isMember ? "$2.00" : "$10.00"; // if (isMember) ...
  //   }
  //   getFee(true);}
    render() {
      return (
        <div>
        <form onSubmit={this.mySubmitHandler}>
          <h1>Hello {this.state.username}</h1>
          <p>Enter your name, and submit:</p>
          <input type="text" onChange={this.myChangeHandler} />
          <input type="submit" onSubmit={this.mySubmitHandler} />
          <p>
            <script>this.state.username ? "$2.00" : "$10.00";
            </script>
            </p>
        </form>
        {/* {this.state.username ? "$2.00" : "$10.00";} */}
        </div>
      );
    }

  }

  export default MyForm;