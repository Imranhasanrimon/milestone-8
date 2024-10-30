import { useLoaderData } from "react-router-dom";

const UserDetail = () => {
    const user = useLoaderData();
    return (
        <div className="border-2 border-sky-400 rounded-md my-2">
            <h3>Details about user</h3>
            <p>Name: {user.name}</p>
            <p>Name: {user.phone}</p>
            <p>Name: {user.website}</p>
            <p>Name: {user.email}</p>
        </div>
    );
};

export default UserDetail;