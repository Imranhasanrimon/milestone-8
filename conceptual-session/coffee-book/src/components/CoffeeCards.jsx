import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";

const CoffeeCards = () => {
    const { category } = useParams();
    const data = useLoaderData();
    const [coffees, setCoffees] = useState([]);
    const goToCoffees = useNavigate();

    useEffect(() => {
        if (category) {
            const filteredByCategory = [...data].filter(coffee => coffee.category === category);
            setCoffees(filteredByCategory)
        } else {
            setCoffees(data.slice(0, 6))
        }
    }, [category, data])

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-8 gap-4">
                {
                    coffees.map(coffee => <Card key={coffee.id} coffee={coffee}></Card>)
                }
            </div>
            <button onClick={() => goToCoffees('/coffees')} className="btn btn-warning mb-12">View All</button>
        </>
    );
};

export default CoffeeCards;