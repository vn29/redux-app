import React, {Component} from 'react';
import './App.css';
import PropTypes from 'prop-types'
import {PlaceHolder} from './Containers.js'
import {connect} from 'react-redux';
import * as acts from './actions/simpleAction';
import {HashRouter, Route, Link} from 'react-router-dom'
import * as THREE from "three"
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import {ThreeWindow} from './ThreeComponent.js'

const Home = () => {
    return(
        <section className="Home">
            <h1>[Company Website]</h1>
            <PlaceHolder/>
            <nav>
                <Link to="about">[About]</Link>
                <Link to="events">[Events]</Link>
                <Link to="products">[Products]</Link>
                <Link to="contact">[Contact Us]</Link>
            </nav>
        </section>

    )
}

const About = () => {
    return(
        <section className="About">
            <h1>[About]</h1>
        </section>

    )
}
const Events = () => {
    return(
        <section className="Events">
            <h1>[Events]</h1>
        </section>

    )
}
const Products = () => {
    return(
        <section className="Products">
            <h1>[Products]</h1>
        </section>

    )
}
const Contacts = () => {
    return(
        <section className="Contacts">
            <h1>[Contacts]</h1>
        </section>

    )
}

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

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            x: this.props.x
        }
    }


    render() {
        return(
            <HashRouter>
            <div className="main">
                <ThreeWindow/>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/events" component={Events}/>
                <Route path="/products" component={Products}/>
                <Route path="/contacts" component={Contacts}/>
            </div>
        </HashRouter>
        )
    }
}

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
