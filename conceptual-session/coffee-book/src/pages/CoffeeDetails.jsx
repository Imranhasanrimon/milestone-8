import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const CoffeeDetails = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const coffee = data.find(singleCoffee => singleCoffee.id == id);

    const { name, image, category, ingredients, nutrition_info, origin, type, description, making_process, rating, popularity } = coffee;

    const goBack = useNavigate();
    return (
        <div>
            <img className="w-full h-96 rounded-xl object-cover" src={image} alt="" />
            <h1 className="text-3xl font-semibold">{name}</h1>
            <p>{description}</p>
            <p>Category: {category}</p>
            <p>Origin: {origin}</p>
            <p>Type: {type}</p>
            <h3 className="underline mt-3 text-2xl font-semibold">Ingredients:</h3>
            {
                ingredients.map((ingredient, i) => <li key={i}>{ingredient}</li>)
            }
            <h3 className="underline mt-3 text-2xl font-semibold">nutrition info:</h3>
            <li>Calories: {nutrition_info.calories}</li>
            <li>fat: {nutrition_info.fat}</li>
            <li>carbohydrates: {nutrition_info.carbohydrates}</li>
            <li>protein: {nutrition_info.protein}</li>
            <h3 className="underline mt-3 text-2xl font-semibold">Making Process:</h3>
            <p>{making_process}</p>
            <h3 className="underline mt-3 text-2xl font-semibold">Reviews:</h3>
            <p>Ratings: {rating}</p>
            <p>Popularity: {popularity}</p>
            <button onClick={() => goBack(-1)} className="btn btn-warning my-8">Go Back</button>
        </div>
    );
};

export default CoffeeDetails;