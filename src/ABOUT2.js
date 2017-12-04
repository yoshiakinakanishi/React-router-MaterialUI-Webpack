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


const ABOUT2 = () => (
  <MuiThemeProvider>
    <div className="main">
      <div　className="main__title">TITLE２</div>

      <List>
        <ListItem primaryText="hoge" leftCheckbox={<Checkbox />} />
        <ListItem primaryText="fuga" leftCheckbox={<Checkbox />} />
        <ListItem primaryText="hoge" leftCheckbox={<Checkbox />} />
        <ListItem primaryText="fuga" leftCheckbox={<Checkbox />} />
        <ListItem primaryText="hoge" leftCheckbox={<Checkbox />} />        
      </List>
      <br />

      <div>
        <TextField hintText="テキストを入力" fullWidth={true}/><br /><br />
        <TextField hintText="テキストを入力" fullWidth={true}/><br /><br />
        <TextField hintText="テキストを入力" fullWidth={true}/><br /><br />
        <TextField hintText="テキストを入力" fullWidth={true}/><br /><br />
        <TextField hintText="テキストを入力" fullWidth={true}/><br /><br />
      </div>

    </div>
  </MuiThemeProvider>
);


export default ABOUT2;