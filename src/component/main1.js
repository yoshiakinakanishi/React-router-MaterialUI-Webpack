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


const main1 = () => (
  <MuiThemeProvider>
      <div className="main">
        <div　className="main__title">TITLE１</div>
        <TextField hintText="テキストを入力"/><br /><br />
        <TextField hintText="テキストを入力" fullWidth={true}/><br /><br />
        <TextField hintText="テキストを入力" fullWidth={true}/><br /><br />

        <DatePicker hintText="日付を入力" mode="landscape" /><br />
        <TimePicker hintText="時刻を入力"/><br />

        <RaisedButton label="ボタン" primary={true}  />
      </div>
  </MuiThemeProvider>
);

export default main1;