import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import main1 from './component/main1';
import main2 from './component/main2';
import main3 from './component/main3';
import main4 from './component/main4';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';

const Left = () => (
  <MuiThemeProvider>
      <ul className="list">
        <li><Link to="/" ><FlatButton label="TEXT1" fullWidth={true} /></Link></li>
        <li><Link to="/2" ><FlatButton label="TEXT2" fullWidth={true} /></Link></li>
        <li><Link to="/3" ><FlatButton label="TEXT3" fullWidth={true} /></Link></li>
        <li><Link to="/4" ><FlatButton label="TEXT4" fullWidth={true} /></Link></li>      
      </ul>
  </MuiThemeProvider>
);

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="wrap">
          <div　className="topNav"></div>

          <div className="leftNav">
            <div className="leftNav__hero">App</div>
            <Left />
          </div>

          <div>
            <Route exact path="/" component={main1} />
            <Route path="/2" component={main2} />
            <Route path="/3" component={main3} />
            <Route path="/4" component={main4} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;