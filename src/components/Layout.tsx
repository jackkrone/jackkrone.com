import React from 'react';
import Helmet from 'react-helmet';
import Sidebar from './Sidebar';
import Main from './Main';

interface LayoutProps {
  children?: React.ReactNode;
  title?: string;
}

const Layout = ({ children = null, title = '' }: LayoutProps) => {
  return (
    <>
      <Helmet>
        <title>
          {title}
          {title && ' | '}Jack Krone
        </title>
      </Helmet>
      <div className="container-fluid">
        <div className="row min-vh-100 flex-column flex-md-row">
          <Sidebar />
          <Main>
            {title && <h2 className="mb-3">{title}</h2>}
            {children}
          </Main>
        </div>
      </div>
    </>
  );
};

export default Layout;
