import React from 'react';
import Header from './Header';

const Layout = ({ children }: {
    children: React.ReactNode;
  }) => {
    return (
    <React.Fragment>
        <div className="wrapper">
            <Header />
            <main>{children}</main>
        </div>
    </React.Fragment>
    );
};
export default Layout;