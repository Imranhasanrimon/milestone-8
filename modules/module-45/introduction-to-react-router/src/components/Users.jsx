import { useLoaderData } from "react-router-dom";

const Users = () => {
    const users = useLoaderData();
    return (
        <div>
            <h1>Users : {users.length}</h1>
            <h2>our fantastic users</h2>

        </div>
    );
};

export default Users;