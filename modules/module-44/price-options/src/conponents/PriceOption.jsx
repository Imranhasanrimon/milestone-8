import { RiFocus2Line } from "react-icons/ri";

const PriceOption = ({ option }) => {
    const { price, name, features } = option;
    return (
        <div className="bg-sky-500 text-white w-full rounded-md p-4 space-y-3 flex flex-col">
            <h2 className="text-center">
                <span className="text-6xl font-semibold">{price}</span>
                <span>/mon</span>
            </h2>
            <h3 className="text-center text-xl border rounded-md py-1">{name}</h3>

            <ul className="flex-grow">
                {
                    features.map((feature, indx) => <li className="flex items-center" key={indx}>{<RiFocus2Line className="mr-2 text-sm text-green-300" />}{feature}</li>)
                }
            </ul>
            <button className="btn w-full text-white hover:bg-gray-600 border-0 font-bold">Buy Now</button>
        </div>
    );
};

export default PriceOption;