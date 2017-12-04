import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import {List, ListItem} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import TimePicker from 'material-ui/TimePicker';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';


const ABOUT3 = () => (
  <MuiThemeProvider>
      <div className="main">
        <div　className="main__title">TITLE３</div>
        <TextField hintText="テキストを入力"/><br /><br />
        <TextField hintText="テキストを入力"/><br /><br />
        <TextField hintText="テキストを入力"/><br /><br /><br />
        <RaisedButton label="ボタン" primary={true}  />
      </div>
  </MuiThemeProvider>
);


export default ABOUT3;