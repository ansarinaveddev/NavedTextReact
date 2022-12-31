import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './components/About';

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message) => {
    setAlert({
      msg: message
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "#3a3773"
      showAlert("Dark mode has been enabled", "green")
      document.title = "NavedText - Dark Mode"
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "#FFFF"
      showAlert("Light mode has been enabled", "green")
      document.title = "NavedText - Light Mode"
    }
  }

  return (
    <>
      <Router>
        <Navbar title="NavedText" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} showAlert={showAlert} />
        <Routes>
          <Route exact path="/" element={<><div className='container'> <TextForm showAlert={showAlert} heading="Try! NavedText Word Counter, Character Counter, Remove Extra Spaces" heading2="Analyze your word and Download here" heading3="Your word convert to Uppercase and Lowercase, Extract the Number" mode={mode} />  </div> </>} />
          <Route exact path="/about" element={<About mode={mode} />} />
        </Routes>
        <footer style={{ backgroundColor: mode === "dark" ? "#764c9d" : "#a544ff" }}>
          CopyRight &copy; NavedText.com
        </footer>
      </Router>



    </>
  );
}

export default App;
