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
                            {
                                type: 'bar', x: ["Students", "Teachers", "Courses"], y: [20, 12, 6], marker: {
                                    color: '#7CB5EC',
                                    width: 1
                                },
                            },
                        ]}
                        layout={{ width: "auto", height: "30%", title: 'Institute Strength' }}
                    />
                    <Plot
                        data={[
                            {
                                x: ["Physics", "Chemistry", "Maths"],
                                y: [30, 40, 5],
                                marker: {
                                    color: '#7CB5EC',
                                    width: 1
                                },
                                name: 'Fees Paid',
                                type: 'bar'
                            },
                            {
                                x: ["Physics", "Chemistry", "Maths"],
                                y: [70, 10, 75],
                                marker: {
                                    color: '#EE99B8',
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
                    <Plot
                        data={[
                            {
                                values: [16, 15, 12, 6, 10],
                                labels: ['10-30%', '30-50%', '50-70%', "70-90%","90%+"],
                                domain: { column: 0 },
                                name: 'Scores',
                                hoverinfo: 'percent+name',
                                hole: .4,
                                type: 'pie'
                            }
                        ]}
                        layout={

                            {
                                title: 'Scores Percentile View',
                                annotations: [
                                    {
                                        font: {
                                            size: 20
                                        },
                                        showarrow: false,
                                        text: '',

                                    },
                                ],
                                height: 400,
                                width: 600,
                                showlegend: false,
                            }
                        }
                    />
                </div>
            </>
        );
    }
}

export default PlotlyIndex;
