import React, { useState } from 'react'
import { TypeAnimation } from 'react-type-animation';
import '../App.css';

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase")
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase")
    }

    const handleClearText = () => {
        let newText = ""
        setText(newText)
        props.showAlert("Clear Text")
    }

    const handleCopy = () => {
        let text = document.getElementById('myBox')
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges()
        props.showAlert("Copy to Clipboard")
    }

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Remove Extra Spaces")
    }

    const handleDownload = () => {
        const file = new Blob([text], { type: "text/plain" });
        const element = document.createElement("a");
        element.href = URL.createObjectURL(file);
        element.download = "100ideas-" + Date.now() + ".txt";
        document.body.appendChild(element);
        element.click();
        props.showAlert("Downloading to file")
    };


    const numbersExtractor = () => {
        const removeBegginingSpaces = text.replace(/^ +/g, "");
        let numbersWithSpaces = removeBegginingSpaces.match(/[0-9/ ]/g);
        numbersWithSpaces = numbersWithSpaces.join("");
        const digits = numbersWithSpaces.replace(/\s\s+/g, " ");
        setText(digits);
        props.showAlert("Number Extracted")
    }



    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState('');

    return (
        <>
            <div style={{ color: props.mode === "dark" ? '#FFFF' : "black" }} >
                <h1>
                    <TypeAnimation
                        sequence={[
                            props.heading, // Types 'One'
                            1000, // Waits 1s
                            props.heading2, // Deletes 'One' and types 'Two'
                            2000, // Waits 2s
                            props.heading3, // Types 'Three' without deleting 'Two'
                            1000,
                            () => {
                                // Place optional callbacks anywhere in the array
                            }
                        ]}
                        wrapper="div"
                        cursor={true}
                        repeat={Infinity}
                    />
                </h1>

                <label htmlFor="myBox" className='form-label'></label>
                <textarea name="textarea" id="myBox" onChange={handleOnChange} value={text} cols="30" rows="8" style={{ backgroundColor: props.mode === "dark" ? '#764c9d' : "#FFFF", color: props.mode === "dark" ? '#FFFF' : "black" }}></textarea>

                <button disabled={text.length === 0} className="btn" onClick={handleUpClick}>Convert To Uppercase</button>
                <button disabled={text.length === 0} className="btn" onClick={handleLoClick}>Convert To Lowercase</button>
                <button disabled={text.length === 0} className="btn" onClick={handleClearText}>Clear Text</button>
                <button disabled={text.length === 0} className="btn" onClick={handleCopy}>Copy to Clipboard</button>
                <button disabled={text.length === 0} className="btn" onClick={handleExtraSpace}>Remove Extra Space</button>
                <button disabled={text.length === 0} className="btn" onClick={handleDownload}>Download</button>
                <button disabled={text.length === 0} className="btn" onClick={numbersExtractor}>Extract the Number</button>
                <h2>Your text summary</h2>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words, {text.length} characters</p>
                <p style={{ marginBottom: "12px" }}>{0.008 * text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Minutes read</p>
                <h2>Preview</h2>
                <div className="preview">
                <pre>{text.length > 0 ? text : "Nothing to preview"}</pre>
                </div>
            </div>
        </>
    )
}
