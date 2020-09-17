import React, {  useEffect, useState } from 'react';
import "./styles.css";
import BarChart from './BarChart';

const datas = [
    [10, 30, 40, 20],
    [10, 40, 30, 20, 50, 10],
    [60, 30, 40, 20, 30]
]
var i = 0;



const D3Index = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        changeData();
    }, []);

    const changeData = () => {
        setData(datas[i++]);
        if (i === datas.length) i = 0;
    }

    return (
        <>
            <div className="plot-container">
                <h1>Example with D3</h1>
                {/* <button onClick={changeData}>Change Data</button> */}
                <BarChart width={300} height={300} data={data} />
            </div>
        </>
    );

}

export default D3Index;
