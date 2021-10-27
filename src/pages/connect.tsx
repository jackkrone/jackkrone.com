import React from 'react';
import { FaEnvelope, FaGithub, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import Layout from '../components/Layout';

const Connect = () => {
  return (
    <Layout>
      <h1>Connect</h1>
      <div className="m-a d-flex flex-row align-items-center">
        <a
          href="https://github.com/jackkrone"
          target="_blank"
          rel="noreferrer"
          className="h4 me-1 pt-1 link-secondary"
        >
          <FaGithub />
        </a>
        <span className="mx-1">GitHub:</span>
        <a href="https://github.com/jackkrone" target="_blank" rel="noreferrer">
          @jackkrone
        </a>
      </div>
      <div className="d-flex flex-row align-items-center">
        <a
          href="mailto:connect@jackkrone.com"
          className="h4 me-1 pt-1 link-secondary"
        >
          <FaEnvelope />
        </a>
        <span className="mx-1">Email:</span>
        <a href="mailto:connect@jackkrone.com">connect@jackkrone.com</a>
      </div>
      <div className="d-flex flex-row align-items-center">
        <a
          href="https://twitter.com/protajack"
          target="_blank"
          rel="noreferrer"
          className="h4 me-1 pt-1 link-secondary"
        >
          <FaTwitter />
        </a>
        <span className="mx-1">Twitter:</span>
        <a
          href="https://twitter.com/protajack"
          target="_blank"
          rel="noreferrer"
        >
          @protajack
        </a>
      </div>
      <div className="d-flex flex-row align-items-center">
        <a
          href="https://linkedin.com/in/jackkrone"
          target="_blank"
          rel="noreferrer"
          className="h4 me-1 pt-1 link-secondary"
        >
          <FaLinkedinIn />
        </a>
        <span className="mx-1">LinkedIn:</span>
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
