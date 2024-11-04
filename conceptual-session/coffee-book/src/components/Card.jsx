import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Card = ({ coffee }) => {
    const { name, image, category, origin, type, id, rating, popularity } = coffee || {};
    return (
        <div className="border p-4 rounded-lg">
            <Link
                to={`/coffee/${id}`}
            >
                <img className="h-80 w-full rounded-lg" src={image} alt="" />
                <h1 className="text-xl font-semibold">Name: {name}</h1>
                <p>Category: {category}</p>
                <p>Type: {type}</p>
                <p>Origin: {origin}</p>
                <p>Rating: {rating}</p>
                <p>Popularity: {popularity}</p>
            </Link>
        </div>
    );
};
Card.propTypes = {
    coffee: PropTypes.object.isRequired,
}
export default Card;