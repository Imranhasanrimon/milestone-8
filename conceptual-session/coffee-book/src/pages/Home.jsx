import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import Heading from "../components/Heading";

const Home = () => {
    const categories = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <Heading title={'Browse Coffees by Category'} subTitle={'Choose your desired coffee category to browse through specific coffees that fit in your taste'} ></Heading>
            {/* category tab  */}
            <Categories categories={categories}></Categories>
            <Outlet></Outlet>

        </div>
    );
};

export default Home;