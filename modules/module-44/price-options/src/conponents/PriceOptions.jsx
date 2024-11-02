import PriceOption from "./PriceOption";

const PriceOptions = () => {
    const priceOptions = [
        {
            id: 1,
            name: "Basic Plan",
            features: [
                "Access to gym facilities",
                "1 personal training session ",
                "Locker included",
                "Standard equipment access",
                "Monthly fitness assessment",
            ],
            price: 25, // price in USD per month
        },
        {
            id: 2,
            name: "Standard Plan",
            features: [
                "Access to gym facilities",
                "4 personal training sessions ",
                "Access to group classes",
                "Locker included",

                "Nutrition consultation",
                "Monthly fitness assessment",
            ],
            price: 50, // price in USD per month
        },
        {
            id: 3,
            name: "Premium Plan",
            features: [
                "24/7 access to gym facilities",
                "Unlimited personal training sessions",
                "Access to group classes and ",
                "Locker and premium changing  ",
                "Free WiFi and protein shakes",
                "Priority equipment access",
                "Personalized workout plans",
            ],
            price: 75, // price in USD per month
        },
    ];

    return (
        <div className="mx-2 border rounded-lg p-2">
            <h2 className="text-3xl text-center font-bold py-2">Best price in the town</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;