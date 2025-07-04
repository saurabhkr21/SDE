import React from 'react'
import { useReducer } from 'react'

export default function App() {

  const initialState={
    count :0
  }

  const reducerFun=(state,action)=>{
    switch(action.type){
      case 'Increment':
        return{
          ...state,
          count:state.count+1
        }
      case 'Decrement' :
        return{
          ...state,
          count:state.count-1
        }
      case 'reset':
        return initialState;
        default:
          return state
    }
  }
  const [{count}, dispatch] = useReducer(reducerFun,initialState);

  const onClickIncrement = () =>{
    dispatch(
      {type:'Increment',
        payload:'123'
      }
    )
  }
  const onClickDecrement =()=>{
    dispatch(
      {
        type:'Decrement',
        payload:'123'
      }
    )
  }
const onClickReset =()=>{
  dispatch(
    {
      type:'reset'
    }
  )
}

  return (
    <div className='flex flex-col  justify-between border-1'>
      
      <button className='border-1'
      >{count}</button>
      <button className='border-1'
      onClick={onClickIncrement}>Inc</button>
      <button className='border-1'
      onClick={onClickDecrement}>dec</button>
      <button
      onClick={onClickReset}>Reset</button>
    </div>
  )
}
