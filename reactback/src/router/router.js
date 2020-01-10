import React,{Component,Fragment} from 'react'
import {HashRouter,NavLink,Route,Redirect,Switch} from 'react-router-dom';
import Login from '../pages/login/login';
import Admin from '../pages/admin/admin';
import Cancel from '../pages/cancel/cancel'
import NewAdd from '../pages/newAdd/newAdd'
import Home from  '../pages/home/home'
import Sale from '../pages/sale/sale'
import Stock from '../pages/stock/stock'




class ReactApp extends Component{
    render(){
        return(
            <HashRouter>
                <Redirect exact from='/' to='/login'></Redirect>
                <NavLink to='/login'></NavLink>
                <NavLink to='/admin'></NavLink>  
                
                <Switch>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/admin' render={()=>{
                        return(
                            <Admin>
                                <Switch>
                                    <Redirect exact from='/admin' to='/admin/home'></Redirect>
                                    <Route path='/admin/home' component={Home}></Route>
                                    <Route path='/admin/newAdd' component={NewAdd}></Route>
                                    <Route path='/admin/stock' component={Stock}></Route>
                                    <Route path='/admin/cancel' component={Cancel}></Route>
                                    <Route path='/admin/sale' component={Sale}></Route>
                                </Switch>
                            </Admin>
                        )
                    }}></Route>
                </Switch>
            </HashRouter>
        )
    }
}


export default ReactApp;
