import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {IncrementNumber, DecrementNumber} from './actions/index'

function App() {
  const mystate=useSelector((state)=>state.ChangeNumber)
  const dispatch=useDispatch()
  return (
    <div style={{display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column"}}>
      <h1>Hello Redux</h1>

      <div>
        <div>{mystate}</div>
        <button onClick={()=>dispatch(IncrementNumber(1))}>Increment+</button>
        <button onClick={()=>dispatch(DecrementNumber(1))} >Decrement-</button>
      </div>
    </div>
  );
}

export default App;
