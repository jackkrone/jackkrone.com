import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

const Connect = () => {
  return (
    <Layout>
      <h1>Connect</h1>
      <br />
      <hr />
      <div className="h1 d-flex flex-row justify-content-center justify-content-md-start">
        <a
          href="https://github.com/jackkrone"
          target="_blank"
          className="px-3 ps-md-0 pe-md-4 me-lg-2"
          rel="noreferrer"
        >
          <i className="bi bi-github text-secondary" />
        </a>
        <a className="px-3 px-md-4 mx-lg-2" href="mailto:connect@jackkrone.com">
          <i className="bi bi-envelope-fill text-secondary" />
        </a>
        <Link
          to="needToAddTwitterHandle"
          target="_blank"
          className="px-3 px-md-4 mx-lg-2"
        >
          <i className="bi bi-twitter text-secondary" />
        </Link>
        <a
          href="https://linkedin.com/in/jackkrone"
          target="_blank"
          className="px-3 px-md-4 mx-lg-2"
          rel="noreferrer"
        >
          <i className="bi bi-linkedin text-secondary" />
        </a>
      </div>
    </Layout>
  );
};

export default Connect;
