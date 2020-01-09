import React from 'react'
import '../styles/bootstrap.min.css'
import { Link, Redirect } from 'react-router-dom'
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store";

class Header extends React.Component {
    // doSignout = () => {
    //     if (this.props.isLogin) {
    //         this.props.postLogout()
    //     } else {
    //         this.props.history.push('/')
    //     }
    // }
	render() {
        
        // const logger = () => {
        //     if (this.props.isLogin) {
        //         return(

        //         <li className="nav-item">
        //             <Link className="nav-link">Sign Out</Link>
        //         </li>
        //         )
        //     } else {
        //         return (
        //         <li class="nav-item">
        //             <Link to="/sign-in" className="nav-link">Signin</Link>
        //         </li>
        //         )
        //     }

        // }
		return (
			<nav class="navbar navbar-expand-lg navbar-light bg-light">
				<Link to='/' onClick={() => this.props.cobaClick('Popular')}  className="navbar-brand">
                        <img className='App-logo' src={require('../images/logo.svg')} width="50px"/><span>KabarKabar</span>
                </Link>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
					<ul class='navbar-nav ml-auto'>
						<li class="nav-item">
							<Link to="/" className="nav-link">Movie</Link>
						</li>
						<li class="nav-item">
							<Link to="profile" className="nav-link">Profile</Link>
						</li>
                        <li class="nav-item">
                            <Link to="/login" className="nav-link">Login</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/logout" className="nav-link">Logout</Link>
                        </li>
					</ul>
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
				</div>
			</nav>
		)
	}
}

export default connect('lstHeader, selected, isLogin',actions)(withRouter(Header));
