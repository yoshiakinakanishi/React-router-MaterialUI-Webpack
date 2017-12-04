import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import {List, ListItem} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import TimePicker from 'material-ui/TimePicker';

import '../App.css';


const main2 = () => (
  <MuiThemeProvider>
    <div className="main">
      <div　className="main__title">TITLE２</div>

      <List>
        <ListItem primaryText="hoge" leftCheckbox={<Checkbox />} />
        <ListItem primaryText="fuga" leftCheckbox={<Checkbox />} />
        <ListItem primaryText="hoge" leftCheckbox={<Checkbox />} />
        <ListItem primaryText="fuga" leftCheckbox={<Checkbox />} />
      </List>
      <br />

      <div>
        <TextField hintText="テキストを入力" fullWidth={true}/><br /><br />
        <TextField hintText="テキストを入力" fullWidth={true}/><br /><br />
        <TextField hintText="テキストを入力" fullWidth={true}/><br /><br />
        <TextField hintText="テキストを入力" fullWidth={true}/><br /><br />
        <TextField hintText="テキストを入力" fullWidth={true}/><br /><br />
        <TextField hintText="テキストを入力" fullWidth={true}/><br /><br />
      </div>

    </div>
  </MuiThemeProvider>
);


export default main2;