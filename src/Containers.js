import React from 'react';
import ReactDOM from 'react-dom';
import {Component} from 'react';


export class PbTextBox extends Component {
     constructor(props) {
          super(props)
          this.state = {}
     }
     render() {
          return(<p>test</p>)
     }
}

export class PbSVGGrouper extends Component {
     constructor(props) {
          super(props)
          this.state = {}
     }
     render() {
          return(<p>test</p>)
     }
}

export class PbInputBox extends Component {
     constructor(props) {
          super(props)
          this.state = {
               x: this.props.coords.x,
               y: this.props.coords.y
          }
     }
     render() {
          return(<input>test</input>)
     }
}

export class PbSVGInteractiveRectangle extends Component {
     constructor(props) {
          super(props)
          this.state = {}
     }
     render() {
          return(<p>test</p>)
     }
}

export class PbSVGInteractiveLine extends Component {
     constructor(props) {
          super(props)
          this.state = {}
     }
     render() {
          return(<p>test</p>)
     }
}



export class CalcLine extends Component {
     constructor(props) {
          super(props)
          this.state = {
               x: props.x,
               y: props.y,
               height: 24,
               color:{backgroundColor:"rgba(255,255,255,1)"},
               clickstate:false,
          }
          this.hoverColor = this.hoverColor.bind(this)
          this.outHoverColor = this.outHoverColor.bind(this)
          this.clicked = this.clicked.bind(this)
     }

     hoverColor() {
          this.setState((prevState) => {
               return(
                    {...prevState,color:{backgroundColor:"rgba(0,0,255,0.2)"}}
                    )
          })
     }


     outHoverColor() {
          this.setState((prevState) => {
               return(
                    {...prevState,color:{backgroundColor:"rgba(255,255,255,0.5)"}}
                    )
          })
     }

     clicked() {
          this.clickstate = (this.clickstate === true) ? false : true
          console.log("clicked")
          if (this.clickstate === true) {
               this.setState((prevState) => {
                    return(
                         {...prevState,height:48}
                    )
               })
          } else {
               this.setState((prevState) => {
                    return(
                         {...prevState,height:24}
                    )
               })

          }
     }

     render() {
          let clickstate = this.state.clickstate
          let {x,y,height} = this.state
          return(
               <foreignObject x={x} y={y} width="160" height={height}>
                    {(clickstate === true) ? <PbInputBox coords={{x,y:y + 24}}/> : null}
                    <div style={{...this.state.color,cursor : "pointer"}} 
                    onMouseOver={this.hoverColor}
                    onMouseOut = {this.outHoverColor}
                    onDoubleClick = {this.clicked}
                    >[this is my calc line]</div>
               </foreignObject>
               )
     }
}

export class DropList extends Component {
     constructor(props) {
          super(props)
          this.state = {}
     }
     render() {
          return(<p>test</p>)
     }
}

//**here */
export class VP extends Component {
     constructor(props) {
          super(props)
          this.state = {
               clickXY : {x:0,y:0},
               calcLineList: []
          }
          this.clicked = this.clicked.bind(this)
     }


     clicked(evt){
          let e = evt.target;
          let dim = e.getBoundingClientRect();
          let x = evt.clientX - dim.left;
          let y = evt.clientY - dim.top;
          let retList = [...this.state.calcLineList]
          retList.push(this.genCalcLine(x,y))
          this.setState((prevState,x,y) => ({...prevState, calcLineList: retList}))
      }  

     genCalcLine (x,y) {
          return(<CalcLine x={x} y={y} />)
     }


     render() {
          let calcLineList = this.state.calcLineList
          return(
               <div style = {{width:"600px", borderStyle: "solid",borderColor: "black"}}>
                    <svg width="600" height="400" viewBox="0 0 600 400" onClick={this.clicked}>
                         <g transform="translate(0 50)">
                              <CalcLine x="0" y="50"/>
                              {/* {calcLineList.map((e) => e)} */}
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
          return(<VP>test</VP>)
     }
}


