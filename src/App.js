import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import HomePage from './Home';
import SurveyComponent from './SurveyComponent';
import HelpPage from './Help';
import Header from './components/Header';
import PackageDetail from './components/PackageDetail';
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Header/>
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
            <Route path="/packages/:id" component={PackageDetail}/> 
          </Switch>
        </div>
      </Router>
    );

  }
}

export default App;
