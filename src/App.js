import React from 'react';
import './App.css';
import Plotly from "./components/plotly";
import HighCharts from "./components/highcharts";


function App() {
  return (
    <div className="App">
      <Plotly />
      <HighCharts />
    </div>
  );
}

export default App;
