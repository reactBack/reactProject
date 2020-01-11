import axios from '../utils/axios'
import {getItem} from '../utils/webStorage'
// 登录
export const UserLogin=(userName,passWord)=>{
  return new Promise((resolve,reject)=>{
    let url='/login/v1/admin/user/login'
    axios.post(url,{userName,passWord})
    .then((res)=>{
      console.log(res)
      if(res.err==0){
        resolve(res)
      }else{
        reject(res)
      }   
    })
    .catch((err)=>{
      reject(err)
    })
  })
}

// 登出

export const UserLogout = async ()=>{
  let url='/login/v1/admin/user/logout' 
  let uid=getItem('uid')||''
  let result = await axios.post(url,{uid})
  if(result.err==0){
    return result
  }else{
    throw result
  }
}