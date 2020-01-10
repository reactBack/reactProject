export const setItem=(key,value)=>{
  
  localStorage.setItem(key,JSON.stringify(value))
  console.log(key,value)
}
export const getItem=(key)=>{
  console.log(localStorage.getItem(key))
 return JSON.parse(localStorage.getItem(key))
}
export const clear=()=>{
  localStorage.clear()
}
export const removeItem=(key)=>{
  localStorage.removeItem(key)
}