import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import '../style/App.css';

const main4 = () => (
  <MuiThemeProvider>
      <div className="main">
        <div　className="main__title">TITLE４</div>
        <TextField hintText="テキストを入力"/><br /><br />
        <TextField hintText="テキストを入力"/><br /><br />
        <TextField hintText="テキストを入力"/><br /><br /><br />
        <RaisedButton label="ボタン" primary={true}  />
      </div>
  </MuiThemeProvider>
);

export default main4;