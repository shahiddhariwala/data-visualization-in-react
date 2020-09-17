import React from 'react';
import './App.css';
import Plotly from "./components/plotly";
import HighCharts from "./components/highcharts";
import D3Index from "./components/d3";

function App() {
  return (
    <>
    <div className="myStyle">
      <Plotly />
      <HighCharts />
      <D3Index />
      
    </div>
    </>
  );
}

export default App;
