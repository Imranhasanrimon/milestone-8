import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div>
            <h1>Oopps..!</h1>
            <p className="mt-3">{error.error.message}</p>
        </div>
    );
};

export default ErrorPage;