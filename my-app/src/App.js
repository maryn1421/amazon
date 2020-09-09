import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Checkout from "./components/Checkout/Checkout";
import Home from "./components/Home/Home";
import { BrowserRouter as Router } from 'react-router-dom'
import {Switch, Route} from 'react-router-dom'



function App() {
    return (
        <Router>
            <div className="App">
                <Header/>
                <Switch>
                    <Route exact path={"/checkout"}>
                        <Checkout />
                    </Route>
                    <Route  exact path={"/"}>
                        <Home/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
