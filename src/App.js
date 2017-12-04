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


const Main = () => (
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


const Main2 = () => (
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


const Main3 = () => (
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


const Main4 = () => (
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


const LeftNavButton = () => (
  <MuiThemeProvider>
      <div>
        <a href='/'><FlatButton label="TEXT1" fullWidth={true} /></a><br /><br />
        <a href='/trans2'><FlatButton label="TEXT2" fullWidth={true} /></a><br /><br />
        <a href='/trans3'><FlatButton label="TEXT3" fullWidth={true} /></a><br /><br />
        <a href='/trans4'><FlatButton label="TEXT4" fullWidth={true} /></a><br /><br />        
      </div>
  </MuiThemeProvider>
);


const Contents = () => (
  <Router>
    <div>
      <Route exact path="/" component={Main}/>
      <Route path="/trans2" component={Main2}/>
      <Route path="/trans3" component={Main3}/>
      <Route path="/trans4" component={Main4}/>
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
            <LeftNavButton />
          </div>

          <Contents />

      </div>
    );
  }
}

export default App;