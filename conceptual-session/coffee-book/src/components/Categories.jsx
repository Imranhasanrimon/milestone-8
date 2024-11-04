import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Categories = ({ categories }) => {

    return (
        <div role="tablist" className="tabs tabs-lifted mt-6">
            {
                categories.map(category =>
                    <NavLink
                        to={`/category/${category.category}`}
                        key={category.id}
                        role="tab"
                        className={({ isActive }) => `tab ${isActive ? 'tab-active text-xl font-bold' : ''}`}>
                        {category.category}
                    </NavLink>)
            }
        </div>
    );
};
Categories.propTypes = {
    categories: PropTypes.array.isRequired
}
export default Categories;