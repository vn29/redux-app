import React, {Component} from 'react';
import './App.css';
import PropTypes from 'prop-types'
import { PbSVGGrouper, PbInputBox, PbSVGInteractiveRectangle, PbSVGInteractiveLine, PlaceHolder} from './Containers.js'
import { connect } from 'react-redux';
import * as acts from './actions/simpleAction';

const Mycomp = ({clicked=f=>f,item,prop1}) => {
  return (
    <div>
      {console.log(prop1)}
      {[...Array(prop1).keys()].map(
        (e) => <li onClick={()=>clicked()}>{item} {e} </li>
      )}
    </div>
  )
}


const App = ({state = {},daily=f=>f}) =>
      <div className = "App">
        <PlaceHolder></PlaceHolder>
      <Mycomp clicked={daily} item={"workers"} prop1={state}/>
      <Mycomp clicked={daily} item={"workers"} prop1={1}/>
      <Mycomp clicked={daily} item={"workers"} prop1={1}/>
        <circle style = {{cx:"50", cy:"50", r:"40", stroke:"green", strokeWidth:"4", fill:"yellow"}} />
        {(true === true) ? <rect  style={{width:"400", height: "100",fill: 'rgb(0,0,255)', strokeWidth : 0, fillOpacity : 0.1, stroke:'rgb(0,0,0)'}} /> : null}
        
        <svg width="400" height="400"> 
        <rect  transform={'translate(' + 50 + ' ' + 50 + ')'} style={{width:"100", height: "100",fill: 'rgb(0,0,255)', strokeWidth : 0, fillOpacity : 0.1, stroke:'rgb(0,0,0)'}} />
        <g transform="translate(50 50)"><text>testing</text></g>
      </svg>
      </div>


export const AppMain = connect(
  //map state to props
  // map state to props so it can be accessed by the component
  //in other words, this is stuff coming into the component from the state that will render when actions are performed
  state => ({state}),
  //map dispatch to props
  //add A as a method under the props of the component
  //in other words, this is stuff going out from the component to the state. where actions are dispatched
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
