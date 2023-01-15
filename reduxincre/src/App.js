import logo from './logo.svg';
import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import {incNumber,decNumber} from './actions/index'

function App() {
  const mystate= useSelector((state)=>state.changeNumber);
  const dispatch= useDispatch()
  
  return (
    <div className="App">
      <h1>Increment Decrement Using Redux</h1>
      <div style={{background:'#eee',width:'50%'}}>
        <div style={{ border: '2px solid #333' }}
        onClick={()=>{dispatch(decNumber)}}>Dcre(-)</div>&nbsp;
        <input type="text" value={mystate} style={{ height: '30px' }} />&nbsp;
        <div style={{ border: '2px solid #333' }}
        onClick={()=>{dispatch(incNumber)}}> Incre (+) </div>
      </div>
    </div>
  );
}

export default App;
