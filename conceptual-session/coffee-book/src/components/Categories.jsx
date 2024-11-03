import { Link } from 'react-router-dom';

const Categories = ({ categories }) => {
    return (
        <div role="tablist" className="tabs tabs-lifted">
            {
                categories.map(category => <Link to={`/category/${category.category}`} key={category.id} role="tab" className="tab">{category.category}</Link>)
            }
        </div>
    );
};

export default Categories;