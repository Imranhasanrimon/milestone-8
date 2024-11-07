import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import Heading from "../components/Heading";
import { Helmet } from "react-helmet-async";

const Home = () => {
    const categories = useLoaderData();
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Banner></Banner>
            <Heading title={'Browse Coffees by Category'} subTitle={'Choose your desired coffee category to browse through specific coffees that fit in your taste'} ></Heading>
            {/* category tab  */}
            <Categories categories={categories}></Categories>
            <Outlet></Outlet>

        </div>
    );
};

export default Home;