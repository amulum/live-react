import React from 'react'
import Header from '../component/Header'
import axios from 'axios'
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store";
import MovieGenerate from '../component/MovieGenerate';

const apiKey = '9ea283ba45c54460a0d372ae2612c6bd'
const baseUrl = 'https://api-todofancy.herokuapp.com/api/movies'

class MovieDetail extends React.Component {
    
    render () {
        return (
            <React.Fragment>
                <Header />
                <div className="container-fluid">
                    <MovieGenerate listMovieDetail={this.props.listMovieDetail}/>
                </div>
            </React.Fragment>
        )
    }
}

export default connect('listMovieDetail, isLoading',actions)(withRouter(MovieDetail));