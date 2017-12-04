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


const TEXT1 = () => (
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


const TEXT2 = () => (
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


const TEXT3 = () => (
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


const TEXT4 = () => (
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
      <Route exact path="/" component={TEXT1}/>
      <Route path="/trans2" component={TEXT2}/>
      <Route path="/trans3" component={TEXT3}/>
      <Route path="/trans4" component={TEXT4}/>
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