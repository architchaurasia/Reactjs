import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    //Create State
    this.state = {
      count: 0,
      count2: 3,
    };
    console.log("child constructor");
  }
  componentDidMount(){
    //API call
    console.log("Child Component did mount");
}
  render() {
    const { count } = this.state;
    console.log("child render")
    return (
      <div>
        <h1>Name: {this.props.name}</h1>
        <h2>Count: {count}</h2>
        <button
          onClick={() => {
            //We do not mutate state directly
            //Never do this.state = something
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
