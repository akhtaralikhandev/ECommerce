"use client"
import { useState, CSSProperties } from "react";
import RingLoader from "react-spinners/RingLoader";

const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};

function App() {
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#36d7b7");

    return (
        <div className="sweet-loading  h-screen w-full flex items-center justify-center">
            {/* <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
            <input value={color} onChange={(input) => setColor(input.target.value)} placeholder="Color of the loader" /> */}

            <RingLoader
                color={color}
                loading={loading}
                cssOverride={override}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    );
}

export default App;