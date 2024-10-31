import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { Routes, Route } from 'react-router-dom';
import About from './components/About';

function App() {
  const [mode, setMode] = useState("light");  // Dark mode toggle
  const [mode2, setMode2] = useState("light");  // Green mode toggle
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light" && mode2 === "light") {
      // Enable dark mode only if green mode is off
      setMode('dark');
      document.body.style.backgroundColor = '#0f1064';
      document.body.style.color = 'white';
      showAlert("Dark mode has been enabled", "success");
    } else {
      // Revert to light mode if green mode is off
      setMode('light');
      if (mode2 === "light") {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
      }
      showAlert("Light mode has been enabled", "success");
    }
  };

  const toggleMode2 = () => {
    if (mode2 === "light") {
      // Enable green mode and override dark mode if it’s on
      setMode2('dark');
      setMode('light'); // Ensure dark mode is off
      document.body.style.backgroundColor = 'green';
      document.body.style.color = 'white';
      showAlert("Green mode has been enabled", "success");
    } else {
      // Revert to light mode and reset background color if dark mode is off
      setMode2('light');
      if (mode === "dark") {
        document.body.style.backgroundColor = '#0f1064';
        document.body.style.color = 'white';
      } else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
      }
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>  
      <Navbar 
        title="TextMal" 
        aboutText="About" 
        mode={mode} 
        mode2={mode2} 
        toggleMode={toggleMode} 
        toggleMode2={toggleMode2} 
      />
      <Alert alert={alert} />
      <Routes>
        <Route path="/" element={<TextForm mode={mode} mode2={mode2} showAlert={showAlert} />} />
        <Route path="/about" element={<About mode={mode} />} />
      </Routes>
    </>
  );
}

export default App;
