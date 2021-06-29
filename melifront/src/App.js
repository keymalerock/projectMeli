import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import './App.css';
import Search from './components/search';
import Especifications from "./components/especifications";
import {Whoops} from "./components/whoops";

function App() {
    return (
            <Router>
                <Switch>
                    <Route path="/items/:id">
                        <Especifications/>
                    </Route>
                    <Route path="/about">
                        <div><h2>Este examen fué hecho por Erick Bonilla para MercadolibreColombia</h2></div>
                    </Route>
                    <Route path="/" exact >
                        <Search/>
                    </Route>
                    <Route path="*" exact>
                        <Whoops/>
                    </Route>
                </Switch>
            </Router>
    );
}

export default App;
