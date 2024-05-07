import React, { useState } from "react";
import "./color.css"

function ChangeColor() {
    const [color, setColor] = useState("");
    const [displayedColor, setDisplayedColor] = useState("");

    const handleButtonClick = () => {
        setDisplayedColor(color);
    };

    return (
        <>
            <h1>Hello world</h1>
            <input
                type="text"
                value={color}
                onChange={(e) => setColor(e.target.value)}
            />
            <button onClick={handleButtonClick}>
                Click to display color
            </button>
            {displayedColor && <div className={displayedColor}>The selected color is {displayedColor}</div>}
        </>
    );
}

export default ChangeColor;

