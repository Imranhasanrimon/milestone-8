import { useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { ImCross } from "react-icons/im";
const CustomNav = () => {
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '/profile/:username', name: 'Profile' },
    ];

    const [openIcn, setOpenIcn] = useState(true);
    const toggleBtn = () => {
        setOpenIcn(!openIcn);
    }
    return (
        <nav>
            {
                openIcn ? <HiMenuAlt1></HiMenuAlt1> : <ImCross></ImCross>
            }
            <button onClick={toggleBtn} className="btn btn-sm btn-primary">toggle</button>
            <ul className="md:flex gap-9">
                {
                    routes.map((route) => <li key={route.id}><a href={route.path}>{route.name}</a></li>)
                }
            </ul>

        </nav>
    );
};

export default CustomNav;