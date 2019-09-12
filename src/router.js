import React, { Component } from 'react'
import { HashRouter,Route,Switch,Redirect } from 'react-router-dom'
import App from '../App';

import Home from './pages/home'
import Login from './pages/login'

class RootRouter extends Component {
    render() {
        return (
            <App>
                <HashRouter>
                    <Switch>
                        <Redirect exact from='/' to='/login'></Redirect>
                        <Route path='/home' render={()=>{
                            return (
                                <Home>
                                    <Route path='/home/login' component={Login}></Route>
                                </Home>
                            )
                        }}></Route>
                    </Switch>
                </HashRouter>
            </App>
        )
    }
}

export default RootRouter