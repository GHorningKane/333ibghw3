import React from "react";

class UserAction extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>
        Welcome to the page of {this.props.userdata.name}! 
        I like{" "}
        {this.props.userdata.likes}!
      </h1>
    );
  }
}

export default UserAction;