import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError;
    console.log(err)
    return(
        <h1>Error Nothing is found!</h1>
    )
}

export default Error;