import { createContext } from "react";
import Aunty from "./Aunty";
import Dad from "./Dad";
import Uncle from "./Uncle";
import './grandpa.css'

export const AssetContext = createContext('gold')
const Grandpa = () => {
    const asset = '💍'
    return (
        <div className="grandpa ">
            <h2>Grandpa</h2>
            <AssetContext.Provider value="💎">
                <section className="cFlex">
                    <Dad asset={asset}></Dad>
                    <Uncle></Uncle>
                    <Aunty></Aunty>
                </section>
            </AssetContext.Provider>
        </div>
    );
};

export default Grandpa;

/*
1.createContext
2.set context like tower
3.useContext
*/