import { LineChart as LChart, Line, XAxis } from 'recharts';
const LineChart = () => {
    const studentResults = [
        { id: 1, name: 'Alice', math: 75, physics: 80, chemistry: 78 },
        { id: 2, name: 'Bob', math: 82, physics: 85, chemistry: 79 },
        { id: 3, name: 'Charlie', math: 90, physics: 88, chemistry: 92 },
        { id: 4, name: 'David', math: 85, physics: 82, chemistry: 80 },
        { id: 5, name: 'Eve', math: 95, physics: 94, chemistry: 89 },
    ];

    return (
        <div>
            <LChart width={500} height={400} data={studentResults}>
                <XAxis dataKey='name'></XAxis>
                <Line dataKey='math' stroke='red'></Line>
                <Line dataKey='physics' stroke='green'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;