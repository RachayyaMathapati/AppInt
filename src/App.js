import React from 'react';
import './App.css';
import Dashboard from './Componet/Dashboard';
import { BrowserRouter as Router} from 'react-router-dom';
import Login from './Componet/Login';
import { Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
    
      <Route path='/'  exact strict component={Login} />
      <Route path='/Login'  exact strict component={Login} />
      <Route path='/Dashboard' component={Dashboard} />
  
    </div>
    </Router>
  );
}

export default App;
