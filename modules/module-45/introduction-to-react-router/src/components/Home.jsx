import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Home = () => {
    return (
        <div>
            <Header></Header>
            {/* <h2 className="border-2 py-1 px-2 rounded-md font-semibold">this is the <span className="font-bold bg-primary p-1">HOME</span> component</h2> */}
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;