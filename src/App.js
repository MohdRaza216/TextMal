import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState("light");
  const [mode2, setMode2] = useState("light");
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
    if (mode === "light") {
      setMode('dark');
      document.body.style.backgroundColor = '#0f1064';
      document.body.style.color = 'white';
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode('light');
      if (mode2 === "dark") {
        document.body.style.backgroundColor = 'green';
        document.body.style.color = 'white';

      } else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
      }
      showAlert("Light mode has been enabled", "success");
    }
  };

  const toggleMode2 = () => {
    if (mode2 === "light") {
      setMode2('dark');
      document.body.style.backgroundColor = 'green';
      document.body.style.color = 'white';
      showAlert("Green mode has been enabled", "success");
    } else {
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
      <Navbar title="TextMal" aboutText="About" mode={mode} mode2={mode2} toggleMode={toggleMode} toggleMode2={toggleMode2}/>
      <Alert alert={alert}/>
      <TextForm mode={mode} mode2={mode2} showAlert={showAlert} />
      {/* <About /> */}
    </>
  );
}

export default App;
