import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass";
import ProfileComponent from "./Profile";

const About = () => {
  return (
    <div>
      {" "}
      <h1>This is About page of Food</h1>
      {/* <Outlet /> */}
      <Profile name={"Archit Chaurasia"} />
      <ProfileComponent name={"Archit"} />
    </div>
  );
};

export default About;
