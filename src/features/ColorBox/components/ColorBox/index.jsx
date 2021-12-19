import React, { useState } from 'react';
import './style.scss';

function getRandomColor() {
    const COLOR_LIST = ['red', 'green', 'blue', 'black'];
    const colorIndex = Math.trunc(Math.random() * 4);
    return COLOR_LIST[colorIndex];
}

function ColorBox(props) {
    const [color, setColor] = useState(() => {
        const oldColor = localStorage.getItem('color') || 'green';
        return oldColor;
    });

    function handleClick() {
        const newColor = getRandomColor();
        setColor(newColor);
        localStorage.setItem('color', newColor);
    }
    return (
        <div
        className= "color-box"
        style = {{ backgroundColor: color}}
        onClick= {handleClick}
        >
            Color Box
        </div>
    );
}

export default ColorBox;