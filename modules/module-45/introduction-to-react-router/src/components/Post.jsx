import { Link } from "react-router-dom";

const Post = ({ post }) => {
    const { title, body, id } = post;
    return (
        <div className="border-2 border-sky-400 py-5 m-1 rounded-lg">
            <h3>{title}</h3>
            <Link to={`/posts/${id}`}><button className="mt-2">Body</button></Link>
        </div>
    );
};

export default Post;