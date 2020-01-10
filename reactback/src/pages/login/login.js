import React, { Component } from 'react';
import LoginLess from './loginLess.module.less'
import {Icon,Form,Input,message} from 'antd'
import  {UserLogin} from  '../../api/user'
import {setItem} from '../../utils/webStorage'
const IconFont = Icon.createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
  });
  class Login extends Component{
    login=()=>{
        
        let {getFieldsValue,validateFields}=this.props.form
        validateFields((err,data)=>{
         console.log(err,data)
         //err 前端的字段验证 true 不通过 null 没问题
         if(err) return  message.error('输入有误,请重试!',1)
        //  //字段验证ok 继续向下
         let {userName,passWord} =data
         UserLogin(userName,passWord)
         .then((res)=>{
           console.log('then',res)
           setItem('token',res.token)
           setItem('uid',res.uid)
           setItem('rootIds',res.rootList)
           message.success('登录成功，1s后跳转首页',1 ,()=>{
             this.props.history.replace('/admin/home')
           })
         })
         .catch((err)=>{
           message.error('登录失败请重试',1)
         })
        })
      }
     render(){
        console.log(this)
        let {getFieldDecorator} = this.props.form
        return(
            <div className={LoginLess.maxBg}>
                <div className={LoginLess.loginWrap}>
                    <div className={`${LoginLess.metro} ${LoginLess.red} ${LoginLess.singleSize}`}>
                        <div className={LoginLess.lock}>
                            <i className={LoginLess.iconLock}>
                            <Icon type="lock" />
                                <span className={LoginLess.lockSpan}>
                                    登录
                                </span>
                            </i>
                        </div>
                    </div>
                    <div className={`${LoginLess.metro} ${LoginLess.userSize} ${LoginLess.green}`}>
                        <Form action="">
                        
                            <div className={LoginLess.userInp}>
                            {getFieldDecorator('userName',{
                                rules: [{ required: true, message: '用户名不能为空!' },
                                        { min:3, message: '用户名不能小于3位字符!' },
                                        { max:9, message: '用户名不能大于9位字符!' }]
                              })(
                                <Input type="text" placeholder='Username' className={LoginLess.inp}/>
                              )}  
                                
                            </div>
                        </Form>
                    </div>
                    <div className={`${LoginLess.metro} ${LoginLess.userSize} ${LoginLess.yellow}`}>
                        <Form action="">
                            <div className={LoginLess.userInp}>
                            {getFieldDecorator('passWord',{
                                rules:[{required:true,message:'用户密码不能为空'}]
                              })(
                                <Input type="text" placeholder='Password' className={LoginLess.inp}/>
                              )}  
                               
                            </div>
                        </Form>
                    </div>
                    <div className={`${LoginLess.metro} ${LoginLess.terques} ${LoginLess.singleSize}`}>
                        <Form action="">
                            <button className={LoginLess.btn} onClick={this.login}>
                            登录
                            <i className={LoginLess.i}>
                            <Icon type="arrow-right" />
                            </i>
                            </button>
                        </Form>
                    </div>
                    <div className={`${LoginLess.metro} ${LoginLess.userSize} ${LoginLess.navyBlue}`}>
                        <a href="#" className={LoginLess.soLink}>
                            <i className={LoginLess.facebookIcon}>
                            <IconFont type="icon-facebook" className={LoginLess.xuan}/>
                            </i>
                            <span className={LoginLess.loginBtn}>Facebook 登录</span>
                        </a>
                    </div>
                    <div className={`${LoginLess.metro} ${LoginLess.deepRed} ${LoginLess.singleSize}`}>
                        <a href="#" className={LoginLess.soLink}>
                            <i className={LoginLess.facebookIcon}>
                            <Icon type="google" className={LoginLess.xuan} />
                            </i>
                            <span>Google 登录</span>
                        </a>
                    </div>
                    <div className={`${LoginLess.metro} ${LoginLess.userSize} ${LoginLess.blue}`}>
                        <a href="#" className={LoginLess.soLink}>
                            <i className={LoginLess.facebookIcon}>
                            <IconFont type="icon-twitter" className={LoginLess.xuan}/>
                            </i>
                            <span>Twitter 登录</span>
                        </a>
                    </div>
                    <div className={`${LoginLess.metro} ${LoginLess.purple} ${LoginLess.singleSize}`}>
                        <a href="#" className={LoginLess.soLink}>
                            <i className={LoginLess.facebookIcon}>
                            <Icon type="skype" className={LoginLess.xuan}/>
                            </i>
                            <span>Skype 登录</span>
                        </a>
                    </div>
                    <div className={LoginLess.loginFooter}>
                        <div className={LoginLess.pullLeft}>
                            <input type="checkbox" id="" className={LoginLess.pullLeftInp}/> 记住密码
                        </div>
                        <div className={LoginLess.pullRight}>
                            <a id="forget-password" className={LoginLess.pullRightA} href="#">忘记密码?</a>
                        </div>
                    </div>
                </div>
            </div>
         
        
      
        )
    }
  }


export default Form.create()(Login);