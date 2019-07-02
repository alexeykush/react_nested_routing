import React, {Component} from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";

import './App.css';
import Layout from "./components/Layout";
import BasePage from "./components/BasePage";

class App extends Component {
    render() {
        return (
            <Layout>
                <Router>
                    <Switch>
                        <Route path="/" component={BasePage} />
                    </Switch>
                </Router>
            </Layout>
        );
    }
}

export default App;