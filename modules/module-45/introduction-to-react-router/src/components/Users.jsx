import { useLoaderData } from "react-router-dom";
import User from "./User";

const Users = () => {
    const users = useLoaderData();
    return (
        <div className="bg-sky-200 text-black">
            <h2 >Our Users: {users.length}</h2>
            <div className="md:grid grid-cols-2">
                {
                    users.map(user => <User user={user} key={user.id}></User>)
                }
            </div>
        </div>
    );
};

export default Users;