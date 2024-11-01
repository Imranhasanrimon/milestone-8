import { useLoaderData, useParams } from "react-router-dom";

const BookDetail = () => {
    const { bookId } = useParams();
    const id = parseInt(bookId);
    const data = useLoaderData();
    const book = data.find(boo => boo.bookId === id);
    const { bookId: currentBookId, image } = book
    return (
        <div className="my-8">
            <h1>book details: {bookId}</h1>
            <img className="w-36" src={image} alt="" />
            <br />
            <button className="btn border border-gray-400 mr-6">Mark as Read</button>
            <button className="btn btn-primary">Add to WhishList</button>
        </div>
    );
};

export default BookDetail;