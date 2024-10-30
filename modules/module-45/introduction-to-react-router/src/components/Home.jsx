import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Home = () => {
    const nav = useNavigation();
    const currentLocation = useLocation();
    console.log(currentLocation);
    return (
        <div>
            <Header></Header>
            {
                nav.state === 'loading' ? <h1>Loading</h1> : <Outlet></Outlet>
            }
            <Footer></Footer>
        </div>
    );
};

export default Home;