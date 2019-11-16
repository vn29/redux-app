import React, {Component} from 'react';
import './App.css';
import PropTypes from 'prop-types'
import {PlaceHolder} from './Containers.js'
import {connect} from 'react-redux';
import * as acts from './actions/simpleAction';

const Mycomp = ({
    clicked = f => f,
    item,
    prop1
}) => {
    return (
        <div>
            {console.log(prop1)}
            {[...Array(prop1).keys()].map((e) => <li onClick={() => clicked()}>{item} {e}
            </li>)}
        </div>
    )
}

const App = ({
    state = {},
    daily = f => f
}) => <div className="App">
    <PlaceHolder></PlaceHolder>
</div>

export const AppMain = connect(
// map state to props map state to props so it can be accessed by the component
// in other words, this is stuff coming into the component from the state that
// will render when actions are performed
state => ({state}),
// map dispatch to props add A as a method under the props of the component in
// other words, this is stuff going out from the component to the state. where
// actions are dispatched
dispatch => ({
    daily() {
        dispatch(acts.daily())
    },
    buildFactory() {
        dispatch(acts.buildFactory())
    },
    SellFactory() {
        dispatch(acts.SellFactory())
    },
    BuyFood() {
        dispatch(acts.BuyFood())
    },
    rdcf() {
        dispatch(acts.rdcf())
    },
    rdcw() {
        dispatch(acts.rdcw())
    },
    HireWorker() {
        dispatch(acts.HireWorker())
    },
    HideDiv() {
        dispatch(acts.HideDiv())
    },
    TerminateWorker() {
        dispatch(acts.TerminateWorker())
    },
    Render_Square() {
        dispatch(acts.Render_Square())
    }
})
//connect it to App
)(App);
