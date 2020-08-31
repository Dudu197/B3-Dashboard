import React from 'react';
import Dashboard from './Dashboard.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Tabs, Tab } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container fluid>
          <Tabs defaultActiveKey="ibov" id="uncontrolled-tab-example">
            <Tab eventKey="ibov" title="ibov">
              <Dashboard indicator='BOVA11' file='ibov.json' />
            </Tab>
            <Tab eventKey="b3" title="b3">
              <Dashboard indicator='BOVA11' file='b3.json' />
            </Tab>
            <Tab eventKey="ifix" title="ifix">
              <Dashboard indicator='BOVA11' file='ifix.json' />
            </Tab>
          </Tabs>
        </Container>
      </header>
    </div>
  );
}

export default App;