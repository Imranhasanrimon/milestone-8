import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <h2>Navbar</h2>
            <div className="flex gap-4 justify-center">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/users">Users</Link>
                <Link to="/posts">Posts</Link>
            </div>

        </div>
    );
};

export default Header;