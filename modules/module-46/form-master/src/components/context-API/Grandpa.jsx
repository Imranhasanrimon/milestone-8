import Aunty from "./Aunty";
import Dad from "./Dad";
import Uncle from "./Uncle";
import './grandpa.css'

const Grandpa = () => {
    return (
        <div className="grandpa ">
            <h2>Grandpa</h2>
            <section className="cFlex">
                <Dad></Dad>
                <Uncle></Uncle>
                <Aunty></Aunty>
            </section>
        </div>
    );
};

export default Grandpa;