import { useParams } from "react-router-dom";

const CoffeeCards = () => {
    const obj = useParams();
    console.log(obj);
    return (
        <div>
            <h1>Coffe Cards.........</h1>
        </div>
    );
};

export default CoffeeCards;