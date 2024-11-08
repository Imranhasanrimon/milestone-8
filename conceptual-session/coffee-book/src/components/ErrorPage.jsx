import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const { statusText } = useRouteError();
    return (
        <div>
            <h1>Error page: {statusText}</h1>
        </div>
    );
};

export default ErrorPage;