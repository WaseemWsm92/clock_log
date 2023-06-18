
import {  Column } from "@ant-design/plots";

const PercentageGraph = () => {
    const data = [
        {
            country: 'Productive',
            year: 'Mon',
            value: 600,
        },
        {
            country: 'Productive',
            year: 'Tue',
            value: 200,
        },
        {
            country: 'Productive',
            year: 'Wed',
            value: 900,
        },
        {
            country: 'Productive',
            year: 'Thu',
            value: 700,
        },
        {
            country: 'Productive',
            year: 'Fri',
            value: 500,
        },
        {
            country: 'Productive',
            year: 'Sat',
            value: 660,
        },
        {
            country: 'Productive',
            year: 'Sun',
            value: 710,
        },
        {
            country: 'Unproductive',
            year: 'Mon',
            value: 230,
        },
        {
            country: 'Unproductive',
            year: 'Tue',
            value: 300,
        },
        {
            country: 'Unproductive',
            year: 'Wed',
            value: 540,
        },
        {
            country: 'Unproductive',
            year: 'Thu',
            value: 460,
        },
        {
            country: 'Unproductive',
            year: 'Fri',
            value: 200,
        },
        {
            country: 'Unproductive',
            year: 'Sat',
            value: 200,
        },
        {
            country: 'Unproductive',
            year: 'Sun',
            value: 600,
        },
        {
            country: 'Neutral',
            year: 'Mon',
            value: 510,
        },
        {
            country: 'Neutral',
            year: 'Tue',
            value: 260,
        },
        {
            country: 'Neutral',
            year: 'Wed',
            value: 100,
        },
        {
            country: 'Neutral',
            year: 'Thu',
            value: 140,
        },
        {
            country: 'Neutral',
            year: 'Fri',
            value: 203,
        },
        {
            country: 'Neutral',
            year: 'Sat',
            value: 201,
        },
        {
            country: 'Neutral',
            year: 'Sun',
            value: 300,
        },
        {
            country: 'Unrated',
            year: 'Sun',
            value: 300,
        },
    ];

    const config: any = {
        data,
        xField: "year",
        yField: "value",
        seriesField: "country",
        isPercent: true,
        isStack: true,
        label: false,
        yAxis: {
            max: 100,
            min: 0,
            tickCount: 11,
            label: {
                formatter: (value: any) => {
                    return `${(value * 100).toFixed(0)}%`;
                },
            },
        },

        legend: {
            position:"top",
            marker: () => {
                return {
                    style: {
                        r: 5,
                    },
                };
            },
            
        },
        color: ['#2A9D8F', '#E75151', '#F4A261', '#D9D9D9'],
        height: 600,
    };

    return <Column {...config} />;
};
export default PercentageGraph;

// ReactDOM.render(<PercentageGraph />, document.getElementById('container'));
