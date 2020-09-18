import React from 'react';
import "./styles.css";
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const options1 = {
    title: {
        text: 'Institute Strength '
    },
    chart: {
        type: 'column'
    },
    xAxis: {
        categories: ["Maths", "Chemistry", "Physics"],
        title: {
            text: "Course"
        }
    },
    yAxis: {
        title: {
            text: "No. of Students"
        }
    },
    series: [{
        name: "Allen Classes",
        data: [20, 12, 6],

    }]
}

const options2 = {
    title: {
        text: 'Fee Status '
    },
    chart: {
        type: 'column'
    },
    xAxis: {
        categories: ["Physics", "Chemistry", "Maths"],
        title: {
            text: null
        }
    },
    series: [{
        name: 'Fees Paid',
        data: [30, 40, 5],
    },
    {
        name: 'Fees Not Paid',
        data: [70, 10, 75],
    },],
    plotOptions: {
        column: {
            stacking: 'normal',
            dataLabels: {
                enabled: true
            }
        }
    },
}

const options3 = {
    title: {
        text: 'Students Trend'
    },
    chart: {
        type: 'line'
    },
    xAxis: {
        categories: [2014, 2015, 2016, 2017, 2018, 2019, 2020],
        title: {
            text: null
        }
    },
    series: [
        {
            name: 'Physics',
            data: [160, 50, 110, 90, 101, 123, 400],
        },
        {
            name: 'Chemistry',
            data: [190, 85, 110, 189, 180, 223, 300],
        },
        {
            name: 'Maths',
            data: [106, 65, 91, 90, 211, 333, 250],
        },
    ],
    plotOptions: {
        column: {
            stacking: 'normal',
            dataLabels: {
                enabled: true
            }
        }
    },
}

class HighChartIndex extends React.Component {
    render() {
        return (
            <>
                <div className="plot-containerhc">
                    <h1>Example with HighCharts</h1>
                    <div style={{ width: "40%" }}>
                        <HighchartsReact
                            highcharts={Highcharts}
                            options={options1}
                        />
                    </div>
                    <div style={{ width: "40%" }}>
                        <HighchartsReact
                            highcharts={Highcharts}
                            options={options2}
                        />
                    </div>
                    <div style={{ width: "40%" }}>
                        <HighchartsReact
                            highcharts={Highcharts}
                            options={options3}
                        />
                    </div>
                </div>
            </>
        );
    }
}

export default HighChartIndex;
