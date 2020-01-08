import React,{Component,Fragment} from 'react'
import {HashRouter,NavLink,Route,Redirect,Switch} from 'react-router-dom';
import Login from '../pages/login/login';
import Admin from '../pages/admin/admin';
import Cancel from '../pages/cancel/cancel'
import NewAdd from '../pages/newAdd/newAdd'
import Home from  '../pages/home/home'
import Stock from '../pages/stock/stock'
import Sale1 from '../pages/sale/sale1/sale1'
import Sale2 from '../pages/sale/sale2/sale2'



class ReactApp extends Component{
    render(){
        return(
            <HashRouter>
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
                                    <Route path='/admin/sale1' component={Sale1}></Route>
                                    <Route path='/admin/sale2' component={Sale2}></Route>
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
