import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import HomePage from './Home';
import SurveyComponent from './SurveyComponent';
import HelpPage from './Help';
import Header from './components/Header';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav, Form, FormControl, Button } from 'react-bootstrap';

import "bootstrap/dist/css/bootstrap.css";

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          {/* <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <a className="navbar-brand" href="/">
                  Partner Site Assessment
                </a>
              </div>
              <ul className="nav navbar-nav">
                <li>
                  <Link to="/survey">Survey</Link>
                </li>
                <li>
                  <Link to="/help">Help</Link>
                </li>
              </ul>
            </div>
          </nav> */}
          <Header/>

          {/* <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">Partner Site Assessment</Navbar.Brand>
            <Nav className="ml-auto">
              <Nav.Link href="/survey">Survey</Nav.Link>
              <Nav.Link href="/help">Help</Nav.Link>
            </Nav>
          </Navbar> */}
   

  
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/survey">
              <SurveyComponent />
            </Route>
            <Route path="/help">
              <HelpPage />
            </Route>
          </Switch>
        </div>
      </Router>
    );

  }
}

export default App;
