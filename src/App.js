
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import Contact from './components/Contact';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled", "Success")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "Success")
    }
  }
  return (
    <>
    <Router>
      {/* <Navbar title="TextProKit" about="About" /> */}
      <Navbar title='TextProKit' about="About" contact="Contact Us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        
          <Routes>
            <Route exact path="/" element={<TextForm heading="Enter text to analyze in below area" mode={mode} showAlert={showAlert} />} />
          </Routes>
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />
          </Routes>
          <Routes>
            <Route exact path="/contact" element={<Contact mode={mode} />} />
          </Routes>
        

      </div>
      </Router>
    </>
  );
}

export default App;
