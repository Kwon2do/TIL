import './App.css';
import {createStore} from 'redux';
import {Provider, useSelector, useDispatch} from 'react-redux';
function reducer(currentState, action){
  if(currentState === undefined){
    return {number:1,};
  }
  const newState = {...currentState}
  if(action.type==='PLUS'){
    newState.number++;
  }
  else if(action.type==='MINUS'){
    if(newState.number>0) newState.number--;
  }
  return newState;
}
const store = createStore(reducer);
function App() {
  return (
    <div id='container'>
      <h1>Root:</h1>
      <div id="grid">
        {/*State를 어떤 컴포넌트에 제공할 것인가를 정의*/}
        <Provider store={store}>
          <Left1></Left1>
          <Right1></Right1>
        </Provider>
      </div>
    </div>
  );
}
function Left1() {
  return(
    <div>
      <h1>Left1</h1>
      <Left2></Left2>
    </div>
  )
}
function Left2() {
  return(
    <div>
      <h1>Left2</h1>
      <Left3></Left3>
    </div>
  )
}
function Left3() {
  //useSelector를 통해서 컴포넌트가 store에 접근한다.
  const number = useSelector((state)=> state.number);
  return(
    <div>
      <h1>Left3 : {number} </h1>
    </div>
  )
}
function Right1() {
  return(
    <div>
      <h1>Right1</h1>
      <Right2></Right2>
    </div>
  )
}
function Right2() {
  return(
    <div>
      <h1>Right2</h1>
      <Right3></Right3>
    </div>
  )
}
function Right3() {
  const dispatch = useDispatch();
  const number = useSelector((state)=> state.number);
  return(
    <div>
      <h1>Right3: {number}</h1>
      <input type='button' value="+" onClick={()=>{dispatch({type:'PLUS'})}}></input>
      <input type='button' value="-" onClick={()=>{dispatch({type:'MINUS'})}}></input>
    </div>
  )
}
export default App;
