import { Link } from "react-router-dom";

const Book = ({ book }) => {
    const { bookId, bookName, author, image, review, tags, category } = book
    return (
        <Link to={`/books/${bookId}`}>
            <div className="card bg-base-100 w-96 shadow-xl border p-5">
                <figure className="bg-gray-400 py-8 rounded-2xl">
                    <img
                        src={image}
                        className="h-40"
                        alt={bookName} />
                </figure>
                <div className="card-body">
                    <div className="flex justify-between">
                        {
                            tags.map((tag, i) => <button key={i} className="btn btn-xs bg-green-200 text-green-600">{tag}</button>)
                        }
                    </div>
                    <h2 className="card-title">
                        {bookName}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>By: {author}</p>
                    <div className="border-b border-dashed"></div>
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline">{category}</div>
                        <div className="badge "><div className="rating">
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" defaultChecked />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                        </div></div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;