// import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass";
// import ProfileComponent from "./Profile";
import React from "react";

// const About = () => {
//   return (
//     <div>
//       {" "}
//       <h1>This is About page of Food</h1>
//       {/* <Outlet /> */}
//       <Profile name={"Archit Chaurasia"} />
//       <ProfileComponent name={"Archit"} />
//     </div>
//   );
// };

//*Class base component

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent construtor");
  }
  componentDidMount() {
    //Api Call
    console.log("Parent componentdidmount");
  }
  render() {
    console.log("Parent render");
    return (
      <div>
        <h1>This is a about page of food</h1>
        <Profile name={"Archit Chaurasia"} />{" "}
        {/*It goes into it which we call child*/}
        {/* <ProfileComponent name={"Archit"} /> */}
      </div>
    );
  }
}

export default About;

/**
 * Parent Constructor
 * Parent render
 *   First Child constructor
 *   First child render
 *   Second child render with
 *
 *   DOM Updated for children
 *
 *   first child componentDidMount
 *   second child componentDidMount
 * Parent componentDidMount
 */
