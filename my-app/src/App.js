import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Checkout from "./components/Checkout/Checkout";
import Home from "./components/Home/Home";
import { BrowserRouter as Router } from 'react-router-dom'
import {Switch, Route} from 'react-router-dom'
import Login from "./components/Login/Login";



function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path={"/checkout"}>
                        <Header/>
                        <Checkout />
                    </Route>
                    <Route  exact path={"/login"}>
                        <Login />
                    </Route>
                    <Route  exact path={"/"}>
                        <Header/>
                        <Home/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
