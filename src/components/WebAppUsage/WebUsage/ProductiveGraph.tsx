
import { Column } from "@ant-design/plots";

const DemoColumn = () => {
    const data = [
        {
            country: 'Productive',
            year: 'Mon',
            value: 6,
        },
        {
            country: 'Productive',
            year: 'Tue',
            value: 2,
        },
        {
            country: 'Productive',
            year: 'Wed',
            value: 9,
        },
        {
            country: 'Productive',
            year: 'Thu',
            value: 7,
        },
        {
            country: 'Productive',
            year: 'Fri',
            value: 5,
        },
        {
            country: 'Productive',
            year: 'Sat',
            value: 6,
        },
        {
            country: 'Productive',
            year: 'Sun',
            value: 7,
        },
        {
            country: 'Unproductive',
            year: 'Mon',
            value: 2,
        },
        {
            country: 'Unproductive',
            year: 'Tue',
            value: 3,
        },
        {
            country: 'Unproductive',
            year: 'Wed',
            value: 5,
        },
        {
            country: 'Unproductive',
            year: 'Thu',
            value: 6,
        },
        {
            country: 'Unproductive',
            year: 'Fri',
            value: 2,
        },
        {
            country: 'Unproductive',
            year: 'Sat',
            value: 2,
        },
        {
            country: 'Unproductive',
            year: 'Sun',
            value: 6,
        },
        {
            country: 'Neutral',
            year: 'Mon',
            value: 5,
        },
        {
            country: 'Neutral',
            year: 'Tue',
            value: 2,
        },
        {
            country: 'Neutral',
            year: 'Wed',
            value: 1,
        },
        {
            country: 'Neutral',
            year: 'Thu',
            value: 1,
        },
        {
            country: 'Neutral',
            year: 'Fri',
            value: 2,
        },
        {
            country: 'Neutral',
            year: 'Sat',
            value: 2,
        },
        {
            country: 'Neutral',
            year: 'Sun',
            value: 3,
        },
        {
            country: 'Unrated',
            year: 'Sun',
            value: 2,
        },
    ];
    const config: any = {
        data,
        xField: 'year',
        yAxis: {
            max: 10,
            min: 0,
            tickCount: 10,
        },
        yField: 'value',
        seriesField: 'country',
        columnStyle: {
            radius: [4, 4, 0, 0],
        },
        legend: {
            marker: () => {
                return {
                    style: {
                        r: 5,
                        marginBottom: 10
                    },
                };
            },

            offsetY: -5,
            offsetX: 25,
            align: 'end',
        },

        height: 600,
        color: ['#2A9D8F', '#E75151', '#F4A261', '#D9D9D9']
    };
    return (
        <div style={{ position: "relative", width: "100%", height: "600px" }}>
            <Column {...config} />

            {/* <div style={{ position: 'absolute', top: '50px', left: '50px' }}>
                <div style={{ backgroundColor: '#2A9D8F', marginRight: '10px', display: 'inline-block', width: '10px', height: '10px' }}></div>
                <span>Productive</span>
            </div>
            <div style={{ position: 'absolute', top: '70px', left: '50px' }}>
                <div style={{ backgroundColor: '#E75151', marginRight: '10px', display: 'inline-block', width: '10px', height: '10px' }}></div>
                <span>Unproductive</span>
            </div>
            <div style={{ position: 'absolute', top: '90px', left: '50px' }}>
                <div style={{ backgroundColor: '#F4A261', marginRight: '10px', display: 'inline-block', width: '10px', height: '10px' }}></div>
                <span>Neutral</span>
            </div>
            <div style={{ position: 'absolute', top: '110px', left: '50px' }}>
                <div style={{ backgroundColor: '#D9D9D9', marginRight: '10px', display: 'inline-block', width: '10px', height: '10px' }}></div>
                <span>Unrated</span>
            </div> */}
        </div>
    );
};

export default DemoColumn;
