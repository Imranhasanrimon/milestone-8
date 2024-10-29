import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <nav>
                <span>my website</span>
                <Link to="/">Home</Link>
                <Link to='/users'>Users</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </div>
    );
};

export default Header;