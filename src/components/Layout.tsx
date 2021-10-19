import React from 'react';
import Sidebar from './Sidebar';
import Main from './Main';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="container-fluid">
      <div className="row min-vh-100 flex-column flex-md-row">
        <Sidebar />
        <Main>{children}</Main>
      </div>
    </div>
  );
};

export default Layout;
