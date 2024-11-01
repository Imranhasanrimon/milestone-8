import Brother from "./Brother";
import MySelf from "./MySelf";
import Sister from "./Sister";

const Dad = ({ asset }) => {
    return (
        <div>
            <h2>Dad</h2>
            <section className="cFlex">
                <MySelf asset={asset}></MySelf>
                <Brother></Brother>
                <Sister></Sister>
            </section>
        </div>
    );
};

export default Dad;