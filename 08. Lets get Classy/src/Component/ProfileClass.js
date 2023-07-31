import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    //Create State
    this.state = {
      count: 0,
      count2: 3,
    };
  }
  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>Name: {this.props.name}</h1>
        <h2>Count: {count}</h2>
        <button
          onClick={() => {
            this.setState({ count: 1 });
          }}
        >
          Click on me!
        </button>
      </div>
    );
  }
}

export default Profile;
