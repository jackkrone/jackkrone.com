import React from 'react';
import { FaEnvelope, FaGithub, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import Layout from '../components/Layout';

const Connect = () => {
  return (
    <Layout title="Connect">
      <div className="d-grid gap-2">
        <div>
          <a
            href="https://github.com/jackkrone"
            target="_blank"
            rel="noreferrer"
            className="fs-4 me-1 link-secondary"
          >
            <FaGithub />
          </a>
          <span className="mx-1">GitHub:</span>
          <a
            href="https://github.com/jackkrone"
            target="_blank"
            rel="noreferrer"
          >
            @jackkrone
          </a>
        </div>
        <div>
          <a
            href="mailto:connect@jackkrone.com"
            className="fs-4 me-1 link-secondary"
          >
            <FaEnvelope />
          </a>
          <span className="mx-1">Email:</span>
          <a href="mailto:connect@jackkrone.com">connect@jackkrone.com</a>
        </div>
        <div>
          <a
            href="https://twitter.com/protajack"
            target="_blank"
            rel="noreferrer"
            className="fs-4 me-1 link-secondary"
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
        <div>
          <a
            href="https://linkedin.com/in/jackkrone"
            target="_blank"
            rel="noreferrer"
            className="fs-4 me-1 link-secondary"
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
      </div>
    </Layout>
  );
};

export default Connect;
