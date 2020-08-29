import React from 'react';
import Dashboard from './Dashboard.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container fluid>
          <Dashboard />
        </Container>
      </header>
    </div>
  );
}

export default App;