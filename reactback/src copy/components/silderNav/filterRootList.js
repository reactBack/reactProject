import allList from './rootAllList'
export const filterRootList=(ids)=>{
  // 根据权限id列表过滤出正确的权限数据
  let result=[]
  for (let index = 0; index < allList.length; index++) {
     let id=allList[index].id
      if(ids.indexOf(id)!==-1){
        // 满足id条件 直接push新数组
        result.push(allList[index])
      }else if(ids.indexOf(id)==-1&&allList[index].children){
        // 父级导航id 不满足 但是有子节点  在判断子节点是否满足
         let state = false  //默认所有的子节点都不满足
         let tmp=[]
         for (let i = 0; i < allList[index].children.length; i++) {
          let childrenId=  allList[index].children[i].id
          if(ids.indexOf(childrenId)!==-1){
            // 如果满足调节添加
            tmp.push(allList[index].children[i])
            state = true 
          }
         }
        //  如果子节点有满足的数据 需要联通父节点一一起添加到外层
        if(state){
          allList[index].children=tmp 
          result.push(allList[index])
        }

      }
    
  }
  console.log(result)
  return result
}