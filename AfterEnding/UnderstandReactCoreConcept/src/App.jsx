import { useState } from "react";
import "./App.css";
import Device from "./components/Device/Device";
import Watch from "./components/Watch/Watch";

function App() {

    return (
        <div className="App">
            <div style={{border: '2px solid black', padding: '15px', margin: '20px'}}>
                <Device name="Samsung" price="55000"></Device>
                <Device name="OnePlus" price="42000"></Device>
            </div>

            <div style={{border: '2px solid blue', margin: '20px', padding: '20px'}}>
                <Watch></Watch>
            </div>
        </div>
    );
}

export default App;
