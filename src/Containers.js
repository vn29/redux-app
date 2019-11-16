import React from 'react';
import ReactDOM from 'react-dom';
import {Component} from 'react';
import KeyboardEventHandler from 'react-keyboard-event-handler';

export class PbTextBox extends Component {
		constructor(props) {
			super(props)
			this.state = {}
	}
	render() {
			return (
				<p>test</p>
			)
	}
}

export class PbSVGGrouper extends Component {
		constructor(props) {
				super(props)
				this.state = {}
		}
		render() {
				return (
						<p>test</p>
				)
		}
}

export class PbInputBox extends Component {
		constructor(props) {
				super(props)
				this.state = {
						x: this.props.coords.x,
						y: this.props.coords.y,
						onchgr: this.props.onchgr,
						enterAction: this.props.enterAction,
						value: this.props.line_conts
				}
				this.updateInputValue = this
						.updateInputValue
						.bind(this)
		}

		updateInputValue(evt) {
				this.state.onchgr(evt)
				let etv = evt.target.value
				this.setState((prevState) => {
						return ({
								...prevState,
								value: etv
						})
				})
		}
		render() {

			return (
				<foreignObject x={this.state.x} y={this.state.y + 24} width="160" height="24">
					<form>
						<KeyboardEventHandler handleKeys={['enter']} onKeyEvent={(key, e) => this.state.enterAction()}>
							<input type="text"placeholder="" value={this.state.value} onChange={(e) => this.updateInputValue(e)}/>
						</KeyboardEventHandler>
					</form>
				</foreignObject>
			)
		}
}

export class PbSVGInteractiveRectangle extends Component {
		constructor(props) {
				super(props)
				this.state = {}
		}
		render() {
				return (
						<p>test</p>
				)
		}
}

export class PbSVGInteractiveLine extends Component {
		constructor(props) {
				super(props)
				this.state = {}
		}
		render() {
				return (
						<p>test</p>
				)
		}
}

export class CalcLine extends Component {
	constructor(props) {
		super(props)
		this.state = {
			x: props.x,
			y: props.y,
			height: 24,
			color: {
					backgroundColor: "rgba(255,255,255,1)"
			},
			clickstate: false,
			line_conts: '[calc line]'
		}
	this.hoverColor = this
		.hoverColor
		.bind(this)
	this.outHoverColor = this
		.outHoverColor
		.bind(this)
	this.clicked = this
		.clicked
		.bind(this)
	this.onchgr = this
		.onchgr
		.bind(this)
	this.enterAction = this
		.enterAction
		.bind(this)
	}

		hoverColor() {
				this.setState((prevState) => {
						return ({
								...prevState,
								color: {
										backgroundColor: "rgba(0,0,255,0.2)"
								}
						})
				})
		}

		outHoverColor() {
				this.setState((prevState) => {
						return ({
								...prevState,
								color: {
										backgroundColor: "rgba(255,255,255,0.5)"
								}
						})
				})
		}

		clicked() {
				this.setState((prevState) => {
						if (prevState.clickstate === true) {
								return ({
										...prevState,
										clickstate: false
								})
						} else {
								return ({
										...prevState,
										clickstate: true
								})
						}
				})
		}

		onchgr(e) {
				let etv = e.target.value
				this.setState((prevState) => {
						return ({
								...prevState,
								line_conts: etv
						})
				})

		}

		enterAction() {
			this.setState((prevState) => {
				return(
					{...prevState,clickstate : false}
				)
			})
		}

		render() {
			let clickstate = this.state.clickstate
			let {x, y, line_conts} = this.state
			return (
				<g>
					{(clickstate === true)
						? <PbInputBox
							coords={{
							x: parseInt(x, 10),
							y: parseInt(y, 10)
						}}
							enterAction = {this.enterAction}
							onchgr={this.onchgr} line_conts= {line_conts}/>
					: null}
			<foreignObject x={x} y={y} width="160" height={24}>
					<div
						style={{
						...this.state.color,
						cursor: "pointer"
					}}
						onMouseOver={this.hoverColor}
						onMouseOut={this.outHoverColor}
						onClick={this.clicked}>
						{line_conts}
						{clickstate}</div>
					</foreignObject>
				</g>
			)
		}
}

export class DropList extends Component {
		constructor(props) {
				super(props)
				this.state = {}
		}
		render() {
				return (
						<p>test</p>
				)
		}
}

//**here */
export class VP extends Component {
		constructor(props) {
				super(props)
				this.state = {
						clickXY: {
								x: 0,
								y: 0
						},
						calcLineList: []
				}
				this.clicked = this
						.clicked
						.bind(this)
		}

		clicked(evt) {
				let e = evt.target;
				let dim = e.getBoundingClientRect();
				let x = evt.clientX - dim.left;
				let y = evt.clientY - dim.top;
				let retList = [...this.state.calcLineList]
				retList.push(this.genCalcLine(x, y))
				this.setState((prevState, x, y) => ({
						...prevState,
						calcLineList: retList
				}))
		}

		genCalcLine(x, y) {
				return (<CalcLine x={x} y={y}/>)
		}

	render() {
		let calcLineList = this.state.calcLineList
		return (
			<div
				style={{
				width: "850px",
				borderStyle: "solid",
				borderColor: "black"
			}}>
				<svg width="850" height="1100" viewBox="0 0 600 400">{/** onClick={this.clicked}> **/}
					<g transform="translate(0 0)">
						<CalcLine x="0" y="50"/> {/* {calcLineList.map((e) => e)} */}
						<CalcLine x="0" y="100"/>
						<CalcLine x="0" y="150"/>
					</g>
				</svg>
			</div>
		)
	}
}

export class PlaceHolder extends Component {
		constructor(props) {
				super(props)
				this.state = {}
		}
		render() {
				return (
						<VP/>
				)
		}
}