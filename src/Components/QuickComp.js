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
  return(genOptions())
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
  let units_obj = {
    "lbf-in": lbf*inch,
    "lbf-ft": lbf*ft,
    "kip-in": kip*inch,
    "kip-ft": kip*ft,
  }

  let units = Object.keys(units_obj)

  let selStyle = {
    color:"red"
  }

  const handleOnChange = (e) => {
    
    factor1 = units_obj[_svalue1.value]
    factor2 = units_obj[_svalue2.value]

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