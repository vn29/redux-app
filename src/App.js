import React, {Component} from 'react';
import './App.css';
import { connect } from 'react-redux';
import {simpleAction} from './actions/simpleAction';
import logo from './logo.svg';

class App extends Component {
//this performs the simple action
  simpleAction = (event) => {
    this.props.simpleAction();
  }
  render() {
    return (
      <div className = "App">
        <header className = "App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className = "All-title">Wlecome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code> src/App.js</code> and save to reload
        </p>
        <button onClick={this.simpleAction}>Test redux action</button>
        <pre>
          {
            JSON.stringify(this.props)
          }
        </pre>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
})

//this is where the magic happens. I am connecting the state to props
export default connect(mapStateToProps,mapDispatchToProps)(App);
