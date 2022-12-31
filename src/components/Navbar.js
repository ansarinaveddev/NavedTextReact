import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import '../App.css';

export default function Navbar(props) {
    return (
        <header>
            <nav>
                <ul style={{ backgroundColor: props.mode === "dark" ? '#764c9d' : "#a544ff" }}>
                    <span className='toptext'><Link to="/">{props.title}</Link></span>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/about"><li>About</li></Link>
                    <button onClick={props.toggleMode} className="topbtn" style={{ backgroundColor: props.mode === "dark" ? "#f97fcf" : "white", color: props.mode === "dark" ? "white" : "black" }}>{props.mode === "dark" ? "Light Mode" : "Dark Mode"}</button>
                </ul>
            </nav>
        </header>
    )
}

Navbar.propTypes = { title: PropTypes.string.isRequired }
Navbar.defaultProps = { title: "Set Text Here" }