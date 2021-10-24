import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

const Connect = () => {
  return (
    <Layout>
      <h1>Connect</h1>
      <div className="mt-2 d-flex flex-row align-items-center">
        <a href="https://github.com/jackkrone" target="_blank" rel="noreferrer">
          <i className="h5 bi bi-github me-1 link-secondary" />
        </a>
        <span className="mx-1">GitHub:</span>
        <a href="https://github.com/jackkrone" target="_blank" rel="noreferrer">
          @jackkrone
        </a>
      </div>
      <div className="d-flex flex-row align-items-center">
        <a href="mailto:connect@jackkrone.com">
          <i className="h5 bi bi-envelope-fill me-1 link-secondary" />
        </a>
        <span className="mx-1">Email:</span>
        <a href="mailto:connect@jackkrone.com">connect@jackkrone.com</a>
      </div>
      <div className="d-flex flex-row align-items-center">
        <a href="twitter" target="_blank" rel="noreferrer">
          <i className="h5 bi bi-twitter me-1 link-secondary" />
        </a>
        <span className="mx-1">Twitter:</span>
        <a href="twitter" target="_blank" rel="noreferrer">
          @twitter
        </a>
      </div>
      <div className="d-flex flex-row align-items-center">
        <a
          href="https://linkedin.com/in/jackkrone"
          target="_blank"
          rel="noreferrer"
        >
          <i className="h5 bi bi-linkedin me-1 link-secondary" />
        </a>
        <span className="mx-1">LinkedIn</span>
        <a
          href="https://linkedin.com/in/jackkrone"
          target="_blank"
          rel="noreferrer"
        >
          @jackkrone
        </a>
      </div>
    </Layout>
  );
};

export default Connect;
