import React, { useEffect} from 'react';
import {Route} from "react-router-dom";
import Navbar from "./Navbar";
import Page1 from "./Page1/Page1";
import Page2 from "./Page2/Page2";

const BasePage = ({history}) => {
    useEffect(() => history.push("/page1"),[]);
    return (
        <>
            <Navbar/>
            <div className="page-content">
                <Route path="/page1" component={Page1}/>
                <Route path="/page2" component={Page2}/>
            </div>
        </>
    );
};

export default BasePage;