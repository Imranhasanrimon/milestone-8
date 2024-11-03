
const Card = ({ coffee }) => {
    const { name, id } = coffee || {}
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
};

export default Card;