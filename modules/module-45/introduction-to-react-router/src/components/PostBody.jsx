import { useLoaderData } from "react-router-dom";

const PostBody = () => {
    const body = useLoaderData();
    return (
        <div>
            <p className="w-[70%] mx-auto">{body.body}</p>
        </div>
    );
};

export default PostBody;