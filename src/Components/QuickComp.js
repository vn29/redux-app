import React from 'react'
import ReactDOM from 'react-dom'
import {Component} from 'react'

export class QuickComp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      x: 0,
      style: {
        color: "red"
      }
    }
  }
  
  render() {
    return(<div style={this.state.style}>im a class</div>)
  }
};

export const SelectComp = (
  {values=[],style={},passRef=f=>f,handleOnChange=f=>f}
  ) => {

  const genOptions = () => {
    return(
      <select style={style} onChange={handleOnChange} ref={passRef}>
      {values.map((e) => 
        <option value={e}>{e}</option>
      )}
    </select>
    )
  }


  return(
      genOptions()
  )
}



export const Qfx = ({props}) => {
  const style = {
    color: "blue"
  }

  let _value1, _value2, _svalue1, _svalue2, factor1, factor2
  let inch = 1.
  let ft = 12.*inch
  let lbf = 1.
  let kip = 1000.*lbf
  let units = [
    "lbf-in",
    "lbf-ft",
    "kip-in",
    "kip-ft"
  ]

  let selStyle = {
    color:"red"
  }

  const handleOnChange = (e) => {
    
    switch (_svalue1.value) {
      case 'lbf-in':
        factor1 = lbf*inch
        break
      case 'lbf-ft':
        factor1 = lbf*ft
        break
      case 'kip-in':
        factor1 = kip*inch
        break
      case 'kip-ft':
        factor1 = kip*ft
        break
      default:
        factor1 = lbf*inch
    }

    switch (_svalue2.value) {
      case 'lbf-in':
        factor2 = lbf*inch
        break
      case 'lbf-ft':
        factor2 = lbf*ft
        break
      case 'kip-in':
        factor2 = kip*inch
        break
      case 'kip-ft':
        factor2 = kip*ft
        break
      default:
        factor2 = lbf*inch
    }
    _value2.value = _value1.value*factor1*(factor2)**(-1)
  }
  return(
    <div style={style}>
      im a stateless functional component
      <form>
      <input 
        type="text" 
        ref={input => _value1 = input} 
        onChange={handleOnChange}/>
      <SelectComp 
        passRef={select => _svalue1 = select} 
        handleOnChange={handleOnChange} 
        values={units}
        style={selStyle}/>
      <br/>
      <input 
        type="text" 
        value={_value2} 
        ref={input => _value2 = input} 
        onChange={handleOnChange}/>
      <SelectComp 
        passRef={select => _svalue2 = select} 
        handleOnChange={handleOnChange} 
        values={units}
        style={selStyle}/>
      </form>
      </div>
    )
}