import React, { useState } from 'react';
import './Editor.css';

const Editor = () => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <div className="container">
            <div className="input">
                <h3>Input</h3>
                <textarea className="input-text" value={inputValue} onChange={handleChange} />
            </div>
            <div className="output">
                <h3>Pro Note</h3>
                <div className="output-text">{inputValue}</div>
            </div>
        </div>
    );
};

export default Editor;
