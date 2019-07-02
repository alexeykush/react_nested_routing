import React, { useEffect } from 'react';
import Page21 from "./Page21";
import Page22 from "./Page22";
import Page23 from "./Page23";
import {Route} from "react-router-dom";
import Section from "../Section";

const data = [
    {
        path: "/page2/1",
        title: "page2/1 title",
        component: Page21
    },
    {
        path: "/page2/2",
        title: "page2/2 title",
        component: Page22
    },
    {
        path: "/page2/3",
        title: "page2/3 title",
        component: Page23
    },

];

const Page2 = ({ history }) => {
    useEffect(() => history.push("/page2/1"),[])
    return (
        <>
            <Section data={data}/>
            {
                data.map(({ component: Component, path }, index) => <Route key={index} path={path} component={Component}/>)
            }
        </>
    );
};

export default Page2;