import React, {useEffect} from 'react';
import {Redirect, Route} from "react-router-dom";
import Page11 from "./Page11";
import Page12 from "./Page12";
import Section from "../Section";

const data = [
    {
        path: "/page1/1",
        title: "page1/1 title",
        component: Page11
    },
    {
        path: "/page1/2",
        title: "page1/2 title",
        component: Page12
    },

];

const Page1 = ({history}) => {
    useEffect(() => history.push("/page1/1"),[])
    return (
        <>
            <Section data={data}/>
            {
                data.map(({ component: Component, path }, index) => <Route key={index} path={path} component={Component}/>)
            }
        </>
    );
};

export default Page1;