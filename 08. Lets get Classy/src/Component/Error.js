import { useRouteError } from "react-router-dom";
import Logo from "../Assets/Error404.gif";

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div>
      <h1>Error Nothing is found!</h1>
      <h3>
        {err.status} : {err.statusText}
      </h3>
      <img className="errorMeesage" src={Logo} alt="Error" />
    </div>
  );
};

export default Error;
