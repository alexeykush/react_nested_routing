import React from 'react';

import Header from "./Header";

const Layout = ({children}) => {
    return (
        <>
            <Header/>
            <div className="page-wrapper">
                {children}
            </div>
        </>
    );
};

export default Layout;