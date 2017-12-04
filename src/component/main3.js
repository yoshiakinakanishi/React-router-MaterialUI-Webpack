import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import '../App.css';

const main3 = () => (
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

export default main3;