import PriceOption from "./PriceOption";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';


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
    const data = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];
    return (
        <>
            <div className="mx-2 border rounded-lg p-2">
                <h2 className="text-3xl text-center font-bold py-2">Best price in the town</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                    }
                </div>
            </div>
            <LineChart className="border" width={500} height={300} data={data}>
                <Line dataKey={'uv'} stroke="red"></Line>
                <Line dataKey={'pv'} stroke="green"></Line>
                <Line dataKey={'amt'} stroke="blue"></Line>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Legend></Legend>

            </LineChart>
        </>
    );
};

export default PriceOptions;