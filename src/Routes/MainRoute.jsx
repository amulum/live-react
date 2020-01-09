import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import {Switch, Route} from 'react-router-dom'

import Home from '../pages/Home'
import Login from '../pages/Login'
import Profile from '../pages/Profile'
import NotMatch from '../pages/NotMatch'
import MovieCategory from '../pages/MovieDetail'

const MainRoute = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/profile" component={Profile}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/:category" component={MovieCategory}/>
                <Route exact path="/cooming-soon" component={NotMatch}/>
            </Switch>
        </BrowserRouter>
    )
}

export default MainRoute;