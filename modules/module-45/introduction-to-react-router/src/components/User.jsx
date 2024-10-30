import { Link } from "react-router-dom";

const User = ({ user }) => {
    const { id, name, email, phone } = user;
    return (
        <div className="bg-sky-400 my-1 mx-1 rounded-md">
            <h3>{name}</h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <Link to={`/users/${id}`}>Details</Link>
        </div>
    );
};

export default User;