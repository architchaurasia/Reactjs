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

  componentDidMount() {
    this.timer = setInterval(() => {
      console.log("Namaste React Op");
    }, 1000);
    console.log("Child Component did mount " + this.props.name);
  }

  //?Github API
  // async componentDidMount() {
  //   //API call
  //   const data = await fetch("https://api.github.com/users/architchaurasia");
  //   const json = await data.json();
  //   this.setState({
  //     userInfo: json,
  //   });
  //   console.log("Child Component did mount " + this.props.name);
  // }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log(
      "componentWillMount"
    ); /**If u change the page it will unmount */
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

/**
 *
 * ?Render Cycle
 * Parent Constructor
 * Parent render
 *  First Child constructor
 *  First Child render
 *  Second Child constructor
 *  Second Child render
 *
 * ?Commit phase
 *  DOM Updated for children
 *  json logged in console
 *  child componentDid Mount
 *
 *  Parent ComponentDid Mount
 *
 */

/**
 *?Remove parent
 *
 * child constructor
 * child render
 * child componentDidMount
 *
 * API call
 * Set state
 *
 * <UPDATE CYCLE>
 * render
 *
 *
 */
