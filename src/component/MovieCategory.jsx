import React from 'react'
import '../styles/bootstrap.min.css'
import { Link, Redirect } from 'react-router-dom'
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store";

class MovieCategory extends React.Component {

    render () {
        const loopMovie =  this.props.catMovie.map(category => (
                <div className="col-md-3">
                        <div class="card" style={{maxWidth:'15rem'}}>
                        <div class="card-body d-flex flex-column justify-content-center">
                            <h5 class="card-title text-center">{category}</h5>
                            <img class="card-img-top" height="100%" src={require(`../images/${category}.jpg`)}/>
                            <Link to={`/${category}`} onClick={() => this.props.cobaClick(category)}  class="btn btn-primary mt-2">See More</Link>
                        </div>
                    </div>
                </div>
            ))
        return (
            <div className="container">
                <div className="row">
                    {loopMovie}
                </div>
            </div>
        )
    }
}

export default connect('catMovie, selected, isLogin',actions)(withRouter(MovieCategory));
