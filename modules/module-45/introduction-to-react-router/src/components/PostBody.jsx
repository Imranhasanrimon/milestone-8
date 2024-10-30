import { useLoaderData, useNavigate } from "react-router-dom";

const PostBody = () => {
    const body = useLoaderData();
    const backGo = useNavigate()
    const handleBack = () => {
        backGo(-1)
    }
    return (
        <div className="border rounded-md py-3">
            <p className="w-[70%] mx-auto">{body.body}</p>
            <button onClick={handleBack} className="mt-2">Back</button>
        </div>
    );
};

export default PostBody;