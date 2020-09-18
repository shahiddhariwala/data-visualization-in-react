import React from 'react';
import createPlotlyComponent from 'react-plotly.js/factory';
import "./styles.css";

const Plotly = window.Plotly;
const Plot = createPlotlyComponent(Plotly);

class PlotlyIndex extends React.Component {
    render() {
        return (
            <>
                <div className="plot-container">
                    <h1>Example with Plotly</h1>
                    <Plot
                        data={[
                            // {
                            //     x: ["Students", "Teachers", "Courses"],
                            //     y: [20, 12, 6],
                            //     type: 'scatter',
                            //     mode: 'lines+markers',
                            //     marker: { color: 'red' },
                            // },
                            { type: 'bar', x: ["Students", "Teachers", "Courses"], y: [20, 12, 6] },
                        ]}
                        layout={{ width: "auto", height: "30%", title: 'Institute Strength' }}
                    />
                    <Plot
                        data={[
                            {
                                x: ["Physics", "Chemistry", "Maths"],
                                y: [30, 40, 5],
                                marker: {
                                    color: 'blue',
                                    width: 1
                                },
                                name: 'Fees Paid',
                                type: 'bar'
                            },
                            {
                                x: ["Physics", "Chemistry", "Maths"],
                                y: [70, 10, 75],
                                marker: {
                                    color: 'red',
                                    width: 1
                                },
                                name: 'Fees Not Paid',
                                type: 'bar'
                            },

                        ]}
                        layout={{ width: "auto", height: "30%", title: 'Fees Status', barmode: 'stack' }}
                    />
                    <Plot
                        data={[
                            {
                                x: [2014, 2015, 2016, 2017, 2018, 2019, 2020],
                                y: [160, 50, 110, 90, 101, 123, 400],
                                mode: 'lines',
                                name: 'Physics'
                            },
                            {
                                x: [2014, 2015, 2016, 2017, 2018, 2019, 2020],
                                y: [190, 85, 110, 189, 180, 223, 300],
                                mode: 'lines',
                                name: 'Chemistry'
                            },
                            {
                                x: [2014, 2015, 2016, 2017, 2018, 2019, 2020],
                                y: [106, 65, 91, 90, 211, 333, 250],
                                mode: 'lines',
                                name: 'Maths'
                            },
                        ]}
                        layout={{ width: "auto", height: "30%", title: 'Students Trend' }}
                    />
                </div>
            </>
        );
    }
}

export default PlotlyIndex;
