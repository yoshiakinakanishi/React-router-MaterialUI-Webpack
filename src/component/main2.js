import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import {List, ListItem} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import '../App.css';

const main2 = () => (
  <MuiThemeProvider>
    <div className="main">
      <div　className="main__title">TITLE２</div>

      <List>
        <ListItem primaryText="ほげほげ" leftCheckbox={<Checkbox />} />
        <ListItem primaryText="ふがふが" leftCheckbox={<Checkbox />} />
        <ListItem primaryText="ほげほげ" leftCheckbox={<Checkbox />} />
        <ListItem primaryText="ふがふが" leftCheckbox={<Checkbox />} />
      </List><br />

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