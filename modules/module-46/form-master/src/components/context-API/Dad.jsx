import Brother from "./Brother";
import MySelf from "./MySelf";
import Sister from "./Sister";

const Dad = () => {
    return (
        <div>
            <h2>Dad</h2>
            <section className="cFlex">
                <MySelf></MySelf>
                <Brother></Brother>
                <Sister></Sister>
            </section>
        </div>
    );
};

export default Dad;