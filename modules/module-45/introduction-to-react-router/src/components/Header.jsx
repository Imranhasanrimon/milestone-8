import { Link, NavLink } from "react-router-dom";
import './active.css'
const Header = () => {
    return (
        <div>
            <h2>Navbar</h2>
            <div className="flex gap-4 justify-center">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/posts">Posts</NavLink>
            </div>

        </div>
    );
};

export default Header;