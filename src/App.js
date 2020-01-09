import React from 'react';
import './App.css';
import './styles/bootstrap.min.css'
import MainRoute from "./Routes/MainRoute"
import { Provider } from 'unistore/react'
import { store } from './store'

class App extends React.Component {
    render() {
        return (
            <div className='App'>
                <Provider store={store}>
                    <MainRoute />
                </Provider>
            </div>
        )
    }
}

export default App;