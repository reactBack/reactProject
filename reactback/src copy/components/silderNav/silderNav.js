import React ,{Component}from 'react';
import { Menu, Icon } from 'antd';
import  {Link} from 'react-router-dom'
import {filterRootList} from './filterRootList'
const { SubMenu } = Menu;
class SliderNav extends Component{
  constructor(){
    super()
    this.state={
      menuData:[]
    }
  }
  componentDidMount(){
    setTimeout(() => {
      let res={err:0,msg:'ok',token:'12313',rootIds:['0','1','2','3','4','5']}
      let result=filterRootList(res.rootIds)
      this.setState({menuData:result})
    }, 500);
  }
  // 渲染 一级菜单
  renderItem(data){
    //需要渲染item的数据
    //  没有数据渲染返回暂无数据
    if (!data.length) return '暂无数据'
    let result=data.map((item)=>{
        if(item.children){
          return( <SubMenu 
            key={item.id}
            title={
                <span>
                  <Icon type={item.icon||'home'}></Icon>
                  <span>{item.name||''}</span>
                </span>
              }>
                     {this.renderItem(item.children)}
                     {/* submenu里也可能有1级菜单  
                         所以在执行一遍渲染一级菜单的函数
                     */}
                  </SubMenu>)
        }else{
        return (
          <Menu.Item key={item.id}>
            <Link to={item.path||'/admin'}>
              <span>
                <Icon type={item.icon||'home'}></Icon>
                <span>{item.name||''}</span>
              </span>
            </Link>
          </Menu.Item>
        )
        }
    })
    return result
  }
  render(){
    let {menuData}=this.state
    return(
      <Menu  mode="vertical" theme='dark'>
        {this.renderItem(menuData)}
        
      </Menu>
    )
  }
}

export default SliderNav;
