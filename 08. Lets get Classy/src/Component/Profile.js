const Profile = (props) => {
  return (
    <div>
      <h1>Hey, This profile belongs to Archit</h1>
      <p>UI/UX Designer</p>
      <h3>Name: {props.name}</h3>
    </div>
  );
};

export default Profile;