import React from 'react'
import Header from '../component/Header'
import '../styles/bootstrap.min.css'
import axios from 'axios'
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store";

class Login extends React.Component {

    inputForm = ele => {
        store.setState({ [ele.target.name]: ele.target.value });    
    }
    postLogin = () => {
        console.log('clickLogin')
        // simpan data login dari form ke state
        const data = {
            inputUsername : this.props.username,
            inputPassword : this.props.password
        };

        const self = this;
        // AXIOS
        axios.post("https://api-todofancy.herokuapp.com/api/auth", data)
            .then(function(response) {
                console.log(response.data)
                if (response.data.hasOwnProperty("user_data")) {
                    store.setState({username : response.data.user_data.username})
                    store.setState({isLogin : true})
                    store.setState({email : response.data.user_data.email})
                    store.setState({password : response.data.user_data.password})
                    self.props.history.push('/profile')
                }
            })
            .catch(function(error){
                console.log(error)
            }) 
        // END AXIOS

    }

    render() {
        console.log(this.props.isLogin)
        if (this.props.isLogin){
            return (
                <div>
                    <div className="container-fluid">
                        <Header />
                        </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7 d-flex justify-content-center">
                                <h2>KAMU SUDAH LOGIN</h2>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } 
        else {
            return (
                <div>
                    <div className="container-fluid">
                        <div className="row">
                            <Header 
                                lstCategory={this.props.catHeader} 
                                cobaClick={this.props.cobaClick}/>
                        </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-8">
                                <form class="px-4 py-3" onSubmit={ele => ele.preventDefault()}>
                                    <div class="form-group">
                                    <label for="exampleDropdownFormEmail1">username</label>
                                    <input 
                                        type="email" 
                                        class="form-control" 
                                        placeholder="email@example.com"
                                        name="username"
                                        onChange={ele => this.inputForm(ele)}/>
                                    </div>
                                    <div class="form-group">
                                    <label for="exampleDropdownFormPassword1">password</label>
                                    <input 
                                        type="password" 
                                        class="form-control" 
                                        placeholder="Password"
                                        name = "password"
                                        onChange={ele => this.inputForm(ele)}/>
                                    </div>
                                    <button 
                                        type="submit"   
                                        class="btn btn-primary" 
                                        onClick={this.postLogin}>
                                        Sign in
                                    </button>
                                </form>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

            )

        }
    }
}

export default connect('username, email, password, catHeader, isLogin', actions)(withRouter(Login));