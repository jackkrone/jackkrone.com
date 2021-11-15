import React from 'react';
import '../styles/global.css';
import Sidebar from './Sidebar';
import Main from './Main';
import SEO, { SeoProps } from './seo';

// I use prop drilling here, hence the extends statement
// There's possibly a better way to do this
interface LayoutProps extends SeoProps {
  children?: React.ReactNode;
  home?: boolean;
}

const Layout = ({
  children = null,
  home = false,
  pathName,
  title,
  image = '',
  description = '',
  lang = 'en',
}: LayoutProps) => {
  return (
    <>
      <SEO
        pathName={pathName}
        title={title}
        image={image}
        description={description}
        lang={lang}
      />
      <div className="container-fluid">
        <div className="row min-vh-100 flex-column flex-md-row">
          <Sidebar />
          <Main home={home}>
            {!home && <h1 className="mb-3">{title}</h1>}
            {children}
          </Main>
        </div>
      </div>
    </>
  );
};

export default Layout;
