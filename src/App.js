import React, { useState } from 'react'
import './App.css';
import Alert from './Components/Alert';
import About from './Components/About';
import Navbar from './Components/Navbar';
import { Textform } from './Components/Textform';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {

  const [mode, setMode] = useState('light');
   const [alert, setAlert] = useState(null);

    const showAlert =(message, type) =>{
      setAlert({
      msg : message,
      type : type,
     })
     setTimeout(() => {
      setAlert(null);
     }, 1500);
    }

  const toggleMode =() =>{
    if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = 'hsl(192deg 83% 11%)';
    document.title = " TextUtills - DarkMode";
    showAlert(" Dark Mode has been enabled","success");
  }
  else 
   {
    setMode('light'); 
    document.body.style.backgroundColor = 'white';
    showAlert(" Light Mode has been enabled", "success");
    document.title = " TextUtills - LightMode";
   }
  }
  return (
  <>
  <Router>
  <Navbar title="TextUtills" mode={mode} toggleMode={toggleMode}/>
   <Alert alert= {alert}/>
    <div className="container my-3">
    <Switch>
          <Route exact path="/about">
            <About  mode={mode}/>
          </Route>
          <Route exact path="/">
          <Textform showAlert={showAlert} heading="TextUtils - Words Counter, Character Counter, Remove Extra Spaces"  mode={mode}/> 
          </Route>
        </Switch>
  </div>
  </Router>
  </>  
  
  );
}

export default App;
