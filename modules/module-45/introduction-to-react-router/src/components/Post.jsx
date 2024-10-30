import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
    const { title, body, id } = post;
    const navigetToBody = useNavigate();

    const handleBody = () => {
        navigetToBody(`/posts/${id}`)
    }
    return (
        <div className="border-2 border-sky-400 py-5 m-1 rounded-lg">
            <h3>{title}</h3>
            <button onClick={handleBody} className="mt-2">Body</button>
        </div>
    );
};

export default Post;