import { RiFocus2Line } from "react-icons/ri";

const PriceOption = ({ option }) => {
    const { price, name, features } = option;
    return (
        <div className="bg-sky-500 text-white w-full rounded-md p-4 space-y-3">
            <h2 className="text-center">
                <span className="text-6xl font-semibold">{price}</span>
                <span>/mon</span>
            </h2>
            <h3 className="text-center text-xl border rounded-md py-1">{name}</h3>

            <ul>
                {
                    features.map((feature, indx) => <li className="flex items-center" key={indx}>{<RiFocus2Line className="mr-2" />}{feature}</li>)
                }
            </ul>
            <button className="btn w-full text-white font-bold">Buy Now</button>
        </div>
    );
};

export default PriceOption;