import React , {useReducer} from 'react'
import './CounterTwo.css'

const intialstate = {
    firstCounter: 0,
    secondCounter: 5,
    thirdCounter: 10
}
const reducer = (state,action) => {
    switch (action.type) {
        case 'increment':
            return {...state, firstCounter: state.firstCounter + action.value}
        case 'decrement' :
            return {...state, firstCounter: state.firstCounter - action.value}
        case 'increment2':
            return {...state, secondCounter: state.secondCounter + action.value}
        case 'decrement2' :
            return {...state, secondCounter: state.secondCounter - action.value}
        case 'increment3':
            return {...state, thirdCounter: state.thirdCounter + action.value}
        case 'decrement3' :
            return {...state, thirdCounter: state.thirdCounter - action.value}
        case 'reset' :
            return intialstate
        default :
        return state
    }
}
function CounterTwo() {
    const [count , dispatch] = useReducer(reducer , intialstate)
    return (
        <div>
            <div>
                <div className="cnt-des">Count : {count.firstCounter }</div>
                <button className="btn-des" onClick={() => {dispatch({type:'increment' , value: 1})}}>Increment</button>
                <button className="btn-des" onClick={() => {dispatch({type: 'decrement' , value: 1})}}>Decrement</button>
            </div>
            <div>
                <div className="cnt-des">Count : {count.secondCounter }</div>
                <button className="btn-des" onClick={() => {dispatch({type:'increment2' , value: 5})}}>Increment by 5</button>
                <button className="btn-des" onClick={() => {dispatch({type: 'decrement2' , value: 5})}}>Decrement by 5</button>
            </div>
            <div>
                <div className="cnt-des">Count : {count.thirdCounter }</div>
                <button className="btn-des" onClick={() => {dispatch({type:'increment3' , value: 10})}}>Increment by 10</button>
                <button className="btn-des" onClick={() => {dispatch({type: 'decrement3' , value: 10})}}>Decrement by 10</button>
            </div>
            <button className="btn-des" onClick={() => {dispatch({type: 'reset'})}}>Reset</button>
        </div>
    )
}

export default CounterTwo;