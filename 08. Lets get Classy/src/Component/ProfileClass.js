import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    //Create State
    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Dummy Location",
      },
    };
    console.log("child constructor");
  }
  async componentDidMount() {
    //API call
    const data = await fetch("https://api.github.com/users/architchaurasia");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log("Child Component did mount " + this.props.name);
  }
  render() {
    const { count } = this.state;
    console.log("child render");
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
        <h1>{this.state.userInfo.name}</h1>
        <img src={this.state.userInfo.avatar_url} />
        <h2>{this.state.userInfo.bio}</h2>
      </div>
    );
  }
}

export default Profile;
