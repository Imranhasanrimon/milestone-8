import { LineChart as LChart, Line, XAxis } from 'recharts';
import { SiWindows } from "react-icons/si";
import { IoLogoApple } from "react-icons/io5";
import { useState } from 'react';
const LineChart = () => {
    const studentResults = [
        { id: 1, name: 'Alice', math: 75, physics: 80, chemistry: 78 },
        { id: 2, name: 'Bob', math: 82, physics: 85, chemistry: 79 },
        { id: 3, name: 'Charlie', math: 90, physics: 88, chemistry: 92 },
        { id: 4, name: 'David', math: 85, physics: 82, chemistry: 80 },
        { id: 5, name: 'Eve', math: 95, physics: 94, chemistry: 89 },
    ];
    const [toggle, setToggle] = useState(true);
    return (
        <div>
            <LChart className='hidden' width={500} height={400} data={studentResults}>
                <XAxis dataKey='name'></XAxis>
                <Line dataKey='math' stroke='red'></Line>
                <Line dataKey='physics' stroke='green'></Line>
            </LChart>
            <div onClick={() => setToggle(!toggle)} className='text-7xl lg:hidden text-sky-500'>
                {toggle ? <IoLogoApple /> : <SiWindows />}

            </div>
            <ul className={`absolute left-24 duration-1000  ${!toggle ? 'hidden top-0' : ' top-24'}`}>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Services</li>
            </ul>
        </div>
    );
};

export default LineChart;