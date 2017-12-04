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


import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';


const LeftNav = () => (
  <MuiThemeProvider>
      <div>
        <a href="/" ><FlatButton label="TEXT1" fullWidth={true} /></a><br /><br />
        <a href='/trans2' ><FlatButton label="TEXT2" fullWidth={true} /></a><br /><br />
        <a href='/trans3' ><FlatButton label="TEXT3" fullWidth={true} /></a><br /><br />
        <a href='/trans4' ><FlatButton label="TEXT4" fullWidth={true} /></a><br /><br />        
      </div>
  </MuiThemeProvider>
);


const Contents = () => (
  <Router>
    <div>
      <Route exact path="/" component={ABOUT1}/>
      <Route path="/trans2" component={ABOUT2}/>
      <Route path="/trans3" component={ABOUT3}/>
      <Route path="/trans4" component={ABOUT4}/>
    </div>
  </Router>
);


class App extends Component {
  render() {
    return (
      <div className="wrap">

          <div　className="topNav"></div>

          <div className="leftNav">
            <div className="leftNav__hero">App</div>
            <LeftNav />
          </div>

          <Contents />

      </div>
    );
  }
}

export default App;