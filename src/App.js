import React, {Component} from 'react';
import './App.css';
import { connect } from 'react-redux';
import {simpleAction} from './actions/simpleAction';
import logo from './logo.svg';

class App extends Component {
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
        <button onClick={
          (e) => {this.props.A()}
          }
        >
          Test redux action
        </button>
        <pre>{JSON.stringify(this.props)}</pre>
      </div>
    );
  }
}

export default connect(
  //map state to props
  // map state to props so it can be accessed by the component
  //in other words, this is stuff coming into the component from the state that will render when actions are performed
  state => ({...state}),
  //map dispatch to props
  //add A as a method under the props of the component
  //in other words, this is stuff going out from the component to the state. where actions are dispatched
  dispatch => ({ 
    A() { 
      dispatch(simpleAction()) 
    } 
  })
  //connect it to App
  )(App);
