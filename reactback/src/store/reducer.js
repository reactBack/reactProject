
import state from './state'
import * as types from  './action-types'
export default (prevState = state,actions)=>{
  console.log(prevState,actions)
  let newData = JSON.parse(JSON.stringify(prevState))

  // 根据actions 修改数据
  let  {type,params} = actions 
  switch (type) {
    case types.SET_TOKEN_MODAL:
      newData.tokenModal=params
      break;
  
    default:
      break;
  }
  return newData
}