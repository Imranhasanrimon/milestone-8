import { Outlet } from "react-router-dom";
import Header from "./Header";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <h2 className="border-2 py-1 px-2 rounded-md font-semibold">this is the <span className="font-bold bg-primary p-1">HOME</span> component</h2>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;