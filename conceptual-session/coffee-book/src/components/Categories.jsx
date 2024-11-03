import PropTypes from 'prop-types';
import { useState } from 'react';
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
Categories.propTypes = {
    categories: PropTypes.array.isRequired
}
export default Categories;