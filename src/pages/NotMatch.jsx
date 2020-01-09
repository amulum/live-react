import React from 'react'
import Header from '../component/Header'
import '../styles/bootstrap.min.css'
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store";

class NotMatch extends React.Component {
    render () {
        return (
            <div>
                <div className="container-fluid">
                    <Header 
                    />
                </div>
                <div className="container mt-3">
                    <div className="row d-flex justify-content-center">
                        <h2>COOMING SOON</h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect('catHeader, listNews, isLoading, selected isLogin',actions)(withRouter(NotMatch));
