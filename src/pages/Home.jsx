import React from 'react'
import Header from '../component/Header'
import MovieCategory from '../component/MovieCategory'
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store";

const apiKey = '9ea283ba45c54460a0d372ae2612c6bd'
const baseUrl = 'https://newsapi.org/v2/'

class Home extends React.Component {
    render () {
        return (
            <React.Fragment>
                <Header />
                <div className="container-fluid">
                    <MovieCategory />
                </div>
            </React.Fragment>
        )
    }
}

export default connect('lstHeader, listMovie, isLoading, selected',actions)(withRouter(Home));