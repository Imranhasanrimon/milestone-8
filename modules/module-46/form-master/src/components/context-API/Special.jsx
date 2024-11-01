import { useContext } from "react";
import { AssetContext } from "./Grandpa";

const Special = ({ asset }) => {
    const gift = useContext(AssetContext);
    return (
        <div>
            <h2>Special{gift}</h2>
            <small>Has: {asset}</small>
        </div>
    );
};

export default Special;