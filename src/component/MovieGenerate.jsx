import React from 'react'
import RenderMovieFun from './RenderMovieFun'
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store";

class MovieGenerate extends React.Component {
    testpoint = () => (
        console.log(this.props.listMovieDetail)
    )
    render () {
        const { listMovieDetail, isLoading } = this.props;
        // filter news yang ada content dan imagenya
        const getMovie = listMovieDetail.filter(item => {
            if (item.Poster !== null) {
                return item;
            }
            return false;
        });
        const movieDetail = getMovie.map((item) => {
            return (
                RenderMovieFun(item.Poster,item.Title,item.Year, item.Synopsis)
            );
        });

        return (
            <div className="listMovie">
                <button onClick={this.testpoint}>test</button>
                test masuk movie detail
                {isLoading ?<div style={{textAlign:"center"}}><img className="App-logo-loading" src={require('../images/logo.svg')}/></div> : movieDetail }
            </div>
        )

    }

}

export default connect('listMovieDetail, selected, isLoading',actions)(withRouter(MovieGenerate));
