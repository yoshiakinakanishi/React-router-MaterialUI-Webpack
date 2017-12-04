import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import {List, ListItem} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import TimePicker from 'material-ui/TimePicker';

import ABOUT1 from './ABOUT1';
import ABOUT2 from './ABOUT2';
import ABOUT3 from './ABOUT3';
import ABOUT4 from './ABOUT4';

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
            <Route exact path="/" component={ABOUT1} />
            <Route path="/2" component={ABOUT2} />
            <Route path="/3" component={ABOUT3} />
            <Route path="/4" component={ABOUT4} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;