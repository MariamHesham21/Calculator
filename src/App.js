import './App.css';
import {useState} from 'react'

function App() {
  const[StateV1, setStateV1]=useState()
  const[StateV2, setStateV2]=useState()
  const[StateOperation, setStateOperation]=useState('+')
  const[StateResult, setStateResult]=useState('')

 const handelResult =()=>{
  if(StateOperation === '+'){
    return setStateResult(parseInt(StateV1)+parseInt(StateV2))
  }
  if(StateOperation === '-'){
    return setStateResult(StateV1-StateV2)
  }
  if(StateOperation === '*'){
    return setStateResult(StateV1*StateV2)
  }
  if(StateOperation === '/'){
    return setStateResult(StateV1/StateV2)
  }
 }

  return (
    <div className="App">
      <div className="calculator">
      <h1 className='title'> Calculator </h1>
      <h3 className='result'> Result is:{StateResult} </h3>
      <div className="input">
        <input type='text' value={StateV1} onChange={(e)=>setStateV1(e.target.value)}/>
        <div className='operation' > {StateOperation}</div>
        <input type='text' value={StateV2} onChange={(e)=>setStateV2(e.target.value)}/><br/>
        <button className='btn' onClick={handelResult}> Submit</button>
      </div>
      <div className='Button-Operation'>
        <button onClick={()=>setStateOperation('+')}>+</button>
        <button onClick={()=>setStateOperation('-')}>-</button>
        <button onClick={()=>setStateOperation('*')}>*</button>
        <button onClick={()=>setStateOperation('/')}>/</button>
      </div>
      </div>
    </div>
  );
}

export default App;
