import createStore from 'unistore'
import axios from 'axios'
import { select } from 'async';
import { Redirect } from 'react-router-dom'

const initialState = {
// SIGNIN ELEMENT
    isLogin : false,
    username : '',
    password : '',
    email : '',
    avatar : '',
// HEADER ELEMENT
    catMovie : [
        'action',
        'comedy',
        'fiction',
        'romance'
    ],
// GENERATE MOVIE ELEMENT
    selected : '',
    listMovieDetail :[],
    isLoading : true,

};

export const store = createStore(initialState);

export const actions = store => ({
    cobaClick : (state,sesuatu) => {
        const self = this;
        axios.get(`https://api-todofancy.herokuapp.com/api/movies`)
        .then(function(response) {
            store.setState ({ listMovieDetail: response.data.movies, isLoading: false});
            // handle success
        })
        .catch(function(error){
            store.setState({ isLoading : false});
            // error handle
        })
    }
});