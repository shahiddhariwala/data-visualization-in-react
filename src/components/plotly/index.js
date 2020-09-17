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
                            {
                                x: ["Students", "Teachers", "Courses"],
                                y: [20, 12, 6],
                                type: 'scatter',
                                mode: 'lines+markers',
                                marker: { color: 'red' },
                            },
                            { type: 'bar', x: ["Students", "Teachers", "Courses"], y: [20, 12, 6] },
                        ]}
                        layout={{ width: 320, height: 240, title: 'Zotalabs' }}
                    />
                </div>
            </>
        );
    }
}

export default PlotlyIndex;
