import React from 'react';
import "./styles.css";
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const simpleBarGraphOptions = {
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

const stackBarOptions = {
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

const linesOptions = {
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

const donutOptions = {
    chart: {
        type: 'pie'
    },
    title: {
        text: 'Scores Percentile View'
    },
    series: [{
        minPointSize: 10,
        innerSize: '20%',
        zMin: 0,
        name: 'Percentile',
        data: [{
            name: '0-30%',
            y: 16,
        }, {
            name: '30-50%',
            y: 15,
        }, {
            name: '50-70%',
            y: 12,
        }, {
            name: '70-90%',
            y: 6,
        }, {
            name: '90%+',
            y: 10,
        }]
    }]
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
                            options={simpleBarGraphOptions}
                        />
                    </div>
                    <div style={{ width: "40%" }}>
                        <HighchartsReact
                            highcharts={Highcharts}
                            options={stackBarOptions}
                        />
                    </div>
                    <div style={{ width: "40%" }}>
                        <HighchartsReact
                            highcharts={Highcharts}
                            options={linesOptions}
                        />
                    </div>
                    <div style={{ width: "40%" }}>
                        <HighchartsReact
                            highcharts={Highcharts}
                            options={donutOptions}
                        />
                    </div>
                </div>
            </>
        );
    }
}

export default HighChartIndex;
