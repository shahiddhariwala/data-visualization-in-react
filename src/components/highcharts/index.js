import React from 'react';
import "./styles.css";
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
const options = {
    title: {
        text: 'Institute Strength '
    },
    chart: {
        type: 'bar'
    },
    xAxis: {
        categories: ["Students", "Teachers", "Courses"],
        title: {
            text: null
        }
    },
    series: [{
        name: "Allen Classes",
        data: [20, 12, 6],

    }]
}


class HighChartIndex extends React.Component {
    render() {
        return (
            <>
                <div className="plot-container">
                    <h1>Example with HighCharts</h1>
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={options}
                    />
                </div>
            </>
        );
    }
}

export default HighChartIndex;
